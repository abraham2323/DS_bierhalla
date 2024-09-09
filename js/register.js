const registerForm = document.getElementById('register-form'); 
const registerUsername = document.getElementById('register-username');
const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const registerConfirmPassword = document.getElementById('register-confirm-password');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let errors = [];

    if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(registerEmail.value))) {
        console.log('error email')
        errors.push('El campo email es requerido');
    }

    if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{6,24}$/.test(registerPassword.value))){
        console.log('error pass')
        errors.push('La contraseña no cumple con los requisitos');
    }

    if (registerPassword.value !== registerConfirmPassword.value) {
        console.log('pass no coincide')
        errors.push('Las contraseñas no coinciden');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
    }
    else {
        window.location.href = "login.html";
    }

});