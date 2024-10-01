// Function to handle user login
function loginUser(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the form fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple check for non-empty fields (you can replace this with a real authentication API)
    if (username && password) {
        // Store login data in localStorage (for demonstration purposes)
        localStorage.setItem('loggedInUser', username);

        // Redirect to the dashboard or homepage after successful login
        // SendMessageToBot()
        window.location.href = 'http://localhost:8080/UI/index.html';

        // Show welcome message and hide login form
        // document.getElementById('welcome-message').innerText = `Welcome, ${username}!`;
        // document.getElementById('login-container').style.display = 'none';
        // document.getElementById('welcome-section').style.display = 'block';
    } else {
        alert("Please enter both username and password");
    }
}

// Function to handle user logout
function logoutUser() {
    // Clear the localStorage
    localStorage.removeItem('loggedInUser');

    // Reset UI
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('login-container').style.display = 'flex';
}

// Function to check if the user is already logged in
function checkLoginStatus() {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        // User is already logged in

        // Redirect to the dashboard or homepage after successful login
        window.location.href = 'http://localhost:8080/UI/index.html';
        // document.getElementById('welcome-message').innerText = `Welcome, ${loggedInUser}!`;
        // document.getElementById('login-container').style.display = 'none';
        // document.getElementById('welcome-section').style.display = 'block';
    } else {
        // User is not logged in
        document.getElementById('login-container').style.display = 'flex';
    }
}

// Add event listener to the form
document.getElementById('login-form').addEventListener('submit', loginUser);

// Check login status when the page loads
window.onload = checkLoginStatus;
