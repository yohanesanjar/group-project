const url = 'https://63514a2cdfe45bbd55bc13c2.mockapi.io/api/v1/';

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
          window.location = 'index.html';
      
        } else {
          alert('password salah!!!');
        }
      } else {
        alert('user tidak ditemukan.....');
      }
    });
  }
});