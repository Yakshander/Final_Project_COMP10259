const form = document.querySelector('form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const dateInput = document.getElementById('date');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const dateError = document.getElementById('date-error');
const phoneError = document.getElementById('phone-error');
const messageError = document.getElementById('message-error');

function validateFirstName() {
  const firstNameValue = firstNameInput.value.trim();

  if (firstNameValue.length < 5) {
    setInvalid(firstNameInput, firstNameError, 'First name should be at least 5 characters');
    return false;
  } else {
    setValid(firstNameInput, firstNameError);
    return true;
  }
}

function validateLastName() {
  const lastNameValue = lastNameInput.value.trim();

  if (lastNameValue.length < 5) {
    setInvalid(lastNameInput, lastNameError, 'Last name should be at least 5 characters');
    return false;
  } else {
    setValid(lastNameInput, lastNameError);
    return true;
  }
}

function validateEmail() {
  const emailValue = emailInput.value.trim();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    setInvalid(emailInput, emailError, 'Email should contain the domain name (with "@")');
    return false;
  } else {
    setValid(emailInput, emailError);
    return true;
  }
}

function validateDate() {
  const dateValue = dateInput.value.trim();

  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateValue)) {
    setInvalid(dateInput, dateError, 'Date must have the format "dd/mm/yyyy"');
    return false;
  } else {
    setValid(dateInput, dateError);
    return true;
  }
}

function validatePhone() {
  const phoneValue = phoneInput.value.trim();

  if (!/^\d{10}$/.test(phoneValue)) {
    setInvalid(phoneInput, phoneError, 'Phone must contain 10 digits');
    return false;
  } else {
    setValid(phoneInput, phoneError);
    return true;
  }
}

function validateMessage() {
  const messageValue = messageInput.value.trim();

  if (messageValue.length < 50) {
    setInvalid(messageInput, messageError, 'Message must be at least 50 characters long');
    return false;
  } else {
    setValid(messageInput, messageError);
    return true;
  }
}

function setInvalid(inputElement, errorElement, message) {
  inputElement.classList.add('invalid');
  errorElement.textContent = message;
}

function setValid(inputElement, errorElement) {
  inputElement.classList.remove('invalid');
  errorElement.textContent = '';
}

function validateForm() {
  let isFirstNameValid = validateFirstName();
  let isLastNameValid = validateLastName();
  let isEmailValid = validateEmail();
  let isDateValid = validateDate();
  let isPhoneValid = validatePhone();
  let isMessageValid = validateMessage();

  return isFirstNameValid && isLastNameValid && isEmailValid && isDateValid && isPhoneValid && isMessageValid;
}
function sendEmail(){
  debugger;
  Email.send({
    Host : "smtp.gmail.com",
    Username : "upkardeeepgill@gmail.com",
    Password : "Satkar@2601996",
    To : "upkardeepgill@gmail.com",
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "Name : "+ document.getElementById("firstName").value + document.getElementById("lastName").value
                    +"<br> Email : " +document.getElementById("Email").value
                    +"<br> Contact Number : " +document.getElementById("contactNumber").value
                    +"<br> Message : " +document.getElementById("Message").value
 }).then(
      message => alert("Message sent successfully")
 );
}

form.addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault();
  }
});