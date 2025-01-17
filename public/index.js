const api_base_url = "/api/todos"
async function getTodos(){
    let response = await fetch(api_base_url)
    let todos = await response.json();
    return todos
}


async function renderTodos(){
    let todos = await getTodos();
    console.log(todos)    
    
    let tBody = document.querySelector("#todos")
    tBody.innerHTML = ``
    for (let index = 0; index < todos.length; index++) {
        let todo = todos[index];
        let row = document.createElement("tr")
        row.innerHTML = `
        <td>${todo.description}</td>
        <td>
            <button>Complete</button>
            <button>Delete</button>
        </td>
        `
        tBody.appendChild(row)    
    }
    
}

async function deleteTodo(id){
    let response = await fetch(`${api_base_url}/${id}`,{
        method: "DELETE",
    })
}

async function updateTodo(){
    //TODO: implement this...
}

renderTodos()