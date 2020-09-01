import { saveNewArticle, deleteNewsArticle } from "./newsDataProvider.js"
import { newsList } from "./newsList.js"

const eventHub = document.querySelector('.container')

// click event that closes the modal when clicked
eventHub.addEventListener('click', event => {
    const dialog = event.target.parentNode.parentNode
    if (event.target.id === 'close') {
        dialog.close()
    }
})

export const newsHTML = (newsObj) => {
    return `
    <div class="news">
        <p class="news-text">Title: <a href="${ newsObj.url }">${ newsObj.title }</a></p>
        <p class="news-text">Synopsis: ${ newsObj.synopsis }</p>
        <p class="news-user">Saved by: ${ newsObj.user.username }</p>
        <button class="delete-news-article" id="deleteArticle--${ newsObj.id }">Delete</button>
    </div>
    `
}

export const newsFormModal = () => {
    return `
    <form>
    <h1 class="news-modal-heading">Save A New Article</h1>
    <fieldset class="news-modal-field">
    <label for="news-title">Title:</label>
    <input type="text" id="news-title" name="news-title" placeholder="Input article name here">
    </fieldset>
    <fieldset class="news-modal-field">
    <label for="news-synopsis">Synopsis</label>
    <input type="text" class="newsSynopsis" id="news-synopsis" placeholder="The highlights of this article are..."></input>
    </fieldset>
    <fieldset class="news-modal-field">
    <label for="news-URL">Article URL</label>
    <input type="text" id="news-URL" name="news-URL" placeholder="https://www.news.com">
    </fieldset>
    </form>
    <div class="modal-btn">
    <button class="modal-close-btn" id="close">Close</button>
    <button class="modal-save-btn" id="save-new-article">Save Article</button>
    </div>
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