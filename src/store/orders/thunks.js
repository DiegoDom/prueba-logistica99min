import Swal from 'sweetalert2';

import { setSaving } from './ordersSlice';
import { getEnvironments } from '../../helpers';
import testApi from '../../api/testApi';

const {
  VITE_TESTAPI_USERNAME,
  VITE_TESTAPI_PASSWORD
} = getEnvironments();

const basicURL = 'https://prueba-tecninca-backend-qndxoltwga-uc.a.run.app';

export const startCreateNewOrder = (body) => {
  return async (dispatch) => {
    dispatch(setSaving(true));
    try {
      const { data } = await testApi.post('/orders/create', body);
      console.log({ data });

      /* console.log({ body }); */

      // ! NO USAR VAR
      /* var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append('Authorization', 'Basic ' + btoa(VITE_TESTAPI_USERNAME + ":" + VITE_TESTAPI_PASSWORD));

      const resp = await fetch(`${basicURL}/orders/create`, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(body)
      });

      const data = await resp.json(); */

      if (!data.Order) {
        Swal.fire('Lo sentimos', data.Message || 'Ocurrio un error al intentar guardar la orden', 'warning');
      }

      console.log({ data });

    } catch (error) {
      Swal.fire('Lo sentimos', 'Ocurrio un error al intentar guardar la orden', 'error');

    }
  };
};