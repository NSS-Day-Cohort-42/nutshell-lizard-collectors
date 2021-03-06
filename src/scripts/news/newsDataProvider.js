let news = []

const eventHub = document.querySelector(".container")

const dispatchEventChange = () => {
    const eventStateChange = new CustomEvent("eventStateChanged")
    eventHub.dispatchEvent(eventStateChange)
}

export const useNews = () => {
    const sortedNewsByDate = news.sort(
        (a,b) => {
            return new Date(a.date) - new Date(b.date)
        }
    )
    return sortedNewsByDate.slice()
}

export const getNews = () => {
    return fetch("http://localhost:8088/news?_expand=user")
        .then(res => res.json())
        .then(newsArr => {
            news = newsArr
        })
}

export const saveNewArticle = (articleObj) => {
    fetch("http://localhost:8088/news", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(articleObj)
    })
    .then(getNews)
    .then(dispatchEventChange)
}

export const deleteNewsArticle = (eventId) => {
    return fetch(`http://localhost:8088/news/${ eventId }`, {
        method: "DELETE"
    })
        .then(getNews)
        .then(dispatchEventChange)
        
}