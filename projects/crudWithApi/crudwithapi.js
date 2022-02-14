let isEditing = false;
let selectedRow = null;
let editEle = null;

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}
async function deletePost(id, ele) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "DELETE",
    }
  );
  const data = await response.json();
  console.log("deleteData", data);
  ele.remove();
}
async function editPost(id, title, description, ele) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        id: id,
        title: title,
        body: description,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  return response.json();
}

async function createPost(id, title, description) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      id: id,
      title: title,
      body: description,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

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
    const editdata = await editPost(
      data["ID"],
      data["title"],
      data["description"]
    );
    updateRecord(editdata);
  } else {
    const post = await createPost(
      data["ID"],
      data["title"],
      data["description"]
    );
    renderPost(post);
  }
  resetForm();
}

async function editData(id, title, description, ele) {
  isEditing = true;
  editEle = ele;
  console.log("value-of-editele", editEle);
  document.getElementById("ID").value = id;
  document.getElementById("title").value = title;
  document.getElementById("description").value = description;
}
function updateRecord(data) {
  console.log("data", data);
  editEle.id = data.id;
  editEle.title = data.title;
  editEle.description = data.description;
}
function resetForm() {
  document.getElementById("ID").value = "";
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
}
function renderPost(todo) {
  const ele = document.createElement("div");
  ele.innerHTML = todoHtml(todo.id, todo.title, todo.body);
  document.body.appendChild(ele);
  document
    .getElementById(`delete-post-${todo.id}`)
    .addEventListener("click", () => deletePost(todo.id, ele));
  document
    .getElementById(`edit-post-${todo.id}`)
    .addEventListener("click", () =>
      editData(todo.id, todo.title, todo.body, ele)
    );
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
  const todos = await getPosts();
  console.log("array", todos);
  for (const todo of todos) {
    renderPost(todo);
  }
}

function init() {
  document.getElementById("button").addEventListener("click", onClick);
}
document.getElementById("add").addEventListener("click", form);

init();
