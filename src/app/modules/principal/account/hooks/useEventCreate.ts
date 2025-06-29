import { useEffect } from 'react';

import { useMutation } from '@tanstack/react-query';
import { EventCreate } from 'echadospalante-domain';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import {
  setGlobalAlert,
  SeverityLevel,
} from '../../../../config/redux/reducers/shared/user-interface.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import useAuthentication from '../../../auth/hooks/useAuthentication';
import { OwnedEventsApi } from '../api/http/owned-events-management.api';
import useUploadImage from './useUploadImage';
import municipalities from '../../../../shared/data/geo/municipalities.ts';
import { haversineDistance } from '../../../../shared/helpers/map-helpers.ts';

const useEventCreate = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { ventureId } = useParams();
  const { email } = useAuthentication();
  const { uploadPublicationImage, ...rest } = useUploadImage();
  const { uploadResultUrl } = rest;

  const form = useFormik<EventCreate & { startDate: string; endDate: string }>({
    initialValues: {
      title: '',
      description: '',
      coverPhoto: '',
      locationLat: '',
      locationLng: '',
      municipalityId: 0,
      locationDescription: '',
      datesAndHours: [],
      categoriesIds: [],
      contactEmail: email || '',
      contactPhoneNumber: '',
      startDate: '',
      endDate: '',
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required('El título es requerido'),
      description: Yup.string().required('La descripción es requerida'),
      coverPhoto: Yup.string()
        .url('La URL de la imagen no es válida')
        .required('La imagen de portada es requerida'),
      categoriesIds: Yup.array()
        .min(1, 'Selecciona al menos una categoría')
        .required('Las categorías son requeridas'),
      startDate: Yup.date().required('La fecha de inicio es requerida'),
      endDate: Yup.date()
        .min(
          Yup.ref('startDate'),
          'La fecha de fin debe ser posterior a la fecha de inicio',
        )
        .required('La fecha de fin es requerida'),
      contactEmail: Yup.string()
        .email('El formato del email no es válido')
        .notRequired(),
      contactPhoneNumber: Yup.string()
        .matches(/^[\+]?[\d\s\-\(\)]+$/, 'El formato del teléfono no es válido')
        .notRequired(),
    }),
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });

  const {locationLat, locationLng} = form.values

  const createEventMutation = useMutation({
    mutationKey: ['events', 'create'],
    mutationFn: (data: Omit<EventCreate, 'startDate' | 'endDate'>) =>
      OwnedEventsApi.createEvent(ventureId!, data),
    onSuccess: () => {
      dispatch(
        setGlobalAlert({
          message: 'Evento creado exitosamente',
          timeout: 0,
          severity: SeverityLevel.SUCCESS,
          title: '¡Bien hecho!',
        }),
      );
      navigate('/principal/cuenta/emprendimientos');
    },
    onError: (error: any) => {
      dispatch(
        setGlobalAlert({
          message: error?.response?.data?.message || 'Error al crear el evento',
          timeout: 5000,
          severity: SeverityLevel.ERROR,
          title: 'Error',
        }),
      );
    },
  });

  const generateDatesInRange = (
    startDate: string,
    endDate: string,
  ): string[] => {
    const dates: string[] = [];
    const currentDate = new Date(startDate);
    const endDateObj = new Date(endDate);

    currentDate.setDate(currentDate.getDate() + 1);
    endDateObj.setDate(endDateObj.getDate() + 1);

    while (currentDate <= endDateObj) {
      dates.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  // Función para generar datesAndHours basado en startDate y endDate
  const generateDatesAndHours = (startDate: string, endDate: string) => {
    const dates = generateDatesInRange(startDate, endDate);
    return dates.map((date) => ({
      date,
      workingRanges: [],
    }));
  };

  // Actualizar datesAndHours cuando cambien las fechas
  const updateDatesAndHours = (startDate: string, endDate: string) => {
    if (startDate && endDate) {
      const newDatesAndHours = generateDatesAndHours(startDate, endDate);
      form.setFieldValue('datesAndHours', newDatesAndHours);
    }
  };

  const addWorkingRange = (dateIndex: number) => {
    const currentDatesAndHours = [...form.values.datesAndHours];
    currentDatesAndHours[dateIndex].workingRanges.push({
      start: '09:00',
      end: '17:00',
    });
    form.setFieldValue('datesAndHours', currentDatesAndHours);
  };

  const removeWorkingRange = (dateIndex: number, rangeIndex: number) => {
    const currentDatesAndHours = [...form.values.datesAndHours];
    currentDatesAndHours[dateIndex].workingRanges.splice(rangeIndex, 1);
    form.setFieldValue('datesAndHours', currentDatesAndHours);
  };

  const updateWorkingRange = (
    dateIndex: number,
    rangeIndex: number,
    field: 'start' | 'end',
    value: string,
  ) => {
    const currentDatesAndHours = [...form.values.datesAndHours];
    currentDatesAndHours[dateIndex].workingRanges[rangeIndex][field] = value;
    form.setFieldValue('datesAndHours', currentDatesAndHours);
  };

  const handleFormSubmit = (values: EventCreate) => {
    const additionalValidation = validateAdditionalFields(values);

    if (!additionalValidation.isValid) {
      dispatch(
        setGlobalAlert({
          message: additionalValidation.message,
          timeout: 3000,
          severity: SeverityLevel.ERROR,
          title: 'Formulario con errores',
        }),
      );
      return;
    }

    const dataToSend: Omit<EventCreate, 'startDate' | 'endDate'> = {
      title: values.title,
      description: values.description,
      coverPhoto: values.coverPhoto,
      locationLat: values.locationLat,
      locationLng: values.locationLng,
      locationDescription: values.locationDescription,
      datesAndHours: values.datesAndHours,
      categoriesIds: values.categoriesIds,
      contactEmail: values.contactEmail,
      contactPhoneNumber: values.contactPhoneNumber,
      municipalityId: values.municipalityId,
    };

    createEventMutation.mutate(dataToSend);
  };

  const validateAdditionalFields = (values: EventCreate) => {
    const hasWorkingRanges = values.datesAndHours.some(
      (dateAndHour) => dateAndHour.workingRanges.length > 0,
    );

    if (!hasWorkingRanges && values.datesAndHours.length > 0) {
      return {
        isValid: false,
        message: 'Debe definir al menos un horario para el evento',
      };
    }

    for (
      let dateIndex = 0;
      dateIndex < values.datesAndHours.length;
      dateIndex++
    ) {
      const dateAndHour = values.datesAndHours[dateIndex];
      for (
        let rangeIndex = 0;
        rangeIndex < dateAndHour.workingRanges.length;
        rangeIndex++
      ) {
        const range = dateAndHour.workingRanges[rangeIndex];

        if (!range.start) {
          return {
            isValid: false,
            message: `Hora de inicio requerida para ${dateAndHour.date}`,
          };
        }

        if (!range.end) {
          return {
            isValid: false,
            message: `Hora de fin requerida para ${dateAndHour.date}`,
          };
        }

        if (range.start && range.end && range.start >= range.end) {
          return {
            isValid: false,
            message: `La hora de fin debe ser posterior a la hora de inicio para ${dateAndHour.date}`,
          };
        }
      }
    }

    return { isValid: true, message: '' };
  };

  const getWorkingRangeError = (
    dateIndex: number,
    rangeIndex: number,
    field: 'start' | 'end',
  ) => {
    const fieldName = `datesAndHours[${dateIndex}].workingRanges[${rangeIndex}].${field}`;
    return form.errors[fieldName as keyof EventCreate];
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (!file) {
      dispatch(
        setGlobalAlert({
          message: 'No se ha seleccionado ninguna imagen',
          timeout: 0,
          severity: SeverityLevel.WARNING,
          title: 'Alerta',
        }),
      );
      return;
    }
    const validFormats = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validFormats.includes(file?.type || '')) {
      dispatch(
        setGlobalAlert({
          message: 'Formato de imagen no soportado',
          timeout: 0,
          severity: SeverityLevel.WARNING,
          title: 'Alerta',
        }),
      );
      return;
    }

    uploadPublicationImage(file);
  };

  const handleImageRemove = () => {
    form.setFieldValue('coverPhoto', '');
  };

  useEffect(() => {
    console.log('uploadResultUrl', uploadResultUrl);
    if (uploadResultUrl) {
      form.setFieldValue('coverPhoto', uploadResultUrl);
    }
  }, [uploadResultUrl]);


  useEffect(() => {
    if (!locationLat || !locationLng) return;
    const distancesToAllMunicipalities = municipalities
      .map((m) => ({
        id: m.id,
        distance: haversineDistance({ lat: +locationLat, lng: +locationLng }, { lat: m.lat, lng: m.lng }),
      }))
      .sort(
        ({ distance: aDistance }, { distance: dDistance }) =>
          aDistance - dDistance,
      );
    const { id: closesMunicipalityId } = distancesToAllMunicipalities[0];

    form.setFieldValue('municipalityId', closesMunicipalityId);
  }, [locationLat, locationLng]);



  return {
    form,
    addWorkingRange,
    removeWorkingRange,
    updateWorkingRange,
    generateDatesInRange,
    updateDatesAndHours,
    getWorkingRangeError,
    isLoading: createEventMutation.isPending,
    isError: createEventMutation.isError,
    handleImageUpload,
    uploadImageRequest: rest,
    handleImageRemove,
  };
};

export default useEventCreate;
