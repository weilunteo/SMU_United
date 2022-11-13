import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import gAuthPlugin from 'vue3-google-oauth2'

import './assets/main.css'
// import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBmtn0NEAZ5Mg-iQfl1K9BIdR4Dyq39OMk",
  authDomain: "is216-363607.firebaseapp.com",
  databaseURL: "https://is216-363607-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "is216-363607",
  storageBucket: "is216-363607.appspot.com",
  messagingSenderId: "118258470536",
  appId: "1:118258470536:web:fce752bcd432137fda993d",
  measurementId: "G-W9LLNQFYWP"
};

// Initialize Firebase

// firebase.initializeApp(firebaseConfig)

let gAuthClientId = "118258470536-2jplg0ofvqv5ttg7040t92iv9hvd2g91.apps.googleusercontent.com";



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(gAuthPlugin, {
    clientId: gAuthClientId,
    scope: 'email',
    prompt: 'consent',
})


app.mount('#app')

