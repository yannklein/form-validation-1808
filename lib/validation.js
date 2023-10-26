// 1. Select elements
//   - elements that user interact with: allInputs (NodeList, kind of array), checkBox, emailInput
//   - elements that are changing: submitButton
const allInputs = document.querySelectorAll(".form-control");
const checkBox = document.querySelector("#tos");
const emailInput = document.querySelector("input#email");
const submitButton = document.querySelector("button");
// console.log(allInputs, checkBox, emailInput, submitButton);

const setValidationColor = (anInput, isValid) => {
  if (isValid) {
    anInput.classList.remove("is-invalid");
    anInput.classList.add("is-valid");
  } else {
    anInput.classList.remove("is-valid");
    anInput.classList.add("is-invalid");
  }
};

const checkboxChecked = (checkBoxElement) => {
  return checkBoxElement.checked
};

const allFilled = (allInputElements) => {
  let result = true;
  allInputElements.forEach((input) => {
    if (input.value === "") {
      result = false;
    } 
  });
  return result;
};

const enableButton = (buttonElement) => {
  buttonElement.disabled = false;
  buttonElement.innerText = "Submit";
};

// 1.5 Iterate over each input
allInputs.forEach((input) => {
  // 2. Listen to an event:
  // 2.a listen to a 'blur' event on each input
  input.addEventListener("blur", () => {
    console.log("blured!");
    // callback fct: executed only when the user does a blur action on our input
    //     - check if valid or not 
    const isValid = input.value !== "";
    //     - setting the validation color ( create setValidationColor(input, isValid) )
    setValidationColor(input, isValid);
    // console.log(checkboxChecked(checkBox));
    // console.log(allFilled(allInputs));
    //     - check if everything if valid (allFilled(), checkboxChecked())
    if (allFilled(allInputs) && checkboxChecked(checkBox)) {
      console.log("enable the button");
      //     - if yes, enable button status  ( enableButton())
      enableButton(submitButton);
    }
  });
});
// 2.b listen to 'change' event on the checkBox
checkBox.addEventListener("change", () => {
  //     - check if everything if valid (allFilled(), checkboxChecked())
  if (allFilled(allInputs) && checkboxChecked(checkBox)) {
    console.log("enable the button");
    //     - if yes, enable button status  ( enableButton())
    enableButton(submitButton);
  }
});
