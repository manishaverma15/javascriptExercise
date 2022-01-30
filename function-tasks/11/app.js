// Write a JavaScript function to extract unique characters from a string.
function uniqueChar() {
  x = document.getElementById("unique").value;
  console.log("value of x", x);
  let uniqueID = "";
  for (i = 0; i < x.length; i++) {
    if (uniqueID.includes(x[i]) == false) { 
        // false = -1 ,here we are checking that  particular element exists or not ,means includes or NOT
      uniqueID += x[i];
      console.log("unique", uniqueID);
      document.getElementById("outputString").innerHTML = uniqueID;
    }
     else {
      document.getElementById("outputString").innerHTML = uniqueID;
    }
  }
}
document.getElementById("button").addEventListener("click", uniqueChar);
