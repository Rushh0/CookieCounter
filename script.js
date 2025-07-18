let num = 0
const displayCount = document.getElementById("count-el")
const saveCount = document.getElementById("save-btn")

function increment() {
    num = num + 1
    displayCount.innerText = num
}

function save() {
    saveCount.innerText = "Save Progress: " + num
    localStorage.setItem("counter", num);
}

function reset() {
    num = 0
    saveCount.innerText = "Save Progress: " + num
    displayCount.innerText = num
    localStorage.setItem("counter", num);
}

function getLocalStorage() {
    if (localStorage.getItem("counter") !== null) {
        num = parseInt(localStorage.getItem("counter"))
        saveCount.innerText = "Save Progress: " + num
        displayCount.innerText = num
    }
}

getLocalStorage();
