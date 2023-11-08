import { useState } from "react";

export function useForm(inputs, selects) {
  const [values, setValues] = useState(inputs);

  const [errors, setErrors] = useState(inputs);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const validateIfValuesHasEmpty = () => {
    const empties = Object.keys(values)
      .filter((value) => !values[value])
      .map((value) => [value, "Este campo es requerido"]);

    if (empties.length === 0) {
      setErrors({});
      return true;
    }

    setErrors(Object.fromEntries(empties));
    return false;
  };

  const cleanInput = () => {
    console.log("bject.keys(inputs)", Object.keys(inputs));

    const keys = Object.keys(inputs).map((key) => {
      if (selects.includes(key)) {
        return [[key], "DEFAULT"];
      }

      return [[key], ""];
    });
    setValues(Object.fromEntries(keys));
  };

  return {
    values,
    errors,
    handleInputChange,
    validateIfValuesHasEmpty,
    cleanInput,
  };
}
