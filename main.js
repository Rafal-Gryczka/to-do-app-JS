let toDoList = [];

const input = document.body.querySelector("input");
const inputSearch = document.body.querySelector('input.search');
const form = document.body.querySelector('form');
const taskNumber = document.body.querySelector('h1 span');
const btnDelete = document.body.querySelector('button.delete');
const ul = document.body.querySelector('ul');

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let cloneToDoList = [...toDoList];
    cloneToDoList = cloneToDoList.filter(li => li.textContent.toLowerCase().includes(searchText));
    taskNumber.textContent = cloneToDoList.length;

    if (inputSearch.value === "") {
        renderList();
    } else {
        ul.textContent = "";
        cloneToDoList.forEach(li => ul.appendChild(li));
    }

}

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
inputSearch.addEventListener('input', searchTask);