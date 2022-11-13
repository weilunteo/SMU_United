<template>
  <nav class = "navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src = "../../assets/img/thetravellingstudent.png" id = "logo"/>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      
        <div class="navbar-nav ms-auto me-5 mb-2 mb-lg-0" >
          <router-link to="/login" class="btn btn-light px-5 mx-2 fw-bold">Login</router-link>
          <router-link to="/signup"  class="btn btn-outline-light px-5 mx-2 fw-bold">Sign Up</router-link>
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

.navbar{
  background-color: #0069fc;
  position: sticky;
  top: 0;
  z-index: 90;
  box-shadow: rgba(39, 41, 43, 0.2) 0px 8px 24px;
}

#logo{
  width: 300px;
}
.navbar-brand {
    display: flex;
    max-height: 200px;
    
}
.navbar-nav{
  padding-left:30px;
  padding-right:30px;
  font-family: Inter, 'sans serif';
}

</style>