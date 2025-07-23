import { useEffect } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { VentureCreate } from 'echadospalante-domain';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { useSelector } from 'react-redux';
import { selectAuthentication } from '../../../../config/redux/reducers/auth/auth.reducer';
import {
  setGlobalAlert,
  SeverityLevel,
} from '../../../../config/redux/reducers/shared/user-interface.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import { OwnedVenturesApi } from '../api/http/owned-ventures-management.api';
import useUploadImage from './useUploadImage';
import municipalities from '../../../../shared/data/geo/municipalities';
import { haversineDistance } from '../../../../shared/helpers/map-helpers';

const useVentureCreate = () => {
  const navigate = useNavigate();
  const { email, municipality } = useSelector(selectAuthentication);
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const { uploadVentureImage, ...rest } = useUploadImage();
  const { uploadResultUrl } = rest;

  const createVentureMutation = useMutation({
    mutationFn: (data: VentureCreate) => OwnedVenturesApi.createVenture(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['ventures', 'owned'],
        exact: false,
      });
      dispatch(
        setGlobalAlert({
          position: 'top-right',
          message: 'Emprendimiento creado exitosamente',
          timeout: 0,
          severity: SeverityLevel.SUCCESS,
          title: '¡Bien hecho!',
        }),
      );
      navigate('/principal/cuenta/emprendimientos');
    },
  });

  const form = useFormik<VentureCreate>({
    initialValues: {
      name: '',
      coverPhoto: '',
      description: '',
      categoriesIds: [],
      contact: {
        email: email,
        phoneNumber: '',
      },
      location: {
        municipalityId: municipality!.id,
        lat: municipality!.lat,
        lng: municipality!.lng,
        description: '',
      },
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required').max(50),
      coverPhoto: Yup.string(),
      description: Yup.string().required('Description is required').max(300),
      categoriesIds: Yup.array().required('Category is required').min(1),
      contact: Yup.object().shape({
        email: Yup.string().required('Email is required').email().optional(),
        phoneNumber: Yup.string()
          .required('Phone number is required')
          .matches(/^[0-9]+$/)
          .optional(),
      }),
      location: Yup.object().shape({
        lat: Yup.number().required('Latitude is required').optional(),
        lng: Yup.number().required('Longitude is required').optional(),
        description: Yup.string(),
      }),
    }),

    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      createVentureMutation.mutate(values);
    },
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (!file) {
      dispatch(
        setGlobalAlert({
          position: 'top-right',
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
          position: 'top-right',
          message: 'Formato de imagen no soportado',
          timeout: 0,
          severity: SeverityLevel.WARNING,
          title: 'Alerta',
        }),
      );
      return;
    }

    uploadVentureImage(file);
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

  const location = form.values.location;

  useEffect(() => {
    if (!location) return;
    if (!location.lat || !location.lng) return;
    const { lat, lng } = location;
    const distancesToAllMunicipalities = municipalities
      .map((m) => ({
        id: m.id,
        distance: haversineDistance({ lat, lng }, { lat: m.lat, lng: m.lng }),
      }))
      .sort(
        ({ distance: aDistance }, { distance: dDistance }) =>
          aDistance - dDistance,
      );
    const { id: closesMunicipalityId } = distancesToAllMunicipalities[0];

    form.setFieldValue('location.municipalityId', closesMunicipalityId);
  }, [location?.lat, location?.lng]);

  return {
    form,
    handleImageUpload,
    uploadImageRequest: rest,
    handleImageRemove,
  };
};

export default useVentureCreate;
