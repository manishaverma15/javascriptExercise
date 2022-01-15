//  Write a JavaScript program to remove a character at the specified position of a given string
//  and return the new string
function removeChar(){
var x=document.getElementById("enterText").value;
console.log("value of x",x);
var y=x.replaceAll('a',"");
console.log('y',y);
if(y)
{
    document.getElementById('containData').innerHTML=y;
}
}
document.getElementById("button").addEventListener('click',removeChar);