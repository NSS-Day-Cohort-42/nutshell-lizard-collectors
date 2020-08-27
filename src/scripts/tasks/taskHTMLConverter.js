const eventHub = document.querySelector(".contentLeft--main_tasks")

import { saveTaskEntry, updateTask } from "./taskDataProvider.js";


export const TaskEntryComponent = (tasks) => {
    return `
    <section id="entry--${tasks.id}" class="taskEntry">
           <div class="journal__entry">${tasks.task}</div>


           <button id="entryDelete--${ tasks.id }">Delete</button>
         <button id="editEntry--${tasks.id}">Edit</button>
         <button id="taskRecordButton--${tasks.id}">Mark as complete</button>

         <button id="taskRecordButton">Record Tasks</button>
        
         <fieldset class="TaskEntry">
         <label id=taskLabel for="taskEntry">Journal Entry</label>
         <textarea id="taskRecord" name="taskEntry" rows="4" cols="50"
           style="margin: 0px 347px 0px 0px; width: 128px; height: 52px;"></textarea>
       </fieldset>
       <input type="hidden" name="entryId" id="entryId" value="">
       <input type="hidden" name="taskUserId" id="taskUserId" value="">
        <input type="hidden" name="taskCompleted" id="taskCompleted" value="">

         
        </section>
    `
}

eventHub.addEventListener("click", clickEvent => {
    
    console.log("event")
    if(clickEvent.target.id === "taskRecordButton") {
        debugger
        const taskId = document.querySelector("#entryId");
        const taskEntry = document.querySelector("#taskRecord")
        const taskUserId = document.querySelector("#taskUserId")
        const taskCompleted = document.querySelector("#taskCompleted")
       
        
        const newTask = {
            id: taskId.value,
            userId: taskUserId.value,
            entry: taskEntry.value,
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
