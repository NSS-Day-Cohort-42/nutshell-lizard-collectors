
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".newEventFormBox")



eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("createNewEvent")) {
        
       return contentTarget.innerHTML =  `
        <dialog class="newEventFormBox">
        <h4>Enter Event</h4>
        <div>Event Name:<input type="text" id="eventForm--name" placeholder="Enter Event Name" /></div>
        <div>City: <input type="text" id="eventForm--city" placeholder="eg. Nashville" /></div>
        <div><input type="text" id="eventForm--city" placeholder="TN" maxlength="2" />
        
        </dialog>
        `
    }
       
    
    
})