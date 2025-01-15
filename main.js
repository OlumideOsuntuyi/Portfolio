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

var plCounters = null;
var plElementsArray = null;
var plIndex = 0;
var plInterval = 1000 * 2;
 
function toggleClass() 
{ 
  // Get all elements with the class 'pl-a' that share the same parent
  // Add 'pl-h' to the current element while removing from others
  // Loop index 
  var parent = plElementsArray[0].parentNode; 
  var siblings = Array.from(parent.querySelectorAll('.pl-a'));
  siblings.forEach(function(element) 
  { 
    if(!element.classList.contains('pl-h'))
    {
      element.classList.add('pl-h'); 
    }
  }); 

  siblings[plIndex].classList.remove('pl-h'); 
  setPLCounters();
  plIndex = (plIndex + 1) % siblings.length;
}

function setPLCounters()
{
  plCounters.forEach(function(element)
  {
    element.textContent = `Project ${plIndex + 1} of ${plElementsArray.length}`;
  });
}

document.addEventListener("DOMContentLoaded", function() { 
  // stores all elements of class pl-a
  var elements = document.querySelectorAll('.pl-a'); 
  plElementsArray = Array.from(elements);

  
  var elements2 = document.querySelectorAll('.pl-counter'); 
  plCounters = Array.from(elements2);
  toggleClass();
});


