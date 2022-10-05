import { useState } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import { useForm } from '../../hooks';
import { startCreateNewOrder } from '../../store/orders/thunks';

const formValidations = {
  coordinates: [
    value => !validator.isEmpty(value),
    'Las coordenadas del destino son requeridas'
  ],
  firstName: [
    value => !validator.isEmpty(value),
    'El nombre del cliente es requerido'
  ],
  lastName: [
    value => !validator.isEmpty(value),
    'El apellido del cliente es requerido'
  ],
  street: [
    value => !validator.isEmpty(value),
    'La calle del destino es requerida'
  ],
  zipCode: [
    value => !validator.isEmpty(value),
    'El código postal del destino es requerido'
  ],
  state: [
    value => !validator.isEmpty(value),
    'El estado del destino es requerido'
  ],
  city: [
    value => !validator.isEmpty(value),
    'La ciudad del destino es requerida'
  ],
  neighbourhood: [
    value => !validator.isEmpty(value),
    'El colonia del destino es requerido'
  ],
  exNumber: [
    value => !validator.isEmpty(value),
    'El el número exterior del destino es requerido'
  ],
  phoneNumber: [
    value => !validator.isEmpty(value),
    'El telefono del cliente es requerido'
  ]
};

const formData = {
  coordinates: '1.1,1.1',
  firstName: 'Diego',
  lastName: 'Dominguez',
  street: 'Conocido 1',
  zipCode: '45128',
  state: 'Jalisco',
  city: 'Zapopan',
  neighbourhood: 'J. Vallarta',
  exNumber: '4444',
  inNumber: '2',
  phoneNumber: '5555555555'
};

const productsFormValidations = {
  name: [
    value => !validator.isEmpty(value),
    'El nombre del producto es requerido'
  ],
  weight: [
    value => validator.isInt(value, { min: 1 }),
    'Ingrese el peso del producto'
  ]
};

const productsFormData = {
  name: '',
  weight: ''
};

