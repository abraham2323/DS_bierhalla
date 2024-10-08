console.log('login')
const loginForm = document.getElementById('login-form'); 
const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');

loginForm.addEventListener('submit', (e) => {
  console.log('submit event')
  e.preventDefault();
  let errors = [];

  if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/.test(loginPassword.value)){
    error.push('La contraseña no cumple con los requisitos');
 }

  if (loginUsername.value !== 'sigecont' || loginPassword.value !== 'asdf') { //reemplazar una vez tengamos la api
    errors.push('credenciales invalidas');
  }

  if (errors.length > 0) {
    console.log('error')
    alert(errors.join('\n'));
  }
  else {
    window.location.href = "../pages/dashboard.html";
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
