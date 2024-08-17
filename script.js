const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todolist = document.getElementById('todoList');

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const todoText = todoInput.value.trim();  // Corrected the case here
    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;
        todolist.appendChild(li);
        todoInput.value = '';  // Reset the input field after adding the todo
    }
}
