document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        displayMessage('Login successful', 'green');
    } else {
        displayMessage('Invalid username or password', 'red');
    }
});
function myfunction {
    window.location.href="f:\G5Services\login form\chickens homepage.html";
}
    

function displayMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = color;
}
