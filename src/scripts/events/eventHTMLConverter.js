


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

