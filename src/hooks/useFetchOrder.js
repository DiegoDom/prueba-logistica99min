import { useEffect, useState } from 'react';
import testApi from '../api/testApi';

export const useFetchOrder = id => {
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getOrder = async () => {
    try {
      const data = await testApi.get(
        `https://prueba-tecninca-backend-qndxoltwga-uc.a.run.app/orders/${id}`
      );
      // TODO: Validar el objeto data
      setOrder(data);
      setIsLoading(false);
    } catch (error) {
      setOrder(null);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrder();
  }, [id]);

  return {
    order,
    isLoading
  };
};
