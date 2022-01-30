// Write a JavaScript function that returns a passed string with letters in alphabetical order
function orderChange() {
  userString = document.getElementById("enterString").value;
  console.log("entered string", userString);
  var outputString = userString.split("");
  console.log("outPut", outputString);
  sortedString = outputString.sort();
  console.log("sortedString", sortedString);
  joined = sortedString.join("");
  console.log("joinedString", joined);
 
    document.getElementById("orderChange").innerHTML = joined;
  
}
document.getElementById("button").addEventListener("click", orderChange);
