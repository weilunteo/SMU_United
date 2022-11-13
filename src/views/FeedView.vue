<template>

    <HeaderSidebar/>
    <FeedCard/>
    
</template>
    
    <script> /*Javascript */
    import { toHandlers } from 'vue';
    import HeaderSidebar from '../components/feed-page/HeaderSidebar.vue';
    import FeedCard from '../components/feed-page/FeedCard.vue';
    
    export default {
    name: "FeedView",
    components: {
      HeaderSidebar,
      FeedCard
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