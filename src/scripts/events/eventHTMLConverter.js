import { saveEvent,deleteEvent } from "./eventDataProvider.js"

const eventHub = document.querySelector(".container")


export const eventHTMLConverter = (eventObj, weatherObj) => {
    const temp=Math.round((weatherObj.main.temp-273.15)*(9/5)+32)
    const feelsLike=Math.round((weatherObj.main.feels_like-273.15)*(9/5)+32)
    const maxTemp=Math.round((weatherObj.main.temp_max-273.15)*(9/5)+32)
    const minTemp=Math.round((weatherObj.main.temp_min-273.15)*(9/5)+32)
    return `
        <section class="event__card">
            <div class="event__name">${eventObj.name}</div>
            <div class="event__date">${eventObj.date}</div>
            <div class="event__location">${eventObj.city}, ${eventObj.state}</div>
            
            
            <button class="edit__event">Edit Event</button>
            <button id="deleteEvent--${eventObj.id}">Delete</button>
            <details class=weather--day> <summary>Show Weather</summary>
    <div>${weatherObj.dt_txt}</div>
    <div>${weatherObj.weather[0].description}</div>
    <div>Temperature: ${temp}F</div>
    <div>Feels like: ${feelsLike}F</div>
    <div>Max temperature: ${maxTemp}F</div>
    <div>Min temperature: ${minTemp}F</div>
    </details>


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

    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id.startsWith("deleteEvent--")) {
            const [ prompt, eventIdString ] = clickEvent.target.id.split("--") 
    
            deleteEvent(eventIdString)
            
        }
    })