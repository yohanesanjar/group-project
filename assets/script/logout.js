function deleteItem(){
    alert('anda telah keluar')
    localStorage.removeItem('token')
    window.location = '../../index.html';
}