import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { startLogout } from '../../store/auth';

export const Navbar = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <RouterLink to='/' className='navbar-brand'>
        LOGISTICA APP
      </RouterLink>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'></ul>
        <button
          className='btn btn-sm navbar-text ml-auto text-danger'
          onClick={onLogout}
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
};
