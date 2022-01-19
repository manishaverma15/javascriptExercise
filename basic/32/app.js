//  Write a program to check whether a specified character exists within the 2nd to 4th position in a given string. 
function checkCharacter(){
    var x=document.getElementById("character").value;
    console.log("value of string",x);
    var y =document.getElementById("characterSearch").value;
    console.log("character you want to search",y);
}
document.getElementById("button").addEventListener('click',checkCharacter);
