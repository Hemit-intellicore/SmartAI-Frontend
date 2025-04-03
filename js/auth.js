document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    if (signupForm) {
        signupForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const response = await registerUser({ name, email, password });

            if (response.success) {
                alert("Registration Successful! Please log in.");
                window.location.href = "signin.html";
            } else {
                alert("Error: " + response.message);
            }
        });
    }
});
