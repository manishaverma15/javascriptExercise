// Write a JavaScript program to reverse a given string.
function reverseString(){
    x = document.getElementById("enteredString").value;
    console.log("Text Entered", x);
    y=x.split("").reverse().join("");
    if(y){
        document.getElementById("reversedString").innerText=y;
    }
}
document.getElementById("button").addEventListener("click", reverseString);
