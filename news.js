async function obtainNews() {
    const apiKey = `084e0cc135174cb4bad811a6571ae62a`
    const apiURL = await fetch(`https://newsapi.org/v2/top-headlines?pageSize=100&country=us&apiKey=${apiKey}`);
    let newsContainer = document.querySelector('#news')

    try {
        const responseJson = await apiURL.json();


        const template = responseJson.articles.map((eachNew) => {
            newsContainer.innerHTML += `
                <div class="new">
                <img class="img_news" src="${eachNew.urlToImage} alt="${eachNew.title}" />
                <h2>${eachNew.title}</h2>
                <h4>${eachNew.author}</h4>
                <p>${eachNew.description}</p>
                <a href="${eachNew.url}">Show more!</a>
                </div>
    
            `
        })
        return template;
    }
    catch (error) {
        console.error(error);
        return `ERROR :(`
    }
}
obtainNews();