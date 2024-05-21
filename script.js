function addTask() {
    var taskInput= document.getElementById("taskInput");
    var tasklist =document.getElementById("taskList");

    if (taskInput.value === "") {
    alert("Please enter a task!");
    return;
    }

    var li = document.createElement("li");
    li.innerHTML="<span onclick='deleteTack(this)'> &times;</span>" + taskInput.value;
    taskList.appendChild(li);
    
     taskinput.value = "";
    }
    
     function deleteTask(task) {
      task.parantElement.remove();
     }