const nextTag = document.querySelector("footer img.next")
const randomTag = document.querySelector("footer img.random")
const prevTag = document.querySelector("footer img.prev")
const outputTag = document.querySelector("h2")

let pageNumber = 0;

nextTag.addEventListener("click", function() {
  pageNumber++;
  outputTag.innerHTML = pageNumber
})


// tag.innerHTML = "hey"
// tag.style.color = "red"