import { getEvents,useEvents } from "./eventDataProvider.js"
import { eventHTMLConverter, eventForm } from "./eventHTMLConverter.js"



const contentTarget = document.querySelector(".contentLeft--main__rightEvents")
const eventHub = document.querySelector(".container")

export const eventList = () => {

    getEvents()
        .then(() => {
            const eventArray = useEvents()
            let eventHTMLRepresentations = ""
            eventArray.forEach(event => {
                eventHTMLRepresentations += eventHTMLConverter(event)
            })

            contentTarget.innerHTML = `
            <h2>Events</h2>
            <article class="eventList">
            <dialog class="newEventFormBox"></dialog>
            <button id="createNewEvent">Create New Event</button>
                ${ eventHTMLRepresentations }
            </article>
        `
        })
}

eventHub.addEventListener("eventStateChanged", () => {
    const newEvents = useEvents()
    eventList(newEvents)
})
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "createNewEvent") {
        const createNewEvent = new CustomEvent("associatesClicked")
        eventHub.dispatchEvent(createNewEvent)
       
    }
})

eventHub.addEventListener('click', (clickEvent) => {
    if (clickEvent.target.id === "createNewEvent") {
        eventFormRender()
        const dialog = document.querySelector(".newEventFormBox")
        dialog.showModal()
    } else if(clickEvent.target.id === "eventModalClose") {
        const dialogClass = document.getElementById("eventModalClose")
        
        dialogClass.close()
    }

})
const eventFormRender = () => {
    const modalTarget = document.querySelector(".newEventFormBox")
    modalTarget.innerHTML = eventForm()
}
