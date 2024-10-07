const apiUrl = 'http://aps.pregps.cl:4000/api-docs';


function login(user, password)
{
    fetch(apiUrl + '/login', {
        method: "POST", 
        body: JSON.stringify({ username: user, password: password }),
        headers: {"Content-Type": "application/json",},
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
        outputElement.textContent = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        console.error('Error:', error);
      });
}

