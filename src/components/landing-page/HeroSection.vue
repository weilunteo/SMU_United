<template>

        <div class="home">

            <div class="container align-items-center"> 

            <div class="row mx-auto">
                <div class="col-lg-6 col-md-8 col-sm-12">
                    <div class="row">
                        <h1>Enhance your International Summer Exchange Programme (ISEP) with <br><span><strong>SMU United!</strong></span></h1>
                    
                    </div>

                    <div class="row mt-4">
                            <h5>
                                <p>Want to plan for exchange but don't know how to start?</p>
                                <p>Then, this platform is the one for you.</p>
                            </h5>
                       
                    </div>

                    <div class="row mt-2">
                        <span>
                            <router-link to="/signup"  id="join" class="btn btn-primary px-5 mb-5 mx-2 w-75 fw-semibold d-grid gap-2">Join our community today!</router-link> 
                        </span>
                    </div>
                
                
                </div>

                <div class="col-lg-6 col-md-8 col-sm-12">

                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                            <img src="../../assets/img/isep.jpeg" class="d-block w-100" height="100px">
                            </div>
                            <div class="carousel-item" data-bs-interval="10000">
                            <img src="../../assets/img/isep2.jpeg" class="d-block w-100" height="100px">
                            </div>
                            <div class="carousel-item" data-bs-interval="10000" >
                            <img src="../../assets/img/isep3.jpeg" class="d-block w-100" height="100px">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                </div>
            </div>

        </div>  

       </div>

</template>

<script>
import { toHandlers } from 'vue';
import MenuIcon from '../icons/MenuIcon.vue';
import "@lottiefiles/lottie-player";

 /*Javascript */
export default {
  name: "HeroSection",
  components: {
    MenuIcon
},
  data (){
    return{
        // typeStatus: false,
        // typeArray: ['BROADEN Your Perspectives', 'EXPERIENCE Different Cultures', 'GROW Your Networks'],
        reasons: ['Interact with the SMU Community', 'Gain Access to Module Mapping Information', 'Explore Reviews of Schools by your peers', 'Get Nearby Food and Attraction Recommendations']
    }
  },
  methods:{

    // typedText(){
    //     if ($(".text-slider").length == 1) { 
    //     var typed_strings = $(".text-slider-items").text(); 
    //     var typed = new Typed(".text-slider", { 
    //         strings: typed_strings.split(", "), 
    //         typeSpeed: 50, 
    //         loop: true, 
    //         backDelay: 900, 
    //         backSpeed: 30, 
    //     }); 
    //     }
    // }
}

}
   

</script>


<style> /* CSS*/

.container{
    display: flex;
    justify-content:center;
    align-items: center;
}

.home{
    background-color: rgb(191, 220, 246);
    background-color: #6DAFFE;
    width: 100%;
    height: 100vh ;
}

h1{
font-size: 30px ;
font-weight: normal;
color:black;

}

.carousel .carousel-item {
  height: 400px;
  width: 600px;
}

.carousel-item img {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    min-height: 500px;
}

#join{
    border-radius: 18px;
}


</style>