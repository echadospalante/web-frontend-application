import React, { useEffect } from 'react';

import { Action } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { Toast, ToastBody, ToastHeader } from 'reactstrap';

import {
  removeGlobalAlert,
  selectUserInterface,
} from '../../../config/redux/reducers/shared/user-interface.reducer';
import { useAppDispatch } from '../../../config/redux/store/store.config';

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

  const getPositionStyle = () => {
    switch (alert.position) {
      case 'top-right':
        return { top: '20px', right: '20px' };
      case 'top-left':
        return { top: '20px', left: '20px' };
      case 'bottom-right':
        return { bottom: '20px', right: '20px' };
      case 'bottom-left':
        return { bottom: '20px', left: '20px' };
      case 'top-center':
        return { top: '20px', left: '50%', transform: 'translateX(-50%)' };
      case 'bottom-center':
        return { bottom: '20px', left: '50%', transform: 'translateX(-50%)' };
      case 'full-center':
        return {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        };
      default:
        return { top: '20px', right: '20px' }; // Default to top-right
    }
  };

  return (
    <React.Fragment>
      <div
        style={{
          position: 'fixed',
          // bottom: '20px',
          // right: '20px',
          zIndex: 9999,
          ...getPositionStyle(),
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
