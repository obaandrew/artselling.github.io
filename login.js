document.getElementById('loginform').addEventListener('submit', function(event) {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorText = document.getElementById('errorText');
    
    const usernamePattern = /^[a-zA-Z0-9_-]{3,16}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!usernamePattern.test(usernameInput.value)) {
        errorText.textContent = 'Username must contain 3-16 characters (letters, numbers, _, -).';
        errorText.style.display = 'block';
        event.preventDefault();
    } else if (!passwordPattern.test(passwordInput.value)) {
        errorText.textContent = 'Password must contain at least 8 characters, including at least one number, one lowercase and one uppercase letter.';
        errorText.style.display = 'block';
        event.preventDefault();
    } else {
        errorText.style.display = 'none';
        // Additional code to validate against the database/API goes here
    }
});