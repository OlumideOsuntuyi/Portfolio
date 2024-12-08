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

  var items = ['check-visible'];
  items.forEach((name, index, array) => {

    document.querySelectorAll('.' + name).forEach(section => {
      observer.observe(section);
    });
  });

});

