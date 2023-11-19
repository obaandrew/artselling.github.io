document.getElementById('signupform').addEventListener('submit', function(event) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const errorText = document.getElementById('errorText');
    
    if (!nameInput.checkValidity()) {
        errorText.textContent = 'Please enter your name.';
        errorText.style.display = 'block';
        event.preventDefault();
    } else if (!emailInput.checkValidity()) {
        errorText.textContent = 'Please enter a valid email address.';
        errorText.style.display = 'block';
        event.preventDefault();
    } else {
        errorText.style.display = 'none';
    }
});