import { useFormik } from "formik";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import {
  resetUserInfo,
  selectRegister,
  setPreferencesIds,
  setUserInfo,
  UserRegisterInfo,
} from "../../../config/redux/reducers/register.reducer";
import { useAppDispatch } from "../../../config/redux/store/store.config";
import {
  setGlobalAlert,
  SeverityLevel,
} from "../../../config/redux/reducers/user-interface.reducer";
import { createUserRegisterMiddleware } from "../api/middleware/authentication.middleware";
import { completeOnboarding } from "../../../config/redux/reducers/auth.reducer";

const userSchema = Yup.object().shape({
  gender: Yup.string()
    .required("Este campo es requerido")
    .oneOf(["M", "F", "O"]),
  birthDate: Yup.date().required("Este campo es requerido"),
  departmentId: Yup.number().required("Este campo es requerido").min(1),
  municipalityId: Yup.number().required("Este campo es requerido").min(1),
  acceptedTerms: Yup.boolean()
    .required("Debe aceptar los términos y condiciones")
    .oneOf([true]),
});

export const useRegister = () => {
  const { userInfo, preferencesIds = [] } = useSelector(selectRegister);
  const dispatch = useAppDispatch();

  const submitRegister = () => {
    if (!userInfo) return Promise.reject();
    return dispatch(
      createUserRegisterMiddleware(userInfo, preferencesIds)
    ).then(() => {
      dispatch(completeOnboarding());
    });
  };

  return { userInfo, submitRegister };
};

export const useRegisterPreferences = () => {
  const dispatch = useAppDispatch();
  const { preferencesIds = [] } = useSelector(selectRegister);

  const togglePreference = (preference: string) => {
    if (preferencesIds.length >= 10 && !preferencesIds.includes(preference)) {
      dispatch(
        setGlobalAlert({
          message: "No puedes seleccionar más de 10 categorías",
          severity: SeverityLevel.WARNING,
          timeout: 5000,
          title: "¡Atención!",
        })
      );
      return;
    }

    dispatch(
      setPreferencesIds(
        preferencesIds.includes(preference)
          ? preferencesIds.filter((id) => id !== preference)
          : [...preferencesIds, preference]
      )
    );
  };

  return { preferencesIds, togglePreference };
};

export const useRegisterUserInfo = () => {
  const dispatch = useAppDispatch();
  const { userInfo } = useSelector(selectRegister);

  const form = useFormik<UserRegisterInfo>({
    initialValues: {
      gender: userInfo?.gender || "",
      birthDate: userInfo?.birthDate || new Date(),
      departmentId: userInfo?.departmentId || 0,
      municipalityId: userInfo?.municipalityId || 0,
      acceptedTerms: userInfo?.acceptedTerms || false,
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  useEffect(() => {
    if (form.isValid) {
      dispatch(setUserInfo(form.values));
    } else {
      dispatch(resetUserInfo());
    }
  }, [dispatch, form.isValid, form.values]);

  return { form };
};
