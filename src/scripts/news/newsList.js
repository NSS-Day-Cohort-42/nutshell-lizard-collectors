import { getNews, useNews } from "./newsDataProvider.js"
import { newsHTML, newsFormModal } from "./newsHTMLConverter.js"

const contentTarget = document.querySelector(".contentLeft--main__rightNews")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("eventStateChanged", () => {
    const allNews = useNews()
    newsList(allNews)
})

eventHub.addEventListener('click', (clickEvent) => {
    if (clickEvent.target.id === "new-article-btn") {
        // const dialog = newsFormModal()
        newArticleFormRender()
        const dialog = document.querySelector(".modalContainer--news")
        dialog.showModal()
    }
})

const render = () => {
    const newsRender = useNews()
    contentTarget.innerHTML = `
    <div class="news-border">
    <h1 class="news-text news-heading">-News-</h1>
    <button class="new-article-button" id="new-article-btn">New Article</button>
    ${newsRender.map(newsObj => newsHTML(newsObj)).join('')}
    <dialog class="modalContainer--news"></dialog>
    </div>
    `
}

const newArticleFormRender = () => {
    const modalTarget = document.querySelector(".modalContainer--news")
    modalTarget.innerHTML = newsFormModal()
}

export const newsList = () => {
    getNews().then(() => {
        const news = useNews()

        render(news)
    })
}
