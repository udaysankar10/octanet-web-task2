const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', toggleComplete);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', editTask);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTask);

    li.appendChild(taskSpan);
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');
    buttonsDiv.appendChild(completeBtn);
    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);
    li.appendChild(buttonsDiv);

    taskList.appendChild(li);

    taskInput.value = '';
}

function toggleComplete(e) {
    const taskItem = e.target.parentElement.parentElement;
    const taskSpan = taskItem.querySelector('span');
    taskSpan.classList.toggle('completed');


    if (e.target.textContent === 'Complete') {
        e.target.textContent = 'Incomplete';
    } else {
        e.target.textContent = 'Complete';
    }
}

function editTask(e) {
    const taskItem = e.target.parentElement.parentElement;
    const taskSpan = taskItem.querySelector('span');

    const newTaskText = prompt('Edit your task:', taskSpan.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskSpan.textContent = newTaskText;
    }
}


function deleteTask(e) {
    const taskItem = e.target.parentElement.parentElement;
    taskList.removeChild(taskItem);
}
