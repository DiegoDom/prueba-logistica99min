import { Navbar } from '../../ui';

export const OrdersLayout = ({ children }) => {
  return (<>
    <Navbar />
    <div className="container">
      {children}
    </div>
  </>);
};
