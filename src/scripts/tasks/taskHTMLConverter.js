const eventHub = document.querySelector(".contentLeft--main_tasks")

import { saveTaskEntry, updateTask } from "./taskDataProvider.js";


export const TaskEntryComponent = (tasks) => {
    return `
    <section id="entry--${tasks.id}" class="taskEntry">
           <div class="journal__entry">${tasks.task}</div>
           

         
        </section>
    `
}

eventHub.addEventListener("click", clickEvent => {
    
    console.log("event")
    if(clickEvent.target.id === "taskRecordButton") {
        debugger
        const id = document.querySelector("#entryId");
        const taskEntry = document.querySelector("#taskRecord")
        const taskUserId = document.querySelector("#taskUserId")
        const taskCompleted = document.querySelector("#taskCompleted")
       
        
        const newTask = {
            id: id.value,
            userId: taskUserId.value,
            task: taskEntry.value,
            complete: taskCompleted.value



            
            
            
        };

        if (id.value === "") {
        
        saveTaskEntry(newTask)
        } else {
            newTask.id = parseInt(id.value)
            updateTask(newTask)
        }
        }
    })
