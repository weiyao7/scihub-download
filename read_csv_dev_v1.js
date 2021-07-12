function previewImgs(files) {
    // Check for the various File API support.
    if (window.FileReader) {
        // FileReader are supported.
        getAsText(files[0])
    } else {
        alert('FileReader is not supported in this browser.')
    }
}

function getAsText(fileToRead) {
    var reader = new FileReader()
    // Read file into memory as UTF-8
    reader.readAsText(fileToRead)
    //Handle errors when load
    reader.onload = loadHandler
    reader.onerror = errorHandler
}

function loadHandler(event) {
    var csv = event.target.result
    processData(csv)
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/)

    console.log(allTextLines)
    if (allTextLines[allTextLines.length - 1] == "") {
        console.log("bingo")
        allTextLines.splice(-1,1)
    }

    var elements = document.getElementsByClassName("column")

    console.log(allTextLines.length)
    for (var idx=0; idx<allTextLines.length; idx++) {
        var data = allTextLines[idx].split(',')
        var i = Math.floor(idx / 7)
        var j = idx % 7
        elements[i].children[j].src = data[1] + "/Products(\'Quicklook\')/$value"
        console.log(elements[i].children[j])
    }
}

function errorHandler(evt) {
    if(evt.target.error.name == 'NotReadableError') {
        alert("Cannot read file !")
    }
}

