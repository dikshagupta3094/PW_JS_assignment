
function mainuplateString(string, logString){
    return logString(string.toUpperCase())
}

function logString(string){
   console.log(`The Mainuplated string is: ${string}`);
}

mainuplateString("Hello, world", logString)