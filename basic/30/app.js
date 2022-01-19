//  Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
function numberBetweenRange(){
    var x=document.getElementById("firstNumber").value;
    console.log("value of x",x);
    var y=document.getElementById("secondNumber").value;
    console.log("value of y",y);
    if((x>=40 && x<=60 && y>=70 && y<=100)
    ||
    (x>=70 && x<=100 && y>=70 && y<=100)){
document.getElementById("paragraph").innerText="numbers are in the range"
    }
    else{
        document.getElementById("paragraph").innerText="numbers are not in the range"
    }
}
document.getElementById("button").addEventListener('click',numberBetweenRange);
