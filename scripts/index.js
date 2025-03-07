let navbarButton = document.querySelector(".navabar_toggler");
let navbarCollapse = document.querySelector(".navbar_collapse");
const testimonialContainer = document.querySelector(".testimonial_container");
const loadmorebtn = document.querySelector(".load_more");
const loadmorebtnInner = document.querySelector(".loadmorebtnInner");
let reviews = [
  {
    id: 1,
    review: "5",
    text: "Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.",
    image: "./assets/testimonial/avatar1.png",
    author: "X_AE_A-13",
    author_title: "Product Designer, slothUI",
  },
  {
    id: 2,
    review: "3.5",
    text: "Posuere urna nec tincidunt praesent semper feugiat nibh sed. Velit dignissim sodales ut eu.",
    image: "./assets/testimonial/avatar2.png",
    author: "Azunyan U. Wu",
    author_title: "CEO, nextlife.ai",
  },
  {
    id: 3,
    review: "4",
    text: "Sit amet est placerat in. Blandit cursus risus at ultrices mi tempus imperdiet. Volutpat commodo sed egestas egestas fringilla phasellus. Tincidunt eget nullam non nisi. ",
    image: "./assets/testimonial/avatar3.png",
    author: "Mechatronics Yi",
    author_title: "CTO, fin4win.ai",
  },
  {
    id: 4,
    review: "3.5",
    text: "Nisi porta lorem mollis aliquam ut porttitor leo. Sed odio morbi quis commodo. Arcu non odio euismod lacinia at quis. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae.",
    image: "./assets/testimonial/avatar4.png",
    author: "Oarack Babama",
    author_title: "Former President of US",
  },
];

navbarButton.addEventListener("click", function () {
  navbarCollapse.classList.toggle("showNav");
  navbarButton.classList.toggle("show");
});

let currentpage = 0;
let itemperpage = 3;
let lodemore = () => {
  let displayperdata = reviews.slice(currentpage, currentpage + itemperpage);
  displayperdata.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
     <div class="testimonial_inner flex flex-col">
    <div class="review_box">
              <div class="icons flex items-center">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <p class="review_text">
              ${item.text}
              </p>
              <div class="flex avatar_details items-center">
                <img src=${item.image} alt="" />
                <div class="avatar_info">
                  <h3>${item.author}</h3>
                  <p>${item.author_title}</p>
                </div>
              </div>
            </div>
            </div>
`;

    testimonialContainer.appendChild(div);
  });
  currentpage += itemperpage;

  if (currentpage >= reviews.length) {
    loadmorebtnInner.textContent = "Load Less";
  }
};

let loadless = () => {
  currentpage = 0;
  testimonialContainer.innerHTML = "";
  loadmorebtnInner.textContent = "Load More";
};
loadmorebtn.addEventListener("click", () => {
  if (currentpage >= reviews.length) {
    loadless();
  } else {
    lodemore();
  }
});
