let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];

function addTask(){

    const input =
    document.getElementById("taskInput");

    const text =
    input.value.trim();

    if(text === "") return;

    tasks.push({
        id:Date.now(),
        title:text,
        completed:false
    });

    input.value="";

    saveTasks();
    renderTasks();
}

function renderTasks(){

    const taskList =
    document.getElementById("taskList");

    taskList.innerHTML="";

    tasks.forEach(task=>{

        taskList.innerHTML += `
        <div class="task">

            <div class="task-left">

                <input
                type="checkbox"
                ${task.completed ? "checked" : ""}
                onchange="toggleTask(${task.id})">

                <span class="${task.completed ? "completed" : ""}">
                    ${task.title}
                </span>

            </div>

            <div class="actions">

                <button
                class="complete-btn"
                onclick="toggleTask(${task.id})">
                ✓
                </button>

                <button
                class="delete-btn"
                onclick="deleteTask(${task.id})">
                Delete
                </button>

            </div>

        </div>
        `;
    });

    updateStats();
}

function toggleTask(id){

    tasks = tasks.map(task => {

        if(task.id === id){
            task.completed = !task.completed;
        }

        return task;
    });

    saveTasks();
    renderTasks();
}

function deleteTask(id){

    tasks =
    tasks.filter(task => task.id !== id);

    saveTasks();
    renderTasks();
}

function updateStats(){

    const total =
    tasks.length;

    const completed =
    tasks.filter(task =>
    task.completed).length;

    const pending =
    total - completed;

    document.getElementById(
    "totalTask").textContent = total;

    document.getElementById(
    "completedTask").textContent = completed;

    document.getElementById(
    "pendingTask").textContent = pending;
}

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

renderTasks();