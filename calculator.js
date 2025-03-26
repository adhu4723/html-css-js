<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator with Switch & If-Else</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        .calculator {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 300px;
        }
        input, select, button {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            font-size: 1.2em;
        }
        button {
            background: #007bff;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }
        button:hover {
            background: #0056b3;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <h2>Simple Calculator</h2>
        <input type="number" id="num1" placeholder="Enter first number">
        <select id="operator">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="number" id="num2" placeholder="Enter second number">
        <button onclick="calculateSwitch()">Calculate (Switch)</button>
        <button onclick="calculateIfElse()">Calculate (If-Else)</button>
        <h3 id="result">Result: </h3>
    </div>
    
    <script>
        function calculateSwitch() {
            let num1 = parseFloat(document.getElementById('num1').value);
            let num2 = parseFloat(document.getElementById('num2').value);
            let operator = document.getElementById('operator').value;
            let result;
            
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
                    break;
                default:
                    result = 'Invalid operator';
            }
            document.getElementById('result').innerText = 'Result: ' + result;
        }
        
        function calculateIfElse() {
            let num1 = parseFloat(document.getElementById('num1').value);
            let num2 = parseFloat(document.getElementById('num2').value);
            let operator = document.getElementById('operator').value;
            let result;
            
            if (operator === '+') {
                result = num1 + num2;
            } else if (operator === '-') {
                result = num1 - num2;
            } else if (operator === '*') {
                result = num1 * num2;
            } else if (operator === '/') {
                result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            } else {
                result = 'Invalid operator';
            }
            document.getElementById('result').innerText = 'Result: ' + result;
        }
    </script>
</body>
</html>
