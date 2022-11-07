<template>

<main class="main">
	<div class="container">
		<section class="wrapper">
			<div class="heading">
				<h1 class="text text-large">Sign Up</h1>
				<p class="text text-normal">Already have an account? <span><router-link to="/login" class="text text-links">Login here</router-link></span>
				</p>
			</div>
			<div class="form">
				<div class="mb-4">
					<label for="email" class="input-label fw-semibold mb-1">Email Address<span class="text-danger">*</span></label>
					<input v-model="email" type="email" name="email" id="email" class="input-field" placeholder="Enter Email Address" required>
				</div>
				<div class="mb-4">
					<label for="password" class="input-label fw-semibold mb-1">Password<span class="text-danger">*</span></label>
					<input v-model="password" type="password" name="password" id="password" class="input-field" placeholder="Enter Password" required>
				</div> 
                <!-- <div class="mb-4">
					<label for="verifyPassword" class="input-label fw-semibold mb-1">Verify Password<span class="text-danger">*</span></label>
					<input v-model="verifyPassword" type="password" name="verifyPassword" id="verifyPassword" class="input-field" placeholder="Enter Password Again" required>
				</div>  -->
				<div class="mb-4">
				    <input type="checkbox"> I consent for my personal data to be retrieved by SMU United. 
					<input  v-on:click="signUpWithEmail()" type="submit" name="submit" class="input-submit mt-3 w-100 d-flex align-items-center justify-content-center" value="Create Account">
				</div>
			</div>
			<div class="striped">
				<span class="striped-line"></span>
				<span class="striped-text">Or</span>
				<span class="striped-line"></span>
			</div>
			<div class="method">
				<div class="method-control">
					<button type="button" v-on:click="signUpWithGoogle()"
                    class="btn btn-light w-100 d-flex align-items-center justify-content-center">
                    <GoogleIcon class="me-2"/> Sign Up with Google
                    </button>
				</div>
			</div>
		</section>

	</div>

</main>

</template>

<script setup>


import GoogleIcon from '../components/icons/GoogleIcon.vue';
import {ref, watchEffect} from "vue";
import {useRouter} from "vue-router" // import router

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import db from "../firebase/firebaseInit";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const email = ref('')
const password = ref('')
const router = useRouter() // get a reference to our vue router

const auth = getAuth();
const provider = new GoogleAuthProvider();

const signUpWithEmail = () => {
    firebase
      .auth() // get the auth api
      .createUserWithEmailAndPassword(email.value, password.value) // need .value because ref()
      .then((data) => {
        console.log('Successfully registered!');
        router.push('/feed') // redirect to the feed
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
}


const signUpWithGoogle = () =>{

    firebase.auth().signInWithPopup(provider)
    .then((result)=>{
        console.log("Signed in!");
        router.push('/feed') // redirect to the feed
    }).catch(error=>{
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error)
    })
}

</script>


<!-- <style>

:root {
  --color-white: #ffffff;
  --color-light: #f1f5f9; 
  --color-black: #121212;
  --color-night: #001632;
  --color-red: #f44336;
  --color-blue: #1a73e8;
  --color-gray: #80868b;
  --color-grayish: #dadce0;
  --shadow-normal: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
html {
  font-size: 100%;
  font-size-adjust: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
*, *::before, *::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
  list-style: none;
  list-style-type: none;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
  color: var(--color-black);
  background: var(--color-light);
}
a, button {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  text-decoration: none;
}
img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80rem;
  min-height: 100vh;
  width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
  border: #6DAFFE;
}
.text {
  font-family: inherit;
  line-height: inherit;
  text-transform: unset;
  text-rendering: optimizeLegibility;
}
.text-large {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-black);
}
.text-normal {
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-black);
}
.text-links {
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-blue);
}
.text-links:hover {
  text-decoration: underline;
}
.main .wrapper {
  max-width: 28rem;
  width: 100%;
  margin: 2rem auto;
  padding: 2rem 2.5rem;
  border: none;
  outline: none;
  border-radius: 0.25rem;
  color: var(--color-black);
  background: var(--color-white);
  box-shadow: var(--shadow-large);
}
.main .wrapper .form {
  width: 100%;
  height: auto;
  margin-top: 2rem;
}
.main .wrapper .form .input-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}
.main .wrapper .form .input-field {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: inherit;
  width: 100%;
  height: auto;
  padding: 0.75rem 1.25rem;
  border: none;
  outline: none;
  border-radius: 2rem;
  color: var(--color-black);
  background: var(--color-light);
  text-transform: unset;
  text-rendering: optimizeLegibility;
}
.main .wrapper .form .input-submit {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  line-height: inherit;
  cursor: pointer;
  min-width: 40%;
  height: auto;
  padding: 0.65rem 1.25rem;
  border: none;
  outline: none;
  border-radius: 2rem;
  color: var(--color-white);
  background: var(--color-blue);
  box-shadow: var(--shadow-medium);
  text-transform: capitalize;
  text-rendering: optimizeLegibility;
}
.main .wrapper .striped {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}
.main .wrapper .striped-line {
  flex: auto;
  flex-basis: auto;
  border: none;
  outline: none;
  height: 2px;
  background: var(--color-grayish);
}
.main .wrapper .striped-text {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  line-height: inherit;
  color: var(--color-black);
  margin: 0 1rem;
}
.main .wrapper .method-control {
  margin-bottom: 1rem;
}
.main .wrapper .method-action {
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 500;
  line-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0.35rem 1.25rem;
  outline: none;
  border: 2px solid var(--color-grayish);
  border-radius: 2rem;
  color: var(--color-black);
  background: var(--color-white);
  text-transform: capitalize;
  text-rendering: optimizeLegibility;
  transition: all 0.35s ease;
}
.main .wrapper .method-action:hover {
  background: var(--color-light);
}

</style>

-->