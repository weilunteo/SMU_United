<template>
    <div class="row align-items-md-stretch mx-4" >
        <div class="col-md-12 col-lg-6 textbox">
            <div class="h-100 p-5 bg-light border rounded-3 text-center my-auto">
                <h3>73 Schools,</h3>
                <h3>7 Continents.</h3>
                <br>
                <p>Partnered with the top schools all around the world, rest assured that whatever school you are going on exchange for, we can help.</p>
            
            </div>
          </div>
          <div class="col-md-12 col-lg-6 col-sm-12 ">
              <img src = "../../assets/img/mapofcontinents.png" class = "rounded-3 p-5 text-bg-light border mapbox">
          </div>
          
        </div>
    </template>
        
        <script>
        import { toHandlers } from 'vue';
        
         /*Javascript */
        export default {
          name: "MapStatistics",
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
    
        h3{
            font-weight: bold;
            font-family: Epilogue, 'sans serif';
            font-size: 36px;
            word-wrap: break-word;
            
        }
        p{
            font-family: Inter, 'sans serif';
            font-size: 25px;
            
        }
        
        #map-container{
            width:min-content;
            border-radius: 50%;
        }
    
        .mapbox{
            width: max-width;
            height: 450px;
            border-radius: 50%;
        }
    
        .textbox{
            height: fixed;
            border-radius: 50%;
            text-align: center;
            justify-content: center;
            align-items: center;
        }
    
        
        
        </style>