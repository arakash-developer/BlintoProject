let navbarButton = document.querySelector('.navabar_toggler');
let navbarCollapse = document.querySelector('.navbar_collapse');


navbarButton.addEventListener('click', function() {
    navbarCollapse.classList.toggle('showNav');
    navbarButton.classList.toggle('show');
});