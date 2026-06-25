function downloadResume() {
    window.open("assets/Raichel_David_Resume.pdf")
}
document.getElementById('click-to-mail').addEventListener('click', function (event) {
    event.preventDefault();
    const email = 'raicheldavid22@gmail.com';
    window.location.href = `mailto:${email}`;
});

function sendMail() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields");
        return;
    }

    let params = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send("service_16vzzpe", "template_7ucp4rf", params)
        .then(function () {
            alert("Message sent successfully");
        });
}