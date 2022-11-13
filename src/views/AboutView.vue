<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ username }}
    <button @click="changeName()">Change Name</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            username: "Wei Lun",
            password: "",
            isUser: true,
        }
    },
    methods: {
        changeName() {
          this.username = "Jessica";
          console.log(this);
        },
        loginUser() {
          const url = "http://localhost"
          axios.get(url).then((response) => {

          }).catch(error => {
            console.log(error.message);
          })
        }
    }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
