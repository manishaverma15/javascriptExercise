// Write a JavaScript program to check from three given numbers (non negative integers)
//  that two or all of them have the same rightmost digit.
function rightmostDigit(){
    x = document.getElementById("firstNumber").value;
    console.log("first Number", x);
    y = document.getElementById("SecondNumber").value;
    console.log("SecondNumber", y);
    z = document.getElementById("ThirdNumber").value;
    console.log("ThirdNumber", z);
    if(x<0||y<0||z<0){
        document.getElementById("paragraph").innerHTML="Enter positive number"
    }
    if((x%10==y%10)||(y%10==z%10)||(x%10==z%10)){
        document.getElementById("paragraph").innerHTML="Right most digit is same"

    }
    else{
        document.getElementById("paragraph").innerHTML="Right most digit is not same"

    }
}
document.getElementById("button").addEventListener("click", rightmostDigit);
