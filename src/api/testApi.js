import axios from 'axios';

/* import { getEnvironments } from '../helpers';

const {
  VITE_TESTAPI_USERNAME,
  VITE_TESTAPI_PASSWORD
} = getEnvironments(); */

const testApi = axios.create({
  baseURL: 'https://prueba-tecninca-backend-qndxoltwga-uc.a.run.app',
  headers: {
    'Content-Type': 'application/json'
  },
  auth: {
    username: import.meta.env.VITE_TESTAPI_USERNAME,
    password: import.meta.env.VITE_TESTAPI_PASSWORD
  }
});

export default testApi;
