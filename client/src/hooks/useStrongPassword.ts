import { useState, ChangeEvent } from "react";
import {
  isIncludeNumber,
  isIncludeSpecialChar,
  isIncludeCapitalLetter,
  isIncludeLowercaseLetter,
} from "../utils/validators";
import { ErrorInterface } from "../../types";


const useStrongPassword = () => {

  const [error, setError] = useState<ErrorInterface | null>(null);
  const [value, setValue] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);

    const errors = {
      isLetterError : false,
      isCharactersError : false,
      isNumAndSpecialCharError : false
    };

    if (val.length < 8) errors.isLetterError = true;
    if (!isIncludeNumber(val) || !isIncludeSpecialChar(val)) errors.isNumAndSpecialCharError = true
    if (!isIncludeCapitalLetter(val) || !isIncludeLowercaseLetter(val)) errors.isCharactersError = true
    setError(errors);
  };

  return {
    error,
    value,
    changeHandler,
  };
};

export default useStrongPassword;
