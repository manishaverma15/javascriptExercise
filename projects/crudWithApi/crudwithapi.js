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

  async deletePost(id) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    return response.json();
  }

  async editPost(id, title, description, ele) {
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
}

class FormService {
  constructor() {
    this.apiService = new ApiService();
    this.isEditing = false;
    this.editElement = null;
  }

  async createPost() {
    let data = {};
    data["id"] = document.getElementById("id").value;
    data["title"] = document.getElementById("title").value;
    data["description"] = document.getElementById("description").value;
    if (this.isEditing === true) {
      const editdata = await this.apiService.editPost(
        data["id"],
        data["title"],
        data["description"]
      );

      this.updateRecord(editdata);
    } else {
      const post = await this.apiService.createPost(
        data["id"],
        data["title"],
        data["description"]
      );
      this.renderPost(post);
    }
    this.resetForm();
  }

  async renderPost(post) {
    const ele = document.createElement("div");
    ele.innerHTML = this.postHtml(post.id, post.title, post.body);
    document.body.appendChild(ele);
    document
      .getElementById(`delete-post-${post.id}`)
      .addEventListener("click", () => this.deletePost(post.id, ele));
    document
      .getElementById(`edit-post-${post.id}`)
      .addEventListener("click", () =>
        this.editData(post.id, post.title, post.body, ele)
      );
  }

  async getPosts() {
    const posts = await this.apiService.getPosts();
    for (const post of posts) {
      this.renderPost(post);
    }
  }

  postHtml(id, title, body) {
    return `
        <span>Id = ${id} </span> <br>
        <span>Title = ${title} </span> <br>
        <span> Description = ${body} </span> <br>

       <button id="delete-post-${id}">Delete</button>
       <button id="edit-post-${id}">Edit</button>
        <br>
    `;
  }

  async deletePost(postId, element) {
    await this.apiService.deletePost(postId);
    element.remove();
  }

  editData(id, title, description, editEle) {
    this.isEditing = true;
    this.editElement = editEle;
    document.getElementById("id").value = id;
    document.getElementById("title").value = title;
    document.getElementById("description").value = description;
  }

  updateRecord(data) {
    console.log("data", data);
    var spans = this.editElement.getElementsByTagName("span");
    console.log("value-of-spans", spans);
    spans[0].innerHTML = data.id;
    spans[1].innerHTML = data.title;
    spans[2].innerHTML = data.body;
  }

  resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  }
}

function init() {
  const formService = new FormService();
  document.getElementById("create-post").addEventListener("click", () => {
    formService.createPost();
  });
  document.getElementById("get-post").addEventListener("click", () => {
    formService.getPosts();
  });
}

init();
