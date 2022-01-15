// Write a JavaScript program to create a new string from a given string 
// with the first character of the given string added at the front and back.

function addChar(){
var x =document.getElementById("containString").value;
console.log("value of x",x)
    first = x.substring(0,1);
    console.log("first",first)
        document.getElementById("paragraph").innerHTML=first+x+first;
}
document.getElementById("button").addEventListener('click',addChar);
