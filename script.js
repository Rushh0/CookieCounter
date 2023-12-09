let num = 0

let displayCount = document.getElementById("count-el")
let saveCount = document.getElementById("save-btn")

function increment() {

    num = num + 1

    displayCount.innerText = num
    
}

function save() {
    saveCount.innerText = "Save Number: " + num 
}