

function setupSignup() {
    var form = document.getElementById("signup-form");
    if (form) {
        form.onsubmit = function(event) {
            event.preventDefault();

            var firstName = document.getElementById("fname").value;
            var lastName = document.getElementById("lname").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("pwd").value;
            var confirmPassword = document.getElementById("confirm-pwd").value;
            var message = document.getElementById("error-message");

            message.innerHTML = "";

            if (!firstName || !lastName || !email || !password || !confirmPassword) {
                message.innerHTML = "Please fill all fields.";
                return false;
            }

            if (password !== confirmPassword) {
                message.innerHTML = "Passwords do not match.";
                return false;
            }
            
            if (password.length < 6) {
                message.innerHTML = "Password must be at least 6 characters.";
                return false;
            }
            
            if (!email.includes("@") || !email.includes(".")) {
                message.innerHTML = "Please enter a valid email address.";
                return false;
            }

            message.innerHTML = "Account created successfully!";
            message.style.color = "green";
            form.reset(); 
            setTimeout(function() {
                window.location.href = "login.html";
            }, 1000);
            
            return false;
        };
    }
}

function setupLogin() {
    var form = document.getElementById("login-form");
    if (form) {
        form.onsubmit = function(event) {
            event.preventDefault(); 

            var email = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var message = document.getElementById("error-message");

            message.innerHTML = "";

            if (!email || !password) {
                message.innerHTML = "Please enter email and password.";
                return false;
            }
 
            if (!email.includes("@") || !email.includes(".")) {
                message.innerHTML = "Please enter a valid email address.";
                return false;
            }
     
            if (password.length < 6) {
                message.innerHTML = "Password must be at least 6 characters.";
                return false;
            }
            
            message.innerHTML = "Login successful!";
            message.style.color = "green";
            setTimeout(function() {
                window.location.href = "index.html";
            }, 1000);
            
            return false;
        };
    }
}
    if (document.getElementById("signup-form")) {
        setupSignup();
    } else if (document.getElementById("login-form")) {
        setupLogin();
    }

