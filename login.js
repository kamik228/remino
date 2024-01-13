const URL = "http://134.0.118.192:9090/api/v1"


function CreateUser() {
    console.log(document.getElementById("login-input"))
    fetch(URL + "/user/login", {
        method: "POST",
        body: JSON.stringify({
            "login": document.getElementById("login-input").value,
        }),
    });
}



function ToNextPage(){
    CreateUser();
    //window.location.href = "list.html"; 
}

