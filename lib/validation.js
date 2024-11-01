// PSEUDOCODE first!

// select all the fields and the TOS and the submit button
const formInputs = document.querySelectorAll(".form-control");
const formTos = document.getElementById("tos");
const submit = document.querySelector(".btn-primary");

const enableSubmit = () => {
  submit.disabled = false;
  submit.innerText = "Submit";
}

// check if all the fields as well as the TOS are valid
// if yes
// change submit button
const checkAllFields = () => {
  let allInputsValid = true
  formInputs.forEach((input) => {
    if (input.value === "") {
      allInputsValid = false
    };
  })
  // console.log(allInputsValid)
  // console.log(formTos.checked)
  return formTos.checked && allInputsValid;
}

// iterate over the fields
// listen to a blur
// check if there is text
formInputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    console.log(event);
    // if yes 
    // add bootstrap is-valid class
    // else
    // add bootstrap is-invalid class
    if (event.currentTarget.value === "") {
      event.currentTarget.classList.add("is-invalid");
    } else {
      event.currentTarget.classList.remove("is-invalid");
      event.currentTarget.classList.add("is-valid");
    }
    if(checkAllFields()) {
      enableSubmit();
    }
    // console.log(checkAllFields());
  })
})


// listen to a click on the TOS
tos.addEventListener("click", (event) => {
  // when clicked 
  // check if all the fields as well as the TOS are valid
  // if yes
  // change submit button
  console.log(event);
  if(checkAllFields()) {
    enableSubmit();
  }
});