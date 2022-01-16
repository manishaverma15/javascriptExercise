// Write a JavaScript program to check
//  whether a string "Script" presents at 5th (index 4) position in a given string,
//  if "Script" presents in the string return the string without "Script" otherwise return the original one.
function checkString(){
    var x=document.getElementById("containString").value
console.log("value of x",x);
const isString=x.substr(4,10);
console.log("value of isString",isString);
if(isString=='script'){
    const y =x.substr(0,4)+x.substr(10,x.length);
    console.log("value of y",y);
    document.getElementById("paragraph").innerHTML=y;
}
else{
    document.getElementById("paragraph").innerHTML=x;
}
}
document.getElementById("button").addEventListener('click',checkString);
