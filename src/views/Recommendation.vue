<template>

      <HeaderSidebar/>
      <div class="container bg-img d-flex justify-content-center py-auto bg-light w-100">

            <div class="row w-75 row-cols-12 mx-auto">
                  <span class="fw-bold text-center mb-4" style="font-size:30px">See what's near a university of your choice!</span>
                  <select id="selectedSchool" class="form-select">
                  <option v-for="schools of school_array" :selected="schools">{{schools}}</option>
                  </select>{{selected}}
                  <button target="_blank"><input type="submit" value="Search" v-on:click="getMap()" class ="btn btn-primary mt-3 fw-bold"></button>

            </div>
            

      </div>
            
   


</template>
       
<script>
import { getDatabase, ref, onValue, child, get } from 'firebase/database';
import HeaderSidebar from '../components/feed-page/HeaderSidebar.vue';

export default {
    name: "Recommendation",
    components: "HeaderSidebar",
    setup() {
        const db = getDatabase();
        return { db };
    },
    mounted() {
        this.getAllUniversities();
    },
    data() {
        return {
            school_array: [],
            selected: "",
            school_coordinates: []
        };
    },
    methods: {
        async getAllUniversities() {
            const dbRef = ref(this.db);
            get(child(dbRef, `users/BgABSCLotMVtaZrygixpOkVTGLw1`)).then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(snapshot.val());
                    var country_obj = snapshot.val();
                    for (var country in country_obj) {
                        // console.log(country)
                        for (var school in country_obj[country]) {
                            // console.log(school)
                            var school_name = school;
                            this.school_array.push(school);
                            // console.log(country_obj[country][school].coordinates)
                            var coordinate = country_obj[country][school].coordinates;
                            // console.log(school_name, coordinate)
                            var key = school_name;
                            var obj = coordinate;
                            this.school_coordinates[key] = obj;
                            // console.log(this.school_coordinates)
                        }
                    }
                }
                else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.log(error);
            });
        },
        getMap() {
            var selectedSchool = document.getElementById("selectedSchool").value;
            console.log(selectedSchool);
            // console.log(this.school_coordinates)
            for (var obj in this.school_coordinates) {
                var schoolName = obj;
                //console.log(schoolName)
                var coordinate = this.school_coordinates[obj];
                // console.log(coordinate)
                if (schoolName == selectedSchool) {
                    // console.log('Yes!')
                    var selectedCoordinate = this.school_coordinates[schoolName];
                    console.log(selectedCoordinate);
                    // for((key,value) of Object.entries(selectedCoordinate)){
                    //       console.log(key)
                    // }     
                    // for (const [key, value] of Object.entries(selectedCoordinate)) {
                    //       console.log(`${key}: ${value}`);
                    // }
                    //this.$router.push(`../gmaps3.html?test=${selectedCoordinate}`)
                    //this.$router.push({path: "../gmaps3.html"})
                    window.open(`../gmaps3.html?lat=${selectedCoordinate.lat}&lng=${selectedCoordinate.lng}`);
                    // { lat:35.65095921173369 , lng:139.44748538703837 }
                    //return selectedCoordinate
                }
            }
        }
    },
    components: { HeaderSidebar }
}
     

</script>
      
      <style> /* CSS*/
            .container{
                  font-family: 'Inter', sans-serif;
            };

            .bg-img{
                  background-image:  url("../assets/img/background2.png") 
            }
      
      </style>
