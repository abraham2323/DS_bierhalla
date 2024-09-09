const loginForm = document.getElementById('register-form'); 
const registerUsername = document.getElementById('register-username');
const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const registerConfirmPassword = document.getElementById('register-confirm-password');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let errors = [];

    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(registerEmail.value)) {
        errors.push('El campo email es requerido');
    }

    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{6,24}$/.test(password.value)){
        errors.push('La contraseña no cumple con los requisitos');
    }

    if (password.value !== confirmPassword.value) {
        errors.push('Las contraseñas no coinciden');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));tr
    }
    else {
        window.location.href = "dashboard.html";
    }

});