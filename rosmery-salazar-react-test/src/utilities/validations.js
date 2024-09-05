export const ValidationNumbers = (string) => {
    if (/^[0-9]+$/.test(string)) {
      return true;
    } else {
      return false;
    }
  };
  
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
  
  export const ValidationCurp = (string) => {
    if (
      /^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/.test(
        string
      )
    ) {
      return true;
    } else {
      return false;
    }
  };
  
  export const ValidationRfc = (string) => {
    if (
      /^([A-ZÑ\x26]{4,5}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z\d]{2,3}))?$/.test(
        string
      )
    ) {
      return true;
    } else {
      return false;
    }
  };
  
  export const ValidationEmpty = (value) => {
    if (value === "") {
      return false;
    } else {
      return true;
    }
  };
  
  export const ValidationSelect = (value) => {
    if (value) {
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
      case "number":
        !ValidationNumbers(value) && (noErrors = false);
        break;
      case "password":
        !ValidationPassword(value) && (noErrors = false);
        break;
      case "email":
        !ValidationEmail(value) && (noErrors = false);
        break;
      case "empty":
        !ValidationEmpty(value) && (noErrors = false);
        break;
      case "select":
        !ValidationSelect(value) && (noErrors = false);
        break;
      case "curp":
        !ValidationCurp(value) && (noErrors = false);
        break;
      case "rfc":
        !ValidationRfc(value) && (noErrors = false);
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
  