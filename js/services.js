const apiUrl = 'http://aps.pregps.cl:4000/api-docs';



function login(user, password)
{
    fetch(apiUrl  + '/login', {
        method: "POST", 
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({ "nombre_usuario": user, "password": password }),
    })
      .then(response => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Data not found');
          } else if (response.status === 500) {
            throw new Error('Server error');
          } else {
            throw new Error('Network response was not ok');
          }
        }
        return response.json();
      })
      .then(data => {
        setCookie('token', data.token, 1);
        window.location.href = "../pages/dashboard.html";
      })
      .catch(error => {
        console.error('Error:', error);
        return error;
      });
}

