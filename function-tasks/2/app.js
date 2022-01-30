// JavaScript function that checks whether a passed string is palindrome or not? 
function checkPalindrome(){
    x=document.getElementById("enterString").value 
    console.log("entered string",x);
    var re = /[\W_]/g;
    console.log("value of re",re);
  var lowRegStr = x.toLowerCase().replace(re, '');
  console.log("value of lowRegStr",lowRegStr);

  var reverseStr = lowRegStr.split('').reverse().join(''); 
  console.log("value of reverseStr",reverseStr);
  if(lowRegStr==reverseStr){

      document.getElementById("output").innerHTML="given string is a palindrome";
  }
  else{
    document.getElementById("output").innerHTML="given string is NOT a palindrome";

  }
  
}
document.getElementById("button").addEventListener("click",checkPalindrome);
