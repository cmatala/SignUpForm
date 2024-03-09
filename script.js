// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the password and confirm password fields
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm_password");

    // Function to check if passwords match
    function checkPasswordsMatch() {
        // Get the values of both password fields
        const password = passwordField.value;
        const confirmPassword = confirmPasswordField.value;

        // Check if passwords match
        if (password !== confirmPassword) {
            // If passwords don't match, set border color of password field to red
            passwordField.style.borderColor = "red";
            confirmPasswordField.style.borderColor = "red";
        } else {
            // If passwords match, reset border color to default
            passwordField.style.borderColor = "";
            confirmPasswordField.style.borderColor = "";
        }
    }

    // Event listener to check passwords on input in either field
    passwordField.addEventListener("input", checkPasswordsMatch);
    confirmPasswordField.addEventListener("input", checkPasswordsMatch);
});
