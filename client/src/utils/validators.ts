const isIncludeNumber = (password: string) => {
  const regex = /\d/; // This regular expression matches any digit (0-9)
  return regex.test(password); // This will return true if the password includes a number, and false otherwise
};

const isIncludeSpecialChar = (password: string) => {
  const specialCharRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; // This regular expression matches any special character
  return specialCharRegex.test(password); // This will return true if the password includes a special character, and false otherwise
};

const isIncludeCapitalLetter = (password: string) => {
  const capitalLetterRegex = /[A-Z]/; // This regular expression matches any capital letter (A-Z)
  return capitalLetterRegex.test(password); // This will return true if the password includes a capital letter, and false otherwise
};

const isIncludeLowercaseLetter = (password: string) => {
  const lowercaseLetterRegex = /[a-z]/; // This regular expression matches any lowercase letter (a-z)
  return lowercaseLetterRegex.test(password); // This will return true if the password includes a lowercase letter, and false otherwise
};

const isValidEmail = (email: string) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};
const isValidName = (email: string) => {
  const nameRegex = /^[a-zA-Z\s-]+$/
  return nameRegex.test(email);
};

const emailValidation = (value : string) => {
  if (!isValidEmail(value)) {
    return {
      isValid : false,
      errorMessage : "Please enter a valid email address"
    }
  }
}

const nameValidation = (value : string) => {
  if (!isValidName(value)) {
    return {
      isValid : false,
      errorMessage : "Name must only contain alphabets, spaces, or hyphens"
    }
  }
}

export {
  isIncludeNumber,
  isIncludeSpecialChar,
  isIncludeCapitalLetter,
  isIncludeLowercaseLetter,
  emailValidation,
  nameValidation
};
