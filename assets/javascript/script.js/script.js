// ---------- Contact Form Validation ----------

const contactForm = document.querySelector("#contact-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

const formSuccess = document.querySelector("#form-success");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let formIsValid = true;


    // Check name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        nameInput.setAttribute("aria-invalid", "true");
        formIsValid = false;
    }


    // Check email
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Please enter your email.";
        emailInput.setAttribute("aria-invalid", "true");
        formIsValid = false;
    }


    // Check message
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        messageInput.setAttribute("aria-invalid", "true");
        formIsValid = false;
    }


    // If everything is filled out
    if (formIsValid === true) {
        formSuccess.textContent =
            "Thank you! Your form was completed successfully.";

        contactForm.reset();
    }

});

// ---------- Clear Errors ----------

nameInput.addEventListener("input", function () {

    if (nameInput.value.trim() !== "") {
        nameError.textContent = "";
        nameInput.removeAttribute("aria-invalid");
    }

});


emailInput.addEventListener("input", function () {

    if (emailInput.value.trim() !== "") {
        emailError.textContent = "";
        emailInput.removeAttribute("aria-invalid");
    }

});


messageInput.addEventListener("input", function () {

    if (messageInput.value.trim() !== "") {
        messageError.textContent = "";
        messageInput.removeAttribute("aria-invalid");
    }

});