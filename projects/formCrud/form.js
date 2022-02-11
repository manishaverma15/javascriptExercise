
function Form() {
    var data = {}
    data["FirstName"] = document.getElementById("Firstname").value;
    console.log("First-Name:", data["FirstName"]);
    data["LastName"] = document.getElementById("Lastname").value;
    console.log("Last-Name:", data["LastName"]);
    data["Email"] = document.getElementById("email").value;
    console.log("Email:", data["Email"]);
    return data;
}
document.getElementById("button").addEventListener("click", Form);

function insertRow(data) {
    var table = document.getElementById("form-list").getElementsByTagName('tbody') [0];
    console.log("table", table);
    var newRow = table.insertRow(0);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.FirstName;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.LastName;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Email
}
document.getElementById("buttonAdd").addEventListener("click", insertRow);
