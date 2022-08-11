// select all the element

// select all the feedback element
const feedbacks = document.querySelectorAll(".feedback");
// select the container that wrap all the feedback
const feedbacksContainer = document.querySelector(".feedbacks-container");
// select the portfolio section
const portfolio = document.querySelector(".portfolio");
// select the heading element in the portfolio section
const portfolioh2 = document.querySelector(".portfolio h2");
// select the container that contains the container wrapping all the feedback(i.e the container which is being animated)
const imgContainer = document.querySelector(".portfolio .container");
// select the container that contains all the images in the portfolio section
const imgCont = document.querySelector(".portfolio .img-container");
// select the div that comes right after the portfolio text
const firstImage = document.querySelector(
  ".portfolio .img-container div:nth-child(3)"
);
// select the element that toggles the navbar in tab and mobile mode
const toggle = document.querySelector(".toggle-nav");
// select the nav
const nav = document.querySelector("header nav");
// initialize conunt and feedback
let count = 0;
let feedback;

function portfolioFunc(value) {
  imgCont.style.left = `calc(-${value} * (80% + 2rem))`;
}

function prev(value) {
  count = count + value;
  if (count < 0) {
    count = 3;
    feedbacksContainer.style.left = `-${count * 100}%`;
  } else if (count > 3) {
    count = 0;
    feedbacksContainer.style.left = `-${count * 100}%`;
  } else {
    feedbacksContainer.style.left = `-${count * 100}%`;
  }
}

function rearrange() {
  const innerWidth = window.innerWidth;
  if (innerWidth <= 768) {
    portfolioh2.remove();
    portfolio.insertBefore(portfolioh2, imgContainer);
    feedbacksContainer.style.left = "0%";
    feedback = (value) => {
      count = value;
      feedbacksContainer.style.left = `calc(-${value} * (60% + 3rem)`;
    };
  } else {
    portfolioh2.remove();
    imgCont.insertBefore(portfolioh2, firstImage);
    feedbacksContainer.style.left = "0%";
    feedback = (value) => {
      count = value;
      feedbacksContainer.style.left = `-${value * 100}%`;
    };
  }
}

function toggler() {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
    this.classList.remove("cross");
  } else {
    nav.classList.add("show");
    this.classList.add("cross");
  }
}

window.addEventListener("resize", rearrange);
window.addEventListener("load", rearrange);
toggle.addEventListener("click", toggler);
