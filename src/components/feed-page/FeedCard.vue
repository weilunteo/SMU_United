<template>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    <!-- <div class="row"><button id="sort-button" v-on:click="sort_function()">Sort by Newest</button></div> -->
    <div class="container-sm">
    <div class="row d-inline">
        <div class="input-group">
            <div class="form-outline">
                <input id="search-input" type="search" class="form-control" v-model="university_input" placeholder="Search For University"/>
            </div>
            <button id="search-button" type="button" class="btn btn-primary">
            <i class="fas fa-search"></i>
            </button>
        </div>
    </div>
    
    <div>
        <ul >
            <li >
                <div class="dropdown">
                    <label for="FilterCountry">Filter By Country</label>
                    <select name="FilterCountry" id="FilterCountry" v-model="input_country" v-on:click="getAllCountries()" >
                        <option v-for="ctry_name of all_countries" v-bind:value="ctry_name">{{ctry_name}}</option>
                    </select>
                    <button class="search-btn-style" v-on:click="getUniversitiesByCountry()">Search</button>           

                    </div>
            </li>
            
            <li>
                <div class="dropdown">
                    <label for="FilterGPA">Filter By GPA</label>
                    <select name="FilterGPA" id="FilterGPA" v-model="GPA_input">
                        <option v-for="gpa of GPA_values">{{gpa}}</option>
                    </select>
                    <button class="search-btn-style" v-on:click="getUniversitiesByGPA()">Search</button>
                    </div>   
                    
                
            </li>
        </ul>
        
    </div>

    
    
    
    
    <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4 feed-style" >

        <div v-for="i in unis_in_selected_country">
    <div class="col">
        <div class="card" style="width: 280px">
            <!-- {{getlinks(i)}} -->
            {{getCardImage1(i)}}
            
                <img class="img" 
                        :src="card_first_image"/>
            <div class="card-body d-flex flex-column">
                <h6 class="card-title">{{i}}</h6>
                <p class="card-text">
                    <!-- {{removeCardImage1}} -->
                    <span>
                        Ratings: 5/5
                    </span>
                </p>
                <p class="card-location"> <!-- CARD LOCATION -->
                        <i class="fa-sharp fa-solid fa-location-dot"></i>
                            {{input_country}}
                </p> <!-- END OF CARD LOCATION -->
                <div class="mt-auto">
                <button class ="card-btn">  <!-- CARD BUTTON -->
                    <a href="http://localhost:5173/individual" target="_blank">
                        Find Out More! 
                    </a>
                </button> <!-- END OF CARD BUTTON -->
                </div>
                
            </div>
        </div>
    </div>
</div> 
</div>

<div class="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4 feed-style" >

<div v-for="i in unis_selected_via_GPA" >
<div class="col">
<div class="card" style="width: 280px">
    {{getCardImage1(i)}}
    
        <img class="img" 
                :src="card_first_image"/>
    <div class="card-body d-flex flex-column">
        <h6 class="card-title">{{i}}</h6>
        <p class="card-text">
            <!-- {{removeCardImage1}} -->
            <span>
                Ratings: {{GPA_input}}/5
            </span>
        </p>
        <p class="card-location"> <!-- CARD LOCATION -->
                <i class="fa-sharp fa-solid fa-location-dot"></i>
                    test
        </p> <!-- END OF CARD LOCATION -->
        <div class="mt-auto">
        <button class ="card-btn">  <!-- CARD BUTTON -->
            <a href="http://localhost:5173/individual" target="_blank">
                Find Out More! 
            </a>
        </button> <!-- END OF CARD BUTTON -->
        </div>
        
    </div>
</div>
</div>
</div>
    
    </div>
    </div>
    
    <h3>{{university_input}}</h3>
<!--     
    <button v-on:click="getCourses('Arizona State University')">CLICK MEeeeeee</button>
    {{school_mod_mapto}} -->
    
    
</template>


