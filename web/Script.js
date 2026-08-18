// Get the registration form
document.getElementById("registrationForm").addEventListener("submit", function(event) {

    // Stop the form from submitting automatically
    event.preventDefault();

    // Get values from the form
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value;
    let course = document.getElementById("course").value;
    let eventChoice = document.getElementById("event").value;
    let participants = document.getElementById("participants").value;
    let address = document.getElementById("address").value.trim();
    let studentId = document.getElementById("studentId").files.length;
    let agreement = document.getElementById("agreement").checked;

    // Check name
    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    // Check email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check phone number
    let phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Check date of birth
    if (dob === "") {
        alert("Please select your date of birth.");
        return;
    }

    // Check gender
    let gender = document.querySelector('input[name="gender"]:checked');

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    // Check course
    if (course === "") {
        alert("Please select your course.");
        return;
    }

    // Check event
    if (eventChoice === "") {
        alert("Please select an event.");
        return;
    }

    // Check number of participants
    if (participants === "" || participants < 1 || participants > 5) {
        alert("Number of participants must be between 1 and 5.");
        return;
    }

    // Check address
    if (address === "") {
        alert("Please enter your address.");
        return;
    }

    // Check student ID upload
    if (studentId === 0) {
        alert("Please upload your student ID.");
        return;
    }

    // Check agreement
    if (!agreement) {
        alert("Please agree to the event rules and regulations.");
        return;
    }

    // If everything is correct
    alert("🎉 Registration Successful!");

});
