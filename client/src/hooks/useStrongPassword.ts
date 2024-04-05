import { useState, ChangeEvent } from "react";
import { errorMessages } from "../utils/constants";
import {
  isIncludeNumber,
  isIncludeSpecialChar,
  isIncludeCapitalLetter,
  isIncludeLowercaseLetter,
} from "../utils/validators";

const useStrongPassword = () => {
  const [error, setError] = useState("");

  const [value, setValue] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);

    const errors = [];

    if (val.length < 8) errors.push(errorMessages.length);
    if (!isIncludeNumber(val)) errors.push(errorMessages.number);
    if (!isIncludeSpecialChar(val)) errors.push(errorMessages.specialChar);
    if (!isIncludeCapitalLetter(val)) errors.push(errorMessages.capitalLetter);
    if (!isIncludeLowercaseLetter(val))
      errors.push(errorMessages.lowercaseLetter);

    setError(
      errors.length > 0
        ? `Password must include ${errors.join(", ")} character`
        : ""
    );
  };

  return {
    error,
    value,
    changeHandler,
  };
};

export default useStrongPassword;
