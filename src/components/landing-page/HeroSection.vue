<template>
    <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@600&family=Inter" rel="stylesheet">
    <div class="px-4 mb-4 text-center hero-image">
        <img class="d-flex mx-auto logo" src="../../assets/img/logo.png" alt="">
        <h1 class="display-5 fw-bold title py-3" style="color:white">The Travelling Student</h1>
        <div class="col-lg-6 mx-auto mb-5">
          <p class="lead mb-5">Your One Stop Platform for all things Exchange</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mx-auto">
            <router-link to="/signup"  id="join" class="btn btn-primary px-4 me-sm-3 fw-semibold d-grid gap-2">Join our community today!</router-link> 
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
    
    .logo{
        height:200px;
        width: 200px;
    
    }
    .hero-image{
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../../assets/img/background.png");
        /* Set a specific height */
        height: 100vh;
        align-items: center;
        display: block;
        justify-content: center;
        align-items: center;
        align-content: center;
        padding-top: 25vh;
        padding-bottom: 25vh;
    
    /* Position and center the image to scale nicely on all screens */
        background-position: left;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    
    .lead{
        color:azure;
        font-family:'Inter', sans-serif;
    }
    
    .title{
        color: white;
        font-family: 'Epilogue', sans-serif;
    }
    
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
    color:white;
    
    }
/*     
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
    } */
    
    #join{
        border-radius: 18px;
    }
    
    
    </style>