import { useState } from "react";
const useInput = (validateInput) => {
  const [input, setInput] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const inputIsValid = validateInput(input);
  const hasError = !inputIsValid && inputTouched;

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setInputTouched(true);
  };

  const reset = () => {
    setInput("");
    setInputTouched(false);
  };
  return {
    value: input,
    isValid: inputIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
