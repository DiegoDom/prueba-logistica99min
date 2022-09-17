import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialState = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialState);
  }, [initialState]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(errors)) {
      if (errors[formValue] !== null) return false;
    }

    return true;
  }, [errors]);

  const onInputChange = e => {
    e.preventDefault();
    setFormState(current => ({
      ...current,
      [e.target.name]: e.target.value
    }));
  };

  const reset = () => {
    setFormState({ ...initialState });
    setErrors({});
  };

  const createValidators = () => {
    const formCheckedValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage = 'Este campo es requerido.'] = formValidations[
        formField
      ];
      formCheckedValues[formField] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setErrors(formCheckedValues);
  };

  return {
    ...formState,
    errors,
    formState,
    isFormValid,
    onInputChange,
    reset
  };
};
