const toggleButtons = document.querySelectorAll('[data-nav-toggle]');

const navbar = document.querySelector('[data-nav-bar]'); 

const openButton = document.querySelector('#nav-open-btn');

toggleButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        navbar.classList.toggle('hidden');
    
        openButton.classList.toggle('hidden');
    });
});