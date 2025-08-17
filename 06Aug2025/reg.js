function Register(event) {
    event.preventDefault();
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm_password").value.trim();
    if (!fullname || !email || !username || !password || !confirmPassword) {
        alert("All fields are required.");
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    const usernamePattern = /^[a-zA-Z0-9_]{3,15}$/;
    if (!usernamePattern.test(username)) {
        alert("Username must be 3-15 characters long and can only contain letters, numbers, and underscores.");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Registration successful!");
}
