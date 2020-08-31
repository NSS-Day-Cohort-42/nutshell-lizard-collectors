
import { useTasks, getTasks } from "./taskDataProvider.js"
import { TaskEntryComponent , taskForm } from "./taskHTMLConverter.js"

const contentTarget = document.querySelector(".contentLeft--main_tasks")
const eventHub = document.querySelector(".container")

export const TaskList = () => {
    getTasks()
        .then(() => {
           const tasks = useTasks()
            let taskHTMLRepresentations = ""
            tasks.forEach(task => {
                taskHTMLRepresentations += TaskEntryComponent(task)
            })

            contentTarget.innerHTML = `
            <h2>Tasks</h2>
            <article class="taskList">
            <dialog class="newTaskFormBox" id="taskClose"></dialog>
            <fieldset class="TaskEntry">
            <button id="createTask">Create Task</button>
            
    

     


                ${ taskHTMLRepresentations }
            </article>
        `

            
        })
}

  

eventHub.addEventListener("taskStateChanged", () => {
    const allTasks = useTasks()
    TaskList(allTasks)
});


eventHub.addEventListener('click', (clickEvent) => {
    if (clickEvent.target.id === "createTask") {
        taskFormRender()
        const dialog = document.querySelector(".newTaskFormBox")
        dialog.showModal()
    } 
    else if(clickEvent.target.id === "closeTask") {
        const dialogClass = document.getElementById("taskClose")
        
        dialogClass.close()
    }

})
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("editEntry--")) {
            taskFormRender()
            const dialog = document.querySelector(".newTaskFormBox")
            dialog.showModal()
        } 

        const [notUsed, taskId] = clickEvent.target.id.split("--")
        


        const message = new CustomEvent("editEntryButtonClicked", {
            detail: {
                taskId:parseInt(taskId)
            }

        })
   
    eventHub.dispatchEvent(message)
})

const taskFormRender = () => {
    const modalTarget = document.querySelector(".newTaskFormBox")
    modalTarget.innerHTML = taskForm()
}
