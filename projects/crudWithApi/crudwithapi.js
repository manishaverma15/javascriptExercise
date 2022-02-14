let isEditing = false;
let selectedRow = null;

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
async function editTodo(id, title, description, ele) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            id: id,
            title: title,
            description: description,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const data = await response.json();
    console.log("edit-data", data);
    ele.editData();
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
    const post = await createTodo(data["ID"], data["title"], data["description"])
    if (isEditing === true) {
        updateRecord(data);
    }
    else {
        renderTodo(post);
        // renderTodo(data);
    }
    resetForm();
}

async function editData(id, title, body) {
    isEditing = true;
    console.log("id - title - body :", id, title, body)
    document.getElementById("ID").value = id;
    document.getElementById("title").value = title;
    document.getElementById("email").value = body;

}
function updateRecord(data) {
    console.log("data", data);
    id = data.id;
    title = data.title;
    body = data.body;
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
        <span>ID = ${id} </span> <br>
        <span>Title = ${title} </span> <br>
        <span> Description = ${body} </span> <br>

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