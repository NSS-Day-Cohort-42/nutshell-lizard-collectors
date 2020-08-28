const eventHub = document.querySelector(".contentLeft--main_tasks")

import { saveTaskEntry, updateTask, deleteTask } from "./taskDataProvider.js";




eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("entryDelete--")) {
        const [ prompt, taskIdString ] = clickEvent.target.id.split("--")  // "3"

        deleteTask(taskIdString)
    }
})

export const TaskEntryComponent = (tasks) => {
    return `
    <section id="entry--${tasks.id}" class="taskEntry">
           <div class="journal__entry">${tasks.task}</div>
           <button id="entryDelete--${ tasks.id }">Delete</button>
           <button id="editEntry--${tasks.id}">Edit</button>
           <button id="taskRecordButton--${tasks.id}">Mark as complete</button>
           

         
        </section>
    `
}

eventHub.addEventListener("click", clickEvent => {
    
    console.log("event")
    if(clickEvent.target.id === "taskRecordButton") {
        debugger
        const taskEntry = document.querySelector("#taskRecord")
        const taskUserId = document.querySelector("#taskUserId")
        const taskCompleted = document.querySelector("#taskCompleted")
       
        
        const newTask = {
            userId: taskUserId.value,
            task: taskEntry.value,
            complete: taskCompleted.value



            
            
            
        }
        
        saveTaskEntry(newTask)
        
    }
})
