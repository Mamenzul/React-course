import useINput from "../hooks/use-inputV2";
const BasicForm = (props) => {
  const {
    input: name,
    inputIsValid: nameIsValid,
    inputHasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useINput((name) => name !== "");

  const nameClass = nameHasError ? "form-control invalid" : "form-control";

  const submitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid) {
      return;
    }
    resetName();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={name}
          />
          {nameHasError && <p className="error-text">Name can't be blank</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
