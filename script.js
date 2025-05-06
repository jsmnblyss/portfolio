function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !subject || !message) {
        alert("Please fill in all the blank")
    } else {
        alert("Your message has been sent!")
    }

}

function clearForm() {
    document.getElementById("name").innerHTML = " ";
    document.getElementById("email").innerHTML = " ";
    document.getElementById("subject").innerHTML = " ";
    document.getElementById("message").innerHTML = " ";
}