const eventHub = document.querySelector(".container")


const dispatchStateChangeEvent = () => {
    const eventStateChange = new CustomEvent("taskStateChanged")
    eventHub.dispatchEvent(eventStateChange)
}

let tasks = []

export const useTasks = () => {
    return tasks.slice()
}


export const getTasks = () => {

return fetch("http://localhost:8088/tasks")
    .then(response => response.json())  
    .then(ParsedEntries => {
       
        tasks = ParsedEntries
        console.log(tasks)
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

export const deleteTask = (taskId) => {
    
    return fetch(`http://localhost:8088/tasks/${ taskId }`, {
        method: "DELETE"
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
    .catch(
        (error) => {
            console.log(error)
        }
    )
}
