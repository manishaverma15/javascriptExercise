let isEditing = false;

class ApiService {
  async getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  }

  async createPost(id, title, description) {
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
}

class FormService {
  constructor() {
    this.apiService = new ApiService();
  }
  async createForm() {
    let data = {};
    data["ID"] = document.getElementById("ID").value;
    console.log("ID:", data["ID"]);
    data["title"] = document.getElementById("title").value;
    console.log("title:", data["title"]);
    data["description"] = document.getElementById("description").value;
    console.log("description:", data["description"]);
    // if (isEditing === true) {
    //   const editdata = await editPost(
    //     data["ID"],
    //     data["title"],
    //     data["description"]
    //   );
    //   this.updateRecord(editdata);
    // } else {
    // const post = await createPost(
    //   data["ID"],
    //   data["title"],
    //   data["description"]
    // );
    // this.renderPost(post);
    // }
    // this.resetForm();
    return data;
  }
  // resetForm() {
  //   document.getElementById("ID").value = "";
  //   document.getElementById("title").value = "";
  //   document.getElementById("description").value = "";
  // }

  // renderPost(todo) {
  //   const ele = document.createElement("div");
  //   ele.innerHTML = todoHtml(todo.id, todo.title, todo.body);
  //   document.body.appendChild(ele);
    // document
    //   .getElementById(`delete-post-${todo.id}`)
    //   .addEventListener("click", () => deletePost(todo.id, ele));
    // document
    //   .getElementById(`edit-post-${todo.id}`)
    //   .addEventListener("click", () =>
    //     editData(todo.id, todo.title, todo.body, ele)
    //   );
  // }
  // todoHtml(id, title, body) {
  //   return `
  //       <span>ID = ${id} </span> <br>
  //       <span>Title = ${title} </span> <br>
  //       <span> Description = ${body} </span> <br>

  //       // <button id="delete-post-${id}">Delete</button>
  //       // <button id="edit-post-${id}">Edit</button>
  //       <br>
  //   `;
  // }
  // async onClick() {
  //   const todos = await getPosts();
  //   console.log("array", todos);
  //   for (const todo of todos) {
  //     renderPost(todo);
  //   }
  // }
}

async function init() {
  const getApiData = new ApiService();
  console.log("api-data-is", getApiData);
  console.log("post-data", await getApiData.getPosts());

  //  console.log( "form-data", await getApiData.createPost());
  const getFormData = new FormService();
  console.log("forms", getFormData);
  // console.log("all-data", getFormData.createForm());
  document.getElementById("add").addEventListener("click", getFormData.createForm());
  // document.getElementById("button").addEventListener("click", this.onClick());
  // document.getElementById("add").addEventListener("click", this.createForm());

  // const getFormData = new createForm();
  // console.log("form-data",getFormData);
  // console.log("form-data-2", await getFormData.form());
}

init();

//  function onClick() {
//     const todos =  getPosts();
//     console.log("array", todos);
//     for (const todo of todos) {
//       renderPost(todo);
//     }

// async function onClick() {
//     const todos = await getPosts();
//     console.log("array", todos);
//     for (const todo of todos) {
//       renderPost(todo);
//     }
//   }

//  init() {
// document.getElementById("button").addEventListener("click", onClick);
// }
// document.getElementById("add").addEventListener("click", form);
// init();

// createPost(id, title, description) {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       id: id,
//       title: title,
//       body: description,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });

//   return response.json();
// }

// let isEditing = false;
// let editEle = null;

// async function getPosts() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return response.json();
// }
// async function deletePost(id, ele) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`,
//     {
//       method: "DELETE",
//     }
//   );
//   const data = await response.json();
//   console.log("deleteData", data);
//   ele.remove();
// }
// async function editPost(id, title, description, ele) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`,
//     {
//       method: "PATCH",
//       body: JSON.stringify({
//         id: id,
//         title: title,
//         body: description,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     }
//   );
//   return response.json();
// }

// async function createPost(id, title, description) {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       id: id,
//       title: title,
//       body: description,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });

//   return response.json();
// }

// async function form() {
//   let data = {};
//   data["ID"] = document.getElementById("ID").value;
//   console.log("ID:", data["ID"]);
//   data["title"] = document.getElementById("title").value;
//   console.log("title:", data["title"]);
//   data["description"] = document.getElementById("description").value;
//   console.log("description:", data["description"]);
//   if (isEditing === true) {
//     const editdata = await editPost(
//       data["ID"],
//       data["title"],
//       data["description"]
//     );
//     updateRecord(editdata);
//   } else {
//     const post = await createPost(
//       data["ID"],
//       data["title"],
//       data["description"]
//     );
//     renderPost(post);
//   }
//   resetForm();
// }

// async function editData(id, title, description, ele) {
//   isEditing = true;
//   editEle = ele;
//   console.log("value-of-editele", editEle);
//   document.getElementById("ID").value = id;
//   document.getElementById("title").value = title;
//   document.getElementById("description").value = description;
// }
// function updateRecord(data) {
//   console.log("data", data);
//   var spans = editEle.getElementsByTagName("span");
// console.log("value-of-spans",spans);
//   spans[0].innerHTML = data.id;
//   spans[1].innerHTML = data.title;
//   spans[2].innerHTML = data.body;
// }
// function resetForm() {
//   document.getElementById("ID").value = "";
//   document.getElementById("title").value = "";
//   document.getElementById("description").value = "";
// }
// function renderPost(todo) {
//   const ele = document.createElement("div");
//   ele.innerHTML = todoHtml(todo.id, todo.title, todo.body);
//   document.body.appendChild(ele);
//   document
//     .getElementById(`delete-post-${todo.id}`)
//     .addEventListener("click", () => deletePost(todo.id, ele));
//   document
//     .getElementById(`edit-post-${todo.id}`)
//     .addEventListener("click", () =>
//       editData(todo.id, todo.title, todo.body, ele)
//     );
// }

// function todoHtml(id, title, body) {
//   return `
//         <span>ID = ${id} </span> <br>
//         <span>Title = ${title} </span> <br>
//         <span> Description = ${body} </span> <br>

//         <button id="delete-post-${id}">Delete</button>
//         <button id="edit-post-${id}">Edit</button>
//         <br>
//     `;
// }

// async function onClick() {
//   const todos = await getPosts();
//   console.log("array", todos);
//   for (const todo of todos) {
//     renderPost(todo);
//   }
// }