<script>

    import { toHandlers } from 'vue';
     import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';

    // If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
    import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js';
    import { getDatabase, ref, child, onValue, get } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

    // const firebaseConfig = {
    //     apiKey: "AIzaSyCRupTz-7gGj0j_th9vfpEwPR7cb5U-Q0o",
    //     authDomain: "smuexchangeschoolsdb.firebaseapp.com",
    //     databaseURL: "https://smuexchangeschoolsdb-default-rtdb.asia-southeast1.firebasedatabase.app",
    //     projectId: "smuexchangeschoolsdb",
    //     storageBucket: "smuexchangeschoolsdb.appspot.com",
    //     messagingSenderId: "444723552496",
    //     appId: "1:444723552496:web:b34cc45c31d545a609a235"
    // };

    // const app = initializeApp(firebaseConfig);

    // const db = getDatabase();
   

    
    export default {
      name: "FeedCard",
      setup(){
        const db = getDatabase();
        return { db }
      },
      components: {
    
    },
    mounted(){
        this.getAllUniversities();
        this.getAllCountries();
        
    },
    data() {
        return {
            // university_input: "",
            // country_input: "",
            // GPA_values: [1.0, 2.0, 3.0, 4.0],
            // countries: ["Country"],
            database: "",
            unis_in_selected_country: [],
            unis_selected_via_GPA: [],
            all_countries: [],
            object_of_schools: {},
            input_country: '',
            GPA_values: [1, 2, 3, 4],
            GPA_input: '',
            img_link: "",

            

            school_mod_mapto: "",
            card_first_image: "",
            card_desc: "",
            card_url: "",
        }
    },
    methods: {
        // getCourses(school) {
        //     this.school_courses = this.database["USA"][school]["courses"];
        // },
        // getCoordinates(school) {
        //     this.location = this.object_of_schools[school]["coordinates"];
        // },
        // getImage(school) {
        //     this.img_link = this.object_of_schools[school]["details"]["image"];
        // },
        // getURL(school) {
        //     this.url = this.object_of_schools[school]["details"]["url"];
        // },
        // getDesc(school) {
        //     this.desc = this.object_of_schools[school]["details"]["desc"];
        // },
        // getMinGPA(school) {
        //     this.minGPA = this.object_of_schools[school]["details"]["Min GPA"];
        // },
        // getReviews(school) {
        //     this.school_reviews = this.object_of_schools[school]["reviews"];
        // },
        async getAllUniversities() {
            const dbRef = ref(this.db);
            get(child(dbRef, 'parent'))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    this.database = snapshot.val();
                    
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.log(error);
            })
        },
        getUniversitiesByCountry() {
            let country = this.input_country
            var unis_arr = [];
            var unis_in_country = this.database[country];
            // console.log(this.database)
            for (var school in unis_in_country) {
                unis_arr.push(school)
            }
            this.unis_in_selected_country = unis_arr;
        },

        getAllCountries() {
            var allCountries = ["Country"];
            for (var country in this.database) {
                allCountries.push(country);
            }
            this.all_countries = allCountries;
        },

        getUniversitiesByGPA() {
            let user_GPA = this.GPA_input
            var unis_arr = [];
            if (user_GPA === "") {
                console.log("user chose nothing");
            }
            else {

                for (var country in this.database) {
                    for (var school in this.database[country]) {
                        var school_GPA = this.database[country][school]["details"]['Min GPA'];
                        if (school_GPA ==="None") {
                            unis_arr.push(school);
                        }
                        else {
                            var school_GPA_Num = parseFloat(school_GPA);
                            if (school_GPA_Num <= user_GPA) {
                                unis_arr.push(school);
                            }
                        }
                    }
                }
            }
            this.unis_selected_via_GPA = unis_arr;
        },

        UniversitiesInALargeObject() {
            var large_object = {};
            for (var country in this.database) {
                for (var school in this.database[country]) {
                    // console.log(school);
                    this.object_of_schools[school] = this.database[country][school];
                }
            }
        },
        // ///////////////////////////////////////////
    
        getCourses(school) {
            var result = {};
            for (var country in this.database) {
                for (var db_school in this.database[country]) {
                    if (db_school === school) {
                        var mods = this.database[country][school]['courses'];
                        for (var mod in mods) {
                            result[mod] = mods[mod];
                        }
                    }
                }
            }
            this.school_mod_mapto = result;
        },
        // get card image 2 and 3
        getCardImage1(school) {
            for (var country in this.database) {
                for (var db_school in this.database[country]) {
                    if (db_school === school) {
                        this.card_first_image = this.database[country][school]['details']['image']['link1'];

                    }
                    
                }
            }
        },
        removeCardImage1(school) {
            
            this.card_first_image = "";
            
        },
        getCardDesc(school) {
            for (var country in this.database) {
                for (var db_school in this.database[country]) {
                    if (db_school === school) {
                        this.card_desc = this.database[country][school]['details']['desc'];
                    }
                }
            }
        },
        getCardURL(school) {
            for (var country in this.database) {
                for (var db_school in this.database[country]) {
                    if (db_school === school) {
                        this.card_url = this.database[country][school]['details']['url'];
                    }
                }
            }
        },
        // getlinks(school) {
        //     // this.img_link
            
        //     this.image_link = this.object_of_schools[school]["details"]["image"]['link1'];

        // },

        
        
    }

    };
    
      

    
