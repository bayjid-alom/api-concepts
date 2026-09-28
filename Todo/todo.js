const loadTodo = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const response = await fetch(url)
    const data = await response.json()
    displayTodo(data)
}


// {userId: 9, 
// id: 161, 
// title: 'ex hic consequuntur earum omnis alias ut occaecati culpa',
// completed: true}


const displayTodo = (todos) => {
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML = ""

    todos.forEach(todo => {
        const todoCard = document.createElement("div")

        todoCard.innerHTML = `
        <div class="todo-card">

            <p> ${todo.completed == true
                ? `<i class="fa-solid fa-square-check"></i>`
                : `<i class="fa-regular fa-square-check"></i>`
            } </p>

            <h4>${todo.title}</h4>
        </div>
        `;

        todoContainer.appendChild(todoCard)
    })

};

loadTodo()