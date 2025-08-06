function processPayment(event) {
    event.preventDefault();
    const cardName = document.getElementById("cardName").value.trim();
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expiry = document.getElementById("expiry").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const cardNamePattern = /^[a-zA-Z\s]+$/;
    const cardNumberPattern = /^\d{16}$/;
    const cvvPattern = /^\d{3}$/;
    demo.innerText = '';
    if (cardName === "" || cardNumber === "" || expiry === "" || cvv === "") {
        demo.innerText = "All fields are required.";
        alert("All fields are required.");
    } 
    else if (!cardNamePattern.test(cardName)) {
        demo.innerText = "Card name should contain only letters and spaces.";
        alert("Card name should contain only letters and spaces.");
    } 
    else if (!cardNumberPattern.test(cardNumber)) {
        demo.innerText = "Card number should be 16 digits long.";
        alert("Card number should be 16 digits long.");
    } 
    else if (!cvvPattern.test(cvv)) {
        demo.innerText = "CVV should be 3 digits long.";
        alert("CVV should be 3 digits long.");
    } 
    else {
        demo.innerText = "Payment successful!";
        demo.style.color = "green";
        alert("Payment successful!");
    }
}
