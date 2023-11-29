function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const taskDescription = taskInput.value.trim();

    if (!taskDescription) {
        alert('Please enter a task description');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <div class="task-text">${taskDescription}</div>
        <div class="button-container">
            <button class="update" onclick="updateTask(this)">Update</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function updateTask(button) {
    const li = button.closest('li');
    const taskText = li.querySelector('.task-text');
    const updatedTaskDescription = prompt('Update task description:', taskText.textContent);

    if (updatedTaskDescription !== null) {
        taskText.textContent = updatedTaskDescription;
    }
}

function deleteTask(button) {
    const li = button.closest('li');
    li.remove();
}
