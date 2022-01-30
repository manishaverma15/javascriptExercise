//    JavaScript function to compute the value of bn where n is the exponent and b is the bases.
function baseExponent() {
  b = document.getElementById("baseValue").value;
  console.log("base Value", b);
  n = document.getElementById("exponentValue").value;
  console.log("Exponent Value", n);
  result = 1;
  if (n == 0) {
    document.getElementById("outputValue").innerHTML = b;
  }

  for (var i = 1; i <= n; i++) {
    result = b * result;
    console.log("value of result",result);
    document.getElementById("outputValue").innerHTML=result;
  }

}
document.getElementById("button").addEventListener("click", baseExponent);
