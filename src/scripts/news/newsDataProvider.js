let news = []

const eventHub = document.querySelector(".container")

const dispatchEventChange = () => {
    const eventStateChange = new CustomEvent("eventStateChanged")
    eventHub.dispatchEvent(eventStateChange)
}

export const useNews = () => news.slice()

export const getNews = () => {
    return fetch("http://localhost:8088/news")
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
        .catch(
            (error) => {
                console.log(error)
            }
        )
}