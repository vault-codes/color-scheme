

const colorScheme = document.getElementById('get-scheme-btn')


colorScheme.addEventListener('click', function (e) {
  e.preventDefault()
  console.log('i was clicked')
  getColorScheme()

})

let colorsArray = []

function getColorScheme() {
  const color = document.getElementById('color-choice').value

  const cleanColor = color.replace("#", '')

  const mode = document.getElementById('colors-mode').value

  const url =
    `https://www.thecolorapi.com/scheme?hex=${cleanColor}&mode=${mode}&count=5`



  fetch(url, {
    method: "GET"
  })
    .then(response => response.json())
    .then(data => {
      colorsArray = data.colors
      console.log(colorsArray)
      colorsArray.forEach(function (color, index) {
        document.getElementById(`box${index + 1}`).style.backgroundColor = color.hex.value
        document.getElementById(`value-text${index + 1}`).textContent = color.hex.value
      })


      })
}
