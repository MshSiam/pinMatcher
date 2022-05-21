function getPin() {
  const pin = Math.round(Math.random() * 1000000)
  pinstring = pin + ""
  if (pinstring.length === 6) {
    return pin
  } else {
    return getPin()
  }
}

function generatePin() {
  const pin = getPin()
  console.log(pin)
  document.getElementById("displayPin").value = pin
}

document.getElementById("keyPad").addEventListener("click", function (event) {
  const number = event.target.innerText
  const calc = document.getElementById("displayNumber")
  if (isNaN(number)) {
    if (number == "C") {
      calc.value = ""
      document.getElementById("fail").style.display = "none"
      document.getElementById("success").style.display = "none"
    }
    console.log(number)
  } else {
    const preCalc = calc.value
    calc.value = preCalc + number
  }
})

function varifyPin() {
  // console.log("varified")
  const pin = document.getElementById("displayPin").value
  const typedNumbers = document.getElementById("displayNumber").value

  if (pin == typedNumbers) {
    document.getElementById("success").style.display = "block"
  } else {
    document.getElementById("fail").style.display = "block"
  }
}
