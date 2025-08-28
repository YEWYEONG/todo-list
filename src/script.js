function addTask() {
  const title = document.getElementById("title").value.trim();
  const desc = document.getElementById("description").value.trim();
  const priority = document.getElementById("priority").value;

  if (!title) {
    alert("Please enter a task title.");
    return;
  }

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  taskDiv.innerHTML = `
    <div class="task-content">
    <span class="task-priority ${priority}">${priority}</span>
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
    <div class="task-buttons">
      <button class="btn-complete">Complete</button>
      <button class="btn-edit">Edit</button>
      <button class="btn-delete">Delete</button>
    </div>
  `;

  // Mark
  taskDiv.querySelector(".btn-complete").onclick = function () {
    taskDiv.classList.toggle("completed");
    this.textContent = taskDiv.classList.contains("completed") ? "Incomplete" : "Complete";
  };

  // Delete
  taskDiv.querySelector(".btn-delete").onclick = function () {
    taskDiv.remove();
  };

  // Edit
  taskDiv.querySelector(".btn-edit").onclick = function () {
    const newTitle = prompt("Task Title:", taskDiv.querySelector("h2").textContent);
    const newDesc = prompt("Task Description:", taskDiv.querySelector("p").textContent);
    const newPriority = prompt("Priority (High, Medium, Low):", taskDiv.querySelector(".task-priority").textContent);

    if (newTitle) taskDiv.querySelector("h2").textContent = newTitle;
    if (newDesc !== null) taskDiv.querySelector("p").textContent = newDesc;
    if (["High", "Medium", "Low"].includes(newPriority)) {
      const prioritySpan = taskDiv.querySelector(".task-priority");
      prioritySpan.textContent = newPriority;
      prioritySpan.className = "task-priority " + newPriority;
    }
  };

  document.getElementById("task-list").appendChild(taskDiv);
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
}
