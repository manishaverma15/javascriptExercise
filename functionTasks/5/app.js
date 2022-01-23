// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function longestCharacter() {
  x = document.getElementById("enterString").value;
  console.log("you entered string", x);
  var arr = x.match(/\w[a-z]{0,}/gi);
  console.log("array", arr);
  var result = arr[0];
  console.log("result", result);
  for (i = 1; i < arr.length; i++) {
    if (result.length < arr[i].length) {
      result = arr[i];
      console.log("result", result);
      document.getElementById("longString").innerHTML = result;
    }
  }
  document.getElementById("longString").innerHTML = result;
}
document.getElementById("button").addEventListener("click", longestCharacter);
