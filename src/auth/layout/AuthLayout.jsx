export const AuthLayout = ({ children, title = '' }) => {
  return (
    <div className='d-flex justify-content-center flex-column align-items-center min-vh-100'>
      <div className="auth-layout">
        <h1 className='text-center text-muted'>LOGISTICA APP</h1>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
};
