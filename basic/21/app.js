// Write a JavaScript program to create a new string adding "Py" in front of a given string.
//  If the given string begins with "Py" then return the original string.

function outputString(){
    // if(value=="Py"+value)
    var x=document.getElementById("inputBox").value;
     console.log("value of x",x);
     var result =x.startsWith('Py')
     if(result){
     document.getElementById("paragraph").innerHTML = x;
     }
     else{
         document.getElementById("paragraph").innerHTML='Py'+x;
     }
}
// outputString();
document.getElementById("button").addEventListener('click',outputString)