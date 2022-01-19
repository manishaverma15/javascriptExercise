// Write a JavaScript program to find the larger number from the 
// two given positive integers, the two numbers are in the range 40..60 inclusive.
function greatest(){
    var x=document.getElementById("firstNumber").value;
    console.log("value of x",x);
    var y=document.getElementById("secondNumber").value;
    console.log("value of y",y);
if((x>=40 && x<=60)&& (y>=40 && y<=60))
{
    if(x==y){
        document.getElementById("paragraph").innerText="both numbers are same"
    }
    else if(x>y)
    {
        document.getElementById("paragraph").innerText="x is greater"
        
    }
    else{
        document.getElementById("paragraph").innerText="y is greater"

    }
}
}
document.getElementById("button").addEventListener('click',greatest);
