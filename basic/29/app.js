// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
function nearestNumber(){
    var x=document.getElementById("firstNumber").value;
    console.log("value of x",x);
    var y=document.getElementById("secondNumber").value;
    console.log("value of y",y);
    if(x!=y){
        x1= Math.abs(x - 100);
        console.log("value of x1",x1);
        x2=Math.abs(y - 100);
        console.log("value of x2",x2);
        if(x1<x2){
        document.getElementById("paragraph").innerHTML= x +" is nearest to 100" ;
        }
        else (x2<x1)
        {
            document.getElementById("paragraph").innerHTML=  y +" is nearest to 100";
        }
        
    }
    else
        {
            document.getElementById("paragraph").innerText=  "Enter correct number";
            
        }

}
document.getElementById("button").addEventListener('click',nearestNumber);
