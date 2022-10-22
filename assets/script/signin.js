const url = 'https://634cf141acb391d34a8f7b4a.mockapi.io';

async function getMockApi(url) {
  const response = await fetch(url);

  const result = response.json();

  return result;
}

document.getElementById('formSignIn').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    getMockApi(`${url}/users`).then(function (users) {
      const loggingUser = users.find(function (user) {
        return user.username === username;
      });

      if (loggingUser) {
        if (loggingUser.password === password) {
          alert('login berhasil....');
          localStorage.setItem('token', 'user sudah login');
          window.location = '../../artikel.html';      
        } else {
          alert('password salah!!!');
        }
      } else {
        alert('user tidak ditemukan.....');
      }
    });
  }
});