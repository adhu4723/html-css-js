<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS HTML Manipulation</title>
    <style>
        #box {
            width: 200px;
            height: 100px;
            background-color: lightblue;
            text-align: center;
            line-height: 100px;
            font-size: 20px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h2>JavaScript HTML Manipulation</h2>
    
    <button onclick="changeText()">Change Text</button>
    <button onclick="changeColor()">Change Color</button>
    <button onclick="hideBox()">Hide</button>
    <button onclick="showBox()">Show</button>

    <div id="box">Hello, World!</div>

    <script>
        function changeText() {
            document.getElementById("box").innerText = "Text Changed!";
        }

        function changeColor() {
            document.getElementById("box").style.backgroundColor = "black";
            document.getElementById("box").style.color = "white";
        }

        function hideBox() {
            document.getElementById("box").style.display = "none";
        }

        function showBox() {
            document.getElementById("box").style.display = "block";
        }
    </script>
</body>
</html>
