const animatedTags = document.querySelectorAll("h2, h3, p, section img, a.button")

animatedTags.forEach(tag => {
  tag.style.opacity = 0;
})

const fadeIn = () => {

  let delay = 0.25

  animatedTags.forEach((tag) => {
    const top = tag.getBoundingClientRect().top
    const bottom = tag.getBoundingClientRect().bottom   
    
    if (top < window.innerHeight && bottom > 0) {
      tag.style.animation = `fade 1s ${delay}s both`
      delay += 0.25
    } else {
      tag.style.opacity = 0;
      tag.style.animation = ""
    }

  })
}

fadeIn()

document.addEventListener("scroll", () => {
  fadeIn()
})

window.addEventListener("resize", () => {
  fadeIn()
})