import { useEffect, useState } from "react";

import { UserContact } from "echadospalante-domain";

import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { fetchUserContactInfoMiddleware } from "../api/middleware/user-contact-info.middleware";

const useUserContactInfo = () => {
  const dispatch = useAppDispatch();
  const [contactInfo, setContactInfo] = useState<{
    loading: boolean;
    error: boolean;
    data?: UserContact;
  }>({
    loading: false,
    error: false,
    data: undefined,
  });

  const fetchUserContactInfo = () => {
    dispatch(fetchUserContactInfoMiddleware())
      .then((response) => {
        setContactInfo({
          loading: false,
          error: false,
          data: response,
        });
      })
      .catch((error) => {
        console.error(error);
        setContactInfo({
          loading: false,
          error: true,
          data: undefined,
        });
      });
  };

  useEffect(() => {
    dispatch(fetchUserContactInfoMiddleware())
      .then((response) => {
        setContactInfo({
          loading: false,
          error: false,
          data: response,
        });
      })
      .catch((error) => {
        console.error(error);
        setContactInfo({
          loading: false,
          error: true,
          data: undefined,
        });
      });
  }, []);

  return { ...contactInfo, fetchUserContactInfo };
};

export default useUserContactInfo;