export const OrderForm = () => {
  const dispatch = useDispatch();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const {
    coordinates,
    firstName,
    lastName,
    street,
    zipCode,
    state,
    city,
    neighbourhood,
    exNumber,
    inNumber,
    phoneNumber,
    onInputChange,
    errors,
    isFormValid,
    formState
  } = useForm(formData, formValidations);

  const {
    name,
    weight,
    onInputChange: prodOnInputChange,
    errors: prodErrors,
    isFormValid: prodIsFormValid,
    formState: prodFormState, reset
  } = useForm(productsFormData, productsFormValidations);
  const [products, setProducts] = useState([]);

  const onSubmit = e => {
    e.preventDefault();

    setIsFormSubmitted(true);

    if (!isFormValid) {
      return;
    }

    if (!products.length) {
      return;
    }

    const body = {
      DestinationAddress: {
        Coordinates: coordinates,
        FirstName: firstName,
        LastName: lastName,
        Street: street,
        ZipCode: zipCode,
        State: state,
        City: city,
        Neighbourhood: neighbourhood,
        ExNumber: exNumber,
        InNumber: inNumber,
        PhoneNumber: phoneNumber
      },
      Products: products
    };
    dispatch(startCreateNewOrder(body));
  };

  const onAddProduct = () => {
    if (!prodIsFormValid) {
      return;
    }

    setProducts(current => [...current, {
      name,
      Weight: Number(weight)
    }]);

    reset();
  };

  return (
    <form className='mb-4' onSubmit={onSubmit}>
      {
        isFormSubmitted && !products.length ?
          <div className="alert alert-danger" role="alert">
            Añada al menos 1 producto a la orden.
          </div> :
          undefined
      }
      <h5>Datos del cliente</h5>
      <hr />
      <div className='form-row'>
        <div className='form-group col-md-4'>
          <label htmlFor='firstName'>Nombre</label>
          <input
            className={`form-control ${!!errors.firstName && isFormSubmitted ? 'is-invalid' : ''
              }`}
            id='firstName'
            name='firstName'
            onChange={onInputChange}
            placeholder='Ingresa el nombre del cliente'
            type='text'
            value={firstName}
          />
          {isFormSubmitted && (
            <small id='firstNameHelp' className='form-text text-danger'>
              {errors.firstName || null}
            </small>
          )}
        </div>
        <div className='form-group col-md-4'>
          <label htmlFor='lastName'>Apellido</label>
          <input
            className={`form-control ${!!errors.lastName && isFormSubmitted ? 'is-invalid' : ''
              }`}
            id='lastName'
            name='lastName'
            onChange={onInputChange}
            placeholder='Ingresa el apellido del cliente'
            type='text'
            value={lastName}
          />
          {isFormSubmitted && (
            <small id='lastNameHelp' className='form-text text-danger'>
              {errors.lastName || null}
            </small>
          )}
        </div>
        <div className='form-group col-md-4'>
          <label htmlFor='phoneNumber'>Teléfono</label>
          <input
            className={`form-control ${!!errors.phoneNumber && isFormSubmitted ? 'is-invalid' : ''
              }`}
            id='phoneNumber'
            name='phoneNumber'
            onChange={onInputChange}
            placeholder='Ingresa el apellido del cliente'
            type='text'
            value={phoneNumber}
          />
          {isFormSubmitted && (
            <small id='phoneNumberHelp' className='form-text text-danger'>
              {errors.phoneNumber || null}
            </small>
          )}
        </div>
      </div>
      <h5>Datos del destino</h5>
      <hr />
      <div className='form-row'>
        <div className='form-group col-md-6'>
          <label htmlFor='coordinates'>Coordenas</label>
          <input
            className={`form-control ${!!errors.coordinates && isFormSubmitted ? 'is-invalid' : ''
              }`}
            id='coordinates'
            name='coordinates'
            onChange={onInputChange}
            placeholder='Ingresa las coordenadas'
            type='text'
            value={coordinates}
          />
          {isFormSubmitted && (
            <small id='coordinatesHelp' className='form-text text-danger'>
              {errors.coordinates || null}
            </small>
          )}
        </div>
        <div className='form-group col-md-6'>
          <label htmlFor='street'>Calle</label>
          <input
            className={`form-control ${!!errors.street && isFormSubmitted ? 'is-invalid' : ''
              }`}
            id='street'
            name='street'
            onChange={onInputChange}
            placeholder='Ingresa la calle'
            type='text'
            value={street}
          />
          {isFormSubmitted && (
            <small id='streetHelp' className='form-text text-danger'>
              {errors.street || null}
            </small>
          )}
        </div>
      </div>
      <div className='form-row'>
        <div className='form-group col-md-6'>
          <label htmlFor='neighbourhood'>Colonia</label>
          <input
            className={`form-control ${!!errors.neighbourhood && isFormSubmitted ? 'is-invalid' : ''
              }`}
            id='neighbourhood'
            name='neighbourhood'
            onChange={onInputChange}
            placeholder='Ingresa la colonia'
            type='text'
            value={neighbourhood}
          />
          {isFormSubmitted && (
            <small id='neighbourhoodHelp' className='form-text text-danger'>
              {errors.neighbourhood || null}
            </small>
          )}
        </div>
        <div className='form-group col-md-3'>
          <label htmlFor='exNumber'>Número exterior</label>
          <input
            className={`form-control ${!!errors.exNumber && isFormSubmitted ? 'is-invalid' : ''
              }`}
            id='exNumber'
            name='exNumber'
            onChange={onInputChange}
            placeholder='Ingresa el número exterior'
            type='text'
            value={exNumber}
          />
          {isFormSubmitted && (
            <small id='exNumberHelp' className='form-text text-danger'>
              {errors.exNumber || null}
            </small>
          )}
        </div>
        <div className='form-group col-md-3'>
          <label htmlFor='inNumber'>Número interior</label>
          <input
            className={`form-control ${!!errors.inNumber && isFormSubmitted ? 'is-invalid' : ''
              }`}
            id='inNumber'
            name='inNumber'
            onChange={onInputChange}
            placeholder='Ingresa el número interior'
            type='text'
            value={inNumber}
          />
          {isFormSubmitted && (
            <small id='inNumberHelp' className='form-text text-danger'>
              {errors.inNumber || null}
            </small>
          )}
        </div>
      </div>

      <div className='form-row'>
        <div className='form-group col-md-6'>
          <label htmlFor='city'>Ciudad</label>
          <input
            className={`form-control ${!!errors.city && isFormSubmitted ? 'is-invalid' : ''
              }`}
            id='city'
            name='city'
            onChange={onInputChange}
            placeholder='Ingresa la ciudad'
            type='text'
            value={city}
          />
          {isFormSubmitted && (
            <small id='cityHelp' className='form-text text-danger'>
              {errors.city || null}
            </small>
          )}
        </div>
        <div className='form-group col-md-4'>
          <label htmlFor='state'>Estado</label>
          <input
            className={`form-control ${!!errors.state && isFormSubmitted ? 'is-invalid' : ''
              }`}
            id='state'
            name='state'
            onChange={onInputChange}
            placeholder='Ingresa el el estado'
            type='text'
            value={state}
          />
          {isFormSubmitted && (
            <small id='stateHelp' className='form-text text-danger'>
              {errors.state || null}
            </small>
          )}
        </div>
        <div className='form-group col-md-2'>
          <label htmlFor='zipCode'>Código postal</label>
          <input
            className={`form-control ${!!errors.zipCode && isFormSubmitted ? 'is-invalid' : ''
              }`}
            id='zipCode'
            name='zipCode'
            onChange={onInputChange}
            placeholder='Ingresa el código postal'
            type='text'
            value={zipCode}
          />
          {isFormSubmitted && (
            <small id='zipCodeHelp' className='form-text text-danger'>
              {errors.zipCode || null}
            </small>
          )}
        </div>
      </div>
      <h5>Productos de la orden</h5>
      <hr />
      <div className="form-inline">
        <div className='form-group d-flex flex-column align-items-start mr-2'>
          <label htmlFor='name'>Producto</label>
          <input
            className={`form-control ${!!prodErrors.name ? 'is-invalid' : ''
              }`}
            id='name'
            name='name'
            onChange={prodOnInputChange}
            placeholder='Nombre del producto'
            type='text'
            value={name}
          />
          <small id='nameHelp' className='form-text text-danger'>
            {prodErrors.name || null}
          </small>
        </div>
        <div className='form-group d-flex flex-column align-items-start mr-2'>
          <label htmlFor='weight'>Peso</label>
          <input
            className={`form-control ${!!prodErrors.weight ? 'is-invalid' : ''
              }`}
            id='weight'
            name='weight'
            onChange={prodOnInputChange}
            placeholder='Peso del producto'
            type='text'
            value={weight}
          />
          <small id='nameHelp' className='form-text text-danger'>
            {prodErrors.weight || null}
          </small>
        </div>

        <button type="button" className="btn btn-primary mb-2" onClick={onAddProduct}><i className='bx bx-plus-circle'></i></button>
      </div>
      <table className='table table-sm table-hover'>
        <caption>Productos de la orden</caption>
        <thead>
          <tr>
            <th scope='col'>Producto</th>
            <th scope='col'>Peso</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.name}>
              <th scope='row'>{product.name}</th>
              <td>{product.Weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type='submit' className='btn btn-primary'>
        Crear orden
      </button>
    </form>
  );
};
