const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar__list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-bar__list").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// let images = document.getElementsByClassName('main-images__image')

// for(image of images) {
//   // image.addEventListener('mouseenter', addContext)
//   if(image.addEventListener("mouseenter", addContext)){
    
//   }else if(image.addEventListener("mouseover", addContext)){
    
//   }
// }


// function addContext(event) {
//   event.target.children[0].style.display = 'block'

// }

// function removeContext(event){
//   event.target.children[0].style.display = 'none'

// }