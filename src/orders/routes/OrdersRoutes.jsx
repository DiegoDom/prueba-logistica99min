import { Routes, Route, Navigate } from 'react-router-dom';
import { DashboardPage, CreateOrderPage } from '../pages';

export const OrdersRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<DashboardPage />} />
      <Route path='/orders/create' element={<CreateOrderPage />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
