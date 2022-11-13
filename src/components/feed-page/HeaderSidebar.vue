<template>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  
    <nav id="top-nav"> <!-- TOP NAVIGATION BAR -->
        <div class="top-container"> <!-- TOP CONTAINER -->
            
            <button class="hamburger" style="padding-top: 20px;" v-on:click="hamburgerClick()"> <!-- HAMBURGER ICON -->
                <span></span>
                <span></span>
                <span></span>
            </button> <!-- END OF HAMBURGER ICON -->
        
            <div class="search-wrapper"> <!-- SEARCH BAR -->
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select a Country!
                </button>
                <ul class="dropdown-menu">
                  <li v-for="country of country_name" value={{country}}> {{country}} </li>
                </ul>
              </div>
            </div> <!-- END OF SEARCH BAR -->
            
            <div> <!-- HI, NAME -->
                <p class="hi-text">Hi, Jessica!</p>
            </div> <!-- END OF HI, NAME -->
      
        </div> <!-- END OF TOP CONTAINER -->
    </nav> <!-- END OF TOP NAVIGATION BAR -->

<nav class="mobile-nav"> <!-- COLLAPSIBLE SIDE BAR -->
    <i class="fa-duotone fa-house-blank"></i><a href="#">HOME</a>
    <a href="#">YOUR MODULES</a>
    <a href="#">RECOMMENDATION</a>
    <a href="#">YOUR COMMUNITY</a>
</nav> <!-- END OF COLLAPSIBLE SIDE BAR -->

  
     
