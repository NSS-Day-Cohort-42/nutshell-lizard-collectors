import { getEvents,useEvents } from "./eventDataProvider.js"
import { eventHTMLConverter, eventForm } from "./eventHTMLConverter.js"
import { getWeather, useWeather } from "../weather/weatherDataProvider.js"
import { weatherHTML } from "../weather/weatherHTMLConverter.js"



const contentTarget = document.querySelector(".contentLeft--main__rightEvents")
const eventHub = document.querySelector(".container")

export const eventList = () => {

    getEvents()
        .then(() => {
            const eventArray = useEvents()
            let eventHTMLRepresentations = ""
            let weatherHTMLRep = ""
            eventArray.forEach(event => {
                getWeather(event)
                .then(()  => {
                    const weatherArray=useWeather()
                    const todayWeather = weatherArray[0]
                    eventHTMLRepresentations += eventHTMLConverter(event,todayWeather) 

                    contentTarget.innerHTML = `
                    <h2>Events</h2>
                    <article class="eventList">
                    <dialog class="newEventFormBox" id="eventClose"></dialog>
                    <dialog class="weatherModal" id="weatherClose"></dialog>
                    <button id="createNewEvent">Create New Event</button>
                       ${ eventHTMLRepresentations }
                       
                    </article>
                `
                })
            })
            

        })
}

eventHub.addEventListener("eventStateChanged", () => {
    const newEvents = useEvents()
    eventList(newEvents)
})


eventHub.addEventListener('click', (clickEvent) => {
    if (clickEvent.target.id === "createNewEvent") {
        eventFormRender()
        const dialog = document.querySelector(".newEventFormBox")
        dialog.showModal()
    } 
    else if(clickEvent.target.id === "closeEvent") {
        const dialogClass = document.getElementById("eventClose")
        
        dialogClass.close()
    }

})
const eventFormRender = () => {
    const modalTarget = document.querySelector(".newEventFormBox")
    modalTarget.innerHTML = eventForm()
}



