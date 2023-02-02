import { useState } from "react";
const useINput = (validateInput) => {
  const [input, setInput] = useState("");
  const [inputTouched, setInputTouched] = useState(false);
  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setInputTouched(true);
  };
  const inputIsValid = validateInput(input);
  const inputHasError = !inputIsValid && inputTouched;
  const reset = () => {
    setInput('');
    setInputTouched(false);
  }
  return {
    input,
    inputIsValid,
    inputHasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useINput;
