function profileCreation(event) {
    event.preventDefault(); 
    const fullname = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const dateOfBirth = document.getElementById("dob").value.trim();
    const username = document.getElementById("username").value.trim();
    const demo = document.getElementById("demo");
    if (fullname === "" || email === "" || dateOfBirth === "" || username === "") {
        demo.innerText = "All fields are required.";
        alert("All fields are required.");
    } else {
        demo.innerText = "Profile created successfully for: " + fullname;
        alert("Profile created successfully for: " + fullname);
    }
}
