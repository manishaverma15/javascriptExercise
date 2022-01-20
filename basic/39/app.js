// Write a JavaScript program to replace every character in a given string
//  with the character following it in the alphabet.
function moveCharacter() {
  x = document.getElementById("characterMove").value;
  console.log("original string:", x);
  y = x.split("");
  console.log("array", y);
  for (var i = 0; i < y.length; i++) {
    switch (y[i]) {
      case "":
        break;
      case "z":
        y[i] = 'a';
        break;
      case "Z":
        y[i] = 'A';
        break;
        default:
            y[i]=String.fromCharCode(1 + y[i].charCodeAt(0));
    }
  }
k=  y.join('');

document.getElementById("nextCharacter").innerHTML=k;

}
document.getElementById("button").addEventListener("click", moveCharacter);
