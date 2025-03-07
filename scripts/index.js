let navbarButton = document.querySelector(".navabar_toggler");
let navbarCollapse = document.querySelector(".navbar_collapse");
let loadMoreButton = document.querySelector(
  ".testimonial .container .load_more button"
);
let testimonial_inner = document.querySelector(
  ".testimonial .container .testimonial_grid .testimonial_inner"
);

navbarButton.addEventListener("click", function () {
  navbarCollapse.classList.toggle("showNav");
  navbarButton.classList.toggle("show");
});

loadMoreButton.addEventListener("click", function () {
  testimonial_inner.classList.add("active");
});
