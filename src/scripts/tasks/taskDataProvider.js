const eventHub = document.querySelector(".main")


const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("taskStateChanged"))

}

let task = []

export const useTasks = () => {
    return task.slice()
}


export const getTasks = () => {

return fetch("http://localhost:8088/tasks")
    .then(response => response.json())  
    .then(ParsedEntries => {
        console.log("tasks")
        task = ParsedEntries
        
    })
}
