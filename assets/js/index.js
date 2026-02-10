window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("click", function (event) {
  const navbar = document.getElementById("navbarNav");
  const toggler = document.querySelector(".navbar-toggler");

  // agar navbar open hai
  if (navbar.classList.contains("show")) {
    // click navbar ke andar nahi hua + toggler par bhi nahi
    if (!navbar.contains(event.target) && !toggler.contains(event.target)) {
      toggler.click(); // navbar close
    }
  }
});

window.addEventListener("scroll", function () {
  const floatingBtn = document.querySelector(".floating-btn");

  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  // kitna page bacha hai niche
  const remainingScroll = docHeight - (scrollTop + windowHeight);

  if (remainingScroll <= 100) {
    // footer ke paas → hide
    floatingBtn.classList.add("hide");
  } else {
    // footer se door → show
    floatingBtn.classList.remove("hide");
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