// import { getDatabase, ref, onValue, child, get } from 'firebase/database';




    //    test_function(){
    //     var list = [];
    //     const dbref = ref(db);
    //     get(dbref)
    //     .then((snapshot) => {
    //         var currentData = [];
    //         var currentData = snapshot.val();

    //         for (const [school, details] of Object.entries(currentData)) {
    //             console.log("hello")
    //             console.log(school)
    //             console.log(details)
    //             list.push([school, details]);
    //         }
    //         console.log(list);

            

    //         for(var country of list){
    //             this.countries.push(String(country[0]))
    //             // this.countries.push(country[0])
    //         }
    //         console.log(this.countries)

    //         // console.log(list[1][0]);
    //         // console.log(list[0][0]);
    //         //vue app. -> computed -> loop thru all the values ->
    //         //e.g. school: list.school, coordinates: list.coordinates

    //     })

    //     .catch(() => {
    //         //error
    //     });
    //    },

    //    insert_value(){
        
    //     var list = [];
    //     const dbref = ref(db);
    //     get(child(dbref, this.country_input))
    //     .then((snapshot) => {
    //         var currentData = [];
    //         var currentData = snapshot.val();

    //         for (const [school, details] of Object.entries(currentData)) {
    //             console.log("hello")
    //             console.log(school)
    //             console.log(details)
    //         }
    //         console.log(list);

            

    //         for(var country of list){
    //             this.countries.push(String(country[0]))
    //             // this.countries.push(country[0])
    //         }
    //         console.log(this.countries)

    //         // console.log(list[1][0]);
    //         // console.log(list[0][0]);
    //         //vue app. -> computed -> loop thru all the values ->
    //         //e.g. school: list.school, coordinates: list.coordinates

    //     })

    //     .catch(() => {
    //         //error
    //     });
    //    }
       
    
  
  

    
</script>

<style>

:root {
      --light: #EEEEEE;
      --dark: #031b4e;
      --shadow: lightgrey;
      font-family:sans-serif;
}

*{
    color: #031b4e;
    font-family:sans-serif;

}

.search-btn-style {
    width: 70px;
    background-color: #0069fc;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color: white;
    ;
}

.dropdown {
    padding: 5px;
}

#search-button{
    height: 33px;
}
#search-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    height: 33px;
    color: #031b4e;
}

.card{
    width: 380px
}

.feed-style{
    margin-left: auto;
    margin-right: auto;
    position: relative;
    padding-left: auto;
}

.card {
    border-radius: 15px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    height: 400px;
}

.img {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 200px;
}

.card-body{
    vertical-align: middle;
    margin-top: auto;
    margin-bottom: auto;
}

.card-title{
    margin-bottom: 3px;
    font-weight: bold;
    font-size: 18px;
}

.card-location {
    padding-bottom: 4px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 4px;
}

.card-text {
    margin-bottom: 5px;
    font-size: 14px;
}

.card-btn{
    font-size: 12px;
    background-color: #0069fc;
    width: 100%;
    padding-left: auto;
    padding-right: auto;
    text-align: center;
    border-radius: 7px;
    height: 32px;
    margin-bottom: 0px;

}

.card-btn a {
    color: white;
    font-weight: bold;
}

.filter-component {
    margin: 20px;
}

.btn-style{
    background-color: #0069fc;
    border: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
    color: white;
    font-weight:600;
    font-size: 14px;
}

.input-group {
    padding-top: 80px;
    padding-left: 35px;
    margin: 0 auto;
}



</style>
