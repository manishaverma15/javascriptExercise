// Write a JavaScript program to convert a given number to hours and minutes.
function convert() {
  x = document.getElementById("convertNumber").value;
  console.log("value of x:", x);
  Hours = Math.floor(x / 60);
  console.log("value of hours", Hours);
  Minutes = x % 60;
  console.log("value of minutes", Minutes);

  document.getElementById("hoursAndMinutes").innerText = Hours + ":" + Minutes
}
document.getElementById("button").addEventListener("click", convert);
