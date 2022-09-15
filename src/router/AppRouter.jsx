import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthRoutes } from '../auth';
import { OrdersRoutes } from '../orders';

import { useCheckAuth } from '../hooks';
import { Loader } from '../ui';

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === 'checking') {
    return <Loader />;
  }

  return (
    <Routes>
      {status === 'authenticated' ? (
        <>
          <Route path='/*' element={<OrdersRoutes />} />
        </>
      ) : (
        <Route path='/auth/*' element={<AuthRoutes />} />
      )}
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};
