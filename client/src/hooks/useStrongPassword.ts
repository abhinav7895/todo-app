import { useState, ChangeEvent } from "react";
import { errorMessages } from "../utils/constants";
import {
  isIncludeNumber,
  isIncludeSpecialChar,
  isIncludeCapitalLetter,
  isIncludeLowercaseLetter,
} from "../utils/validators";

interface ErrorInterface {
  isLetterError: boolean;
  isCharactersError: boolean;
  isNumAndSpecialCharError: boolean;
}

const useStrongPassword = () => {

  const [error, setError] = useState<ErrorInterface>({
    isLetterError : false,
    isCharactersError : false,
    isNumAndSpecialCharError : false
  });
  const [value, setValue] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);

    const errors = {
      isLetterError : false,
      isCharactersError : false,
      isNumAndSpecialCharError : false
    };

    if (val.length < 8) errors.isCharactersError = true;
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
