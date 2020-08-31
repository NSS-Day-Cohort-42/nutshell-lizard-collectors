const eventHub = document.querySelector(".container")


export const dispatchStateChangeEvent = () => {
    const eventStateChange = new CustomEvent("taskStateChanged")
    eventHub.dispatchEvent(eventStateChange)
}

let tasks = []

export const useTasks = () => {
    const sortedByDate = tasks.sort(
        (a,b) =>{
            return new Date(a.date) - new Date(b.date)
        }
        
    )
    return sortedByDate.slice()
}


export const getTasks = () => {

return fetch("http://localhost:8088/tasks")
    .then(response => response.json())  
    .then(ParsedEntries => {
       
        tasks = ParsedEntries
    
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
    )
}

export const markTask = (taskId) => {
    
    return fetch(`http://localhost:8088/tasks/${ taskId }`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            complete: true
            }),
    })
    .then(getTasks)
    .then(dispatchStateChangeEvent)
    .catch(
        
        
    )
}
