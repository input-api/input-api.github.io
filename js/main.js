let menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
        menuItem.classList.toggle('details');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
  
    var backgroundImageUrl = "source/img/bg_forest.jpg"; 
    var backgroundSection = document.querySelector('#menu-body');
    backgroundSection.style.backgroundImage = "url('" + backgroundImageUrl + "')";
    backgroundSection.style.width = windowWidth + 'px';
    backgroundSection.style.height = windowHeight + 'px';
    backgroundSection.style.backgroundSize = "cover";
    backgroundSection.style.backgroundRepeat = "no-repeat"; 
    backgroundSection.style.backgroundAttachment = "fixed"; 
  });
  