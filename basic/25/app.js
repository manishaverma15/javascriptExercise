//  Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
function numberMultiple(){
    var x=document.getElementById("inputTag").value;
    console.log("value of x",x);
//     switch(x)
//     {
//         case  (x%3==0):
            
//        document.getElementById("paragraph").innerText="The number is a multiple of 3";
//        break;
//        case (x%7==0):
            
//        document.getElementById("paragraph").innerText="The number is a multiple of 7";
//        break;
//         default:
//             document.getElementById("paragraph").innerText="the number is not the multiple of either 3 nor of 7";
// break;
        
//     }
    if(x%3==0){
        document.getElementById("paragraph").innerText="The number is a multiple of 3"
    }
    else if(x%7==0)
        {
            document.getElementById("paragraph").innerText="The number is a multiple of 7"
        }
    else{
        document.getElementById("paragraph").innerText="The number is not the multiple of either 3 or 7"
    }
}
document.getElementById("button").addEventListener('click',numberMultiple);