window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const successMessage = document.getElementById("successMessage");
  successMessage.classList.add("show");

  // Reset form
  this.reset();

  // Hide message after 5 seconds
  setTimeout(() => {
    successMessage.classList.remove("show");
  }, 5000);
});
