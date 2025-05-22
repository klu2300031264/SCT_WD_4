// Add Task Function
function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    const dateTimeInput = document.getElementById("dateTimeInput").value;

    if (taskInput === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskInput} - <strong>${formatDate(dateTimeInput)}</strong></span>
        <div class="task-buttons">
            <button onclick="completeTask(this)">✔️</button>
            <button class="delete-btn" onclick="deleteTask(this)">❌</button>
        </div>
    `;

    taskList.appendChild(li);
    document.getElementById("taskInput").value = "";
    document.getElementById("dateTimeInput").value = "";
}

// Mark Task as Complete
function completeTask(button) {
    const task = button.parentElement.parentElement;
    task.classList.toggle("completed");
}

// Delete Task
function deleteTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
}

// Format Date and Time
function formatDate(dateTime) {
    if (!dateTime) return "No due date";
    const date = new Date(dateTime);
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}
