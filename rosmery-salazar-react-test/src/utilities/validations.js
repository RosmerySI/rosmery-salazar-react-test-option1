
  
  export const ValidationPassword = (string) => {
    if (
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-.]).{6,12}$/.test(
        string
      )
    ) {
      return true;
    } else {
      return false;
    }
  };
  
  export const ValidationEmail = (string) => {
    if (
      /^(([^<>()[\],;:\s@"]+([^<>()[\],;:\s@"]+)*)|(".+"))@(([^<>()[\],;:\s@"]+\.)+[^<>()[\],;:\s@"]{2,})$/.test(
        string
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

 
  
  export const UpdateValue = (e, id, inputList, setInputList) => {
    e.preventDefault();
    
    let inputCopy = { ...inputList };
    inputCopy[id].selected = true;
    
    if (e?.value) {
      inputCopy[id].value = e.value ;
    } else {
      inputCopy[id].value = e.target.value;
    }
  
    setInputList(inputCopy);
  };
  
  export const detectError = (valdiationType, value) => {
    let noErrors = true;
  
    switch (valdiationType) {
      
      case "password":
        !ValidationPassword(value) && (noErrors = false);
        break;
      case "email":
        !ValidationEmail(value) && (noErrors = false);
        break;
      
       
      default:
        break;
    }
  
    return noErrors;
  };
  
  export const ErrorsMessages = (inputList, errorList, setErrorList) => {
    let errorListCopy = { ...errorList };
  
    for (const inputName in inputList) {
      if (
        (inputList[inputName].value === "" &&
          inputList[inputName].validationType !== "optional" &&
          inputList[inputName].selected) ||
        (!detectError(
          inputList[inputName].validationType,
          inputList[inputName].value
        ) &&
          inputList[inputName].selected)
      ) {
        errorListCopy[inputName].value = true;
      } else {
        errorListCopy[inputName].value = false;
      }
      setErrorList(errorListCopy);
    }
  };
  
  export const SubmitValidation = (inputList, setInputList) => {
    let noErrors = true;
  
    for (const inputName in inputList) {
      if (
        inputList[inputName].value === "" &&
        inputList[inputName].validationType !== "optional" &&
        !inputList[inputName].selected
      ) {
        let inputCopy = { ...inputList };
        inputCopy[inputName].selected = true;
        setInputList(inputCopy);
      }
  
      if (
        !detectError(
          inputList[inputName].validationType,
          inputList[inputName].value
        )
      ) {
        noErrors = false;
      }
    }
    return noErrors;
  };
  