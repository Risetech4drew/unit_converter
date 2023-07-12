const btn = document.getElementById("convert-btn")
let inputValue = document.getElementById("input-el")
let inputFieldEl = document.querySelector(".input-area")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let warningTextEl = document.getElementById("warning-text-el")
let conversionTextEl = document.querySelectorAll(".conversion-results")

btn.addEventListener("click", function(){

    if (inputValue.value){

        lengthEl.textContent = metersAndFeet(inputValue.value)
        volumeEl.textContent = litersAndGallons(inputValue.value)
        massEl.textContent = kilogramsAndPounds(inputValue.value)

        warningTextEl.textContent = ""
        inputFieldEl.classList.remove("redborder")
        removeMultpleRedText()

        

    }
    else{
        renderWarning()
    }

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

function renderWarning(){

        inputFieldEl.classList.add("redborder")    
        warningTextEl.textContent = "Invalid input!"
        renderMultpleRedText()
        lengthEl.textContent = "Enter a value in the input field to get conversions"
        volumeEl.textContent = "Enter a value in the input field to get conversions"
        massEl.textContent = "Enter a value in the input field to get conversions"
    
}

function renderMultpleRedText(){
    for (let i = 0; i < conversionTextEl.length; i++){
        conversionTextEl[i].classList.add("redtext")
    }
}

function removeMultpleRedText() {
    for (let i = 0; i < conversionTextEl.length; i++){
        conversionTextEl[i].classList.remove("redtext")
    }
}