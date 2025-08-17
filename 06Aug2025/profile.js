function profileCreation(event) {
    event.preventDefault(); 
    const fullname = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const username = document.getElementById("username").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[A-Za-z0-9_]{4,15}$/;
    if (!fullname || !email || !dob || !username) {
        alert("All fields are required.");
    }
    else if (isNaN(Date.parse(dob))) {
        alert("Invalid date of birth.");
    }
    else if (!emailRegex.test(email)) {
        alert("Invalid email format.");
    }
    else if (!usernameRegex.test(username)) {
        alert("Username must be 4–15 letters, numbers, or underscores.");
    }
    else {
        alert("Profile created successfully for: " + fullname);
    }
}
