


var fetchData = async () => {
    return new Promise((resolve, reject) => {
        var interval = setInterval(() => {
            resolve("done")
            clearInterval(interval)
            console.log("after promise done.")
        }, 500);
    })
    
}

document.execCommand("copied to clipboard.")

var printFetchData = async () => {
    var data = await fetchData()
    console.log(data)
}

printFetchData()