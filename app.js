document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("addTaskBtn");
    const input = document.getElementById("taskInput");
    const ul = document.getElementById("taskList");

    function createTask(taskText) {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.addEventListener("click", () => {
            deleteTask(li);
        });

        const taskTextElement = document.createElement("span");
        taskTextElement.innerText = taskText;

        const dateTime = document.createElement("span");
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString();
        const formattedTime = currentDate.toLocaleTimeString();
        dateTime.innerText = `    Created on [${formattedDate}]  at  [${formattedTime}]  `;

        li.appendChild(checkbox);
        li.appendChild(taskTextElement);
        li.appendChild(dateTime);
        li.appendChild(removeBtn);

        
        ul.appendChild(li);
    }

    
    function deleteTask(taskElement) {
        ul.removeChild(taskElement);
    }

    btn.addEventListener("click", () => {
        if (input.value.trim() !== "") {
            createTask(input.value);
            input.value = ""; 
        }
    });

});
