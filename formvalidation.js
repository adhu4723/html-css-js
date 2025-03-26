<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        .form-container {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
        }
        input {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .error {
            color: red;
            font-size: 0.9em;
            margin-bottom: 10px;
        }
        button {
            width: 100%;
            padding: 10px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background: #0056b3;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>Register</h2>
        <form id="myForm" onsubmit="return validateForm()">
            <input type="text" id="name" placeholder="Name">
            <div class="error" id="nameError"></div>
            
            <input type="email" id="email" placeholder="Email">
            <div class="error" id="emailError"></div>
            
            <input type="password" id="password" placeholder="Password">
            <div class="error" id="passwordError"></div>
            
            <button type="submit">Submit</button>
        </form>
    </div>
    
    <script>
        function validateForm() {
            let isValid = true;
            document.getElementById("nameError").innerText = "";
            document.getElementById("emailError").innerText = "";
            document.getElementById("passwordError").innerText = "";
            
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();
            
            if (name === "") {
                document.getElementById("nameError").innerText = "Name is required";
                isValid = false;
            }
            if (email === "") {
                document.getElementById("emailError").innerText = "Email is required";
                isValid = false;
            } 
            if (password === "") {
                document.getElementById("passwordError").innerText = "Password is required";
                isValid = false;
            } else if (password.length < 6) {
                document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
                isValid = false;
            }
            return isValid;
        }
    </script>
</body>
</html>
