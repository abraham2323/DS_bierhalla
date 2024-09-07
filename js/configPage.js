
console.log('configPage.js loaded');
const themeChanger = document.getElementById('theme-changer');
const theme = document.getElementById('theme');
const themeError = document.getElementById('theme-error');

themeChanger.addEventListener('submit', (e) => {
    let messages = [];
    if (theme.value === '' || theme.value == null) {
      messages.push('Name is required')
    }
    
    if (theme.value === 'dark') {
        darkmode();
    }
  
    if (messages.length > 0) {
      e.preventDefault()
      themeError.innerText = messages.join(', ')
    }
  })

function darkmode() {
    // codigo api o cookie para cambiar tema
  }