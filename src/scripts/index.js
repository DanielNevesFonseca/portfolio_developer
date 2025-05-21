function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";

  if (mobileMenu.style.display === "flex") {
    document.addEventListener("click", closeMenuOnClickOutside);
  } else {
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

function closeMenuOnClickOutside(event) {
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.querySelector(".hamburger");

  if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
    mobileMenu.style.display = "none";
    document.removeEventListener("click", closeMenuOnClickOutside);
  }
}

// Emailjs configuration
function handleFormSubmission() {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_v05axca";
    const templateID = "template_tjc0l5f";

    emailjs.sendForm(serviceID, templateID, this).then(
      (response) => {
        alert("Message sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
        this.reset();
      },
      (error) => {
        alert("Failed to send the message. Please try again.");
        console.log("FAILED...", error);
      }
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  handleFormSubmission();
});
