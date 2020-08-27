import { deleteEvent } from "./eventDataProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteEvent--")) {
        const [ prompt, eventIdString ] = clickEvent.target.id.split("--") 

        deleteEvent(eventIdString)
    }
})

export const eventHTMLConverter = (eventObj) => {
    return `
        <section class="event__card">
            <div class="event__name">${eventObj.name}</div>
            <div class="event__date">${eventObj.date}</div>
            <div class="event__location">${eventObj.city}, ${eventObj.state}</div>
            
            <button class="event__weather">Show Weather</button>
            <button class="edit__event">Edit Event</button>
            <button id="deleteEvent--${eventObj.id}">Delete</button>

        </section>
    `
}

