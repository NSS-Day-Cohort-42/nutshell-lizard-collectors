const eventHub = document.querySelector('.container')

// click event that closes the modal when clicked
eventHub.addEventListener('click', event => {
    if (event.target.id === 'close') {
        const dialog = event.target.parentNode
        dialog.close()
    }
})

export const newsHTML = (newsObj) => {
    return `
    <div class="news">
    <h3>News</h3>
    <button id="new-article-btn">New Article</button>
        <p>Title: ${ newsObj.title }</p>
        <p>Synopsis: ${ newsObj.synopsis }</p>
        <p>Link: ${ newsObj.url }</p>
    </div>
    `
}

export const newsFormModal = () => {
    return `
    <form>
    <h1>Save New Article</h1>
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
    <input type="text" id="news-URL" name="news-URL" placeholder="Input article URL here">
    </fieldset>
    </form>
    <button id="close">Close</button>
    `
}