<template>
    <img class="logo" src="../assets/login-logo.jpg" alt="Signup">
    <h2>Sign Up</h2>
    <div class="signup">
        <input type="text" v-model="fullname" placeholder="Enter Full Name"/><br/>
        <input type="text" v-model="email" placeholder="Enter Email"/><br/>
        <input type="password" v-model="password" placeholder="Enter Password"/><br/>
        <input type="password" placeholder="Confirm Password"/><br/>
        <button v-on:click="SignUp">Sign Up</button>
        <p>
            <router-link to = "/login">Login</router-link>
        </p>
    </div>
</template>

<script src="./services/SignUp.js"></script>


