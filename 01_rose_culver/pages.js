const nextTag = document.querySelector("footer img.next")
const randomTag = document.querySelector("footer img.random")
const prevTag = document.querySelector("footer img.prev")
const outputTag = document.querySelector("h2")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")
let pageNumber = 0;
const pages = [
  {
    copy: "a Brooklyn-based graphic designer",
    bg:"#edc7a9",
    circle:"#3e78ed"
  },
  {
    copy: "Kanye West's biggest fan",
    bg:"#a1fffe",
    circle:"#e34a47"
  },
  {
    copy: "looking for a job at the start of October",
    bg:"#d3c7f3",
    circle:"#f7fe00"
  },
  {
    copy: "letting you <a href='pdf.pdf'>download her PDF</a>",
    bg:"#faffb8",
    circle:"#b472e6"
  }  
]


const next = function() {
  pageNumber++;

  if(pageNumber >= pages.length) {
    pageNumber = 0;
  }

  updateSection();
}

const prev = function() {
  pageNumber--;

  if(pageNumber <= 0) {
    pageNumber = pages.length -1;
  }

  updateSection();
}
const random = function() {
  pageNumber = Math.floor(Math.random() * pages.length)
  updateSection();
}

const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.backgroundColor = pages[pageNumber].bg;
}

nextTag.addEventListener("click", function() {
  next();
})

randomTag.addEventListener("click", function() {
  random();
})

prevTag.addEventListener("click", function() {
  prev();
})

document.addEventListener("keyup", function(event) {
  if(event.key === "ArrowRight") {
    next()
  } else if (event.key === "ArrowLeft"){
    prev()
  }
})