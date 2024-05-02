let menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
        menuItem.classList.toggle('details');
    });
});

const mainManuBlock = document.querySelector('#main-menu');
const seasonalManuBlock = document.querySelector('#seasonal-menu');
const controlButton = document.querySelector('#change-menu');

controlButton.addEventListener('click', function(){
    if (seasonalManuBlock.classList.contains('hidden')){
        seasonalManuBlock.classList.remove('hidden');
    } else {
        seasonalManuBlock.classList.add('hidden');
    }
    mainManuBlock.classList.toggle('hidden');
});