function beforeSign(){
    alert('anda belum sign in')
    window.location = '../../signin.html'
}
$(document).ready(function () {
    let x = localStorage.getItem("token")
    let video = document.getElementById('video')
    let videoEl = document.createElement('a')
    videoEl.classList.add('nav-link')
    videoEl.innerText = `Video`
    videoEl.href = '../../video.html'
    if (x) {
        document.getElementById('avatar').style.display = 'block'
        document.getElementById('masuk').style.display = 'none'
        document.getElementById('video-before').style.display = 'none'
        
        video.appendChild(videoEl)
    } else {
        document.getElementById('avatar').style.display = 'none'
        document.getElementById('masuk').style.display = 'block'
    }
});
