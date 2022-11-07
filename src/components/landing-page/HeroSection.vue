<template>

    <header>
        <link rel="shortcut icon" href="images/logo.png" type="image/x-icon">
        <!-- icon style link -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
    </header>

    <section> <!-- HTML template-->

        <!-- Fav Icon -->

        <div class="home">

            <div class="container py-5 justify-content-center">

            <div class="row">
                <div class="col">
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
                            <router-link to="/signup"  id="join" class="btn btn-primary px-5 mx-2 w-75 fw-semibold d-grid gap-2">Join our community today!</router-link> 
                        </span>
                    </div>
                
                
                </div>

                <div class="col">

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


    </section>
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
    /* background-color: rgb(191, 220, 246); */
    background-color: #6DAFFE;
    width: 100%;
    height: 100%;
}

h1{
font-size: 30px ;
font-weight: normal;
color:black;

}

.carousel-item {
  height: 100%;
  border-radius:25px;
  object-fit: cover;
}

#join{
    border-radius: 18px;
}


</style>