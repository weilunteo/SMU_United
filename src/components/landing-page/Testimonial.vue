<template>

    <section class ="mx-4 px-4 py-4">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 col-xl-8 text-center">
          <h3 class="mb-4">Testimonials</h3>
        </div>
      </div>
    
      <div class="row text-center">
        <div class="col-md-4 mb-5 mb-md-0 justify-content-center">
          <div class="d-flex justify-content-center mb-4" style="width: 200px; height:200px; margin:auto; justify-content: center;">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              class="rounded-circle shadow-1-strong" width="100" height="100" />
          </div>
          <h5 class="mb-3">Maria Smantha</h5>
          <h6 class="text-primary mb-3">SMU Student, Year 3</h6>
          <p class="px-xl-2">
            <i class="fas fa-quote-left pe-2"></i>"Thank you The Travelling Student for making my Exchange experience so easy!"
          </p>
        </div>
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="d-flex justify-content-center mb-4" style="width: 200px; height:200px; margin:auto">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              class="rounded-circle shadow-1-strong" width="150" height="150" />
          </div>
          <h5 class="mb-3">Lisa Cudrow</h5>
          <h6 class="text-primary mb-3">SMU Student, Y4</h6>
          <p class="px-xl-3">
            <i class="fas fa-quote-left pe-2"></i>Using this website is so simple! The nearby attractions feature is also very helpful! 
          </p>
        </div>
        <div class="col-md-4 mb-0">
          <div class="d-flex justify-content-center mb-4" style="width: 200px; height:200px; margin:auto">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              class="rounded-circle shadow-1-strong" width="150" height="150" />
          </div>
          <h5 class="mb-3">John Smith</h5>
          <h6 class="text-primary mb-3">SMU Alumni</h6>
          <p class="px-xl-3">
            <i class="fas fa-quote-left pe-2"></i>All students wanting to go on exchange should use this app!
          </p>
        </div>
      </div>
    </section>
        
      </template>
      
      <script> /*Javascript */
      export default {
      name: "Testimonial;",
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
    
      h3{
        font-family: Epilogue, "sans serif";
      }
    
      h5,h6{
        font-family: Inter, "sans serif";
        
      }
      h5{
        font-weight: bold;
        font-size: 25px;
      }
    
      h6{
        font-size: 20px;
      }
      p{
        font-size: 15px;
      }
      </style>