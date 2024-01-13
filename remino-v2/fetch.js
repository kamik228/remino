var URL = "http://89.108.81.229:9090/api/v1";

//create requests

function Create() {

    fetch(URL + "/user/create", {
        method: "POST",
        body: JSON.stringify({
            "login": document.getElementById('create').value,
        }),
    })
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }

        document.getElementById("error").innerHTML = 'User with this nickname already exists';
        return null;
    })
    .then(function (response) {
        if (response == null) {
            return
        }

        localStorage.setItem("id", response.user_id);
        localStorage.setItem("user", document.getElementById('create').value);
        window.location.href = 'list.html';
    });

}

//login requests

function Login() {

    fetch(URL + "/user/login", {
        method: "POST",
        body: JSON.stringify({
            "login": document.getElementById('log-in').value,
        }),
    })
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }

        document.getElementById("error2").innerHTML = 'User not found';
        return null;
    })
    .then(function (response) {
        if (response == null) {
            return
        }

        localStorage.setItem("id", response.user_id);
        localStorage.setItem("user", document.getElementById('log-in').value);
        window.location.href = 'list.html';
    });

}

