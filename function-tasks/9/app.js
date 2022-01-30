// Write a JavaScript function to  get the number of occurrences of each letter in specified string
function calculateOccurance() {
  var x = document.getElementById("calculateOccurance").value;
  let string = x.split("").sort().join("");
  let counter = 1;
  for (i = 0; i < x.length; i++) {
    if (string[i] == string[i + 1]) {
      counter++;
      console.log("value of counter", counter);
    } else {
      document.getElementById("paragraph").innerHTML +=
        string[i] + " " + counter + "<br>";
      counter = 1;
      // document.getElementsById("paragraph").innerHTML=counter;
    }
  }
}

function calculateOccurance2() {
  const occur = {};
  var x = document.getElementById("calculateOccurance").value;
  for (let i = 0; i < x.length; i++) {
    if (occur[x[i]]) {
      occur[x[i]] += 1;
    } else {
      occur[x[i]] = 1;
    }
  }
  document.getElementById("paragraph").innerHTML = JSON.stringify(occur);
  // console.log("occur",occur)
}
document
  .getElementById("button")
  .addEventListener("click", calculateOccurance2);