</template> 
    
  
    <script>

    import { toHandlers } from 'vue';
    
    export default {
      name: "Header-Sidebar",
      components: {
    
    },
    data() {
        return {

            country_name:["indonesia", "croatia", "jakarta"],
            records: [
                {
                    country : "Croatia",
                    university : "Zagreb University of Economics and Management",
                    CourseTitle : "Customer Relationship Management",
                    ApplicableCourseArea : "Marketing Major Elective"
                },
                {
                    country : "Croatia",
                    university : "Zagreb University of Economics and Management",
                    CourseTitle : "Digital Marketing In Tourism",
                    ApplicableCourseArea : "Marketing Major Elective"
                },
                {
                    country : "Croatia",
                    university : "Zagreb University of Economics and Management",
                    CourseTitle : "Digital Trends and Analytics in Marketing",
                    ApplicableCourseArea : "Marketing Major Elective"
                },
                {
                    country : "Croatia",
                    university : "Zagreb University of Economics and Management",
                    CourseTitle : "Digital and Social Media Marketing",
                    ApplicableCourseArea : "Marketing Major Elective"
                },
                {
                    country : "Croatia",
                    university : "Zagreb University of Economics and Management",
                    CourseTitle : "Social Network Analysis",
                    ApplicableCourseArea : "Corp Comm Major Elective"
                },
                {
                    country : "Croatia",
                    university : "Zagreb University of Economics and Management",
                    CourseTitle : "Entrepreneurship",
                    ApplicableCourseArea : "Entrepreneurship Elective"
                },
                {
                    country : "Croatia",
                    university : "Zagreb University of Economics and Management",
                    CourseTitle : "E-Marketing",
                    ApplicableCourseArea : "Technology & Entrepreneurship"
                },
                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "Indonesian Language and Culture",
                    ApplicableCourseArea : "Asian Studies"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "Religion and Politics in South Asia",
                    ApplicableCourseArea : "Asian Studies"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "Area Studies: AFROMEAS",
                    ApplicableCourseArea : "Globalisation"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "International Politics",
                    ApplicableCourseArea : "Globalisation"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "Introduction to International Relations",
                    ApplicableCourseArea : "Globalisation"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "Politics of Global Environmental Change",
                    ApplicableCourseArea : "Globalisation"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "Politics to International Cooperation: Development As The Focus",
                    ApplicableCourseArea : "Globalisation"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "Political Economy of Tourism in International Relations",
                    ApplicableCourseArea : "Globalisation"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "Politics of Global Environmental Change",
                    ApplicableCourseArea : "Globalisation"
                },

                {
                    country : "Indonesia",
                    university : "Universitas Gadjah Mada",
                    CourseTitle : "The Politics of Tourism in International Cooperation",
                    ApplicableCourseArea : "Globalisation"
                },

                ]
            
        }
    },
      methods:{
        hamburgerClick(){
          const hamburgerSelector = document.querySelector('.hamburger');
          const mobile_menu = document.querySelector('.mobile-nav');

          hamburgerSelector.classList.toggle('is-active');
          mobile_menu.classList.toggle('is-active')
        }
    }
  
  
    }
    
    </script>
    
    <style>

    :root {
      --primary: #6DAFFE;
      --light: #EEEEEE;
      --dark: #6DAFFE;
      --shadow: lightgrey;
    }


    .top-container{
      max-width: 1280px;
      margin: 0 auto;
      position: relative;

      display: flex; 
      align-items: center;
      justify-content: space-between;
      vertical-align: middle;
    }


    #top-nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 99;
      background-color: var(--dark);
      padding: 16px 32px;
      border-bottom: 3px solid var(--primary);
      margin-bottom: 20px;
      height: 100px;
    }

    .hamburger {
      display: block;
      position: relative;
      z-index: 1;

      user-select: none;

      appearance: none;
      border: none;
      outline: none;
      background: none;
      cursor: pointer;

    }

    .hamburger {
      display: block;
      position: relative;
      z-index: 1;

      user-select: none;

      appearance: none;
      border: none;
      outline: none;
      background: none;
      cursor: pointer;

      margin-right: 15px;
    }

    .hamburger span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;

      background-color: var(--light);
      border-radius: 6px;
      z-index: 1;

      transform-origin: 0 0;
      
      transition: 0.4s;
    }

    .hamburger:hover span:nth-child(2) {
      transform: translateX(10px);
      background-color: var(--primary)
    }

    .hamburger.is-active span:nth-child(1){
      transform: translate(0px, -2px) rotate(45deg);
    }

    .hamburger.is-active span:nth-child(2){
      opacity: 0;
      transform: translateX(15px);
    }

    .hamburger.is-active span:nth-child(3){
      transform: translate(-3px, 3px) rotate(-45deg);
    }

    .hamburger.is-active:hover span {
      background-color: var(--primary)
    }


    .hi-text{
      color: #FFF;
      font-size: 28px;
      font-weight: 900;
      letter-spacing: 2px;
      position: absolute;
      right: 0px;
      top: 0px;
      margin-bottom: 0px;
      display: flex;
      justify-content: center;
      margin-top: 12px;
    }

    .search-wrapper {
      margin-top: 20px;
    }

    #search-input {
      margin: 0 0.5rem 0 0.5rem;
      width: 100%;
      border: none;
      outline: none;
      background-color: var(--light);
    }

    ::placeholder {
      color: var(--dark);
    }

    .mobile-nav {
      display: block;
      position: absolute;
      top: 0;
      left: -300px;
      width: 100%;
      max-width: 300px;
      padding-top: 120px;
      height: 100%;
      z-index: 98;
      background-color: var(--dark);
      transition: 0.4s;
    }

    .mobile-nav.is-active {
      left: 0;
      position: fixed;
    }


    .mobile-nav a {
      display: block;
      width: 100%;
      max-width: 250px;
      margin: 0 auto 18px;
      text-align: left;
      padding: 10px 16px;
      background-color: var(--dark);

      color: var(--light);
      text-decoration: none;
      transition: 0.4s;

      border-radius: 8px;
      font-family:  sans-serif;
      font-weight: bold;
    }

    .mobile-nav a:hover{
      background-color: var(--light);
      color: var(--dark)
    }

    
    </style>