import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

import {
  setGlobalAlert,
  SeverityLevel,
} from '../../../../config/redux/reducers/shared/user-interface.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import useUploadImage from './useUploadImage';
import { OwnedPublicationsApi } from '../api/http/owned-publications-management.api';

export interface BodyItem {
  id: string;
  type: 'TEXT' | 'IMAGE' | 'VIDEO' | 'LINK';
  content: string;
}

export interface PublicationCreate {
  description: string;
  type: 'STANDARD';
  body: BodyItem[];
  categoriesIds: string[];
}

const usePublicationCreate = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { uploadPublicationImage, ...rest } = useUploadImage();
  const { uploadResultUrl } = rest;
  const { ventureId } = useParams();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [postData, setPublicationCreate] = useState<PublicationCreate>({
    description: '',
    type: 'STANDARD',
    body: [],
    categoriesIds: [],
  });

  const createPublicationMutation = useMutation({
    mutationKey: ['publications', 'create'],
    mutationFn: (data: PublicationCreate) =>
      OwnedPublicationsApi.createPublication(ventureId!, data),
    onSuccess: () => {
      dispatch(
        setGlobalAlert({
          position: 'top-right',
          message: 'Publicación creada exitosamente',
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
          position: 'top-right',
          message:
            error?.response?.data?.message || 'Error al crear la publicación',
          timeout: 5000,
          severity: SeverityLevel.ERROR,
          title: 'Error',
        }),
      );
    }
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

    uploadPublicationImage(file);
  };

  // const handleImageRemove = () => {
  //   form.setFieldValue('coverPhoto', '');
  // };

  // useEffect(() => {
  //   console.log('uploadResultUrl', uploadResultUrl);
  //   if (uploadResultUrl) {
  //     form.setFieldValue('coverPhoto', uploadResultUrl);
  //   }
  // }, [uploadResultUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formIsValid = validateForm();
    if (!formIsValid) {
      dispatch(
        setGlobalAlert({
          position: 'top-right',
          message:
            'Por favor, corrige los errores antes de enviar la publicación',
          timeout: 3000,
          severity: SeverityLevel.ERROR,
          title: 'Tiene errores',
        }),
      );
      return;
    }
    createPublicationMutation.mutate(postData);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!postData.description.trim()) {
      newErrors.description = 'La descripción es requerida';
    }

    if (postData.categoriesIds.length === 0) {
      newErrors.categoriesIds = 'Selecciona al menos una categoría';
    }

    postData.body.forEach((item, index) => {
      if (!item.content.trim()) {
        newErrors[`body_${item.id}`] = 'El contenido es requerido';
      }

      if (
        item.type === 'VIDEO' &&
        item.content &&
        !isValidYouTubeUrl(item.content)
      ) {
        newErrors[`body_${item.id}`] = 'URL de YouTube no válida';
      }

      if (item.type === 'LINK' && item.content && !isValidUrl(item.content)) {
        newErrors[`body_${item.id}`] = 'URL no válida';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidYouTubeUrl = (url: string) => {
    const youtubeRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)/;
    return youtubeRegex.test(url);
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return {
    postData,
    setPublicationCreate,
    handleImageUpload,
    uploadImageRequest: rest,
    errors,
    setErrors,
    isValidUrl,
    handleSubmit,
    // handleImageRemove,
  };
};

export default usePublicationCreate;
