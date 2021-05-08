const pixelTag = document.querySelector(".pixels")
const headerTag = document.querySelector("header")
const pageTag = document.querySelector(".page")
const clientTag = document.querySelector(".client")
const progressTag = document.querySelector(".progress")
const sections = document.querySelectorAll("section")

document.addEventListener("scroll", function() {
  const pixels = Math.floor(window.pageYOffset)
  pixelTag.innerHTML = pixels
})

document.addEventListener("scroll", function() {
  const pixels = Math.floor(window.pageYOffset)
  // const bodyHeight = document.documentElement.scrollHeight
  const bodyHeight = document.querySelector("body").getBoundingClientRect().height
  const windowHeight = window.innerHeight;
  const percentage = pixels / (bodyHeight - windowHeight) * 100
  progressTag.style.width = `${percentage}%`
})

document.addEventListener("scroll", function() {
  const pixels = Math.ceil(window.pageYOffset)

  sections.forEach(section => {

    if(pixels >= section.offsetTop - 50) {
      pageTag.innerHTML = section.getAttribute("data-page")
      clientTag.innerHTML = section.getAttribute("data-client")

      if (section.hasAttribute("data-dark")) {
        headerTag.classList.add("white")
        progressTag.classList.add("white")
      } else {
        headerTag.classList.remove("white")
        progressTag.classList.remove("white")
      }
    }
  })
})

document.addEventListener("scroll", function() {
  const topViewport = window.pageYOffset
  const midViewport = topViewport + window.innerHeight / 2
  
  sections.forEach(section => {
    const topSection = section.offsetTop
    const midSection = topSection + section.offsetHeight / 2
    const distanceToSection = midSection - midViewport
    const parallaxTags = section.querySelectorAll(`[data-parallax]`)

    parallaxTags.forEach(tag => {
      const speed = parseFloat(tag.getAttribute("data-parallax"))
      tag.style.transform = `translate(0, ${-distanceToSection * speed}px)`
    })
  })
})