// Add your code here
/* 
function submitData () {
const bodyContent = {
    name : "Wahome Vincent",
    email : "moringa@yahoo.ac.ke"
}
const fetchObject = {
    method : "POST",
    Headers : {
        "Content-Type" : "application/json"
    },
    body : JSON.stringify(bodyContent)
}

    fetch('http://localhost:3000/users',fetchObject)
    .then(response => response.json())
    .then(object => console.log(object))
    .catch(error => {
        alert("There is an error")
        console.log("An error somewhere")
    })

}

submitData() */

function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
    
    const url = 'http://localhost:3000/users';
  
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      document.body.innerHTML = data.id;
    })
    .catch(error => {
      console.log(error);
      document.body.innerHTML = error.message;
    });
  }
  