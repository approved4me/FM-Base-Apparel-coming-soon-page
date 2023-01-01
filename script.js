const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", (e) => {
    if (email.value === "" || email.value == null || !(email.value.match(pattern))) {
        e.preventDefault();
        errorElement.innerText = ("Please provide a valid email");
    }
    else {
        e.preventDefault();
        email.value = ("");
        errorElement.innerText = ("Thanks for your subscription!");
    }

});