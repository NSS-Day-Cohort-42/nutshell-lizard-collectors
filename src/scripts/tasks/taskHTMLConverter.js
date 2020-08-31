const eventHub = document.querySelector(".container")

import { saveTaskEntry, updateTask, deleteTask, useTasks, dispatchStateChangeEvent, markTask} from "./taskDataProvider.js";





export const TaskEntryComponent = (tasks) => {
    return `
    <section id="entryCard" class="taskEntry">
    <div id="task__name" class="task__name">${tasks.name}</div>
    <div id="task__entry" class="journal__entry">${tasks.task}</div>
    <div id="task__date" class="task__date">${tasks.date}</div>
    <button id="deleteTask--${ tasks.id}">Delete</button>
    <button id="editEntry--${tasks.id}">Edit</button>
    <button id="taskRecordButton--${tasks.id}">Mark as complete</button>
    <input type="checkbox" id="myCheck--${tasks.id}">

    
    
    
    
    </section>
    `
}

export const taskForm = () => {
    return `
            
            <h4>Enter Task</h4>
            <div>Task name: <input type="text" id="taskName" placeholder="" /></div>
            <div>Date:<input type="date" name="taskDate" id="taskForm--date"></div>
            <fieldset class="TaskEntry">
            <label id=taskLabel for="taskEntry">Task Entry</label>
            <textarea id="taskRecord" name="taskEntry" rows="4" cols="50" style="margin: 0px 347px 0px 0px; width: 571px; height: 154px;"></textarea>
          </fieldset> 
            <button id="closeTask">Close</button>
            <input type="hidden" name="taskId" id="taskId" value="">
     <input type="hidden" name="taskUserId" id="taskUserId" value="">
      <input type="hidden" name="taskCompleted" id="taskCompleted" value=""></input>
      <button id="saveTask">Create Task</button>
          
            `
}

eventHub.addEventListener("editEntryButtonClicked", () => {
    editTaskEntry()
    console.log("edit") 
   
  });
    const editTaskEntry = () => {
      debugger
      const entryMatchId = event.detail.taskId;
      const entriesCollection = useTasks();
  
      const entryToEdit = entriesCollection.find((tasks) => {
        return entryMatchId === tasks.id;
      });
        //   const taskName = document.querySelector("#taskName")
        //   const entryDate = document.querySelector("#taskForm--date");
        //   const taskEntry = document.querySelector("#taskRecord");
        //   const editTaskId = document.querySelector("#taskId");
          
        //   taskName.value = entryToEdit.name
        //   entryDate.value = entryToEdit.date;
        //   taskEntry.value = entryToEdit.task;
        //   editTaskId.value = entryMatchId
  
  
  };

eventHub.addEventListener("click", clickEvent => {

    console.log("event")
    if (clickEvent.target.id === "saveTask") {
        debugger
        const id = document.querySelector("#taskId");
        const taskName = document.querySelector("#taskName")
        const taskEntry = document.querySelector("#taskRecord")
        const taskUserId = document.querySelector("#taskUserId")
        const taskCompleted = document.querySelector("#taskCompleted")
        const taskDate = document.querySelector("#taskForm--date")
    

        if (id.value === "") {
            const newTask = {
                userId: parseInt(sessionStorage.getItem("activeUser")),
                name: taskName.value,
                task: taskEntry.value,
                complete: taskCompleted.value,
                date: taskDate.value
            }
            saveTaskEntry(newTask)
            } else {
                const editTask = {
                    userId: parseInt(sessionStorage.getItem("activeUser")),
                    name: taskName.value,
                    task: taskEntry.value,
                    complete: taskCompleted.value,
                    date: taskDate.value,
                    id: parseInt(id.value)
                }
                
                updateTask(editTask)
            }
    }


      
       
})
eventHub.addEventListener("click", clickEvent => {
    debugger
    if (clickEvent.target.id.startsWith("myCheck--")) {
        const [prompt, taskIdString] = clickEvent.target.id.split("--")

        markTask(taskIdString)
      

        
        
        //     const taskHide = document.getElementById("entryCard");
        //   if (taskHide.style.display === "none") {
        //       taskHide.style.display = "block";
              
              
        //     } else {
        //       taskHide.style.display = "none";
        //     }

            

            

    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteTask--")) {
        const [prompt, taskIdString] = clickEvent.target.id.split("--")

        deleteTask(taskIdString)
        console.log(taskIdString)
    }
})