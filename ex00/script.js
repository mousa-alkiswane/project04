
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "Light Theme";
    } else {
        themeButton.textContent = "Dark Theme";
    }
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your message was entered successfully.";

    contactForm.reset();
});
