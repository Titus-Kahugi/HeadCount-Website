let welcomeEl = document.getElementById("welcome-el")
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

let name = "Gashu"
let Greetings = "Welcome back "

welcomeEl.innerText = "🔥" + Greetings + name + "🔥"


function save() {
    let countEntry = count + " - "
    saveEl.textContent += countEntry
    count = 0
    countEl.textContent = count
}










