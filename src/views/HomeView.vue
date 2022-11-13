<template>

  <NavigationBar/>
  <HeroSection/>
  <MapStatistics/>
  <StudentStatistics/>
  <FeatureSection/>
  <Testimonial/>
  
  </template>
  
  <script> /*Javascript */
  import NavigationBar from '../components/landing-page/NavigationBar.vue'
  import HeroSection from '../components/landing-page/HeroSection.vue'
  import FeatureSection from '../components/landing-page/FeatureSection.vue';
  import MapStatistics from '../components/landing-page/MapStatistics.vue';
  import StudentStatistics from '../components/landing-page/StudentStatistics.vue';
  import Testimonial from '../components/landing-page/Testimonial.vue';
  
  export default {
  name: "HomeView",
  components: {
    NavigationBar,
    HeroSection,
    MapStatistics,
    StudentStatistics,
    FeatureSection,
    Testimonial
    
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
  </style>