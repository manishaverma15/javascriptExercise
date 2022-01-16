//  Write a JavaScript program to create a new string from a given string 
// taking the last 3 characters and added at both the front and back. 
// The string length must be 3 or more.  
function addChar(){
    var x =document.getElementById("containString").value;
    console.log("value of x",x)
    if(x.length>=3){
        first = x.substring(x.length-3);
        console.log("first",first)
            document.getElementById("paragraph").innerHTML=first+x+first;
    }
    else{
        document.getElementById("paragraph").innerHTML="Please enter the text having 3 or more than 3 characters";

    }
}
    document.getElementById("button").addEventListener('click',addChar);
    