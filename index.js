// Add your code here

function submitData (userName, userEmail) {
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
    .then(res => res.json())
    .then(object => console.log(bodyContent))
    .catch(error => {
        alert("There is an error")
        console.log("An error somewhere")
    })

}

submitData()