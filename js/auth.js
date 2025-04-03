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


document.addEventListener("DOMContentLoaded", function () {
    const signinForm = document.getElementById("signin-form");

    if (signinForm) {
        signinForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const response = await loginUser({ email, password });

            if (response.token) {
                localStorage.setItem("token", response.token);
                window.location.href = "dashboard.html"; // Redirect to dashboard
            } else {
                alert("Login failed!");
            }
        });
    }
});
