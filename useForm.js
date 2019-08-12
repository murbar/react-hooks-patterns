import { useState, useEffect } from 'react';

const useForm = (onSubmit, initialValues) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    if (initialValues) setValues({ ...initialValues });
  }, [initialValues]);

  const handleChange = e => {
    let { name, value, type, checked } = e.target;

    if (type === 'range' || type === 'number') value = parseInt(value);
    if (type === 'checkbox') value = checked;

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
