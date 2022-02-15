let isEditing = false;
let selectedRow = null;
let editEle = null;


async function getTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json();

}
async function deleteTodo(id, ele) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    console.log("deleteData", data);
    ele.remove();
}
async function editTodo(id, title, description) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            id: id,
            title: title,
            body: description,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    return await response.json();
}

async function createTodo(id, title, description) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            id: id,
            title: title,
            body: description,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    return response.json();

}

async function form() {
    let data = {};
    data["ID"] = document.getElementById("ID").value;
    console.log("ID:", data["ID"]);
    data["title"] = document.getElementById("title").value;
    console.log("title:", data["title"]);
    data["description"] = document.getElementById("description").value;
    console.log("description:", data["description"]);
    if (isEditing === true) {
        const editdata = await editTodo(data["ID"], data["title"], data["description"])
        updateRecord(editdata);
    }
    else {
        const post = await createTodo(data["ID"], data["title"], data["description"])
        renderTodo(post);
    }
    resetForm();
}

async function editData(id, title, description, ele) {
    isEditing = true;
    editEle = ele;
    document.getElementById("ID").value = id;
    document.getElementById("title").value = title;
    document.getElementById("description").value = description;

}
function updateRecord(data) {
    console.log("data", data);
    editEle.firstChild.innerHTML = id;

}
function resetForm() {
    document.getElementById("ID").value = "";
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";

}
function renderTodo(todo) {
    const ele = document.createElement('div');
    ele.innerHTML = todoHtml(todo.id, todo.title, todo.body);
    document.body.appendChild(ele);
    document.getElementById(`delete-post-${todo.id}`)
        .addEventListener("click", () => deleteTodo(todo.id, ele));
    document.getElementById(`edit-post-${todo.id}`)
        .addEventListener("click", () => editData(todo.id, todo.title, todo.body, ele));
}

function todoHtml(id, title, body) {
    return `
        <span id="eleid">ID = ${id} </span> <br>
        <span id = "eletitle">Title = ${title} </span> <br>
        <span id = "eledescription"> Description = ${body} </span> <br>

        <button id="delete-post-${id}">Delete</button>
        <button id="edit-post-${id}">Edit</button>
        <br>
    `;
}


async function onClick() {
    const todos = await getTodos();
    console.log("array", todos)
    for (const todo of todos) {
        renderTodo(todo);
    }

}


function init() {
    document.getElementById("button").addEventListener("click", onClick);
}
document.getElementById("add").addEventListener("click", form);



init();