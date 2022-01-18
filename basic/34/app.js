// Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. 
// If the string length is less than 3 convert all the characters in upper case.  

function changeCase (){
x=document.getElementById("enterString").value ;
console.log("string value",x);
if(x.length<3){
    var z= x.toUpperCase();
    document.getElementById("paragraph").innerHTML=z;
}
else{
    var front =(x.substring(0,3).toLowerCase());
    console.log("front",front);
    var back=x.substring(3,x.length)
    console.log("back",back);
    document.getElementById("paragraph").innerHTML=front+back;
}
}
document.getElementById("button").addEventListener("click", changeCase);
