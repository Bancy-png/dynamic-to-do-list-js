// Declare globally so DOMContentLoaded can initialize them
let addButton, taskInput, taskList;

// Load tasks from Local Storage on page load
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // Don't re-save to storage
}

// Add a task to the DOM and optionally save to Local Storage
function addTask(taskText = null, save = true) {
    // Get text from input if not passed in
    if (!taskText) {
        taskText = taskInput.value.trim();
    }

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create <li> element with task text
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    // Handle remove action
    removeBtn.onclick = () => {
        li.remove(); // Remove from DOM
        removeFromLocalStorage(taskText); // Remove from storage
    };

    // Append button to li, and li to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Save to Local Storage
    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Clear input
    taskInput.value = "";
}

// Remove task from Local Storage
function removeFromLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

// Initialize app once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addButton = document.getElementById('add-task-btn');
    taskInput = document.getElementById('task-input');
    taskList = document.getElementById('task-list');

    loadTasks(); // Load tasks from Local Storage

    // Add task on button click
    addButton.addEventListener('click', () => addTask());

    // Add task on Enter key
    taskInput.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
