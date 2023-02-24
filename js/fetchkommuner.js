console.log("vi er i fetchkommuner")
const urlKommuner = "https://api.dataforsyningen.dk/kommuner"

function fetchKommuner(url) {
    console.log(url)
    return fetch(url).then(response => response.json())
    // console.log("4. Json er hentet")
}

const ddKommuner = document.getElementById("ddKommuner")

function fillKommuneDropDown(kom) {
    console.log(kom)
    const el = document.createElement("option")
    el.textContent = kom.navn
    el.value = kom.kode
    el.kommune = kom
    ddKommuner.appendChild(el)
}
const divtags = document.getElementById("divtags")
function selectKommune() {
    const selindex = ddKommuner.selectedIndex
    const selectedKommune = ddKommuner.options[selindex]
    console.log(selindex)
    console.log(selectedKommune)
    console.log(selectedKommune.value)
    console.log(selectedKommune.kommune)
    const kommune = selectedKommune.kommune
    const atag = document.createElement("a")
    atag.href = kommune.href
    atag.innerHTML = "<br>" + kommune.navn + "<br>"
    divtags.appendChild(atag)
}

async function showAllKommuner() {
    const kommuneList = await fetchKommuner(urlKommuner);
    console.log(kommuneList)
    kommuneList.forEach(fillKommuneDropDown)
}

function actionShowKommuner() {
    showAllKommuner()
}

const pbFetchKommuner = document.getElementById("pbFetchKommuner")
pbFetchKommuner.addEventListener("click", actionShowKommuner)
ddKommuner.addEventListener('change', selectKommune)