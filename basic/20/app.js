//Write a JavaScript program to check from two given integers, whether one is positive and another one is negative. 


function findInteger(x, y) {
    if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
        return true;
    }
    else {
        return false;
    }
}
const first = findInteger(-3, -4);
document.querySelector("#firstDiv > span").innerHTML = first;
