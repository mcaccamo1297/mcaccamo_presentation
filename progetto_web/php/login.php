<!DOCTYPE html>
<html>
<head>
    <title>Login MSN Messenger</title>
    <style>
        .content {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
        }
        .login-container {
            margin: 0;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            text-align: center;
        }
        .login-container h2 {
            margin-bottom: 5%;
        }
        .login-container input[type="email"],
        .login-container input[type="password"] {
            width: calc(100% - 22px);
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .login-container input[type="submit"] {
            width: 100%;
            padding: 10px;
            background: linear-gradient(to bottom, #ffffff, #e0e0e0);
            border: 1px solid #aaaaaa;
            border-radius: 5px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
            color: #000;
            font-size: 16px;
            cursor: pointer;
            outline: none;
        }
        .login-container input:hover {
            background: linear-gradient(to bottom, #f0f0f0, #d0d0d0);
        }
        .login-container input:active {
            background: linear-gradient(to bottom, #d0d0d0, #f0f0f0);
            box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.3);
        }
        .img {
            max-width: 100px;
            padding: 2%;
            border: 1px solid; 
            border-radius: 5px;
            margin-bottom: 5%;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h2>MSN Messenger Login</h2>
        <img src="img/msn.png" class="img">
        <form action="php/login_process.php" method="post">
            <input type="email" name="email" placeholder="E-mail" required><br>
            <input type="password" name="password" placeholder="Password" required><br>
            <input type="submit" value="Login">
        </form>
    </div>
</body>
</html>
