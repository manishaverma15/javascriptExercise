//  Write a JavaScript program to create a new string from a given string 
// changing the position of first and last characters.
//  The string length must be greater than or equal to 1. 
function changePosition(){
    var x=document.getElementById("containText").value;
console.log("value of x",x);
// document.getElementById("paragraph").innerHTML=x;
var len=x.length;
console.log("value of length",len)
var y=x.charAt(0);
console.log("firstChar",y);
var z=x.charAt(len-1);
console.log("lastChar",z);
mid_char = x.substring(1, x.length - 1);
if(x.length<=0){
    return x;
}
else{
document.getElementById("paragraph").innerHTML=z+mid_char+y;
}
}
document.getElementById("button").addEventListener('click',changePosition);
