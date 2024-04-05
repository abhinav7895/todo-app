import { ChangeEvent, useState } from "react";

const useInputValidation = <T extends string | number>(
  initialVal: T,
  validator: (val: T) =>
    | {
        isValid: boolean;
        errorMessage: string;
      }
    | undefined = () => undefined
) => {
  const [value, setValue] = useState<T>(initialVal);
  const [error, setError] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue: T;

    if (typeof value === "number") {
      newValue = Number(e.target.value) as T;
    } else {
      newValue = e.target.value as T;
    }

    setValue(newValue);

    const validationResult = validator(newValue as T);
    if (validationResult) {
      setError(validationResult.errorMessage);
    } else {
      setError("");
    }
  };
  
  return {
    value,
    changeHandler,
    error,
  };
};

export default useInputValidation;
