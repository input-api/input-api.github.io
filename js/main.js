let menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
        menuItem.classList.toggle('details');
    });
});

document.addEventListener("resize", function() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var backgroundSection = document.querySelector('#bg_image');

    backgroundSection.style.width = windowWidth + 'px';
    backgroundSection.style.height = windowHeight + 'px';
});
  