import React from "react";
import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { deleteVentureMiddleware } from "../api/middleware/owned-ventures-management.middleware";

const useVentureManagement = () => {
  const dispatch = useAppDispatch();
  const [deleteRequest, setDeleteRequest] = React.useState({
    loading: false,
    error: false,
  });

  const deleteVenture = (ventureId: string): void => {
    setDeleteRequest({ loading: true, error: false });
    dispatch(deleteVentureMiddleware(ventureId))
      .then(() => {
        setDeleteRequest({ loading: false, error: false });
      })
      .catch((error) => {
        console.error(error);
        setDeleteRequest({ loading: false, error: true });
      });
  };

  return { deleteVenture, ...deleteRequest };
};

export default useVentureManagement;
