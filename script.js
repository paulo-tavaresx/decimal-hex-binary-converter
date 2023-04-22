const binaryInput = document.querySelector('#binary')
const decimalInput = document.querySelector('#decimal')
const hexInput = document.querySelector('#hex')

const alertText = document.querySelector('.alertText')

binaryInput.addEventListener('change', binaryInputChange)
decimalInput.addEventListener('change', decimalInputChange)
hexInput.addEventListener('change', hexInputChange)

function binaryInputChange() {
  if (binaryInput.value.match('^[0-1]+$')) {
    decimalInput.value = binaryToDecimal(binaryInput.value)
    hexInput.value = binaryToDecimal(binaryInput.value).toString(16)
  } else {
    alertText.innerHTML = 'Número binario inválido!'
    setTimeout(() => {
      alertText.innerHTML = ''
    }, 3000)
  }
}

function decimalInputChange() {
  if (decimalInput.value.match('^[0-9]+$')) {
    const decimalValue = +decimalInput.value
    binaryInput.value = decimalValue.toString(2)
    hexInput.value = decimalValue.toString(16)
  } else {
    alertText.innerHTML = 'Número decimal inválido!'
    setTimeout(() => {
      alertText.innerHTML = ''
    }, 3000)
  }
}
function hexInputChange() {
  if (hexInput.value.match('^[0-9a-fA-F]+$')) {
    const hexInDecimal = hexToDecimal(hexInput.value)
    decimalInput.value = hexInDecimal
    binaryInput.value = hexInDecimal.toString(2)
  } else {
    alertText.innerHTML = 'Número hex inválido!'
    setTimeout(() => {
      alertText.innerHTML = ''
    }, 3000)
  }
}

function binaryToDecimal(binary) {
  let decimal = 0
  let binaryLength = binary.length - 1
  for (let i = binaryLength; i >= 0; i--) {
    if (binary[i] === '1') {
      decimal += Math.pow(2, binaryLength - i)
    }
  }
  return decimal
}

const hexDigits = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
]
function hexToDecimal(hex) {
  let decimal = 0
  let hexLength = hex.length - 1
  for (let i = hexLength; i >= 0; i--) {
    const digitInLower = hex[i].toLowerCase()
    const digitValue = hexDigits.indexOf(digitInLower)
    decimal += digitValue * Math.pow(16, hexLength - i)
  }
  return decimal
}
