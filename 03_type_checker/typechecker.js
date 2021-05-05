const typesizeTag = document.querySelector(`input[name="typesize"`)
const leadingTag = document.querySelector(`input[name="leading"`)
const italicTag = document.querySelector(`input[type="checkbox"`)
const fontweightTag = document.querySelector(`input[name="font-weight"`)
const typefaceTag = document.querySelector(`select[name="typeface"`)

const typesizeOutput = document.querySelector("span.typesize-output")
const leadingOutput = document.querySelector("span.leading-output")
const fontweightOutput = document.querySelector("span.font-weight-output")

const colorTags = document.querySelectorAll("div.colors div")
const sentenceTag = document.querySelector(`input[type="text"`)
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

fontweightTag.addEventListener("input", function() {
  outputTag.style.fontWeight = this.value
  fontweightOutput.innerHTML = this.value
})

italicTag.addEventListener("change", function() {
  if(this.checked) {
    outputTag.style.fontStyle = "italic"
  } else {
    outputTag.style.fontStyle = "normal"
  }
})

typefaceTag.addEventListener("input", function() {
  outputTag.style.fontFamily = this.value
})

colorTags.forEach(tag => {
  tag.addEventListener("click", function() {
    outputTag.style.color = this.style.color
    outputTag.style.backgroundColor = this.style.backgroundColor

    colorTags.forEach(tag => {
      tag.classList.remove("selected")
    })
    this.classList.add("selected")
  })
})