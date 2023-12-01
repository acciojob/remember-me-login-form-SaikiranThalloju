//your JS code here. If required.
// script.js

// Check if there are saved details
if (localStorage.getItem('savedUsername') && localStorage.getItem('savedPassword')) {
    document.getElementById('loginForm').innerHTML += '<button id="existing">Login as existing user</button>';
}

// Event listener for form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var rememberMe = document.getElementById('checkbox').checked;

    // Save details to local storage if "Remember me" is checked
    if (rememberMe) {
        localStorage.setItem('savedUsername', username);
        localStorage.setItem('savedPassword', password);
    } else {
        // Remove saved details if "Remember me" is unchecked
        localStorage.removeItem('savedUsername');
        localStorage.removeItem('savedPassword');
    }

    // Show alert
    alert('Logged in as ' + username);
});

// Event listener for existing user login button
document.getElementById('loginForm').addEventListener('click', function(event) {
    if (event.target.id === 'existing') {
        var savedUsername = localStorage.getItem('savedUsername');
        alert('Logged in as ' + savedUsername);
    }
});
