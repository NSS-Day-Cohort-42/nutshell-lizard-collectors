import { getNews, useNews } from "./newsDataProvider.js"
import { newsHTML, newsFormModal } from "./newsHTMLConverter.js"

const contentTarget = document.querySelector(".contentLeft--main__rightNews")
const eventHub = document.querySelector(".container")

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
    ${newsRender.map(newsObj => newsHTML(newsObj)).join('')}
    <dialog class="modalContainer--news"></dialog>
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