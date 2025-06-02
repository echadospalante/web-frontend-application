import { useState } from 'react';

import { VentureCategory } from 'echadospalante-domain';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useAppDispatch } from '../../../../config/redux/store/store.config';
import { updateVentureCategoryMiddleware } from '../api/middleware/venture-categories.middleware';

const useEditVentureCategory = (ventureCategory: VentureCategory) => {
  const dispatch = useAppDispatch();
  const [operation, setOperation] = useState({
    loading: false,
    error: false,
  });

  const form = useFormik<VentureCategory>({
    initialValues: ventureCategory,
    onSubmit: (values) => {
      console.log({ values });
      handleSubmit(values);
    },
    validationSchema: {
      name: Yup.string()
        .required('El nombre es requerido')
        .min(3, 'El nombre debe tener al menos 3 caracteres')
        .max(50, 'El nombre debe tener como máximo 50 caracteres'),
      description: Yup.string()
        .required('La descripción es requerida')
        .min(3, 'La descripción debe tener al menos 3 caracteres')
        .max(255, 'La descripción debe tener como máximo 255 caracteres'),
    },
  });

  const handleSubmit = (category: VentureCategory) => {
    setOperation({
      loading: true,
      error: false,
    });
    return dispatch(updateVentureCategoryMiddleware(category.id, category))
      .then(() => {
        setOperation({
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setOperation({
          loading: false,
          error: true,
        });
      });
  };

  return {
    ...operation,
    handleSubmit,
    form,
  };
};

export default useEditVentureCategory;
