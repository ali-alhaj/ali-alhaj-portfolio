document.addEventListener("DOMContentLoaded", function () {

  // Smooth scroll for valid anchor links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = this.getAttribute('href');

      if (target && target.startsWith("#") && target.length > 1) {
        const section = document.querySelector(target);

        if (section) {
          e.preventDefault();
          section.scrollIntoView({
            behavior: "smooth"
          });

          // Close mobile menu after click
          navLinks.classList.remove("active");
        }
      }
    });
  });

  // Hamburger menu toggle
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

});