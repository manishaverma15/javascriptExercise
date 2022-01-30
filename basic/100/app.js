// Write a JavaScript program to capitalize the first letter of each word of a given string.
function capitalizeLetter() {
    x = document.getElementById("capitalizeString").value
    console.log("value of string", x);
    var CapitalizeWords = x[0].toUpperCase();
    for (var i = 1; i <= x.length - 1; i++) {
        let currentCharacter,
            previousCharacter = x[i - 1];
        if (previousCharacter && previousCharacter == ' ') {
            currentCharacter = x[i].toUpperCase();
        } else {
            currentCharacter = x[i];
        }
        CapitalizeWords = CapitalizeWords + currentCharacter;
        document.getElementById("paragraph").innerHTML = CapitalizeWords;
    }
}
document.getElementById("button").addEventListener('click', capitalizeLetter);

// var CapitalizeWords = input[0].toUpperCase();
// for (var i = 1; i <= input.length - 1; i++) {
//     let currentCharacter,
//         previousCharacter = input[i - 1];
//     if (previousCharacter && previousCharacter == ' ') {
//         currentCharacter = input[i].toUpperCase();
//     } else {
//         currentCharacter = input[i];
//     }
//     CapitalizeWords = CapitalizeWords + currentCharacter;
// }
// return CapitalizeWords; 
