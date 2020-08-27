const eventHub = document.querySelector(".contentLeft--main_tasks")

import { saveTaskEntry, updateTask } from "./taskDataProvider.js";


export const TaskEntryComponent = (tasks) => {
    return `
    <section id="entry--${tasks.id}" class="taskEntry">
           <div class="journal__entry">${tasks.task}</div>


           <button id="entryDelete--${ tasks.id }">Delete</button>
         <button id="editEntry--${tasks.id}">Edit</button>
         <button id="tasksRecordButton--${tasks.id}">Mark as complete</button>

         <button id="tasksRecordButton">Record Tasks</button>
        
         <fieldset class="TaskEntry">
         <label id=taskLabel for="taskEntry">Journal Entry</label>
         <textarea id="taskRecord" name="taskEntry" rows="4" cols="50"
           style="margin: 0px 347px 0px 0px; width: 128px; height: 52px;"></textarea>
       </fieldset>

         
        </section>
    `
}

eventHub.addEventListener("click", clickEvent => {
    console.log("event")
    if(clickEvent.target.id === "taskRecordButton") {
        const taskId = document.querySelector("#entryId");
        const taskEntry = document.querySelector("#taskRecord")
        const taskUserId = document.querySelector()
       
        
        const newTask = {
            id: taskId.value,
            userId:
            entry: taskEntry.value,


            
            
            
        };

        if (id.value === "") {
        
        saveTaskEntry(newTask)
        } else {
            newTask.id = parseInt(id.value)
            updateTask(newTask)
        }
        }
    })
