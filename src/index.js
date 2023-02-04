//grab everything we need
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// add event listeners
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

let i = 0;
let texts = ["freelance"];
let speed = 100;
let index = 0;

function typeWriter() {
  if (i < texts[index].length) {
    document.querySelector(".animated-typing span:nth-child(1)").innerHTML = texts[index].substring(0, i + 1) + "<span class='typed-cursor'>|</span>";
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(erase, speed);
  }
}

function erase() {
  if (i > 0) {
    document.querySelector(".animated-typing span:nth-child(1)").innerHTML = texts[index].substring(0, i - 1) + "<span class='typed-cursor'>|</span>";
    i--;
    setTimeout(erase, speed);
  } else {
    index++;
    if (index >= texts.length) {
      index = 0;
    }
    setTimeout(typeWriter, speed);
  }
}

typeWriter();




//short intro
const fullIntro = document.querySelector('#fullIntro')
const fullabout = document.querySelector('#fullAbout')
const shortabout = document.querySelector('#shortabout')

fullIntro.addEventListener('click', (e) => {
  fullabout.style.display = 'flex'
  shortabout.style.display = 'none'
  fullIntro.style.display = 'none'

})

const shortIntro = document.querySelector('#shortIntro')

shortIntro.addEventListener('click', (e) => {
  fullabout.style.display = 'none'
  shortabout.style.display = 'flex'
  fullIntro.style.display = 'block'
})

