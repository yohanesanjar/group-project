async function getArticles(api_url){
    let response = await fetch(api_url)
    let result = await response.json()

    return result
}
getArticles(`${api_url}/${id}`)
.then(function (result) {
    let judul = document.getElementById('judul')
    let image = document.getElementById('image')
    let teks = document.getElementById ('teks')
    
    judul.innerText = result.judul
    image.src = result.thumbnail
    teks.innerText = result.deskripsi
})