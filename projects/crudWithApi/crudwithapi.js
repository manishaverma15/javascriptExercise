
async function getTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return response.json();
}

function renderTodo(todo) {
    const ele = document.createElement('p');
    ele.innerHTML = todo.title;
    document.body.appendChild(ele)
}

async function onClick() {
    const todos = await getTodos();
    for (const todo of todos) {
        renderTodo(todo);
    }
}


function init() {
    document.getElementById("button").addEventListener("click", onClick);
}

init();