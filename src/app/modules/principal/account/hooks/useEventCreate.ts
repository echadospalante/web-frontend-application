
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import {
  setGlobalAlert,
  SeverityLevel,
} from '../../../../config/redux/reducers/shared/user-interface.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import { OwnedEventsApi } from '../api/http/owned-events-management.api';
import { EventCreate } from 'echadospalante-domain';


const useEventCreate = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { ventureId } = useParams();

  const form = useFormik<EventCreate & {startDate: string, endDate: string }>({
    initialValues: {
      title: '',
      description: '',
      coverPhoto: '',
      location: {
        lat: 0,
        lng: 0,
        description: '',
      },
      datesAndHours: [],
      categoriesIds: [],
      contactEmail: '',
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
    // Validaciones adicionales que no se pueden hacer con Yup
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

    // Preparar datos para enviar (sin los campos auxiliares)
    const dataToSend: Omit<EventCreate, 'startDate' | 'endDate'> = {
      title: values.title,
      description: values.description,
      coverPhoto: values.coverPhoto,
      location: values.location,
      datesAndHours: values.datesAndHours,
      categoriesIds: values.categoriesIds,
      contactEmail: values.contactEmail,
      contactPhoneNumber: values.contactPhoneNumber,
    };

    createEventMutation.mutate(dataToSend);
  };

  const validateAdditionalFields = (values: EventCreate) => {
    // Validar que haya al menos un horario definido
    const hasWorkingRanges = values.datesAndHours.some(
      (dateAndHour) => dateAndHour.workingRanges.length > 0,
    );

    if (!hasWorkingRanges && values.datesAndHours.length > 0) {
      return {
        isValid: false,
        message: 'Debe definir al menos un horario para el evento',
      };
    }

    // Validar horarios individuales
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

  // Función helper para obtener errores de campos específicos
  const getFieldError = (fieldName: string) => {
    return form.touched[fieldName as keyof EventCreate] &&
      form.errors[fieldName as keyof EventCreate]
      ? form.errors[fieldName as keyof EventCreate]
      : undefined;
  };

  // Función helper para obtener errores de working ranges
  const getWorkingRangeError = (
    dateIndex: number,
    rangeIndex: number,
    field: 'start' | 'end',
  ) => {
    const fieldName = `datesAndHours[${dateIndex}].workingRanges[${rangeIndex}].${field}`;
    return form.errors[fieldName as keyof EventCreate];
  };

  return {
    form,
    eventData: form.values, // Para mantener compatibilidad
    errors: form.errors,
    touched: form.touched,
    handleSubmit: form.handleSubmit,
    addWorkingRange,
    removeWorkingRange,
    updateWorkingRange,
    generateDatesInRange,
    updateDatesAndHours,
    getFieldError,
    getWorkingRangeError,
    isLoading: createEventMutation.isPending,
  };
};

export default useEventCreate;
