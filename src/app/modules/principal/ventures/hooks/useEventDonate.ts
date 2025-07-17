import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  setGlobalAlert,
  SeverityLevel,
} from '../../../../config/redux/reducers/shared/user-interface.reducer';
import { useAppDispatch } from '../../../../config/redux/store/store.config';
import DonationsApi from '../api/donations.api';

const useEventDonate = (eventId: string) => {
  const dispatch = useAppDispatch();

  const form = useFormik({
    initialValues: {
      amount: 0,
    },
    onSubmit: (values) => {
      donateMutation.mutate(values.amount);
    },
    validationSchema: Yup.object().shape({
      amount: Yup.number()
        .required('El monto es requerido')
        .min(10000, 'El monto mínimo es de COP $10.000')
        .max(1000000, 'El monto máximo es de COP $1.000.000'),
    }),
  });

  const donateMutation = useMutation({
    mutationKey: ['events', eventId, 'donate'],
    mutationFn: (amount: number) =>
      DonationsApi.createDonation(eventId, amount),
    onSuccess: (data) => {
      // Handle success, e.g., show a success message or update the UI
      window.alert('Donation successful');
      dispatch(
        setGlobalAlert({
          message:
            'Tu donación ha sido recibida y será utilizada para apoyar el evento.',
          timeout: 5000,
          severity: SeverityLevel.SUCCESS,
          title: '¡Muchas Gracias por el apoyo!',
          position: 'top-right',
        }),
      );
    },
  });

  return {
    form,
    isLoading: donateMutation.isPending,
    isError: donateMutation.isError,
    error: donateMutation.error,
    isSuccess: donateMutation.isSuccess,
  }
};

export default useEventDonate;
