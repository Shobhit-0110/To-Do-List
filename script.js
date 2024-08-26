document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        // Edit button functionality
        li.querySelector('.edit-btn').addEventListener('click', () => {
            const newTaskText = prompt('Edit task:', taskText);
            if (newTaskText) {
                li.querySelector('span').textContent = newTaskText;
            }
        });

        // Delete button functionality
        li.querySelector('.delete-btn').addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Mark task as completed
        li.querySelector('span').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        return li;
    }

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            taskInput.value = '';
        }
    });

    // Allow pressing Enter to add a task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
