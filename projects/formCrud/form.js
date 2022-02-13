let selectedRow = null;
let isEditing = false;
function form() {
    let data = {};
    data["FirstName"] = document.getElementById("Firstname").value;
    console.log("First-Name:", data["FirstName"]);
    data["LastName"] = document.getElementById("Lastname").value;
    console.log("Last-Name:", data["LastName"]);
    data["Email"] = document.getElementById("email").value;
    console.log("Email:", data["Email"]);
    if (isEditing === true) {
        updateRecord(data);
    }
    else {
        insertRow(data);
    }
    resetForm();
}

document.getElementById("button").addEventListener("click", form);

function insertRow(data) {
    console.log("data", data);
    let table = document
        .getElementById("form-list")
        .getElementsByTagName("tbody")[0];
        
    console.log("table", table);
    let newRow = table.insertRow(0);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.FirstName;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.LastName;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Email;
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<button onClick = "editData(this)">
    Edit  </button>
    <button onClick="onDelete(this)">Delete</button>`
}

function resetForm() {
    document.getElementById("Firstname").value = "";
    document.getElementById("Lastname").value = "";
    document.getElementById("email").value = "";

}

function editData(td) {
    isEditing = true;
    console.log("td", td)
    selectedRow = td.parentElement.parentElement;
    console.log("selectedRow", selectedRow);
    document.getElementById("Firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;

}
function updateRecord(data) {
    console.log("data", data);
    selectedRow.cells[0].innerHTML = data.FirstName;
    selectedRow.cells[1].innerHTML = data.LastName;
    selectedRow.cells[2].innerHTML = data.Email;
}
function onDelete(td) {
    row = td.parentElement.parentElement;
    document.getElementById("form-list").deleteRow(row.rowIndex);
    resetForm();
}

