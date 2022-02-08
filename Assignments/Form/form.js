
function Form(){
    var data = {}
data["FirstName"]  = document.getElementById("Firstname").value;
console.log("First-Name:",FirstName);
data["LastName"]  = document.getElementById("Lastname").value;
console.log("Last-Name:",LastName);
data["PhoneNumber"]  = document.getElementById("phoneNumber").value;
console.log("Phone-Number:",PhoneNumber);

}
document.getElementById("button").addEventListener("click",Form);