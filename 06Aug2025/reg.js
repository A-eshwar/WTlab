function Register(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const fullname = document.getElementById("fullname").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm_password").value.trim();
    const demo = document.getElementById("demo");
    if (username === "" || email === "" || fullname === "" || password === "" || confirmPassword === "") {
        demo.innerText = "All fields are required.";
        alert("All fields are required.");
    } 
    else if (password !== confirmPassword) {
        demo.innerText = "Passwords do not match.";
        alert("Passwords do not match.");
    } 
    else {
        demo.innerText = "Registration successful for: " + fullname;
        alert("Registration successful for: " + fullname);
    }
}
