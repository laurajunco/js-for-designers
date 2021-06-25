const irisLeft = document.querySelector("div.iris-left")
const irisRight = document.querySelector("div.iris-right")
let interval = null

//move the eyes every three seconds
const startInterval = () => {
  clearInterval(interval) // stop if its already running
  interval = setInterval(() => {
    const x = Math.random() * window.innerWidth
    const y = Math.random() * window.innerHeight
    moveEye(irisLeft, x, y)
    moveEye(irisRight, x, y)
  }, 3000)
}

const moveEye = (tag, mouseX, mouseY) => {
  //center of the eye
  const eyeMidX = tag.getBoundingClientRect().left
  const eyeMidY = tag.getBoundingClientRect().top
  
  //difference between eye and mouse
  const diffX = mouseX - eyeMidX
  const diffY = mouseY - eyeMidY - window.pageYOffset
  const angle = Math.atan2(diffY, diffX)
  
  //get mapped version of distance based on angle
  const diff = Math.sqrt(diffX*diffX + diffY*diffY)
  const radius = Math.min (3,diff)
  const mappedX = radius * Math.cos(angle)
  const mappedY = radius * Math.sin(angle)

  //get div inside iris
  const eyeTag = tag.querySelector("div")

  eyeTag.style.left = `${ mappedX }px`
  eyeTag.style.top = `${ mappedY }px`
}

startInterval()

document.addEventListener('mousemove', (event) => {
  startInterval() //start interval when mouse stops moving
  moveEye(irisLeft, event.pageX, event.pageY)
  moveEye(irisRight, event.pageX, event.pageY)
})