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










