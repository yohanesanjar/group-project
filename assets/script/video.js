let api_url = 'https://634cf141acb391d34a8f7b4a.mockapi.io/video-learning'


async function getVideos(){
    let response = await fetch(api_url)
    let result = await response.json()
    console.log(result)
    showVideos(result)
}
getVideos()

async function showVideos(data) {
    let video = document.getElementById('videos')
    data.forEach(videos => {
      const { thumbnail, judul, id } = videos
      const videosEl = document.createElement('div')
      videosEl.classList.add('col')
      videosEl.innerHTML =
        `<div class="card h-100">
        <img src="${thumbnail}" class="card-img-top" style="height: 200px;" alt="${thumbnail}">
        <div class="card-body">
          <h5 class="card-title">${judul}</h5>
            <a href="detail-video.html?id=${id}"><button type="submit" class="btn btn-primary">watch here</button>  </a>
        </div>
      </div>
        `
      video.appendChild(videosEl)
    })
}