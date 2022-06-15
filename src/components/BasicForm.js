import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  //apply the Custom Hook useinput to the First Name Input
  const {
    value: enteredFirstName, 
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler, 
    reset: resetFirstNameInput
    //the function we pass into useInput() is the value of the 
    //validateValue function that we defined that useInput() will take. 
  } = useInput(value => value.trim() !== '');

  //apply the Custom Hook useinput to the Last Name Input
  const {
    value: enteredLastName, 
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler, 
    reset: resetLastNameInput
    //here the validate value function is the same 
    //because we are also dealing with a name. 
  } = useInput(value => value.trim() !== '');

  //apply the Custom Hook useinput to the Email Input
  const {
    value: enteredEmail, 
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler, 
    reset: resetEmailInput
    //here the validate value function is the same 
    //because we are also dealing with a name. 
  } = useInput(value => value.includes('@'));

  let formIsValid = false; 
  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    if(!enteredFirstNameIsValid || !enteredLastNameIsValid || !enteredEmailIsValid) {
      return; 
    }
    
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);
    
    resetFirstNameInput(); 
    resetLastNameInput();
    resetEmailInput();
  }

  const firstNameInputClasses = firstNameInputHasError 
  ? 'form-control invalid' 
  : 'form-control'; 

  const lastNameInputClasses = lastNameInputHasError 
  ? 'form-control invalid' 
  : 'form-control';
  
  const emailInputClasses = emailInputHasError 
  ? 'form-control invalid' 
  : 'form-control'; 

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input onBlur={firstNameBlurHandler} onChange={firstNameChangedHandler} type='text' id='name' />
          {firstNameInputHasError && <p className='error-text'>First Name must not be empty.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input onBlur={lastNameBlurHandler} onChange={lastNameChangedHandler} type='text' id='name' />
          {lastNameInputHasError && <p className='error-text'>Last Name must not be empty.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input onBlur={emailBlurHandler} onChange={emailChangedHandler} type='text' id='name' />
        {emailInputHasError && <p className='error-text'>Invalid email.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
