
import { useTasks, getTasks } from "./taskDataProvider.js"
import { TaskEntryComponent } from "./taskHTMLConverter.js"

const contentTarget = document.querySelector(".contentLeft--main_tasks")
const eventHub = document.querySelector(".container")






/*
    Main component logic function
*/
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
            <fieldset class="TaskEntry">
            <button id="taskRecordButton">Record Tasks</button>
            <fieldset class="TaskEntry">
       <label id=taskLabel for="taskEntry">Journal Entry</label>
       <textarea id="taskRecord" name="taskEntry" rows="4" cols="50"
         style="margin: 0px 347px 0px 0px; width: 128px; height: 52px;"></textarea>
     </fieldset>
    

     <input type="hidden" name="taskId" id="taskId" value="">
     <input type="hidden" name="taskUserId" id="taskUserId" value="">
      <input type="hidden" name="taskCompleted" id="taskCompleted" value=""></input>


                ${ taskHTMLRepresentations }
            </article>
        `

            
        })
}

/*
    Component render function
*/
eventHub.addEventListener("taskStateChanged", () => {
    const allTasks = useTasks()
    TaskList(allTasks)
});
