
console.log('config loaded');
const themeChanger = document.getElementById('theme-changer');
const theme = document.getElementById('theme');
const themeError = document.getElementById('theme-error');

themeChanger.addEventListener('submit', (e) => {
    let messages = [];
    console.log(theme.value)
    if (theme.value === 'light' || theme.value === 'dark') {
      setCookie('theme', theme.value, 400);
    }
    else if (theme.value === '' || theme.value === null) {
      messages.push('Tema requerido');
    }
    else {
      messages.push('Tema invalido');
    }
  
    if (messages.length > 0) {
      e.preventDefault();
      themeError.innerText = messages.join(', ');
    }
  })

