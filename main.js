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

window.addEventListener('resize', function() 
{
  if(sideBarVisible())
  {
    webContent.style.marginLeft = webContentList.offsetWidth + 'px';
  }else 
  {
    webContent.style.marginLeft = 0;
  }

  mainContent.style.marginTop = navBar.style.height;
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
    webContent.style.marginLeft = 0;
  }else 
  {
    sideBar.classList.remove('hidden');
    webContent.style.marginLeft = webContentList.offsetWidth + 'px';
  }

}
