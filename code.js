function createTask() {
    const taskInput = document.querySelector("input");
    if (taskInput.value.trim() === "") {
        alert ("digite algo");
        return}

    const checkBoxInput = document.createElement ("input");
        checkBoxInput.type = "checkbox";
        checkBoxInput.id = "checkBoxInput";
        
    const taskList = document.querySelector ("ul");
        
    const task = document.createElement("li");
        task.innerHTML = taskInput.value;
        task.id = "task";

    const span = document.createElement ("span");

    const deleteButton = document.createElement("button");
        deleteButton.id = "deleteButton"
        deleteButton.addEventListener("click", function() {
            span.remove();})
    span.appendChild (checkBoxInput);
    span.appendChild (task);
    span.appendChild (deleteButton)
    taskList.appendChild (span);
    }
    taskInput.value = "" 

document.addEventListener("keypress", function (e){
    if (e.key === "Enter") createTask();  
})