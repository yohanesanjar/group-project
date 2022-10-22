$(document).ready(function () {
    var x = localStorage.getItem("token");
    if (x) {
        document.getElementById('avatar').style.display = 'block';
        document.getElementById('form-register').style.display = 'none';
    } else {
        document.getElementById('avatar').style.display = 'none';
        document.getElementById('form-register').style.display = 'block';
    }
});
