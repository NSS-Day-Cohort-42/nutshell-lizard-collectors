import { saveEvent } from "./eventDataProvider.js"

const eventHub = document.querySelector(".container")


export const eventHTMLConverter = (eventObj) => {
    return `
        <section class="event__card">
            <div class="event__name">${eventObj.name}</div>
            <div class="event__date">${eventObj.date}</div>
            <div class="event__location">${eventObj.city}, ${eventObj.state}</div>
            
            <button class="event__weather">Show Weather</button>
            <button class="edit__event">Edit Event</button>
            <button class="deleteEvent">Delete</delete>

        </section>
    `
}

export const eventForm = () => {
return`
        
        <h4>Enter Event</h4>
        <div>Event Name:<input type="text" id="eventForm--name" placeholder="Enter Event Name" /></div>
        <div>City: <input type="text" id="eventForm--city" placeholder="eg. Nashville" /></div>
        <div>State:<input type="text" id="eventForm--state" placeholder="TN" maxlength="2" />
        <div>Date:<input type="date" name="eventDate" id="eventForm--date"></div>
        <button id="closeEvent">Close</button>
        <button id="saveEvent">Create Event</button>
        
        `
    }

 
    
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveEvent") {
            const eventName = document.querySelector("#eventForm--name")
            const eventCity = document.querySelector("#eventForm--city")
            const eventState = document.querySelector("#eventForm--state")
            const eventDate = document.querySelector("#eventForm--date")
           
                
            const newEvent = {
                name: eventName.value,
                city: eventCity.value,
                state: eventState.value,
                date: eventDate.value


            }
            saveEvent(newEvent)
        }
    })