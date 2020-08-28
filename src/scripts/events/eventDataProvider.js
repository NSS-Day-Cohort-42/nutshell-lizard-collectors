let events = []

const eventHub = document.querySelector(".container")

const dispatchEventChange = () => {
    const eventStateChange = new CustomEvent("eventStateChanged")
    eventHub.dispatchEvent(eventStateChange)
}

export const useEvents = () => {
    const sortedByDate = events.sort(
        (a,b) =>{
            return new Date(a.date) - new Date(b.date)
        }
        
    )
    return sortedByDate.slice()
}

export const getEvents = () => {
    return fetch("http://localhost:8088/events")
        .then(response => response.json())
        .then(parsedEvents => {
            events = parsedEvents
           
        })
}



export const saveEvent = (event) => {
    const Jevent = JSON.stringify(event)
    return fetch("http://localhost:8088/events", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: Jevent
    })
    .then(getEvents)
    .then(dispatchEventChange)
}
export const updateEvents = (eventObject) => {
    return fetch(`http://localhost:8088/events/${eventObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(eventObject)
    })
    .then(getEvents)
    .then(dispatchEventChange)

}

export const deleteEvent = (eventId) => {
    debugger
    return fetch(`http://localhost:8088/events/${ eventId }`, {
        method: "DELETE"
    })
    .then(getEvents)
    .then(dispatchEventChange)
    .catch(
        (error) => {
            console.log(error)
        }
    )
}