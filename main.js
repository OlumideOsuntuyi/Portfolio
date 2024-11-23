const navBar = document.getElementById('nav-bar');
const mainContent = document.getElementById("main-content");
const sideBar = document.getElementsByClassName('web-content-list')[0];
const webContentList = mainContent.children[0].children[0];
const webContent = mainContent.children[1];

mainContent.style.marginTop = navBar.style.height;

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

  var items = ['#personal-projects .grid-container .grid-section .info-body', '.skill-list', '.skill-level'];
  items.forEach((name, index, array) => {

    document.querySelectorAll(name).forEach(section => {
      observer.observe(section);
    });
  });

});

function sideBarVisible()
{
  return !sideBar.classList.contains('hidden')
}

function toggleSideBar()
{
  if(sideBarVisible())
  {
    sideBar.classList.add('hidden');
  }else 
  {
    sideBar.classList.remove('hidden');
  }

}

function adjustGridContainerHeight() {
  const gridSection = document.querySelector('.grid-section');
  const gridContainer = document.querySelector('.grid-container');

  if (gridSection && gridContainer) {
      const sectionHeight = gridSection.offsetHeight;
      gridContainer.style.height = `${sectionHeight + 10}px`;
  }
}

window.addEventListener('resize', adjustGridContainerHeight);
adjustGridContainerHeight();

