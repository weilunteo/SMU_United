<template>

  <NavigationBar/>
  <HeroSection/>
  <FeatureSection/>
  <!-- <a href="../src/gmaps3.html">Click me!</a> -->
  
  </template>
  
  <script> /*Javascript */
  import NavigationBar from '../components/landing-page/NavigationBar.vue'
  import HeroSection from '../components/landing-page/HeroSection.vue'
  import FeatureSection from '../components/landing-page/FeatureSection.vue';
  
  export default {
  name: "HomeView",
  components: {
    NavigationBar,
    HeroSection,
    FeatureSection,
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