<template>
    <img class="logo" src="../assets/login-logo.jpg" alt="Signup">
    <h2>Sign Up</h2>
    <div class="signup">
        <input type="text" placeholder="Enter Full Name"/><br/>
        <input type="text" placeholder="Enter Username or Email"/><br/>
        <input type="password" placeholder="Enter Password"/><br/>
        <input type="password" placeholder="Confirm Password"/><br/>
        <button>Sign Up</button>
    </div>
</template>

<script src="./services/SignUp.js"></script>

<style>
.logo {
    width: 100px;
}
.signup input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 5px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.signup button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
}
</style>

