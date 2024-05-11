const binaryText = document.querySelector('#binary')
const decimalText = document.querySelector('#decimal')
const update = document.querySelector('#update')

update.addEventListener("click", function() {
  binaryText.textContent = 'Binary:'
  decimalText.textContent = 'Decimal:'
  let binary = prompt('Enter binary value')
  let decimal = 0
  for (var i = 0; i < binary.length; i++) {
    if (binary[i] == '1')
      decimal += (2**(binary.length - i - 1))
    if (binary[i] != '0' && binary[i] != '1') {
      binary = 'Invalid input'
      decimal = 0
      break
    }

  }
  binaryText.textContent += ' ' + binary
  decimalText.textContent += ' ' + decimal
});
