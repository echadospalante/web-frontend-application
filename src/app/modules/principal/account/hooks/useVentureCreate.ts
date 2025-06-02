import { useEffect } from 'react';

import { useMutation } from '@tanstack/react-query';
import { VentureCreate } from 'echadospalante-domain';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import {
  setGlobalAlert,
  SeverityLevel,
} from '../../../../config/redux/reducers/shared/user-interface.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import useAuthentication from '../../../auth/hooks/useAuthentication';
import { OwnedVenturesApi } from '../api/http/owned-ventures-management.api';
import useUploadImage from './useUploadImage';

const useVentureCreate = () => {
  const navigate = useNavigate()
  const { email } = useAuthentication();
  const dispatch = useAppDispatch();
  const { uploadVentureImage, ...rest } = useUploadImage();
  const { uploadResultUrl } = rest;

  const createVentureMutation = useMutation({
    mutationFn: (data: VentureCreate) => OwnedVenturesApi.createVenture(data),
    onSuccess: () => {
      dispatch(
        setGlobalAlert({
          message: 'Emprendimiento creado exitosamente',
          timeout: 0,
          severity: SeverityLevel.SUCCESS,
          title: '¡Bien hecho!',
        }),
      );
      navigate("/principal/cuenta/emprendimientos")
    }
  });

  const form = useFormik<VentureCreate>({
    initialValues: {
      name: 'Nombre',
      coverPhoto:
        'https://storage.googleapis.com/echadospalante-ventures-bucket/Empanadas-San-Juanitas-Manizales-negocio-DIAN-4 (2).jpg',
      description: 'Some description',
      categoriesIds: [],
      contact: {
        email: email,
        phoneNumber: '3122555542',
      },
      location: {
        lat: 6.031934076663449,
        lng: -75.43083322366968,
        description: 'Some description of location',
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

  return {
    form,
    handleImageUpload,
    uploadImageRequest: rest,
    handleImageRemove,
  };
};

export default useVentureCreate;
