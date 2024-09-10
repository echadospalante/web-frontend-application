import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../config/redux/store/store.config";
import { refreshAuthOnPageReloadMiddleware } from "../api/middleware/authentication.middleware";

const useRefreshAuth = () => {
  const dispatch = useAppDispatch();
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    dispatch(refreshAuthOnPageReloadMiddleware()).finally(() => {
      setAuthLoading(false);
    });
  }, [dispatch]);

  return { authLoading };
};

export default useRefreshAuth;
