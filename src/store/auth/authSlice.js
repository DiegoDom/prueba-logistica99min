import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({

  name: 'auth',
  initialState: {
    displayName: null,
    email: null,
    errorMessage: null,
    photoURL: null,
    status: 'checking', // ? checking, not-authenticated, authenticated
    uid: null
  },
  reducers: {
    login: (state, { payload }) => {
      state.displayName = payload.displayName;
      state.email = payload.email;
      state.errorMessage = null;
      state.photoURL = payload.photoURL;
      state.status = 'authenticated';
      state.uid = payload.uid;
    },
    logout: (state, { payload }) => {
      state.displayName = null;
      state.email = null;
      state.errorMessage = payload || null;
      state.photoURL = null;
      state.status = 'not-authenticated';
      state.uid = null;
    },
    checkCredentials: (state) => {
      state.status = 'checking';
    },
    clearErrors: (state) => {
      state.errorMessage = null;
    }
  }
});

// Action creators are generated for each case reducer function
export const { login, logout, checkCredentials, clearErrors } = authSlice.actions;