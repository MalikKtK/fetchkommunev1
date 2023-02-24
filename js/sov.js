const sov = (ms) => {
    return new Promise(dummyFunction => setTimeout(dummyFunction, ms))
}

async function doSomethingAsync() {
    console.log("1. Før vi sover")
    await sov(2000)
    console.log("2. Færdig med at sove")
}

console.log("Start 1")
doSomethingAsync();
console.log("5. Slut")
