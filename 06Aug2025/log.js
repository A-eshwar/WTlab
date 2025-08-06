function loginDetection(event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const demo = document.getElementById("demo");
    if (username === "" || pass === "") {
        demo.innerText = "Username or password cannot be empty";
        alert("Username or password cannot be empty");
    } 
    else if (pass.length < 8) {
        demo.innerText = "Password must be at least 8 characters";
        alert("Password must be at least 8 characters");
    } 
    else {
        demo.innerText = "Login attempted with username: " + username;
        alert("Login attempted with username: " + username);
    }
}
