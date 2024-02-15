const mobileMenu = () => {
  let navMain = document.querySelector(".main-nav");
  let navToggle = document.querySelector(".main-nav__toggle");

  navMain.classList.remove("main-nav--nojs");

  navToggle.addEventListener("click", function () {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
    }
  });
};

mobileMenu();

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const sliderList = document.querySelector(".slider__list");
  const slides = document.querySelectorAll(".slider__item");
  const prevButton = document.querySelector(".slider__arrow--left");
  const nextButton = document.querySelector(".slider__arrow--right");
  const paginationItems = document.querySelectorAll(".slider-pagination-item");

  let currentIndex = 0;

  function goToSlide(index) {
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }

    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });

    paginationItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    currentIndex = index;
  }

  prevButton.addEventListener("click", () => {
    goToSlide(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    goToSlide(currentIndex + 1);
  });

  
  paginationItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      goToSlide(index);
    });
  });

  goToSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
  const paginationButtons = document.querySelectorAll(".slider__bullet");
  const slidesWhite = document.querySelectorAll(".slider__item--white");
  const slidesViolet = document.querySelectorAll(".slider__item--violet");
  const slidesBlack = document.querySelectorAll(".slider__item--black");

  slidesWhite[0].style.display = "block";
  paginationButtons[0].classList.add("active");

  paginationButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      paginationButtons.forEach((otherButton) => {
        otherButton.classList.remove("active");
      });

      const targetSlideClass = button.getAttribute("data-target");

      slidesWhite.forEach((slide) => {
        slide.style.display = "none";
      });
      slidesViolet.forEach((slide) => {
        slide.style.display = "none";
      });
      slidesBlack.forEach((slide) => {
        slide.style.display = "none";
      });

      if (targetSlideClass === "white") {
        slidesWhite[0].style.display = "block";
      } else if (targetSlideClass === "violet") {
        slidesViolet[0].style.display = "block";
      } else if (targetSlideClass === "black") {
        slidesBlack[0].style.display = "block";
      }

      button.classList.add("active");
    });
  });
});
