console.log('login')
const loginForm = document.getElementById('login-form'); 
const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');

loginForm.addEventListener('submit', (e) => {
  console.log('submit event')
  e.preventDefault();
  let errors = [];

  if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/.test(loginPassword.value)){
    alert('La contraseña no cumple con los requisitos');
  }
  else login(loginUsername.value, loginPassword.value);
});