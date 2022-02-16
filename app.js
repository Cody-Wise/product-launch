// console.log("hello world!");
const form = document.getElementById("contact-form");
console.log(form);

const email = document.getElementById("email")
email.value = "info@example.com";

const thankYouDiv = document.getElementById("thank-you")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("I am submitting the form!");
thankYouDiv.classList.remove("hide");
form.classList.add("hide");

});

const clickMe = document.getElementById("click-me");

const audioTag = document.getElementById("audio");


