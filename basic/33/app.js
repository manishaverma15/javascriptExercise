// Write a JavaScript program to check whether the last digit of the three given positive integers is same.
function lastDigit() {
  x = document.getElementById("firstNumber").value;
  console.log("first Number", x);
  y = document.getElementById("SecondNumber").value;
  console.log("first Number", y);
  z = document.getElementById("ThirdNumber").value;
  console.log("first Number", z);
  if (
    x > 0 &&
    y > 0 &&
    z > 0 &&
    x % 10 == y % 10 &&
    y % 10 == z % 10 &&
    x % 10 == z % 10
  ) {
    document.getElementById("paragraph").innerText =
      "last digit of all numbers is same";
  } else {
    document.getElementById("paragraph").innerText =
      "last digit of numbers is different";
  }
}
document.getElementById("button").addEventListener("click", lastDigit);
