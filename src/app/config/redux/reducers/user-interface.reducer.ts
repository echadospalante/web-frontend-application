import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { RootState } from '../store/store.config';

export interface UserInterfaceState {
  loading: GlobalLoading;
  alert: GlobalAlert;
}

export enum SeverityLevel {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export interface GlobalLoading {
  active: boolean;
  message: string;
  iconPath: string;
}

export interface AlertAction {
  label: string;
  severity: SeverityLevel;
  type: 'outlined' | 'contained' | 'text';
  callback: () => void | Promise<void>;
}

export interface GlobalAlert {
  active: boolean;
  timeout: number;
  message: string;
  severity: SeverityLevel;
  actions?: AlertAction[];
}

export type AlertInfo = Pick<
  GlobalAlert,
  'message' | 'timeout' | 'severity' | 'actions'
>;

const initialState: UserInterfaceState = {
  loading: {
    active: false,
    message: '',
    iconPath: '',
  },
  alert: {
    active: false,
    message: '',
    timeout: 0,
    severity: SeverityLevel.INFO,
  },
};

// Freeze the initial state to prevent accidental changes
Object.freeze(initialState);

/**
 * This slice is responsible for managing the global loading and alert states that are used throughout the application (GlobalLoading and GlobalAlert interfaces)
 */
export const userInterfaceSlice = createSlice({
  name: 'userInterface',
  initialState,
  reducers: {
    startGlobalLoading: (
      state,
      action: PayloadAction<{ message: string; iconPath?: string }>,
    ) => {
      state.loading.active = true;
      state.loading.message = action.payload.message;

      state.loading.iconPath =
        action.payload.iconPath || '/images/icons/loading/loading-money.svg';
    },
    finishGlobalLoading: (state) => {
      state.loading.active = false;
      state.loading.message = '';
    },
    setGlobalAlert: (state, action: PayloadAction<AlertInfo>) => {
      state.alert.active = true;
      state.alert.message = action.payload.message;
      state.alert.timeout = action.payload.timeout;
      state.alert.severity = action.payload.severity;
      state.alert.actions = action.payload.actions;
    },
    removeGlobalAlert: (state) => {
      state.alert = initialState.alert;
    },
  },
});

export const {
  startGlobalLoading,
  finishGlobalLoading,
  setGlobalAlert,
  removeGlobalAlert,
} = userInterfaceSlice.actions;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectUserInterface = (state: any) => state.userInterface;

export default userInterfaceSlice.reducer;
