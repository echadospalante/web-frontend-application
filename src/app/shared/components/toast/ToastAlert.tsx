import React, { useEffect } from "react";

import { Action } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

import {
  SeverityLevel,
  removeGlobalAlert,
  selectUserInterface,
} from "../../config/redux/reducers/user-interface.reducer";
import { useAppDispatch } from "../../config/redux/store/store.config";

export interface SnackbarAlertProps {
  message: string;
  timeout: number;
  severity: SeverityLevel;
  open: boolean;
  time: number;
}

const ToastAlert = () => {
  const dispatch = useAppDispatch();
  const { alert } = useSelector(selectUserInterface);
  const { active, title, message, severity, timeout } = alert;

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch<Action>(removeGlobalAlert());
    }, timeout);

    return () => {
      clearTimeout(handler);
    };
  }, [dispatch, timeout]);

  if (!active) return <></>;

  const handleCloseToast = (): void => {
    dispatch<Action>(removeGlobalAlert());
  };

  return (
    <React.Fragment>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
        }}
      >
        <div>
          <br />
          <Toast>
            <ToastHeader
              className={`bg-${severity} text-white`}
              icon={<i className="bx bxs-user-check"></i>}
              toggle={() => handleCloseToast()}
            >
              {title}
            </ToastHeader>
            <ToastBody>{message}</ToastBody>
          </Toast>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ToastAlert;
