import useInput from "../hooks/use-inputs";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputIsInvalid,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameResetInput,
  } = useInput(name => name.trim() !== '');

  const {
    value: enteredMail,
    isValid: enteredMailIsValid,
    hasError: mailInputIsInvalid,
    inputChangeHandler: mailInputChangeHandler,
    inputBlurHandler: mailInputBlurHandler,
    reset: mailResetInput,
  } = useInput(name => name.includes('@'));


  let formIsValid = false;
  if (enteredNameIsValid && enteredMailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid || !enteredMailIsValid) {
      return;
    }

    console.log(enteredName);
    nameResetInput();
    mailResetInput();
  };

  const nameImputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const mailImputClasses = mailInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameImputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={mailImputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={mailInputChangeHandler}
          value={enteredMail}
          onBlur={mailInputBlurHandler}
        />
        {mailInputIsInvalid && <p className="error-text">Mail must be valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
