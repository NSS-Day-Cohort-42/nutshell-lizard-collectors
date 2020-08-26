import { getNews, useNews } from "./newsDataProvider.js"
import { newsHTML } from "./newsHTMLConverter.js"

const contentTarget = document.querySelector(".contentLeft--main__rightNews")

const render = () => {
    const newsRender = useNews()
    contentTarget.innerHTML = `
    ${newsRender.map(newsObj => newsHTML(newsObj)).join('')}
    `
}

export const newsList = () => {
    getNews().then(() => {
        const news = useNews()

        render(news)
    })
}