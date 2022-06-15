//Here we create a Custom Hook to avoid the repetition and outsource the repetitive code 
import { useState } from 'react';

//we pass a function to our custom hook function
const useInput = (validateValue) => {
    
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = event => {
    setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,  
        hasError, 
        valueChangeHandler, 
        inputBlurHandler,
        reset
    };
};

export default useInput; 