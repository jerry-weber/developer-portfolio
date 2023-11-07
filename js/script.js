// Scroll to Top Button
const topButton = document.getElementById("scroll-button");

topButton.addEventListener("click", scrollToTop);

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  const shouldDisplayButton = window.pageYOffset > 50;

  if (shouldDisplayButton) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


// Nav Menu
const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".full-screen-nav");
const backdrop = document.querySelector(".backdrop");

toggle.addEventListener("click", () => nav.classList.add("open-nav"));
backdrop.addEventListener("click", () => nav.classList.remove("open-nav"));

function closeNav() {
  nav.classList.remove("open-nav");
}

// Contact Form - Clear Text upon Submission
const btn = document.querySelector(".btn");
const messageForm = document.getElementById("message");

btn.addEventListener("click", function () {
  setTimeout(resetForm, 1000);
});

function resetForm() {
  messageForm.value = "";
}
