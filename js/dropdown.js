console.log("dropdown.js loaded");
const fruits = []
fruits.push({"name": "Æble", "style": "fruit"})
fruits.push({"name": "Pære", "style": "fruit"})
fruits.push({"name": "Peanut", "style": "fruit"})
fruits.push({"name": "Appelsin", "style": "fruit"})

console.log(fruits);

const pbFillDropDown = document.getElementById("pbFillDropDown");
const ddFruits = document.getElementById("ddFruits");

function addFruitToDropDown(item) {
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item.name
    ddFruits.appendChild(el)
}

function fillDropDown() {
    fruits.forEach(addFruitToDropDown)
}

pbFillDropDown.addEventListener("click", fillDropDown);

