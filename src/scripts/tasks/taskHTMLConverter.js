const eventHub = document.querySelector(".container")

import { saveTaskEntry, updateTask, deleteTask } from "./taskDataProvider.js";





export const TaskEntryComponent = (tasks) => {
    return `
    <section id="entryCard" class="taskEntry">
    <div class="journal__entry">${tasks.task}</div>
    <button id="deleteTask--${ tasks.id }">Delete</button>
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
            userId: parseInt(sessionStorage.getItem("activeUser")),
            task: taskEntry.value,
            complete: taskCompleted.value
            
            
            
            
            
            
        }
        
        saveTaskEntry(newTask)
        
    }
})

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteTask--")) {
        const [ prompt, taskIdString ] = clickEvent.target.id.split("--") 

        deleteTask(taskIdString)
        console.log(taskIdString)
    }
})