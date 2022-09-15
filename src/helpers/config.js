export const getEnvironments = () => {
  // ? LOAD VARIABLES
  import.meta.env;

  return {
    ...import.meta.env
  };
};