document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else {
        entry.target.classList.remove("is-visible");
      }
    });
  });

  document.querySelectorAll('#personal-projects .grid-container .grid-section .info-body').forEach(section => {
    observer.observe(section);
  });
});
