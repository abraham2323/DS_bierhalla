// js/main.js
console.log('main loaded');
document.addEventListener('DOMContentLoaded', function () {
    loadComponent('../components/header.html', 'header');
    loadComponent('../components/sidebar.html', 'sidebar');
    loadComponent('../components/footer.html', 'footer');
});

getCookie('theme') === 'dark' ? setDarkTheme() : setLightTheme();

function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

function setCookie(name, value, days) {
    let expires = "";
    if (days){
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); 
      expires = "expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (encodeURIComponent(value) || "") + ";" + expires + ";path=/";
  }

  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }

  function removeCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  function changeClass(elementId, originalClass, newClass) {
    const element = document.getElementById(elementId);  
    element.classList.remove(originalClass); // Remove mystyle class from DIV
    element.classList.add(newClass); // Add newone class to DIV
  }

  function setLightTheme(){
    let r = document.querySelector(':root')
    r.style.setProperty('--background-color', ' #f8f9fa');
    r.style.setProperty('--component-color', ' #007bff');
    r.style.setProperty('--sidebar-color', ' #e9ecef');
    r.style.setProperty('--font-color', ' #333');
    r.style.setProperty('--component-font-color', ' #fff');
    r.style.setProperty('--component-hover-color', '#0056b3');
    r.style.setProperty('--component-hover-border-color', '#004085');
    r.style.setProperty('--border-color', '#000');
  }
  
  function setDarkTheme(){
    let r = document.querySelector(':root')
    r.style.setProperty('--background-color', ' #333');
    r.style.setProperty('--component-color', ' #004b9c');
    r.style.setProperty('--sidebar-color', ' #232628');
    r.style.setProperty('--font-color', ' #eaeaea');
    r.style.setProperty('--component-font-color', ' #fff');
    r.style.setProperty('--component-hover-color', '#0056b3');
    r.style.setProperty('--component-hover-border-color', '#004085');
    r.style.setProperty('--border-color', '#f8f9fa');
  }