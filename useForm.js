import { useState, useEffect } from 'react';

const useForm = (onSubmit, initialValues) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    if (initialValues) setValues({ ...initialValues });
  }, [initialValues]);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(values);
    setValues({});
  };

  const handleClear = () => {
    setValues({});
  };

  return { values, handleChange, handleSubmit, handleClear };
};

export default useForm;
