// Write a JavaScript function that reverse a number.
function reverseNumber(){
    x=document.getElementById("originalnumber").value ;
    console.log("value of x :",x);
    let rev=0;
    let lastDigit;
  while(x!=0){
      lastDigit=x%10;
      rev=rev*10+lastDigit;
      x = Math.floor(x/10);
document.getElementById("reversedNumber").innerHTML=rev;
  }
}
document.getElementById("button").addEventListener('click',reverseNumber);