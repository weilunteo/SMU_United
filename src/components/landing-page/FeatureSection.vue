<template>

    <div class="mx-5 mb-5">
        <h1 class="text-center fw-semibold mt-5 py-5" style="color:#031b4e">
          4 Unique Features. We Got You.
        </h1>
                <div class="row mx-auto text-center justify-content-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="d-flex justify-content-center mb-4">
                            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_4djadzzo.json" background="transparent" speed="1" style="width: 180px; height: 180px;" loop autoplay></lottie-player>
                        </div>
                        <span class="fw-bold fs-4">Community</span>
                        <p>Hook up with peers who are going to the same partner university, within a single platform.</p>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="d-flex justify-content-center mb-4">
                        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_tzv8osvb.json" background="transparent" speed="1" style="width: 180px; height: 180px;" loop autoplay></lottie-player>
                        </div>
                        <span class="fw-bold fs-4">Module Mapping</span>
                        <p>Look through approved course mappings from our database and easily plan for your modules. It's as simple as that!</p>
                    </div>
    
                <div class="col-lg-6 col-md-12">
                    <div class="d-flex justify-content-center mb-4">
                    <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_wglo7xex.json" background="transparent" speed="1" style="width: 180px; height: 180px;" loop autoplay></lottie-player>
                    </div>
                    <span class="fw-bold fs-4">Reviews</span>
                    <p>Discover ratings and comments from your seniors and peers on partner universities.</p>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="d-flex justify-content-center mb-4">
                    <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_jif9vljs.json" background="transparent" speed="1" style="width: 180px; height: 180px;" loop autoplay></lottie-player>
                    </div>      
                    <span class="fw-bold fs-4">Recommendations</span>
                    <p>Get a list of nearby attractions, food and accommodation near the school of your choice with our Google API.</p>
                </div>
                </div>

    </div>

    
    </template> 
    
    
    <script>
    import { toHandlers } from 'vue';
    import "@lottiefiles/lottie-player";
    
    export default {
      name: "FeatureSection",
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
    /* .container{
        display: flex;
        justify-content:center;
        align-items: center;
    } */
    
    .home{
        background-color: rgb(191, 220, 246);
        /* background-color: #6DAFFE; */
        width: 100%;
        height: 100%;
    }
    
    </style>