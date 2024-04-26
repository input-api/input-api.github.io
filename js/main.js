let menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
        menuItem.classList.toggle('details');
    });
});