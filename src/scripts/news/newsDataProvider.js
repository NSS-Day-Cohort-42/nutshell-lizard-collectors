let news = []

export const useNews = () => news.slice()

export const getNews = () => {
    return fetch("http://localhost:8088/news")
        .then(res => res.json())
        .then(newsArr => {
            news = newsArr
        })
}