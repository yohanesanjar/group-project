let api_url = 'https://634cf141acb391d34a8f7b4a.mockapi.io/articles'


async function getArticles(){
    let response = await fetch(api_url)
    let result = await response.json()
    console.log(result)
    showArticles(result)
}
getArticles()

async function showArticles(data) {
    let artikel = document.getElementById('articles')
    data.forEach(articles => {
      const { thumbnail, judul, deskripsi,id } = articles
      const articlesEl = document.createElement('div')
      articlesEl.classList.add('row')
      articlesEl.innerHTML =
        ` <div class="col-lg-4">
        <img class="img-fluid" src="${thumbnail}" style="height: 100%; width: 100%;" alt="thumbnail-1.jpeg">
    </div>
    <div class="col-lg-8">
        <div class="title py-2">
            <h3>${judul}</h3>
        </div>
        <div class="paragraph">
            <p style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">${deskripsi}</p>
        </div>
        <div class="more">
        <a class="btn btn-outline-primary btn-sm" href="detail-artikel.html?id=${id}" role="button">view more</a>
        </div>
    </div>
</div>
<div>
<hr>
</div>
        `
      artikel.appendChild(articlesEl)
    })
}