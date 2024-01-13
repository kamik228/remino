const URL = "http://134.0.118.192:9090/api/v1"


function CreateNote() {
    fetch(URL + "/note/create", {
        method: "POST",
        body: JSON.stringify({
            "user_id": 11,
            "note_text": document.getElementById("note-text").value,
        }),
    });
}



