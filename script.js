// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select the Add Task button
    const addButton = document.getElementById('add-task-btn');
    
    // Select the task input field
    const taskInput = document.getElementById('task-input');

    // Select the unordered list to display tasks
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new <li> element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Set up the event to remove the task when the button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the task item
        li.appendChild(removeButton);

        // Append the task item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for pressing the "Enter" key in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optionally invoke addTask once on DOMContentLoaded
    // (This line is for demo/testing only; can be removed or modified)
    // addTask(); 
});
