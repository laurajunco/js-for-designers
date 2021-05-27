const headerTag = document.querySelector("header");

const toggleHeader = () => {
  const px = window.pageYOffset;
  if(px > 64) {
    headerTag.classList.add("scroll")
  } else {
    headerTag.classList.remove("scroll")
  }
}

const fadeBox = () => {
  const px = window.pageYOffset;
  const alpha = Math.min(px / 1000, 0.4)
  headerTag.style.boxShadow = `0 0 10px rgba(0,0,0,${alpha})`
}

//run on load
fadeBox();
toggleHeader(); 

//run on scroll
document.addEventListener('scroll', () => {
  toggleHeader();
  fadeBox();
})