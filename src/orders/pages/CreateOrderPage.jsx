import { Link as RouterLink } from 'react-router-dom';
import { OrderForm } from '../components';
import { OrdersLayout } from '../layout/OrdersLayout';

export const CreateOrderPage = () => {
  return (
    <OrdersLayout>
      <div className="d-flex align-items-center justify-content-between">
        <h1>Crear orden</h1>
        <RouterLink to='/' className="btn btn-sm btn-outline-danger">Cancelar</RouterLink>
      </div>
      <OrderForm />
    </OrdersLayout>
  );
};
