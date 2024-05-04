let menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
        menuItem.classList.toggle('details');
    });
});

const mainManuBlock = document.querySelector('#main-menu');
const seasonalManuBlock = document.querySelector('#seasonal-menu');
const controlButton = document.querySelector('#change-menu');
const bg = document.querySelector('#bg_image');


controlButton.addEventListener('click', function(){
    if (seasonalManuBlock.classList.contains('hidden')){
        seasonalManuBlock.classList.remove('hidden');
        controlButton.textContent = "Return to main menu";
        bg.style.backgroundImage = "linear-gradient(to bottom, #808080, #b46f08)";
    } else {
        seasonalManuBlock.classList.add('hidden');
        controlButton.textContent = "Open seasonal menu";
        bg.style.backgroundImage = "linear-gradient(to bottom, #808080, #013220)";
    }
    mainManuBlock.classList.toggle('hidden');
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});