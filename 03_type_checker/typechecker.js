const sentenceTag = document.querySelector(`input[type="text"`)
const typesizeTag = document.querySelector(`input[name="typesize"`)
const leadingTag = document.querySelector(`input[name="leading"`)
const italicTag = document.querySelector(`input[type="checkbox"`)

const typesizeOutput = document.querySelector("span.typesize-output")
const leadingOutput = document.querySelector("span.leading-output")

const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value

sentenceTag.addEventListener("keyup", function() {
  if(this.value) {
    outputTag.value = this.value
  } else {
    outputTag.value= originalText
  }
})

outputTag.addEventListener("keyup", function() {
  if(this.value) {
    sentenceTag.value = this.value
  } else {
    sentenceTag.value= originalText
  }
})

typesizeTag.addEventListener("input", function() {
  outputTag.style.fontSize = `${this.value}px`
  typesizeOutput.innerHTML = `${this.value}px`
})

leadingTag.addEventListener("input", function() {
  outputTag.style.lineHeight = this.value
  leadingOutput.innerHTML = this.value
})

italicTag.addEventListener("change", function() {
  if(this.checked) {
    outputTag.style.fontStyle = "italic"
  } else {
    outputTag.style.fontStyle = "normal"
  }
})