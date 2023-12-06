<template>
    <img class="logo" src="../assets/login-logo.jpg" alt="Signup">
    <h2>Sign Up</h2>
    <div class="signup">
        <input type="text" v-model="fullname" placeholder="Enter Full Name"/><br/>
        <input type="text" v-model="email" placeholder="Enter Email"/><br/>
        <input type="password" v-model="password" placeholder="Enter Password"/><br/>
        <input type="password" placeholder="Confirm Password"/><br/>
        <button v-on:click="SignUp">Sign Up</button>
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

