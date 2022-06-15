//Adding a Custom hook to outsource the repetitive code.

import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  //here we use the useInput hook on the Name input
  const {
    value: enteredName, 
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler, 
    reset: resetNameInput
    //the function we pass into useInput() is the value of the 
    //validateValue function that we defined that useInput() will take. 
  } = useInput(value => value.trim() !== '');

  //here we use the useInput hook on the Email input 
  const {
    value: enteredEmail, 
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler, 
    reset: resetEmailInput
    //the function we pass into useInput() is the value of the 
    //validateValue function that we defined that useInput() will take. 
  } = useInput(value => value.includes('@'));
 
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  } 
  
  const formSubmissionHandler = event => {
    event.preventDefault();

    if(!enteredNameIsValid || !enteredEmailIsValid) {
      return; 
    }

    console.log(enteredName);
    console.log(enteredEmail);

    resetNameInput();
    resetEmailInput();
  };

 
  const nameInputClasses = nameInputHasError 
  ? 'form-control invalid' 
  : 'form-control'; 
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'; 

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' id='name' 
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className='error-text'>Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;