let button = document.querySelector("#btn")
button.addEventListener('click', updateInfo)

function updateInfo() {
    xhttp.open("GET","https://randomuser.me/api/", true);
    xhttp.send();
}

//Declarar las variables a cambiar
let photo = document.querySelector('#photo')
let firstName = document.querySelector('#first')
let lastName = document.querySelector('#last')
let country = document.querySelector('#country')
let phone = document.querySelector ('#phone')
let email = document.querySelector('#email')


var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let infoPerson = JSON.parse(this.responseText)
                console.log(infoPerson)
                changeRandomPerson(infoPerson)
            }
        };

function changeRandomPerson(infoPerson){
    let data = infoPerson.results
    photo.src=`${data[0].picture.large}`
    firstName.textContent = `${data[0].name.first}`
    lastName.textContent = `${data[0].name.last}`
    country.textContent = `${data[0].location.country}`
    phone.textContent = `${data[0].phone}`
    email.textContent = `${data[0].email}`
}


