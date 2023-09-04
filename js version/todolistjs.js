function addtodo() {
    const todoInput = document.getElementById('todoinput');
    const todoList = document.getElementById('todolist');
    const newToDo = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() {
        newToDo.classList.toggle('completed');
    };
    newToDo.appendChild(checkbox);

    const todoText = document.createTextNode(todoInput.value);
    newToDo.appendChild(todoText);

    newToDo.classList.add('todo-item');
    todoList.appendChild(newToDo);

    // Hent tidligere lagrede oppgaver fra localStorage
    let storedTodos = JSON.parse(localStorage.getItem("todolists")) || [];

    // Legg til den nye oppgaven i listen
    storedTodos.push(todoInput.value);

    // Lagre den oppdaterte listen tilbake i localStorage
    localStorage.setItem("todolists", JSON.stringify(storedTodos));

    // Vis oppgavelisten i console.log
    console.log(storedTodos);

    todoInput.value = '';
}
