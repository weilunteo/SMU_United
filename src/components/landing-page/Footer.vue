<template>

<section>
    <div class="container-fluid bg-light  py-1 px-sm-1 px-md-5">
                   
                   <div class="container text-center py-5">
       
                   <div class="d-flex justify-content-center">
                       <p>Follow us on: </p>
                       <a class="btn btn-light btn-social mr-2" href="#"><i class="fab fa-twitter"></i></a>
                       <a class="btn btn-light btn-social mr-2" href="#"><i class="fab fa-facebook-f"></i></a>
                       <a class="btn btn-light btn-social mr-2" href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                       <a class="btn btn-light btn-social" href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                   </div>
       
               </div>
       
               </div>
     

</section>
</template> 


<script>
import { toHandlers } from 'vue';


export default {
  name: "Footer",
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
.container{
    display: flex;
    justify-content:center;
    align-items: center;
}
</style>