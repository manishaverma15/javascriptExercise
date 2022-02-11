
function Form() {
    let data = {}
    data["FirstName"] = document.getElementById("Firstname").value;
    console.log("First-Name:", data["FirstName"]);
    data["LastName"] = document.getElementById("Lastname").value;
    console.log("Last-Name:", data["LastName"]);
    data["Email"] = document.getElementById("email").value;
    console.log("Email:", data["Email"]);
    insertRow(data);
}
document.getElementById("button").addEventListener("click", Form);

function insertRow(data) {
    console.log("data",data)
    let table = document.getElementById("form-list").getElementsByTagName('tbody') [0];
    console.log("table", table);
    let newRow = table.insertRow(0);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.FirstName;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.LastName;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Email
}
// document.getElementById("buttonAdd").addEventListener("click", insertRow());
