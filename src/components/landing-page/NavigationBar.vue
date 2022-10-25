<template>
    <nav class="navbar navbar-expand-lg bg-light py-4">
  <div class="container-fluid">
    <a class="navbar-brand ms-5" href="#">
      <img src="../../assets/img/smu-united.png" width="0.1" height="0.1">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Community</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Module Mapping</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Recommendations</a>
        </li>
      </ul>
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
</style>