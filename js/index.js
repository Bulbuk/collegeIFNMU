let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let menu = document.getElementById("navigation");

let a = 1;

let burgerMenu = document.getElementById("burgerMenu");
burgerMenu.addEventListener("click", appearBurgerMenu);

let burgerImg = document.getElementById("burger_img");

function appearBurgerMenu(){
    a++;
    if(a %2 === 0){
      menu.style.cssText=`
      display: grid;
      `;
      burgerMenu.src="img/cross.png";
    }else{
      menu.style.cssText=`
      display: none;
      `;
      burgerMenu.src="img/Vector (1).png";
    }

    
}