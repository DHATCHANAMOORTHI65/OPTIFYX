const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("taskList");
function addTask(){
    const taskText=taskInput.value;
    console.log(taskText)
    if(taskText==="") return;

    const li=document.createElement("li");
    li.textContent=taskText;
    li.onclick=()=>toggleComplete(li);

    taskList.appendChild(li);
    saveTasks();
    taskInput.value="";
}
function toggleComplete(taskItem){
    taskItem.classList.toggle("completed");
    saveTasks();
}
function saveTasks(){
    const tasks=Array.from(taskList.children).map(task=> ({
        text:task.textContent,
        completed:task.classList.contains("completed"),
    }));
    console.log(tasks.text);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
function loadTasks(){
    const tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.forEach(task=> {
        const li=document.createElement("li");
        li.textContent=task.text;
        if(task.completed){ 
            li.classList.add("completed");
        }
        li.onclick=()=>toggleComplete(li);
        taskList.appendChild(li);
    });
}
loadTasks();