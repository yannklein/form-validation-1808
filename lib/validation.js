// 1. Select elements (that user will interact with, that are goin to change)
// allInputs, emailInput, checkBox, submitButton
const allInputs = document.querySelectorAll(".form-control");
const emailInput = document.querySelector("#email");
const checkBox = document.querySelector("#tos");
const submitButton = document.querySelector("button.btn");
// console.log(allInputs, emailInput, checkBox, submitButton);

const checkboxChecked = (checkInput) => {
  return checkInput.checked;
  // if (checkInput.checked) {
  //   return true;
  // }
  // return false;
};

const allFilled = (inputs) => {
  // inputs is a NodeList a kind of array
  let result = true;
  inputs.forEach((input) => {
    const isValid = input.classList.contains("is-valid");
    if (isValid === false) {
      result = false;
    }
  });
  return result;
};

const enableSubmit = () => {
  // check if, all the inputs are valid
  // check if, all inputs have the is-valid class
  const isAllInputValid = allFilled(allInputs);
  // check if, checkbox is checked
  const isChecked = checkboxChecked(checkBox);

  // change our submit button
  if (isAllInputValid && isChecked) {
    submitButton.innerText = "Submit";
    submitButton.disabled = false;
  }
}

const validateInput = (anInput) => {
  // check if there is a value to our input
  if (anInput.value !== "" ) {
    // if yes, 
    //    add a class is-valid
    //    remove the is-invalid class
    anInput.classList.add("is-valid");
    anInput.classList.remove("is-invalid");
  } else {
    // if no,
    //    the opposite
    anInput.classList.remove("is-valid");
    anInput.classList.add("is-invalid");
  }
};

// 2. Listen to user interactions "change", "blur"
checkBox.addEventListener("change", (event) => {
  console.log(event);
  enableSubmit();
});

// allInputs is a kind of array, a NodeList
allInputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    console.log(event);
    // 3. Change the DOM:
      // - validateInput
    validateInput(input);
      // - enableSubmit
    enableSubmit();
  });
});


