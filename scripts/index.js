let navbarButton = document.querySelector('.navabar_toggler');
let navbarCollapse = document.querySelector('.navbar_collapse');
let loadMoreButton = document.querySelector('.testimonial .container .load_more button');

navbarButton.addEventListener('click', function() {
    navbarCollapse.classList.toggle('showNav');
    navbarButton.classList.toggle('show');
});

loadMoreButton.addEventListener('click', function() {
    loadMoreButton.classList.toggle('active');
});