<template>
  <nav class="navbar navbar-expand-lg bg-light py-4">
  <div class="container-fluid" style="width:100%">
    <a class="navbar-brand ms-5" href="#">
      <img src="../../assets/img/smu-united.png" width="0.1" height="0.1">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <div class=" navbar-nav ms-auto me-5 mb-2 mb-lg-0" >
        <router-link to="/login" class="btn btn-primary px-5 mx-2 fw-bold">Login</router-link>
        <router-link to="/signup"  class="btn btn-outline-primary px-5 mx-2 fw-bold">Sign Up</router-link>
      </div>
    </div>

  </div>
</nav>

</template>

<script> /*Javascript */
export default {
name: "NavigationBar",
components: {
},
data (){
  return{
      
  }
},
methods:{
  
}

}
</script>


<style>
.navbar-brand {
          display: flex;
          width: 15%;
          justify-content: center;
}
.navbar-nav{
  padding-left:30px;
  padding-right:30px;
}

</style>