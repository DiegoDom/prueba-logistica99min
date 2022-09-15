import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { firebaseAuth } from './config';


export const registerUserWithEmailPassword = async ({
  displayName,
  email,
  password
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;

    await updateProfile(firebaseAuth.currentUser, {
      displayName
    });

    return {
      displayName,
      email,
      photoURL,
      success: true,
      uid
    };
  } catch (error) {
    return {
      errorMessage: error.message,
      success: false
    };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
    const { displayName, photoURL, uid } = result.user;

    return {
      displayName,
      email,
      photoURL,
      success: true,
      uid
    };
  } catch (error) {
    return {
      errorMessage: error.message,
      success: false
    };
  }
};

export const logoutFirebase = async () => {
  try {
    return await firebaseAuth.signOut();
  } catch (error) {
    console.log(error);
    return {
      errorMessage: error.message,
      success: false
    };
  }
};
