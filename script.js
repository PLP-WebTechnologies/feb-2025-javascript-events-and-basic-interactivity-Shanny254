// Event listener for form submission with validation
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    const nameInput = document.getElementById('name');
    const errorMessage = document.getElementById('error-message');

    // Check if input is empty
    if (nameInput.value.trim() === '') {
        errorMessage.textContent = "Name is required!";
    } else {
        errorMessage.textContent = '';
        alert("Form submitted successfully with name: " + nameInput.value);
    }
});

// Event listener for greeting button
document.getElementById('greetingButton').addEventListener('click', function() {
    const greetingDiv = document.getElementById('greeting');
    greetingDiv.textContent = "Hello, welcome to our website!";
});
