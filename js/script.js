$(document).ready(function () {
  $("#loginForm").on("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    let isValid = true;

    // Clear previous error messages
    $(".error-message").text("");

    // Validate Email
    const email = $("#email").val().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      $("#emailError").text("Email is required.");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      $("#emailError").text("Enter a valid email address.");
      isValid = false;
    }

    // Validate Password
    const password = $("#password").val().trim();
    if (password === "") {
      $("#passwordError").text("Password is required.");
      isValid = false;
    } else if (password.length < 6) {
      $("#passwordError").text("Password must be at least 6 characters.");
      isValid = false;
    }

    // If all validations pass
    if (isValid) {
      alert("Login successful!");
      // You can redirect or submit the form here if needed
    }
  });
});
