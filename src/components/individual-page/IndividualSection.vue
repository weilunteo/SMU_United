<template>
    <div class="container-fluid container-sm" style="width: 85%; box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;">
        <div class="row title-box">
            <!-- <div class="col title-box" v-on:mouseover="hover_function()"> -->

            <!-- UNI Name -->
            <div class="name" style="padding-left: 0px; padding-right: 0px">University of London</div>

            <!-- Uni Reviews & Info -->
            <div class="review-class" style="padding-left: 0px; padding-right: 0px">
                <span>&#9733 &#9733 &#9733 &#9733 4.5| <a href="http://googlemaps.com">Location</a></span>
            </div>
        </div>

        <div class="row container">
            <div class="row col-md-8" style="padding: 0px;">
                <!-- carousel here -->
                <div id="carouselExampleControls" class="carousel slide box" data-bs-ride="carousel">
                    <div class="carousel-inner">

                        <div class="carousel-item active">
                            <img src="src/assets/img/background2.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="src/assets/img/background3.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="src/assets/img/isep.jpeg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
       </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="col-md-4 description-col" style="margin-left: 20px;">
                <div class="description-title">Description</div>
                <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsum, iste
                    suscipit a, ut enim officiis saepe veniam doloremque illo itaque tempore reprehenderit. Omnis odit
                    debitis expedita corrupti nobis asperiores?</div>
                <div class="round-box">
                    <div class="text">Min GPA: 3.0</div>
                    <div class="text">Accomodation: Yes</div>
                    <div class="text">Visa: Yes</div>
                    <div class="text">Vacancies: 30</div>
                </div>

            </div>

        </div>

    </div>

    <h1>hello{{test_function()}} {{temp}}</h1>


</template>


<script>

    import { toHandlers } from 'vue';
    // import { db } from '../../../firebase2'
    // import { getDatabase, ref, child, onValue, get } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
    import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';

    // If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
    import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js';
    import { getDatabase, ref, child, onValue, get } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

    const firebaseConfig = {
        apiKey: "AIzaSyCRupTz-7gGj0j_th9vfpEwPR7cb5U-Q0o",
        authDomain: "smuexchangeschoolsdb.firebaseapp.com",
        databaseURL: "https://smuexchangeschoolsdb-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "smuexchangeschoolsdb",
        storageBucket: "smuexchangeschoolsdb.appspot.com",
        messagingSenderId: "444723552496",
        appId: "1:444723552496:web:b34cc45c31d545a609a235"
    };

    const app = initializeApp(firebaseConfig);

    const db = getDatabase();
    
    export default {
      name: "IndividualSection",
      components: {
    
    },
    data() {
        return {
            SchoolName: "University Of London",
            schoolImageSrc: "../../assets/img/background2.png",
            temp: ''
        }
    },
    methods: {
       test_function(){
        var list = [];
    const dbref = ref(db);

    get(child(dbref, 'new zealand'))
        .then((snapshot) => {
            var currentData = [];
            var currentData = snapshot.val();
            //console.log(list);

            for (const [school, details] of Object.entries(currentData)) {
                list.push([school, details]);
            }
            console.log(list);
            console.log(list[0][0])
            this.temp = list[0][0]
            //vue app. -> computed -> loop thru all the values ->
            //e.g. school: list.school, coordinates: list.coordinates

        })
        .catch(() => {
            //error
        })
       }
    }
    
  
  
    }

</script>

<style>
.round-box {
    font-weight: bold;
    font-size: 20px;
    color: white;
}

/* .container-fluid {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
} */
.title-box {
    text-align: left;
    align-items: left;
    margin-right: 0px;
    padding-left: 0;
}


.name {
    font-size: 60px;
    font-weight: bold;
    padding: 100px 0 0 0;
    padding-left: 0px;
    color: #031b4e
}

.description {
    text-align: justify;
    font-weight: 400;
    font-size: 17px
}

.review-class {
    margin: 0px 0 0 0;
    font-size: 24px;
    padding-left: 20px;
    padding: 0px;
}

.second-container {
    margin-top: 20px;
    padding-top: 45px;
}

.description-col {
    padding-left: 25px;
    padding-right: 15px;
    color: #031b4e;
}

.description-title {
    font-size: 30px;
    font-weight: bold;
}

.round-box {
    background-color: #0069fc;
    border-radius: 10px;
    padding: 10px 15px;
    margin-bottom: 10px;
    margin-top: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

}

.round-box>.text {
    color: white;
}

.carousel-item>img {
    max-height: 400px;
    height: 370px;
    width: auto;
}

.container {
    margin-bottom: 40px;
}
</style>
