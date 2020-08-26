export const newsHTML = (newsObj) => {
    return `
    <div class="news">
    <h3>News</h3>
    <button>New Article</button>
    <p>
        title: ${ newsObj.title }
        synopsis: ${ newsObj.synopsis }
        link: ${ newsObj.url }
    </p>
    </div>
    `
}