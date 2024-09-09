const loginForm = document.getElementById('login-form'); 
const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let errors = [];

  if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/.test(password.value)){
    error.push('La contraseña no cumple con los requisitos');
 }

  if (username.value !== 'sigecont' || password.value !== 'asdf') { //reemplazar una vez tengamos la api
    errors.push('credenciales invalidas');
  }

  if (errors.length > 0) {
    alert(errors.join('\n'));tr
  }
  else {
    window.location.href = "dashboard.html";
  }

});



// const apiUrl = 'https://api.com/data';

// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       if (response.status === 404) {
//         throw new Error('Data not found');
//       } else if (response.status === 500) {
//         throw new Error('Server error');
//       } else {
//         throw new Error('Network response was not ok');
//       }
//     }
//     return response.json();
//   })
//   .then(data => {
//     outputElement.textContent = JSON.stringify(data, null, 2);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });