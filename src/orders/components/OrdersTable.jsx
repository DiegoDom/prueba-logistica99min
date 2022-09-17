import { useSelector } from 'react-redux';

export const OrdersTable = () => {
  const { orders } = useSelector(state => state.orders);
  console.log({ orders });
  return (
    <div className='table-responsive'>
      <table className='table table-sm table-hover'>
        <caption>Listado de ordenes</caption>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Estado</th>
            <th scope='col'>Cliente</th>
            <th scope='col'>Destino</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <th scope='row'>{order.id}</th>
              <td>{order.Status}</td>
              <td>{`${order.DestinationAddress.FirstName} ${order.DestinationAddress.LastName}`}</td>
              <td>{`${order.DestinationAddress.Street} ${order.DestinationAddress.State} ${order.DestinationAddress.City}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
