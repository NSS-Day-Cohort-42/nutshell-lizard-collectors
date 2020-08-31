import { saveNewArticle, deleteNewsArticle } from "./newsDataProvider.js"
import { newsList } from "./newsList.js"

const eventHub = document.querySelector('.container')

// click event that closes the modal when clicked
eventHub.addEventListener('click', event => {
    const dialog = event.target.parentNode
    if (event.target.id === 'close') {
        dialog.close()
    }
})

export const newsHTML = (newsObj) => {
    return `
    <div class="news">
        <p>Title: <a href="${ newsObj.url }">${ newsObj.title }</a></p>
        <p>Synopsis: ${ newsObj.synopsis }</p>
        <p>Saved by: ${ newsObj.user.username }</p>
    </div>
    <button id="deleteArticle--${ newsObj.id }">Delete</button>
    `
}

export const newsFormModal = () => {
    return `
    <form>
    <h1>Save A New Article</h1>
    <fieldset>
    <label for="news-title">Article Title:</label>
    <input type="text" id="news-title" name="news-title" placeholder="Input article name here">
    </fieldset>
    <fieldset>
    <label for="news-synopsis">Synopsis</label>
    <textarea class="newsSynopsis" id="news-synopsis" placeholder="The highlights of this article are..."></textarea>
    </fieldset>
    <fieldset>
    <label for="news-URL">Article URL</label>
    <input type="text" id="news-URL" name="news-URL" placeholder="https://www.news.com">
    </fieldset>
    </form>
    <button id="close">Close</button>
    <button id="save-new-article">Save Article</button>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "save-new-article") {
        const newsTitle = document.querySelector("#news-title")
        const newsSynopsis = document.querySelector("#news-synopsis")
        const newsURL = document.querySelector("#news-URL")

        const newEvent = {
            title: newsTitle.value,
            synopsis: newsSynopsis.value,
            url: newsURL.value,
            timestamp: Date.now(),
            userId: parseInt(sessionStorage.getItem("activeUser"))
        }
        saveNewArticle(newEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteArticle--")) {
        const [ prompt, eventIdString ] = clickEvent.target.id.split("--")

        deleteNewsArticle(eventIdString)
    }
})