<template>
    <div class="row align-items-md-stretch mx-4 py-3" >
    <div class="col-md-12 col-lg-4 textbox">
        <div class="h-100 p-5 bg-light border rounded-3 my-auto text">
            <h3 style="color:#0069fc">672 Hours</h3>
          <p class='smalltext'>Time Spent on This Project</p>
        
        </div>
      </div>
      <div class="col-md-12 col-lg-4 col-sm-12 textbox">
        <div class="h-100 p-5 bg-light border rounded-3 my-auto text">
          <h3 style="color:#0069fc; font-weight: bold;">18K+</h3>
          <p class='smalltext'>Students Helped</p>
        </div>
      </div>
      <div class="col-md-12 col-lg-4 textbox">
        <div class="h-100 p-5 bg-light border rounded-3 my-auto text">
            <h3 style="color:#0069fc">7304</h3>
            <p class='smalltext'>Modules Mapped</p>
        
        </div>
      </div>
      
    </div>


    </template>
        
        <script>
        import { toHandlers } from 'vue';
        
         /*Javascript */
        export default {
          name: "StudentStatistics",
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
        
        
        <style> /* CSS*/
    
        .text{
            word-wrap: break-word;
        }

        .smalltext{
            font-size: 20px;
        }
        </style>