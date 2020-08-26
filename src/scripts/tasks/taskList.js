
import { useTasks, getTasks } from "./taskDataProvider.js"
import { TaskEntryComponent } from "./taskHTMLConverter.js"

const contentTarget = document.querySelector(".contentLeft--main_tasks")

let tasks = []



/*
    Main component logic function
*/
export const TaskList = () => {
    getTasks()
        .then(() => {
            /*
                Update component state, which comes from application
                state, which came from API state.

                API -> Application -> Component
            */
            tasks = useTasks()

            render()
        })
}

/*
    Component render function
*/
const render = () => {
    contentTarget.innerHTML = tasks.map(task => {
        
    
        const html = TaskEntryComponent(task)

        return html
    }).join("")
}