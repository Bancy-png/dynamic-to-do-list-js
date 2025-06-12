// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select elements from the DOM
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Remove whitespace

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new list item (li) element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Set up the event to remove the task when button is clicked
        removeButton.onclick = () => {
            taskList.removeChild(li);
        };

        // Append button to li, then li to the list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // Add click event to the Add Task button
    addButton.addEventListener('click', addTask);

    // Allow pressing Enter key to add a task
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
