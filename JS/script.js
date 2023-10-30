// scroll to top button
const topButton = document.getElementById("scroll-button");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

//When user clicks button, scroll to top of page
function topFunction() {
  document.body.scrollTop = 0; //For Safari
  document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
}

// nav menu
const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".full-screen-nav");
const backdrop = document.querySelector(".backdrop");

toggle.addEventListener("click", () => nav.classList.add("open-nav"));
backdrop.addEventListener("click", () => nav.classList.remove("open-nav"));

function closeNav() {
  nav.classList.remove("open-nav");
}

// contact form - clear text upon submission
const btn = document.querySelector(".btn");
const messageForm = document.getElementById("message");

btn.addEventListener("click", setTimeout);

setTimeout(resetForm, 1000);

console.log(messageForm.value);

function resetForm() {
  messageForm.value = "";
}
