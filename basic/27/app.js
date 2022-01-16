// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.
function chcekString(){
    var x= document.getElementById("containString").value
    console.log("value of x",x);
    var y=x.startsWith("java")
    if(y)
    {
        document.getElementById("paragraph").innerText="true"
    }
    else{
        document.getElementById("paragraph").innerText="false"

    }
}
document.getElementById("button").addEventListener('click',chcekString);