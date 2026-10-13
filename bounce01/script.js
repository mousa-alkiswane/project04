

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    // Toggle the dark-theme class on the body
    document.body.classList.toggle("dark-theme");

    // Update the button text
    const isDarkTheme =
        document.body.classList.contains("dark-theme");

    if (isDarkTheme) {
        themeButton.textContent = "Light Theme";
    } else {
        themeButton.textContent = "Dark Theme";
    }
});


/* =========================
   2. Profile Photo Switcher
========================= */

const profilePhoto = document.getElementById("profilePhoto");
const changePhotoBtn = document.getElementById("changePhotoBtn");

const photos = [
    {
        src: "assets/profile.jpg",
        alt: "Musa Alkiswane casual profile photo"
    },
    {
        src: "assets/professional.jpg",
        alt: "Musa Alkiswane professional profile photo"
    }
];

let currentPhoto = 0;

changePhotoBtn.addEventListener("click", function () {
    // Move to the next photo
    currentPhoto = (currentPhoto + 1) % photos.length;

    // Start fade-out transition
    profilePhoto.style.opacity = "0";

    // Change the image after fade-out
    setTimeout(function () {
        profilePhoto.src = photos[currentPhoto].src;
        profilePhoto.alt = photos[currentPhoto].alt;

        // Fade the new image in
        profilePhoto.style.opacity = "1";
    }, 250);
});


/* =========================
   3. Contact Form
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    // Prevent the page from reloading
    event.preventDefault();

    // Show a confirmation message
    formMessage.textContent =
        "Thank you! Your message was entered successfully.";

    // Clear the form fields
    contactForm.reset();
});
