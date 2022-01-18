//  Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.
function checkCharacter() {
  var x = document.getElementById("characters").value;
  console.log("value of string", x);
  var ch = document.getElementById("characterSearch").value;
  console.log("character you want to search", ch);

  for (let i = 0; i < x.length; i++) {
    if (x.charAt(i) == ch && i >= 1 && i <= 3) {
      document.getElementById("paragraph").innerText =
        "Character exists from 2nd to 4th position";
    } else {
      document.getElementById("paragraph").innerText =
        "Character doesn't exists from 2nd to 4th position";
    }
  }
}
document.getElementById("button").addEventListener("click", checkCharacter);
