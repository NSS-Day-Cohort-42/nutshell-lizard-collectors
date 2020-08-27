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

export const saveTaskEntry = task => {
    return fetch("http://localhost:8088/tasks", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
}

export const updateTask = task => {
    return fetch(`http://localhost:8088/tasks/${ tasks.id }`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
}).then(getTasks)
    .then(dispatchStateChangeEvent)

}
