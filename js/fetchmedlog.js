console.log("vi er i fetchkommuner")
const urlKommuner = "https://api.dataforsyningen.dk/kommuner"

function fetchKommuner() {
    console.log("2. Vi er i fetchKommuner")
    return fetch(urlKommuner).then(response => response.json())
    // console.log("4. Json er hentet")
}

function actionFetch() {
    console.log("1. Vi er i actionFetch")
    const kommuner = fetchKommuner()
    console.log("3. Vi er i actionFetch efter fetchKommuner")
    console.log(kommuner)

}

const pbFetchKommuner = document.getElementById("pbFetchKommuner")
pbFetchKommuner.addEventListener("click", actionFetch)