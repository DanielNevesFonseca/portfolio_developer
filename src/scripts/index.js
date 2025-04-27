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
