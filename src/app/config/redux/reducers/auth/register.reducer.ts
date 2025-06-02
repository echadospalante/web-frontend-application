import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../store/store.config';

export interface UserRegisterInfo {
  gender: string;
  birthDate: Date;
  departmentId: number;
  municipalityId: number;
  acceptedTerms: boolean;
}

export interface RegisterState {
  userInfo?: UserRegisterInfo;
  preferencesIds?: string[];
}

const initialState: RegisterState = {};

// Freeze the initial state to prevent accidental changes

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserRegisterInfo>) => {
      const { birthDate, departmentId, gender, municipalityId, acceptedTerms } =
        action.payload;

      state.userInfo = {
        birthDate,
        departmentId,
        gender,
        municipalityId,
        acceptedTerms,
      };
    },
    resetUserInfo: (state) => {
      state.userInfo = undefined;
    },
    setPreferencesIds: (state, action: PayloadAction<string[]>) => {
      state.preferencesIds = action.payload;
    },
  },
});

export const { resetUserInfo, setPreferencesIds, setUserInfo } =
  registerSlice.actions;

export const selectRegister = (state: RootState) => state.register;

export default registerSlice.reducer;
