<template>
    <img class="logo" src="../assets/login-logo.jpg" alt="Login">
    <h2>Login</h2>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email"/><br/>
        <input type="password" v-model="password" placeholder="Enter Password"/><br/>
        <button v-on:click="login">Login</button>
        <p>
            <router-link to = "/sign-up">Sign Up</router-link>
        </p>
    </div>
</template>

<script src="./services/LoginPage.js"></script>