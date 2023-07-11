const btn = document.getElementById("convert-btn")
let inputValue = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
btn.addEventListener("click", function(){

    // converting meters to feet

   

    lengthEl.textContent = metersAndFeet(inputValue.value)
    volumeEl.textContent = litersAndGallons(inputValue.value)
    massEl.textContent = kilogramsAndPounds(inputValue.value)

    inputValue.value = ""
})

function metersAndFeet(value) {

    let metersTofeet = value * 3.28084
    let feetTometers = value / 3.28084

    return (`${value} meters = ${metersTofeet.toFixed(3)} feet | ${value} feet = ${feetTometers.toFixed(3)} meters`)

}

function litersAndGallons(value) {
    let litersToGallons = value * 0.264
    let gallonsToLiters = value / 0.264

    return (`${value} liters = ${litersToGallons.toFixed(3)} gallons | ${value} gallons = ${gallonsToLiters.toFixed(3)} liters`)
}

function kilogramsAndPounds(value) {
    let kgsToPounds = inputValue.value * 2.20462262
    let poundsToKg = inputValue.value / 2.20462262

    return (`${value} kilograms = ${kgsToPounds.toFixed(3)} pounds | ${value} pounds = ${poundsToKg.toFixed(3)} kilograms`)
}