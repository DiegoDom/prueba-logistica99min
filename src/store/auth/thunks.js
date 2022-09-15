import { checkCredentials, logout, login } from './';
import {
  loginWithEmailPassword,
  registerUserWithEmailPassword,
  logoutFirebase
} from '../../firebase';

export const checkingAuthentication = (email, password) => {
  return async dispatch => {
    dispatch(checkCredentials());
  };
};

export const startRegisterUserWithEmailPassword = ({
  displayName,
  email,
  password
}) => {
  return async dispatch => {
    dispatch(checkCredentials());
    
    const {
      uid,
      photoURL,
      success,
      errorMessage
    } = await registerUserWithEmailPassword({
      displayName,
      email,
      password
    });

    if (!success) {
      return dispatch(logout(errorMessage));
    }

    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async dispatch => {
    dispatch(checkCredentials());

    const result = await loginWithEmailPassword({ email, password });
    if (!result.success) {
      return dispatch(logout(result.errorMessage));
    }

    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async dispatch => {
    await logoutFirebase();
    dispatch(logout());
  };
};
