console.log("vi er i testpromise.js")

function  returnPromise() {
    return new Promise(function (resolve, reject) {
        resolve("Start of new Promise")
    })
}

function test() {
    return returnPromise().then((value) => {
        console.log("1st Vi er i test: " + value)
        return "test er færdig"
    }).then((value) => {
        console.log("2nd then, inside test(): " + value)
        return "test er færdig"
    })
}

test().then((value) => {
    console.log("I then test er færdig" + value)
})

console.log("Slut med test")