// js/main.js

document.addEventListener('DOMContentLoaded', function () {
    loadComponent('../components/header.html', 'header');
    loadComponent('../components/sidebar.html', 'sidebar');
    loadComponent('../components/footer.html', 'footer');
});

function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}