

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

function setupProposalForm() {
    var form = document.getElementById("proposal-form");
    if (form) {
        form.onsubmit = function(event) {
            event.preventDefault(); // Stop the form from submitting

            // Get form values
            var student1 = document.getElementById("prop-student1").value;
            var title = document.getElementById("proj-title").value;
            var category = document.getElementById("proj-category").value;
            var description = document.getElementById("proj-desc").value;

            // Validation checks
            if (student1 === "") {
                window.alert("Student 1 Name must be filled out");
                return false;
            }
            if (title === "") {
                window.alert("Project Title must be filled out");
                return false;
            }
            if (category === "") {
                window.alert("Please select a project category");
                return false;
            }
            if (description === "") {
                window.alert("Project Description must be filled out");
                return false;
            }

            
            window.alert("Proposal submitted successfully for review!");
            form.reset();
            
            // Redirect back to home page after 1 second
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
    else if (document.getElementById("proposal-form")) {
    setupProposalForm(); 
}

