/*Code for SIDE MENU*/

const closeButton= document.getElementById('close-button');
const sideMenu= document.getElementsByClassName('side-menu');
const hamburgerIcon= document.getElementById('menu-trigger');
hamburgerIcon.addEventListener("click",function(){
sideMenu[0].classList.add('active');
});
closeButton.addEventListener("click",function(){
sideMenu[0].classList.remove('active');
});

/* code for dropdown*/

let shopDD= document.getElementById('shop-Dropdown');
let blogDD= document.getElementById('blog-Dropdown');
let shop=document.getElementById('menu-2-button');
let blog=document.getElementById('menu-3-button');

const header= document.getElementById('top-nav');
header.addEventListener("mouseleave",function(){
  shopDD.style.display='none';
  blogDD.style.display='none';
 });

function showDropdown(dropdown) {
  shopDD.style.display = 'none';
  blogDD.style.display = 'none';
  dropdown.style.display = 'block';
}

function hideDropdown(dropdown){
  dropdown.style.display='none';
}

shop.addEventListener("mouseover", () => showDropdown(shopDD));
shopDD.addEventListener("mouseover",() => showDropdown(shopDD));
shopDD.addEventListener("mouseleave",() => hideDropdown(shopDD));
blog.addEventListener("mouseover", () => showDropdown(blogDD));
blogDD.addEventListener("mouseover",() => showDropdown(blogDD));
blogDD.addEventListener("mouseleave",() => hideDropdown(blogDD));


// code for workout carousal

const carousel = document.querySelector('.workout-cards-section');
const slides = document.querySelectorAll('.workout-card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = slides.length;
const visibleSlides = 3; // Number of visible slides
const slideWidth = 230; // Width of each slide + margin (100px + 10px)

// Duplicate first and last few slides for smooth infinite loop
for (let i = 0; i < visibleSlides; i++) {
  carousel.appendChild(slides[i].cloneNode(true)); // Clone first 3 slides to the end
  carousel.insertBefore(slides[totalSlides - 1 - i].cloneNode(true), slides[0]); // Clone last 3 slides to the start
}

const allSlides = document.querySelectorAll('.workout-card'); // Update to get all slides, including clones
const totalSlideCount = allSlides.length;

function updateCarouselPosition() {
  carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

// Move to the next set of slides
nextBtn.addEventListener('click', () => {
  currentIndex++;
  
  if (currentIndex >= totalSlideCount - visibleSlides) {
    // Reached the end, jump to the first real slide
    currentIndex = visibleSlides; 
    carousel.style.transition = 'none'; // Disable transition for the jump
    updateCarouselPosition();
    setTimeout(() => {
      carousel.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
      currentIndex++;
      updateCarouselPosition();
    }, 0);
  } else {
    updateCarouselPosition();
  }
});

// Move to the previous set of slides
prevBtn.addEventListener('click', () => {
  currentIndex--;
  
  if (currentIndex < 0) {
    // Reached the beginning, jump to the last real slide
    currentIndex = totalSlideCount - visibleSlides - 1;
    carousel.style.transition = 'none'; // Disable transition for the jump
    updateCarouselPosition();
    setTimeout(() => {
      carousel.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
      currentIndex--;
      updateCarouselPosition();
    }, 0);
  } else {
    updateCarouselPosition();
  }
});


// code for meals carousal

const carousel1 = document.querySelector('.meal-cards-section');
const slides1 = document.querySelectorAll('.meal-card');
const prevBtn1 = document.querySelector('.prevmeal');
const nextBtn1 = document.querySelector('.nextmeal');

let currentIndex1 = 0;
const totalSlides1 = slides.length;
const visibleSlides1 = 3; // Number of visible slides
const slideWidth1 = 230; // Width of each slide + margin (100px + 10px)

// Duplicate first and last few slides for smooth infinite loop
for (let i = 0; i < visibleSlides1; i++) {
  carousel1.appendChild(slides1[i].cloneNode(true)); // Clone first 3 slides to the end
  carousel1.insertBefore(slides1[totalSlides - 1 - i].cloneNode(true), slides1[0]); // Clone last 3 slides to the start
}

const allSlides1 = document.querySelectorAll('.meal-card'); // Update to get all slides, including clones
const totalSlideCount1 = allSlides1.length;

function updateCarouselPosition1() {
  carousel1.style.transform = `translateX(${-currentIndex1 * slideWidth1}px)`;
}

// Move to the next set of slides
nextBtn1.addEventListener('click', () => {
  currentIndex1++;
  
  if (currentIndex1 >= totalSlideCount1 - visibleSlides1) {
    // Reached the end, jump to the first real slide
    currentIndex1 = visibleSlides1; 
    carousel1.style.transition = 'none'; // Disable transition for the jump
    updateCarouselPosition1();
    setTimeout1(() => {
      carousel1.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
      currentIndex1++;
      updateCarouselPosition1();
    }, 0);
  } else {
    updateCarouselPosition1();
  }
});

// Move to the previous set of slides
prevBtn1.addEventListener('click', () => {
  currentIndex1--;
  
  if (currentIndex1 < 0) {
    // Reached the beginning, jump to the last real slide
    currentIndex1 = totalSlideCount1 - visibleSlides1 - 1;
    carousel1.style.transition = 'none'; // Disable transition for the jump
    updateCarouselPosition1();
    setTimeout1(() => {
      carousel1.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
      currentIndex1--;
      updateCarouselPosition1();
    }, 0);
  } else {
    updateCarouselPosition1();
  }
});
