const toDoList = [];

const input = document.body.querySelector("input");
const form = document.body.querySelector('form');
const taskNumber = document.body.querySelector('h1 span');
const btnDelete = document.body.querySelector('button.delete');
const ul = document.body.querySelector('ul');

const deleteAll = () => {
    toDoList.splice(0, toDoList.length);
    taskNumber.textContent = toDoList.length;
    input.value = "";
    renderList();


}

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    taskNumber.textContent = toDoList.length;
    renderList();

}

const addTask = (e) => {

    e.preventDefault();
    const taskTitle = input.value;
    if (taskTitle === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = `${taskTitle} <button>X</button>`;
    toDoList.push(task);
    renderList();


    input.value = "";
    taskNumber.textContent = toDoList.length;
    task.querySelector('button').addEventListener('click', removeTask);

}

const renderList = () => {
    ul.textContent = '';
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })
}


form.addEventListener('submit', addTask);
btnDelete.addEventListener('click', deleteAll);