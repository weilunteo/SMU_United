<template>
<div class="container border">
        <div class="row">
            <!-- UNI Name -->
            <span class="name">University of London</span>
            <br>
            <!-- Uni Reviews & Info -->
            <span class="review">&#9733 &#9733 &#9733 &#9733 4.5 | <a href="http://google.com">200 reviews</a> | <a href="http://googlemaps.com">Location</a></span>

            To be removed: Are we doing star ratings in terms of whole numbers?^^
        </div>
        
        
        <br><br>
        <div class="row">
            <div class="col">
                <!-- carousel here -->
                <div id="carouselExampleControls" class="carousel slide box" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="" class="d-block w-100" alt="...">
                    </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="col">
                <h3>Description</h3>
                <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum, iste suscipit a, ut enim officiis saepe veniam doloremque illo itaque tempore reprehenderit. Omnis odit debitis expedita corrupti nobis asperiores?</div>  
                <br><br>

                <!-- GPA and General Info -->
                <div class="containter border">
                    
                    <div class="row">
                        <!-- left side Min GPA -->
                        <div class="col" id="right-left">Min GPA: 3.0</div>
                        <!-- right side Accomodation etc -->
                        <div class="col">
                            Accomodation: Yes
                            <br>
                            Visa:         Yes
                            <br>
                            Vacancies:    30</div>
                    </div>

                    <a href="https://www.london.ac.uk/" target="_blank">Head to University of London's Website</a>
                    <br>
                    <a href="#">Modules available</a>

                </div>
                <br><br>
            </div>
            
      
                
                
        </div>

    </div>
    
</template>

<script>

    import { toHandlers } from 'vue';
    
    export default {
      name: "IndividualSection",
      components: {
    
    },
    data() {
        return {
            SchoolName: "University Of London",
            schoolImageSrc: "src/assets/img/background2.png"
        }
    },
      methods:{
        
    }
  
  
    }
    
    </script>

<style>
</style>
