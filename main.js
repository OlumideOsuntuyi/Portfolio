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

function toggleSideBar()
{
  console.log('toggle');
  const sideBar = document.getElementsByClassName('web-content-list')[0];
  if(!sideBar.classList.contains('hidden'))
  {
    sideBar.classList.add('hidden');
  }else {sideBar.classList.remove('hidden')};
}

const navBar = document.getElementById('nav-bar');
const mainContent = document.getElementById('main-content');

console.log(navBar);

//mainContent.style.marginTop = navBar.style.height;
