// Write a JavaScript function which returns the n rows by n columns identity matrix.
function identity() {
  x = document.getElementById("Firstnumber").value;
  console.log("value", x);
  const arr = [];
  for (var i = 0; i < x; i++) {
    if (!arr[i]) {
      arr[i] = [];
    }
    for (var j = 0; j < x; j++) {
      if (i === j) {
        arr[i][j] = 1;
        document.getElementById("identityMatrix").innerHTML = arr[i][j];
      } else {
        arr[i][j] = 0;
        document.getElementById("identityMatrix").innerHTML = arr[i][j];
      }
    }
  }
  document.getElementById("identityMatrix").innerHTML = arr;
}
document.getElementById("button").addEventListener("click", identity);
