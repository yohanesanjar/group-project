let params = new URLSearchParams(window.location.search);
let id = params.get('id');

let api_url = 'https://634cf141acb391d34a8f7b4a.mockapi.io/video-learning'

async function getVideo(api_url){
    let response = await fetch(api_url)
    let result = await response.json()

    return result
}
getVideo(`${api_url}/${id}`)
.then(function (result) {
    let vidio = document.getElementById('vidio')
    let judul = document.getElementById('judul')
    let deskripsi = document.getElementById('deskripsi')
    
    vidio.src = result.link
    judul.innerText = result.judul
    deskripsi.innerText = result.deskripsi
})