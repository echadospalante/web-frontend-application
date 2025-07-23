import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  setGlobalAlert,
  SeverityLevel,
} from '../../../../config/redux/reducers/shared/user-interface.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import SponsorShipsApi from '../api/sponsorships.api';

const useVentureSponsorship = (ventureId: string, ventureSlug: string) => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const form = useFormik({
    initialValues: {
      monthlyAmount: 0,
    },
    onSubmit: (values) => {
      sponsorMutation.mutate(values.monthlyAmount);
    },
    validationSchema: Yup.object().shape({
      monthlyAmount: Yup.number()
        .required('El monto es requerido')
        .min(10000, 'El monto mínimo es de COP $10.000')
        .max(1000000, 'El monto máximo es de COP $1.000.000'),
    }),
  });

  const sponsorMutation = useMutation({
    mutationKey: ['ventures', ventureId, 'sponsorship'],
    mutationFn: (monthlyAmount: number) =>
      SponsorShipsApi.createSponsorship(ventureId, monthlyAmount),
    onSuccess: (data, input) => {
      queryClient.invalidateQueries({
        queryKey: ['ventures', ventureId, 'sponsorships'],
      });
      queryClient.invalidateQueries({
        queryKey: ['ventures', 'slug', ventureSlug],
      });
      queryClient.refetchQueries({
        queryKey: ['ventures', ventureId, 'sponsorships'],
      });
      queryClient.refetchQueries({
        queryKey: ['ventures', 'slug', ventureSlug],
      });
      queryClient.invalidateQueries({
        queryKey: ['ventures', 'sponsorships', 'sent'],
        exact: false,
      });

      dispatch(
        setGlobalAlert({
          message: `Tu patrocinio ha sido recibido y será utilizado para apoyar el emprendimiento, se te harán cobros mensuales de ${formatCurrency(input)}.`,
          timeout: 10000,
          severity: SeverityLevel.SUCCESS,
          title: '¡Muchas Gracias por el apoyo!',
          position: 'top-right',
        }),
      );
    },
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return {
    form,
    isLoading: sponsorMutation.isPending,
    isError: sponsorMutation.isError,
    error: sponsorMutation.error,
    isSuccess: sponsorMutation.isSuccess,
  };
};

export default useVentureSponsorship;
