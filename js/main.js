const form = document.querySelector("form");

const nameField = document.getElementById("nameField");
const emailField = document.getElementById("email");
const commentsField = document.getElementById("comments");
const formErrors = document.getElementById("form-errors");

const errorText = document.getElementById("error_msg");
const infoText = document.getElementById("info_msg");


let form_errors = [];

nameField.addEventListener("input", (event) => {
    if (nameField.validity.valid) {
      errorText.textContent = "";
    } else {
      showNameError();
    }
});

emailField.addEventListener("input", (event) => {
    if (emailField.validity.valid) {
        console.log('emailField.validity.valid' + emailField.validity.valid)
        errorText.textContent = "";
    } else {
      showEmailError();
    }
});


commentsField.addEventListener("input", (event) => {
    var charsLeft = commentsField.maxLength - commentsField.value.length;
    if (commentsField.validity.valid) {
      errorText.textContent = ""; // Remove the message content
      infoText.textContent = `Remaining Characters Left: ${charsLeft}`;
    } 
    else {
      infoText.textContent = `Remaining Characters Left: ${charsLeft}`;
      showCommentsError();
    }
  });

form.addEventListener("submit", (event) => {
// if the email field is invalid
if ((!nameField.validity.valid) || (!emailField.validity.valid) || (!commentsField.validity.valid)) {
    // will check every field for errors. The main error message displayed will be the error closest to the top of the form 
    showCommentsError();
    showEmailError();
    showNameError();
    // prevent form submission
    event.preventDefault();
}
else {
    formErrors.value = JSON.stringify(form_errors);
}
});

function showNameError() {
    if (nameField.validity.valueMissing) {
        errorText.textContent = "You need to enter a name!";
        form_errors.push("Name: Required But No Input");
    }
    else if (nameField.validity.patternMismatch) {
        errorText.textContent = "Illegal character used in the NAME field!";
        form_errors.push("Name: Illegal Character");
    }   
}

function showEmailError() {
    if (emailField.validity.valueMissing) {
        errorText.textContent = "You need to enter an email!";
        form_errors.push("Email: Required But No Input");
    } 
    else if (emailField.validity.patternMismatch) {
        errorText.textContent = "Illegal Character used in the EMAIL field!"
        form_errors.push("Email: Illegal Character");
    }
    else if (emailField.validity.typeMismatch) {
        errorText.textContent = "Entered value does not have proper email syntax!";
        form_errors.push("Email: Invalid Format");
    }
}

function showCommentsError() {
    if (commentsField.validity.valueMissing) {
        errorText.textContent = "You need to enter a comment!";
        form_errors.push("Comment: Required But No Input");
    } 
    else if (commentsField.validity.patternMismatch) {
        errorText.textContent = "Illegal character used in the COMMENTS field!"
        form_errors.push("Comment: Illegal Character");
    }
    else if (commentsField.validity.tooLong) {
        const charsOver = commentsField.value.length - commentsField.maxLength;
        errorText.textContent = 'Comment is too long.';
        infoText.textContent = `You are ${charsOver} characters over the ${commentsField.maxLength}`
        form_errors.push("Comment: Over Character Limit");
    }
}

