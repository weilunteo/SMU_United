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
    
    <div class="row d-flex flex-wrap align-items-center filter-component">
        <ul class="list-inline">
            <li class="list-inline-item">
                <div class="dropdown">
                    <label for="FilterCountry">Filter By Country</label>
                    <select name="FilterCountry" id="FilterCountry" v-model="country_input">
                        <option v-for="c of countries" v-bind:value="c" >{{c}}</option>
                    </select>
                    </div>           
            </li>
            
            <li class="list-inline-item">
                <div class="dropdown">
                    <label for="FilterGPA">Filter By GPA</label>
                    <select name="FilterGPA" id="FilterGPA">
                        <option v-for="gpa of GPA_values">{{gpa}}</option>
                    </select>
                    </div>   
                
            </li>
        </ul>
        
        
    </div>



    <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4 feed-style" >

<div v-for="i in records.australia">
        <div class="col">
            <div class="card" style="width: 280px">
                    <img class="img" 
                            src="src/assets/img/background.png"/>
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title">{{i.school}}</h6>
                    <p class="card-text">
                        <span>
                            Ratings: 5/5
                        </span>
                    </p>
                    <p class="card-location"> <!-- CARD LOCATION -->
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                                Australia
                    </p> <!-- END OF CARD LOCATION -->
                    <div class="mt-auto">
                    <button class ="card-btn">  <!-- CARD BUTTON -->
                        <a href="https://www.nyu.edu" target="_blank">
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

<button v-on:click="test_function()">Click to generate counties</button>

<h3>{{countries}}</h3>

<h3>user input {{country_input}}</h3>
  
     
</template> 

<script>

    import { toHandlers } from 'vue';
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
      name: "FeedCard",
      components: {
    
    },
    data() {
        return {
            university_input: "",
            country_input: "",
            GPA_values: [1.0, 2.0, 3.0, 4.0],
            countries: [],
            records : {
            "usa": [
                {
                    "school": "Arizona State University",
                    "courses": [
                        {
                            "Public Economics": "Public Sector Economics"
                        },
                        {
                            "Environmental Economics": "Environmental Economics"
                        },
                        {
                            "Real Estate Fundamentals": "Business Option"
                        },
                        {
                            "Advertising Management": "Marketing Major Elective"
                        },
                        {
                            "Fashion Merchandising": "Marketing Major Elective"
                        },
                        {
                            "Sales Management": "Marketing Major Elective"
                        },
                        {
                            "Social Media and Content Marketing": "Marketing Major Elective"
                        },
                        {
                            "Creativity and Innovation": "Entrepreneurship Cluster"
                        },
                        {
                            "Principles of Entrepreneurship": "Entrepreneurship Cluster"
                        },
                        {
                            "Early Childhood Intervention": "General Education - Arts"
                        },
                        {
                            "Intermediate Microeconomic Theory": "General Education - Arts"
                        },
                        {
                            "Introduction to physics": "General Education - Science"
                        },
                        {
                            "Thinking Globally: Principles of Global Studies": "Globalisation"
                        },
                        {
                            "SGS394 Topic: Global Trade in Real Time": "Global and Regional Studies"
                        },
                        {
                            "Special Topic:China in Transition": "Global and Regional Studies"
                        },
                        {
                            "CIS 300 - Web Design and Development": "IS Technology Depth Elective"
                        },
                        {
                            "CIS 355 - Business Data Warehouses and Dimensional Modeling": "IS Technology Depth Elective"
                        },
                        {
                            "CIS 415 - Big Data Analytics and Visualization in Business": "IS Technology Depth Elective"
                        },
                        {
                            "CIS 508 - Data Mining I": "IS Technology Depth Elective"
                        },
                        {
                            "CSE 230 - Computer Organization and Assembly Language Programming": "IS Technology Depth Elective"
                        },
                        {
                            "Systems Design and Electronic Commerce": "IS Management Depth Elective"
                        },
                        {
                            "Business Data Mining": "ISTDE + ANA - BSc(ISM) only"
                        },
                        {
                            "Comparitive Government": "SSMR (Social Science)"
                        },
                        {
                            "Learning and Motivation": "SSMR (Social Science)"
                        },
                        {
                            "Honors Introduction to Information Systems": "Technology & Entrepreneurship"
                        },
                        {
                            "Honors Introduction to Information Systems": "Technology and Entrepreneursh"
                        },
                        {
                            "Honors Introduction to Information Systems": "Technology and Entrepreneurshi"
                        },
                    ]
                },
                {
                    "school": "Carnegie Mellon University",
                    "courses": [
                    {
                            "International trade and international law": "Law of International Trade"
                        },
                        {
                            "Chinese Calligraphy: Culture and Skills": "Asian Studies"
                        },
                        {
                            "History of Asian Architecture": "Asian Studies"
                        },
                        {
                            "Rise of the Asian Economies": "Asian Studies"
                        },
                        {
                            "The Last Emperors: Chinese History and Society, 1600-1900": "Asian Studies"
                        },
                        {
                            "70-497 Derivative Securities": "Finance Major Elective"
                        },
                        {
                            "70-498 Futures and Swaps": "Finance Major Elective"
                        },
                        {
                            "Futures and Swaps": "Finance Major Elective"
                        },
                        {
                            "Introduction to Mathematical Finance": "Finance Major Elective"
                        },
                        {
                            "Pricing Strategy": "Marketing Major Elective"
                        },
                        {
                            "Quality Management and Productivity": "Operations Mgmt Major Elective"
                        },
                        {
                            "Information Technology Strategy": "MGMT (Entre'ship Track) Elec"
                        },
                        {
                            "Discrete Time Finance": "Quantitative Finance Elective"
                        },
                        {
                            "Linear Algebra": "Quantitative Finance Elective"
                        },
                        {
                            "Mathematics of Fixed Income Markets": "Quantitative Finance Elective"
                        },
                        {
                            "Matrices and Linear Transformation": "Quantitative Finance Elective"
                        },
                        {
                            "Conflict and Dispute Resolution": "Career Skills"
                        },
                        {
                            "Economics of Negotiation": "Career Skills"
                        },
                        {
                            "Behavioral Economics and Public Policy": "Economics Major Elective"
                        },
                        {
                            "Linear Algebra": "Econ Major Rel/Econ Options"
                        },
                        {
                            "Mathematical Models for Consulting": "Econ Major Rel/Econ Options"
                        },
                        {
                            "Writing for Economists": "Econ Major Rel/Econ Options"
                        },
                        {
                            "20th Century American Literary and Cultural Studies": "General Education - Arts"
                        },
                        {
                            "Survey of Forms: Screenwriting": "General Education - Arts"
                        },
                        {
                            "Global Business": "Globalisation"
                        },
                        {
                            "Introduction to Global Studies": "Globalisation"
                        },
                        {
                            "Poverty, Inequality and Social Policy: An International Comparison": "Globalisation"
                        },
                        {
                            "Thirsty Planet: The Politics of Water in Global Perspective": "Globalisation"
                        },
                        {
                            "Contemporary Themes in Global Systems": "Global and Regional Studies"
                        },
                        {
                            "Emerging Markets": "Global and Regional Studies"
                        },
                        {
                            "Global eBusiness Strategy": "Global and Regional Studies"
                        },
                        {
                            "Globalization": "Global and Regional Studies"
                        },
                        {
                            "International Political Economy and Organizations": "Global and Regional Studies"
                        },
                        {
                            "Legal Topics: Introduction to Intellectual Property Law": "Global and Regional Studies"
                        },
                        {
                            "Great Ideas in Theoretical Computer Science": "IS Technology Depth Elective"
                        },
                        {
                            "Introduction to Computer Systems": "IS Technology Depth Elective"
                        },
                        {
                            "Introduction to Deep Learning": "IS Technology Depth Elective"
                        },
                        {
                            "Machine Learning for Text Mining": "IS Technology Depth Elective"
                        },
                        {
                            "Mobile to Cloud: Building Distributed Applications": "IS Technology Depth Elective"
                        },
                        {
                            "Mobile to Cloud: Developing Distributed Applications": "IS Technology Depth Elective"
                        },
                        {
                            "Principles of Imperative Computation": "IS Technology Depth Elective"
                        },
                        {
                            "A/B Testing, Design and Analysis": "Business-Oriented Elective"
                        },
                        {
                            "Agile Methods": "Business-Oriented Elective"
                        },
                        {
                            "Artificial Intelligence: Representation and Problem Solving": "Business-Oriented Elective"
                        },
                        {
                            "Cloud Computing": "Business-Oriented Elective"
                        },
                        {
                            "Finance": "Business-Oriented Elective"
                        },
                        {
                            "Machine Learning in Practice": "Business-Oriented Elective"
                        },
                        {
                            "Methods for Statistics and Data Science": "Business-Oriented Elective"
                        },
                        {
                            "Natural Language Processing": "Business-Oriented Elective"
                        },
                        {
                            "Reasoning with Data": "Business-Oriented Elective"
                        },
                        {
                            "Electronic Business": "IS Management Depth Elective"
                        },
                        {
                            "Algorithm Design and Analysis": "Analytics Major Elective"
                        },
                        {
                            "Applied Legal Analytics & Artificial Intelligence": "IS Depth Elective"
                        },
                        {
                            "Data Mining and Business Analytics": "IS Depth Elective"
                        },
                        {
                            "Parallel and Sequential Data Structures and Algorithms": "IS Depth Elective"
                        },
                        {
                            "Practical Data Science": "IS Depth Elective"
                        },
                        {
                            "Software engineering for startups": "IS Depth Elective"
                        },
                        {
                            "Special topics: Designing smart and healthy systems": "IS Depth Elective"
                        },
                        {
                            "API Design and Implementation": "IS Options"
                        },
                        {
                            "Algorithms and Advanced Data Structures": "IS Options"
                        },
                        {
                            "Innovation in Information Systems: Health Care": "IS Options"
                        },
                        {
                            "Parallel Computer Architecture and Programming": "IS Options"
                        },
                        {
                            "Parallel and Sequential Data Structures and Algorithms": "IS Options"
                        },
                        {
                            "88-119 Strategy Cooperation and Competition": "SSMR (Social Science)"
                        },
                        {
                            "88-385 Managerial Decision Making": "SSMR (Social Science)"
                        },
                        {
                            "Abnormal Psychology": "SSMR (Social Science)"
                        },
                        {
                            "Comparative Foreign Policy: China, Russia, and the US": "SSMR (Social Science)"
                        },
                        {
                            "Comparative Politics": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Political Philosophy": "SSMR (Social Science)"
                        },
                        {
                            "Politics through Film": "SSMR (Social Science)"
                        },
                        {
                            "Protest, Propaganda, and the Public Sphere, 1500-": "SSMR (Social Science)"
                        },
                        {
                            "Stress, Coping and Well-Being": "SSMR (Social Science)"
                        },
                        {
                            "Theories of International Relations": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Entrepreneurship": "Technology & Entrepreneurship"
                        },
                        {
                            "Introduction to Entrepreneurship": "Technology and Entrepreneursh"
                        },
                        {
                            "Introduction to Entrepreneurship": "Technology and Entrepreneurshi"
                        },
                        {
                            "Stochastic Modeling and Simulations": "TE + OPIM"
                        },
                        {
                            "Venture Capital Investing": "TE + FNCE"
                        }
                    ]
                },
                {   "school": "California State University Long Beach",
                    "courses": [
                        {
                            "FIN 480. Derivatives": "Analy of Derivative Securities"
                        },
                        {
                            "Asia and Globalization": "Asian Studies"
                        },
                        {
                            "ACCT 465 - International Accounting": "Business Option"
                        },
                        {
                            "ECON 320 - Money and Banking": "Business Option"
                        },
                        {
                            "HRM 458 - Managing culture and diversity": "Business Option"
                        },
                        {
                            "Intermediate Financial Management": "Finance Major Elective"
                        },
                        {
                            "Management in Financial Institutions": "Finance Major Elective"
                        },
                        {
                            "Personal Finance": "Finance Major Elective"
                        },
                        {
                            "Working Capital Management and Cash Budgeting": "Finance Major Elective"
                        },
                        {
                            "Advertising and Promotion I": "Marketing Major Elective"
                        },
                        {
                            "INTRO TO ENTREPRENEURIAL MKTG": "Marketing Major Elective"
                        },
                        {
                            "International Marketing": "Marketing Major Elective"
                        },
                        {
                            "Marketing Analytics": "Marketing Major Elective"
                        },
                        {
                            "New Products/New Services": "Marketing Major Elective"
                        },
                        {
                            "PROMOTION STRATEGIES": "Marketing Major Elective"
                        },
                        {
                            "International Development": "Globalisation"
                        },
                        {
                            "Introduction to International Studies": "Globalisation"
                        },
                        {
                            "INTERNATIONAL BUSINESS": "Global and Regional Studies"
                        },
                        {
                            "International Development": "Global and Regional Studies"
                        },
                        {
                            "International Finance": "Global and Regional Studies"
                        },
                        {
                            "International and Comparative Management": "Global and Regional Studies"
                        },
                        {
                            "Business Intelligence": "IS Technology Depth Elective"
                        },
                        {
                            "Mobile Application Development": "IS Technology Depth Elective"
                        },
                        {
                            "Web Programming and Accessibility": "IS Technology Depth Elective"
                        },
                        {
                            "Introduction to Business Telecommunications": "Technology & Entrepreneurship"
                        },
                        {
                            "Introduction to Business Telecommunications": "Technology and Entrepreneursh"
                        },
                        {
                            "Introduction to Business Telecommunications": "Technology and Entrepreneurshi"
                        }
                
                ]
                },
                {
                    "school": "Emory University",
                    "courses": [
                        {
                            "Industrial Organisation": "Industrial Organisation"
                        },
                        {
                            "Economics of Labour": "Labour Economics"
                        },
                        {
                            "Health Economics II": "Health Economics"
                        },
                        {
                            "Alternative Dispute Resolution": "Negotn & Mediatn for Lawyers"
                        },
                        {
                            "White Collar Crime": "Corporate Crime"
                        },
                        {
                            "Competitive advantage": "Business Option"
                        },
                        {
                            "Entrepreneurial Private Equity (1653)": "Business Option"
                        },
                        {
                            "Entrepreneurial Private Equity: Perspectives from Practitioners": "Business Option"
                        },
                        {
                            "Forecasting & Predictive Analytics": "Business Option"
                        },
                        {
                            "Forecasting and Predictive Analytics": "Business Option"
                        },
                        {
                            "Foundations of Digital Markets": "Business Option"
                        },
                        {
                            "Global Derivatives Markets": "Business Option"
                        },
                        {
                            "International Finance (1535)": "Business Option"
                        },
                        {
                            "Intro. to Bus.Data Analytics": "Business Option"
                        },
                        {
                            "Investments": "Business Option"
                        },
                        {
                            "Making Effective Decisions": "Business Option"
                        },
                        {
                            "Real Estate Market Analysis (1670)": "Business Option"
                        },
                        {
                            "Strategic Decision Analysis (1712)": "Business Option"
                        },
                        {
                            "Advanced Corporate Finance": "Finance Major Elective"
                        },
                        {
                            "Advanced Derivatives": "Finance Major Elective"
                        },
                        {
                            "Applied investment Management": "Finance Major Elective"
                        },
                        {
                            "Corp. Governance and Firm Value": "Finance Major Elective"
                        },
                        {
                            "Distressed Investing": "Finance Major Elective"
                        },
                        {
                            "Fixed Income (1536)": "Finance Major Elective"
                        },
                        {
                            "International Finance (1535)": "Finance Major Elective"
                        },
                        {
                            "International finance": "Finance Major Elective"
                        },
                        {
                            "Investments": "Finance Major Elective"
                        },
                        {
                            "Mergers & Acquisitions": "Finance Major Elective"
                        },
                        {
                            "Venture Capital and Private Equity": "Finance Major Elective"
                        },
                        {
                            "Competitive Advantage": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Entrepreneurship": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Leading and Managing Change": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Social Enterprise & Impact Investment": "Strategic Mgmt Major Elective"
                        },
                        {
                            "341 - Marketing Seminar": "Marketing Major Elective"
                        },
                        {
                            "Advertising & Marketing Communications": "Marketing Major Elective"
                        },
                        {
                            "Applied IMC": "Marketing Major Elective"
                        },
                        {
                            "Content Marketing In the digital age": "Marketing Major Elective"
                        },
                        {
                            "Customer Lifetime Valuation": "Marketing Major Elective"
                        },
                        {
                            "Digital and Social Media Strategy": "Marketing Major Elective"
                        },
                        {
                            "Monetization & Pricing Strategy": "Marketing Major Elective"
                        },
                        {
                            "Non-Profit Marketing": "Marketing Major Elective"
                        },
                        {
                            "Product and Brand Management": "Marketing Major Elective"
                        },
                        {
                            "Sales and Business Development": "Marketing Major Elective"
                        },
                        {
                            "Seminar on Global Marketing": "Marketing Major Elective"
                        },
                        {
                            "Operations Strategy": "Operations Mgmt Major Elective"
                        },
                        {
                            "Process Analysis and Six Sigma": "Operations Mgmt Major Elective"
                        },
                        {
                            "Business Communication": "Corp Comm Major Elective"
                        },
                        {
                            "Integrated Marketing Communications": "Corp Comm Major Elective"
                        },
                        {
                            "Linear Algebra": "Quantitative Finance Elective"
                        },
                        {
                            "Derivatives (1532)": "FNCE + QF"
                        },
                        {
                            "Negotiations": "Capabilities - Managing"
                        },
                        {
                            "Culture and Economy": "Economics Major Elective"
                        },
                        {
                            "Economics and Psychology": "Economics Major Elective"
                        },
                        {
                            "Experimental Economics": "Economics Major Elective"
                        },
                        {
                            "Financial Economics": "Economics Major Elective"
                        },
                        {
                            "Managerial Economics": "Economics Major Elective"
                        },
                        {
                            "Personal Finance Investing": "Econ Major Rel/Econ Options"
                        },
                        {
                            "Advanced Topics In Economics: Financial Econometrics": "ECON + FNCE"
                        },
                        {
                            "Entrepreneurial Private Equity": "Entrepreneurship Cluster"
                        },
                        {
                            "Entrepreneurship": "Entrepreneurship Cluster"
                        },
                        {
                            "Behaviour Modification": "Free Electives (For LKCSB)"
                        },
                        {
                            "Negotiations": "Free Electives (For LKCSB)"
                        },
                        {
                            "Strategic Valuation": "Free Electives (For LKCSB)"
                        },
                        {
                            "Applied Entrepreneurship": "Free Electives (SCIS only)"
                        },
                        {
                            "Corporate Finance": "Free Electives (SCIS only)"
                        },
                        {
                            "Negotiations": "Free Electives (SCIS only)"
                        },
                        {
                            "Organization & Management": "Free Electives (SCIS only)"
                        },
                        {
                            "Personal Financial Investing": "Free Electives (SCIS only)"
                        },
                        {
                            "Strategic Management": "Free Electives (SCIS only)"
                        },
                        {
                            "Basic Problems in Philosophy": "General Education - Arts"
                        },
                        {
                            "Classical Mythology": "General Education - Arts"
                        },
                        {
                            "European Economic History II": "General Education - Arts"
                        },
                        {
                            "Intro to Japanese Culture": "General Education - Arts"
                        },
                        {
                            "Revolutionary France,1750-1815": "General Education - Arts"
                        },
                        {
                            "Special Topic: Religious Conflict/American History": "General Education - Arts"
                        },
                        {
                            "The Greeks": "General Education - Arts"
                        },
                        {
                            "The Pacific War: 1941-1945": "General Education - Arts"
                        },
                        {
                            "Introduction to Nutrition": "General Education - Science"
                        },
                        {
                            "Information and Global Capital Markets": "Global and Regional Studies"
                        },
                        {
                            "Social Enterprise in Nicaragua (BBA juniors only)": "Global and Regional Studies"
                        },
                        {
                            "International Finance": "GRS + FNCE"
                        },
                        {
                            "Data and Decision Analytics": "IS Technology Depth Elective"
                        },
                        {
                            "Banking Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "International Humanitarian Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Corporate Control": "SSMR (Econs/Acct/Business)"
                        },
                        {
                            "Sales & Business Development": "SSMR (Econs/Acct/Business)"
                        },
                        {
                            "Abnormal Psychology": "SSMR (Social Science)"
                        },
                        {
                            "An Introduction to Feminism for Empowerment and Social Justice": "SSMR (Social Science)"
                        },
                        {
                            "Cognition": "SSMR (Social Science)"
                        },
                        {
                            "IDS 213-000: Politics Of Identity": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Anthropology": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Comparative Politics": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to International Politics": "SSMR (Social Science)"
                        },
                        {
                            "PSYC 309-000: Brain And Language": "SSMR (Social Science)"
                        },
                        {
                            "Arab-Israeli Conflict": "Political Science Major"
                        },
                        {
                            "Introduction to Comparative Politics": "Political Science Major"
                        },
                        {
                            "Introduction to International Politics": "Political Science Major"
                        },
                        {
                            "Special Topics in Political Science": "Political Science Major"
                        },
                        {
                            "The Arab-Israeli Conflict": "Political Science Major"
                        },
                        {
                            "Criminology": "Sociology Major Elective"
                        },
                        {
                            "Global Change": "Sociology Major Elective"
                        },
                        {
                            "Mass Media and Social Influences": "Sociology Major Elective"
                        },
                        {
                            "Special Topics in Sociology": "Sociology Major Elective"
                        },
                        {
                            "Foundations of Digital Enterprises and Markets": "Technology & Entrepreneurship"
                        },
                        {
                            "Foundations of Digital Enterprises and Markets": "Technology and Entrepreneursh"
                        },
                        {
                            "Foundations of Digital Enterprises and Markets": "Technology and Entrepreneurshi"
                        },
                        {
                            "Innovation in a World Gone Digital": "Technology & Entrepreneurship"
                        },
                        {
                            "Innovation in a World Gone Digital": "Technology and Entrepreneursh"
                        },
                        {
                            "Innovation in a World Gone Digital": "Technology and Entrepreneurshi"
                        },
                        {
                            "Intro to Business Computing": "Technology & Entrepreneurship"
                        },
                        {
                            "Intro to Business Computing": "Technology and Entrepreneursh"
                        },
                        {
                            "Intro to Business Computing": "Technology and Entrepreneurshi"
                        }
                    ]
                },
                {
                    "school": "University of Florida",
                    "courses": [
                        {
                            "Real Estate Analysis": "Real Estate Economics"
                        },
                        {
                            "Derivative Securities": "Analy of Derivative Securities"
                        },
                        {
                            "Introduction to Comparative Politics": "Comparing Pol. Systems"
                        },
                        {
                            "FIN 4414 Financial Management": "Business Option"
                        },
                        {
                            "Sales Management": "Business Option"
                        },
                        {
                            "Debt and Money Markets": "Finance Major Elective"
                        },
                        {
                            "Derivative Securities": "Finance Major Elective"
                        },
                        {
                            "Introduction to Financial Planning and Wealth Management": "Finance Major Elective"
                        },
                        {
                            "Multinational Management": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Special Topics in in Religion: Taoism and Chinese Culture": "Asia Studies"
                        },
                        {
                            "MAN4723: Strategic Management": "Econ Major Rel/Econ Options"
                        },
                        {
                            "American State and Local Government": "General Education - Arts"
                        },
                        {
                            "COMICS/SEQUENTIAL ART  STUDIO": "General Education - Arts"
                        },
                        {
                            "HISTORY OF FILM II": "General Education - Arts"
                        },
                        {
                            "Masterpieces of Art": "General Education - Arts"
                        },
                        {
                            "Popular Music in America": "General Education - Arts"
                        },
                        {
                            "Television and American Society": "General Education - Arts"
                        },
                        {
                            "Introduction to Sports Psychology": "General Education - Science"
                        },
                        {
                            "GLOBAL LEADERSHIP": "Global and Regional Studies"
                        },
                        {
                            "INTERNATIONAL BUSINESS": "Global and Regional Studies"
                        },
                        {
                            "International Advertising": "Global and Regional Studies"
                        },
                        {
                            "Multinational Business Operations": "Global and Regional Studies"
                        },
                        {
                            "CONSUMER BEHAVIOR": "Business-Oriented Elective"
                        },
                        {
                            "Introduction to Social Entrepreneurship": "Business-Oriented Elective"
                        },
                        {
                            "Principles of Advertising": "Business-Oriented Elective"
                        },
                        {
                            "Principles of Entrepreneurship": "Business-Oriented Elective"
                        },
                        {
                            "Principles of Management": "Business-Oriented Elective"
                        },
                        {
                            "Gender and Health": "SSMR (Social Science)"
                        },
                        {
                            "Politics of Developing Nations": "SSMR (Social Science)"
                        },
                        {
                            "Social Psychology": "SSMR (Social Science)"
                        },
                        {
                            "Sociology of Gender": "SSMR (Social Science)"
                        },
                        {
                            "Sociology of Human Sexuality": "SSMR (Social Science)"
                        },
                        {
                            "War and Peace in World Politics": "SSMR (Social Science)"
                        },
                        {
                            "Politics in Fiction and Film": "Political Science Major"
                        },
                        {
                            "Psychology of Personality": "Psychology Major Elective"
                        },
                        {
                            "Social Psychology": "Psychology Major Elective"
                        },
                        {
                            "Technology and Society": "Sociology Major Elective"
                        },
                        {
                            "Principles of Entrepreneurship": "Technology & Entrepreneurship"
                        },
                        {
                            "Principles of Entrepreneurship": "Technology and Entrepreneursh"
                        },
                        {
                            "Principles of Entrepreneurship": "Technology and Entrepreneurshi"
                        }
                    ]
                },
                {
                    "school": "Illinois Institute of Technology",
                    "courses": [
                        {
                            "Valuation/Portfolio Management": "Valuation"
                        },
                        {
                            "Futures Options and OTC Derivatives": "Investmt & Financial Data Anal"
                        },
                        {
                            "Strategic Cost Management": "AO (Financial Management Track"
                        },
                        {
                            "Behavioral Economics of Managerial & Consumer Decision Making": "Business Option"
                        },
                        {
                            "Financial Economics I": "Business Option"
                        },
                        {
                            "Investment Banking": "Business Option"
                        },
                        {
                            "Creating and Financing New Technology Ventures": "Finance Major Elective"
                        },
                        {
                            "Equity Valuation": "Finance Major Elective"
                        },
                        {
                            "Operations Management": "Operations Mgmt Major Elective"
                        },
                        {
                            "Warehousing and Distribution": "Operations Mgmt Major Elective"
                        },
                        {
                            "Global Health": "Global and Regional Studies"
                        },
                        {
                            "Understanding and Competing in the Global Marketplace": "Global and Regional Studies"
                        },
                        {
                            "Introduction to Geographic Information Systems": "Analytics Major Elective"
                        },
                        {
                            "Cognitive Process": "SSMR (Social Science)"
                        },
                        {
                            "Problems of Multi-Ethnic, Multi-Religious States": "SSMR (Social Science)"
                        },
                        {
                            "THE FATE OF SOCIETIES": "SSMR (Social Science)"
                        },
                        {
                            "Cognitive Process": "Psychology Major Elective"
                        },
                        {
                            "THE FATE OF SOCIETIES": "Sociology Major Elective"
                        },
                        {
                            "Entrepreneurship Minor Summit Course": "Technology & Entrepreneurship"
                        },
                        {
                            "Entrepreneurship Minor Summit Course": "Technology and Entrepreneursh"
                        },
                        {
                            "Entrepreneurship Minor Summit Course": "Technology and Entrepreneurshi"
                        },
                        {
                            "Introduction to Entrepreneurship": "Technology & Entrepreneurship"
                        },
                        {
                            "Introduction to Entrepreneurship": "Technology and Entrepreneursh"
                        },
                        {
                            "Introduction to Entrepreneurship": "Technology and Entrepreneurshi"
                        }
                                ]
                },
                {
                    "school": "University of Minnesota",
                    "courses": [
                        {
                            "Advanced Macroeconomic Policy": "Advanced Macroeconomics"
                        },
                        {
                            "Introduction to Individual Differences": "Psy of Individual Differences"
                        },
                        {
                            "Introduction to Personality": "Psy of Individual Differences"
                        },
                        {
                            "Introduction to personality": "Psy of Individual Differences"
                        },
                        {
                            "Fundamentals of Federal Income Tax": "AO (Taxation Track)"
                        },
                        {
                            "EAS 3468 Social Change in Modern China": "Asian Studies"
                        },
                        {
                            "From Subjects to Citizens: The History of East Asia From 1500 to the Present": "Asian Studies"
                        },
                        {
                            "Introduction to East Asia I: The Imperial Age": "Asian Studies"
                        },
                        {
                            "Social Change in Modern China": "Asian Studies"
                        },
                        {
                            "How Pictures Persuade": "Business Option"
                        },
                        {
                            "International Business Communication": "Business Option"
                        },
                        {
                            "Introduction to Electronic Media Production": "Business Option"
                        },
                        {
                            "Introduction to Information Technology in Business": "Business Option"
                        },
                        {
                            "Managing Technologies in the Supply Chain": "Business Option"
                        },
                        {
                            "Modern Sport": "Business Option"
                        },
                        {
                            "Persuasion Theories": "Business Option"
                        },
                        {
                            "SCO3041 Project Management": "Business Option"
                        },
                        {
                            "Service Management": "Business Option"
                        },
                        {
                            "Sport and Society": "Business Option"
                        },
                        {
                            "Supply Chain Planning and Control": "Business Option"
                        },
                        {
                            "Banking Institutions": "Finance Major Elective"
                        },
                        {
                            "Financial Economics": "Finance Major Elective"
                        },
                        {
                            "Financial Markets and Interest Rates": "Finance Major Elective"
                        },
                        {
                            "Mergers and Acquisitions In Action – Process and Valuation": "Finance Major Elective"
                        },
                        {
                            "Options & Derivatives I": "Finance Major Elective"
                        },
                        {
                            "Introduction to Design Thinking": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Introduction to Entrepreneurship": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Management of Innovation and Change": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Topics: Environmental Issues": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Advertising and Promotion": "Marketing Major Elective"
                        },
                        {
                            "Brand Management": "Marketing Major Elective"
                        },
                        {
                            "MKTG 4080W Marketing Strategy": "Marketing Major Elective"
                        },
                        {
                            "Marketing-in-Action: Marketing Practicum": "Marketing Major Elective"
                        },
                        {
                            "Sales Management": "Marketing Major Elective"
                        },
                        {
                            "Sport Marketing": "Marketing Major Elective"
                        },
                        {
                            "Compensation and Benefits": "Org Behaviour & HR Major Elec"
                        },
                        {
                            "The Individual and Organizational Performance": "Org Behaviour & HR Major Elec"
                        },
                        {
                            "Project Management": "Operations Mgmt Major Elective"
                        },
                        {
                            "Quality Management and Lean Six Sigma": "Operations Mgmt Major Elective"
                        },
                        {
                            "International Business Communication": "Corp Comm Major Elective"
                        },
                        {
                            "American Indian History: 1830 to the Present": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "American Indian History: 1830 to the Present": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Career Exploration & Development": "Career Skills"
                        },
                        {
                            "Introduction to Clinical Psychology": "EMR (Social Science)"
                        },
                        {
                            "Introduction to Entrepreneurship": "Econ Major Rel/Econ Options"
                        },
                        {
                            "Entrepreneurial Management": "Entrepreneurship Cluster"
                        },
                        {
                            "Fundamentals of Management": "Free Electives (SCIS only)"
                        },
                        {
                            "Intro to Cognitive Psychology": "Free Electives (SCIS only)"
                        },
                        {
                            "Introduction to Health Psychology": "Free Electives (SCIS only)"
                        },
                        {
                            "The Language of Business": "Free Electives (SCIS only)"
                        },
                        {
                            "Introduction to Criminal Behavior and Social Control": "General Education - Arts"
                        },
                        {
                            "Introduction to Urban Studies: The Complexity of Metropolitan Life": "General Education - Arts"
                        },
                        {
                            "Living in the Global": "General Education - Arts"
                        },
                        {
                            "Social Movements, Protests, and Change": "General Education - Arts"
                        },
                        {
                            "User Experience in Design": "General Education - Arts"
                        },
                        {
                            "Geography of Global Cities": "Globalisation"
                        },
                        {
                            "Senior Seminar in International Business": "Globalisation"
                        },
                        {
                            "The United States and the Global Economy": "Globalisation"
                        },
                        {
                            "Comparative Economic Systems": "Global and Regional Studies"
                        },
                        {
                            "Global Institutions of Power: World Bank, International Monetary Fund, and World Trade Organization": "Global and Regional Studies"
                        },
                        {
                            "Globalization and Social Justice": "Global and Regional Studies"
                        },
                        {
                            "Topics in Global Studies: Global Political Economy": "Global and Regional Studies"
                        },
                        {
                            "World Economy": "Global and Regional Studies"
                        },
                        {
                            "International Marketing": "GRS + MKTG"
                        },
                        {
                            "The International Environment of Business": "GRS + MGMT"
                        },
                        {
                            "Introduction to Business Intelligence and Data Warehousing ": "IS Technology Depth Elective"
                        },
                        {
                            "Fundamentals of Management": "Business-Oriented Elective"
                        },
                        {
                            "Information Systems for Business Processes and Management": "Business-Oriented Elective"
                        },
                        {
                            "Principles of Marketing": "Business-Oriented Elective"
                        },
                        {
                            "Web 2.0: The Business of Social Media": "Business-Oriented Elective"
                        },
                        {
                            "Electronic Commerce": "IS Management Depth Elective"
                        },
                        {
                            "Introduction to Data Mining": "ISTDE + ANA (Adv Tech Track)"
                        },
                        {
                            "Analysis and Modeling of Business Systems": "IS Depth Elective"
                        },
                        {
                            "Internet Programming": "IS Depth Elective"
                        },
                        {
                            "PSY 3201: Introduction to Social Psychology": "IS Options"
                        },
                        {
                            "Political Science 3251W: Power, Virtue and Vice: Ancient and Early Modern Political Theory": "IS Options"
                        },
                        {
                            "Intelligence and Creativity": "SSMR (Econs/Acct/Business)"
                        },
                        {
                            "Buyer Behavior": "SSMR (Social Science)"
                        },
                        {
                            "Governments and Markets": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Abnormal Psychology": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Biological Psychology": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Clinical Psychology": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Criminal Behavior and Social Control": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Cultural Psychology": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Individual Differences": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Industrial & Organizational Psychology": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to the Criminal Justice System": "SSMR (Social Science)"
                        },
                        {
                            "Personality and Social Behavior": "SSMR (Social Science)"
                        },
                        {
                            "Psychology of individual differences": "SSMR (Social Science)"
                        },
                        {
                            "Social Problems": "SSMR (Social Science)"
                        },
                        {
                            "Global Politics": "Political Science Major"
                        },
                        {
                            "International Relations": "Political Science Major"
                        },
                        {
                            "Politics of Sex": "Political Science Major"
                        },
                        {
                            "Repression and Democracy Around the World": "Political Science Major"
                        },
                        {
                            "Migrants, Refugees, Citizens, and Exiles: The U.S. on an Immigrant Planet": "Sociology Major Elective"
                        },
                        {
                            "Policing America": "Sociology Major Elective"
                        },
                        {
                            "Computer Security for the Business Professional": "Technology & Entrepreneurship"
                        },
                        {
                            "Computer Security for the Business Professional": "Technology and Entrepreneursh"
                        },
                        {
                            "Computer Security for the Business Professional": "Technology and Entrepreneurshi"
                        },
                        {
                            "Social Networking: Theories and Methods": "Technology & Entrepreneurship"
                        },
                        {
                            "Social Networking: Theories and Methods": "Technology and Entrepreneursh"
                        },
                        {
                            "Social Networking: Theories and Methods": "Technology and Entrepreneurshi"
                        },
                        {
                            "Introduction to Information Technology in Business": "Technology Studies"
                        }
                                ]
                },
                {
                    "school": "North Carolina State University",
                    "courses": [
                        {
                            "BUS 429 Financial Modelling": "Analytics for Financial Instr"
                        },
                        {
                            "Introduction to Healthcare Economics": "Health Economics"
                        },
                        {
                            "Positive Psychology": "Psychology of Emotions"
                        },
                        {
                            "BUS 429 Financial Modelling": "Finance Major Elective"
                        },
                        {
                            "International Financial Management": "Finance Major Elective"
                        },
                        {
                            "Investments and Portfolio Management": "Finance Major Elective"
                        },
                        {
                            "Training, Development and Performance Management": "Org Behaviour & HR Major Elec"
                        },
                        {
                            "Case Studies in Public Relations": "Corp Comm Major Elective"
                        },
                        {
                            "Media History and Theory": "Corp Comm Major Elective"
                        },
                        {
                            "Managerial Economics": "Economics Major Elective"
                        },
                        {
                            "Research Seminar in Economics": "Economics Major Elective"
                        },
                        {
                            "The Political Economy of the Market Process": "Economics Major Elective"
                        },
                        {
                            "HS 175 Horticulture Entrepreneurial Skills for Local Markets": "Entrepreneurship Cluster"
                        },
                        {
                            "Ergonomics": "General Education - Arts"
                        },
                        {
                            "Introduction to Comparative Politics": "General Education - Arts"
                        },
                        {
                            "Introduction to International Studies": "Globalisation"
                        },
                        {
                            "Operations Management": "Business-Oriented Elective"
                        },
                        {
                            "Campaigns and Elections in the US Political System": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Non-profits": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Women's and Gender Studies": "Sociology Major Elective"
                        },
                        {
                            "Business Opportunity Analysis": "Technology & Entrepreneurship"
                        },
                        {
                            "Business Opportunity Analysis": "Technology and Entrepreneursh"
                        },
                        {
                            "Business Opportunity Analysis": "Technology and Entrepreneurshi"
                        },
                        {
                            "Foundations in Arts Entrepreneurship": "Technology & Entrepreneurship"
                        },
                        {
                            "Foundations in Arts Entrepreneurship": "Technology and Entrepreneursh"
                        },
                        {
                            "Foundations in Arts Entrepreneurship": "Technology and Entrepreneurshi"
                        },
                        {
                            "Interdisciplinary Entrepreneurial Thinking I: Skills and Planning Basics": "Technology & Entrepreneurship"
                        },
                        {
                            "Interdisciplinary Entrepreneurial Thinking I: Skills and Planning Basics": "Technology and Entrepreneursh"
                        },
                        {
                            "Interdisciplinary Entrepreneurial Thinking I: Skills and Planning Basics": "Technology and Entrepreneurshi"
                        }
                    ]
                },
                {
                    "school": "Ohio State University",
                    "courses": [
                        {
                            "ECON5001: Game Theory in Economics": "Game Theory"
                        },
                        {
                            "ECON5700: Industrial Organization": "Industrial Organisation"
                        },
                        {
                            "ECON5850: Labour Economics": "Labour Economics"
                        },
                        {
                            "BUSFIN 4211: Corporate Finance": "Finance Major Elective"
                        },
                        {
                            "Entrepreneurial Finance": "Finance Major Elective"
                        },
                        {
                            "Investments": "Finance Major Elective"
                        },
                        {
                            "Real Estate Finance": "Finance Major Elective"
                        },
                        {
                            "International Marketing": "Marketing Major Elective"
                        },
                        {
                            "Product Design and Development": "Marketing Major Elective"
                        },
                        {
                            "BUSMHR 4324 - Staffing: Concepts and Competencies for Acquiring Talent": "Org Behaviour & HR Major Elec"
                        },
                        {
                            "Cooperation and Conflict in the Global Economy": "Economics Major Elective"
                        },
                        {
                            "ECON 2367.02 - Current Economic Issues in the United States": "Economics Major Elective"
                        },
                        {
                            "ECON4300: Government Finance in the American Economy": "Economics Major Elective"
                        },
                        {
                            "ECON4830: Economics of Sports": "Economics Major Elective"
                        },
                        {
                            "PSY1100: Introduction to Pyschology": "General Education - Science"
                        },
                        {
                            "BUSMHR 2000 - 0200: Introduction to International Business": "Globalisation"
                        },
                        {
                            "Global Politics": "Globalisation"
                        },
                        {
                            "THE INSTITUTIONAL ENVIRONMENT OF INTERNATIONAL BUSINESS": "Globalisation"
                        },
                        {
                            "ECON 4560 - 200: Cooperation and Conflict in the Global Economy": "Global and Regional Studies"
                        },
                        {
                            "International Operations": "GRS + OPIM"
                        },
                        {
                            "AMIS 2000 - Foundations of Accounting": "IS Options"
                        },
                        {
                            "Business Skills and Environment": "IS Options"
                        },
                        {
                            "Foundation of Entrepreneurship": "IS Options"
                        },
                        {
                            "Foundation of Management and Human Resources": "IS Options"
                        },
                        {
                            "Foundation of Marketing": "IS Options"
                        },
                        {
                            "Innovation and Entrepreneurship": "IS Options"
                        },
                        {
                            "Leadership and Character": "IS Options"
                        },
                        {
                            "Logistics Management": "IS Options"
                        },
                        {
                            "Personal Leadership and Team Effectiveness": "IS Options"
                        },
                        {
                            "Principles of MARKETING": "IS Options"
                        },
                        {
                            "International Economic Relations": "SSMR (Social Science)"
                        },
                        {
                            "BUSMHR 3510.01 - 0010   New Venture Creation": "Technology & Entrepreneurship"
                        },
                        {
                            "BUSMHR 3510.01 - 0010   New Venture Creation": "Technology and Entrepreneursh"
                        },
                        {
                            "BUSMHR 3510.01 - 0010   New Venture Creation": "Technology and Entrepreneurshi"
                        },
                        {
                            "BUSMHR 5530 - 0010: Topics in Social Entrepreneurship": "Technology & Entrepreneurship"
                        },
                        {
                            "BUSMHR 5530 - 0010: Topics in Social Entrepreneurship": "Technology and Entrepreneursh"
                        },
                        {
                            "BUSMHR 5530 - 0010: Topics in Social Entrepreneurship": "Technology and Entrepreneurshi"
                        }
                    ]
                },
                {
                    "school": "Rensselaer Polytechnic Institute",
                    "courses": [
                {
                    "International Economics and Globalization": "International Economics A"
                },
                {
                    "Accounting Information Systems": "Business Option"
                },
                {
                    "Computer Information Systems": "Business Option"
                },
                {
                    "Creating and Managing an Enterprise I": "Business Option"
                },
                {
                    "Making Business Happen": "Business Option"
                },
                {
                    "Quantitative Methods for Business": "Business Option"
                },
                {
                    "Advanced Corporate Finance": "Finance Major Elective"
                },
                {
                    "Hedge Funds and Financial Markets": "Finance Major Elective"
                },
                {
                    "Investments II": "Finance Major Elective"
                },
                {
                    "Options, Futures and Derivatives Markets": "Finance Major Elective"
                },
                {
                    "Advertising Strategy and Promotions": "Marketing Major Elective"
                },
                {
                    "Advertising and Culture": "Marketing Major Elective"
                },
                {
                    "Principles of Web Advertising": "Marketing Major Elective"
                },
                {
                    "Century of the Gene": "General Education - Science"
                },
                {
                    "Cultural Environment of International Business": "Global and Regional Studies"
                },
                {
                    "Global Strategic Management of Technological Innovation": "Global and Regional Studies"
                },
                {
                    "International Financial Management": "Global and Regional Studies"
                },
                {
                    "Web Application Design and Development": "IS Technology Depth Elective"
                },
                {
                    "Principles and Practices of American Government": "Political Science Major"
                },
                {
                    "Industrial and Organizational Psychology": "Psychology Major Elective"
                }
            ]
                },
                {
                    "school": "University of Pennsylvania",
                    "courses": [
                        {
                            "Linear Algebra": "Quantitative Finance Elective"
                        },
                        {
                            "Abnormal Psychology": "SSMR (Social Science)"
                        },
                        {
                            "CRIMINOLOGY": "SSMR (Social Science)"
                        },
                        {
                        "Classical Sociological Theory": "SSMR (Social Science)"
                    },
                    {
                        "Cognitive Psychology": "SSMR (Social Science)"
                    },
                    {
                        "Culture and Conflict in International Relations": "SSMR (Social Science)"
                    },
                    {
                        "DEVIANCE AND SOCIAL CONTROL": "SSMR (Social Science)"
                    },
                    {
                        "INTERNATIONAL SECURITY": "SSMR (Social Science)"
                    },
                    {
                        "International Relations of the United States and Asia": "SSMR (Social Science)"
                    },
                    {
                        "International Security": "SSMR (Social Science)"
                    },
                    {
                        "Knowledge and Social Structure": "SSMR (Social Science)"
                    },
                    {
                        "Mass Media and Society": "SSMR (Social Science)"
                    },
                    {
                        "Medical Sociology": "SSMR (Social Science)"
                    },
                    {
                        "Political Economy of East Asia": "SSMR (Social Science)"
                    },
                    {
                        "Politics of Multinational Firms": "SSMR (Social Science)"
                    },
                    {
                        "Population and Society": "SSMR (Social Science)"
                    },
                    {
                        "Psychology of Language": "SSMR (Social Science)"
                    },
                    {
                        "SOCIAL ISSUES IN CONTEMPORARY CHINA": "SSMR (Social Science)"
                    },
                    {
                        "Sociology of Sex: Comparative Approach": "SSMR (Social Science)"
                    },
                    {
                        "THE FAMILY": "SSMR (Social Science)"
                    },
                    {
                        "Urban Sociology": "SSMR (Social Science)"
                    },
                    {
                        "International Law and Institutions": "Political Science Major"
                    },
                    {
                        "International Security": "Political Science Major"
                    },
                    {
                        "Political Violence & Modern World": "Political Science Major"
                    },
                    {
                        "Politics of Multinational Firms": "Political Science Major"
                    },
                    {
                        "Religion and US Public Policy": "Political Science Major"
                    },
                    {
                        "The Causes of War and Peace": "Political Science Major"
                    },
                    {
                        "Chinese Culture and Society: Changes and Continuities Under Socialism and Post-Socialism": "Sociology Major Elective"
                    },
                    {
                        "Population and Society": "Sociology Major Elective"
                    },
                    {
                        "Sociology of Gender": "Sociology Major Elective"
                    },
                    {
                        "Urban Sociology": "Sociology Major Elective"
                    },
                    {
                        "Introduction to Environmental Analysis": "Technology & Entrepreneurship"
                    },
                    {
                        "Introduction to Environmental Analysis": "Technology and Entrepreneursh"
                    },
                    {
                        "Introduction to Environmental Analysis": "Technology and Entrepreneurshi"
                    },
                    {
                        "Technology and Society": "Technology & Entrepreneurship"
                    },
                    {
                        "Technology and Society": "Technology and Entrepreneursh"
                    },
                    {
                        "Technology and Society": "Technology and Entrepreneurshi"
                    }
                    ]
                },
                {
                    "school": "University of San Francisco",
                    "courses": [
                        {
                            "Options and Futures": "Business Option"
                        },
                        {
                            "Principles of Real Estate": "Finance Major Elective"
                        },
                        {
                            "Public Relations Writing": "Corp Comm Major Elective"
                        },
                        {
                            "International Negotiation": "Career Skills"
                        },
                        {
                            "Economies of East Asia": "Global and Regional Studies"
                        },
                        {
                            "Abnormal Psychology": "SSMR (Social Science)"
                        },
                        {
                            "Child Development": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to International Politics": "SSMR (Social Science)"
                        },
                        {
                            "Psychology of Sexuality": "SSMR (Social Science)"
                        },
                        {
                            "Social Worlds of Children": "SSMR (Social Science)"
                        },
                        {
                            "The Anthropology of Food: Culture, Class, Power and Change": "SSMR (Social Science)"
                        },
                        {
                            "Intro to Internatiaonal Politics": "Political Science Major"
                        },
                        {
                            "Introduction to American Politics": "Political Science Major"
                        },
                        {
                            "Introduction to International Politics": "Political Science Major"
                        },
                        {
                            "Sociology of Culture": "Sociology Major Elective"
                        },
                        {
                            "Computing, Robots, and Java": "Technology & Entrepreneurship"
                        },
                        {
                            "Computing, Robots, and Java": "Technology and Entrepreneursh"
                        },
                        {
                            "Computing, Robots, and Java": "Technology and Entrepreneurshi"
                        },
                        {
                            "Entrpreneurship / Business Plan Development": "Technology & Entrepreneurship"
                        },
                        {
                            "Entrpreneurship / Business Plan Development": "Technology and Entrepreneursh"
                        },
                        {
                            "Entrpreneurship / Business Plan Development": "Technology and Entrepreneurshi"
                        }
                    ]
                },
                {
                    "school": "University of Virginia",
                    "courses": [
                        {
                            "Behaviourial issues in marketing and management": "Org Behaviour & HR Major Elec"
                        },
                        {
                            "Economics of Labor": "SSMR (Econs/Acct/Business)"
                        },
                        {
                            "Abnormal Psychology": "SSMR (Social Science)"
                        },
                        {
                            "American Society and Popular Culture": "SSMR (Social Science)"
                        },
                        {
                            "Cognitive Processes": "SSMR (Social Science)"
                        },
                        {
                            "Criminology": "SSMR (Social Science)"
                        },
                        {
                            "Economics and Gender": "SSMR (Social Science)"
                        },
                        {
                            "Ethics and Human Rights in World Politics": "SSMR (Social Science)"
                        },
                        {
                            "International Relations of the Middle East": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Child Psychology": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Cognition": "SSMR (Social Science)"
                        },
                        {
                            "Politics of Sub-Saharan Africa": "SSMR (Social Science)"
                        },
                        {
                            "Sociology of the Family": "SSMR (Social Science)"
                        },
                        {
                            "The Politics of Western Europe": "SSMR (Social Science)"
                        },
                        {
                            "Mass Media and American Politics": "Political Science Major"
                        },
                        {
                            "Russia/USSR in World Affairs": "Political Science Major"
                        },
                        {
                            "Cognitive Processes": "Psychology Major Elective"
                        },
                        {
                            "American Society and Popular Culture": "Sociology Major Elective"
                        },
                        {
                            "Economics and Gender": "Sociology Major Elective"
                        },
                        {
                            "Social Stigma": "Sociology Major Elective"
                        },
                        {
                            "Sociology of Art": "Sociology Major Elective"
                        },
                        {
                            "Sociology of Consumption": "Sociology Major Elective"
                        },
                        {
                            "Sociology of Culture": "Sociology Major Elective"
                        },
                        {
                            "Introduction to Information Technology": "Technology & Entrepreneurship"
                        },
                        {
                            "Introduction to Information Technology": "Technology and Entrepreneursh"
                        },
                        {
                            "Introduction to Information Technology": "Technology and Entrepreneurshi"
                        },
                        {
                            "Software Development Methods": "Technology & Entrepreneurship"
                        },
                        {
                            "Software Development Methods": "Technology and Entrepreneursh"
                        },
                        {
                            "Software Development Methods": "Technology and Entrepreneurshi"
                        }
                    ]
                },
                {
                    "school": "University of Pennsylvania (Wharton School)",
                    "courses": [
                        {
                            "Forecasting Methods Management": "Statistical Programming"
                        },
                        {
                            "Urban Fiscal Policy": "Urban Economics and Policy"
                        },
                        {
                            "243. (ACCT743) Accounting for Mergers, Acquisitions, and Complex Financial Structures.": "Acct Options / Acct Elective"
                        },
                        {
                            "Accounting & Business Analysis": "Acct Options / Acct Elective"
                        },
                        {
                            "Accounting for Mergers, Acquisitions, and Complex Financial Structures": "Acct Options / Acct Elective"
                        },
                        {
                            "FNCE 2030 Advanced Corporate Finance": "Acct Options / Acct Elective"
                        },
                        {
                            "FNCE 2510 The Finance of Buyouts and Acquisitions": "Acct Options / Acct Elective"
                        },
                        {
                            "Merger and Acquisitions": "Acct Options / Acct Elective"
                        },
                        {
                            "Venture Capital and Entrepreneurial Management": "Acct Options / Acct Elective"
                        },
                        {
                            "Predictive Analytics": "ADA Major Elective + AO/AE"
                        },
                        {
                            "Predictive Analytics using Financial Disclosures": "ADA Major Elective + AO/AE"
                        },
                        {
                            "Asian Religions Global": "Asian Studies"
                        },
                        {
                            "East Asian Religions": "Asian Studies"
                        },
                        {
                            "International Relations of the U.S. & Asia": "Asian Studies"
                        },
                        {
                            "CORPORATE VALUATION": "Business Option"
                        },
                        {
                            "Competitive Strategy": "Business Option"
                        },
                        {
                            "Monetary Economics and the Global Economy": "Business Option"
                        },
                        {
                            "Nonprofit Sector: Economic Challenges and Strategic Responses": "Business Option"
                        },
                        {
                            "Real Estate Investment: Analysis and Financing": "Business Option"
                        },
                        {
                            "256. FINANCE ENERGY. (C)": "Finance Major Elective"
                        },
                        {
                            "Advanced Corporate Finance": "Finance Major Elective"
                        },
                        {
                            "BEHAVIORAL FINANCE": "Finance Major Elective"
                        },
                        {
                            "CAPITAL MARKETS": "Finance Major Elective"
                        },
                        {
                            "DATA SCIENCE FOR FINANCE": "Finance Major Elective"
                        },
                        {
                            "Fixed Income Securities": "Finance Major Elective"
                        },
                        {
                            "International Corporate Finance.": "Finance Major Elective"
                        },
                        {
                            "Merger and Acquisitions": "Finance Major Elective"
                        },
                        {
                            "REAL ESTATE INVESTMENTS": "Finance Major Elective"
                        },
                        {
                            "Real Estate Investment: Analysis and Financing": "Finance Major Elective"
                        },
                        {
                            "Diversity and the Law": "Law Major Elective"
                        },
                        {
                            "Law of Corporate Management and Finance": "Law Major Elective"
                        },
                        {
                            "Data and Analysis For Marketing Decisions": "Marketing Major Elective"
                        },
                        {
                            "Marketing Strategy": "Marketing Major Elective"
                        },
                        {
                            "Marketing for Social Impact": "Marketing Major Elective"
                        },
                        {
                            "Consulting to Growth Companies": "MGMT (Entre'ship Track) Elec"
                        },
                        {
                            "Venture Capital and Entrepreneurial Management": "MGMT (Entre'ship Track) Elec"
                        },
                        {
                            "Formal Logic I": "Cap - Modes of Thinking"
                        },
                        {
                            "AI, Business and Society": "Comm - Technology & Society"
                        },
                        {
                            "AI, Business and Society": "Communities – Tech and Society"
                        },
                        {
                            "EESC 2300 Global Climate Change": "Comm - Technology & Society"
                        },
                        {
                            "EESC 2300 Global Climate Change": "Communities – Tech and Society"
                        },
                        {
                            "Elementary Spanish I and II: Advanced Beginners": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Elementary Spanish I and II: Advanced Beginners": "Comm - Cultures of the Mod W"
                        },
                        {
                            "FREN 0100 Elementary French I": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "FREN 0100 Elementary French I": "Comm - Cultures of the Mod W"
                        },
                        {
                            "HEBR 0100 Elementary Modern Hebrew I": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "HEBR 0100 Elementary Modern Hebrew I": "Comm - Cultures of the Mod W"
                        },
                        {
                            "MGMT 2880 Managing and Competing in China": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "Economic Analysis of Law": "Economics Major Elective"
                        },
                        {
                            "International Housing Comparisons": "Economics Major Elective"
                        },
                        {
                            "Market Design": "Economics Major Elective"
                        },
                        {
                            "Social Entrepreneurship": "Entrepreneurship Cluster"
                        },
                        {
                            "Venture Implementation": "Entrepreneurship Cluster"
                        },
                        {
                            "Introduction to Algorithms": "Free Electives (For LKCSB)"
                        },
                        {
                            "American Jesus": "General Education - Arts"
                        },
                        {
                            "Ancient Greece": "General Education - Arts"
                        },
                        {
                            "Critical Thinking": "General Education - Arts"
                        },
                        {
                            "Culture, Communication and Body Language": "General Education - Arts"
                        },
                        {
                            "India's Literature: Love, War, Wisdom, Humor": "General Education - Arts"
                        },
                        {
                            "Introduction To Contemporary Art: 1945-Present": "General Education - Arts"
                        },
                        {
                            "Lords of the Ring": "General Education - Arts"
                        },
                        {
                            "Strategic Reasoning": "General Education - Arts"
                        },
                        {
                            "The Life and Letters of Paul": "General Education - Arts"
                        },
                        {
                            "International Relations of the U.S. & Asia": "GEA + POSC"
                        },
                        {
                            "Business in the Global Political Environment": "Global and Regional Studies"
                        },
                        {
                            "Global strategic management": "Global and Regional Studies"
                        },
                        {
                            "International Banking": "Global and Regional Studies"
                        },
                        {
                            "The Political Environment of the Multinational Firm": "Global and Regional Studies"
                        },
                        {
                            "Trade Money & Pirates": "Global and Regional Studies"
                        },
                        {
                            "International Corporate Finance": "GRS + FNCE"
                        },
                        {
                            "Multinational Management": "GRS + MGMT"
                        },
                        {
                            "Gamification for Business": "Business-Oriented Elective"
                        },
                        {
                            "Operations Strategy": "Business-Oriented Elective"
                        },
                        {
                            "INTERNATIONAL RELATIONS IN THEORY AND PRCATICE": "SSMR (Social Science)"
                        },
                        {
                            "The City in South Asia.": "SSMR (Social Science)"
                        },
                        {
                            "The Politics of Food": "Political Science Major"
                        },
                        {
                            "Sociology of Religion": "Sociology Major Elective"
                        },
                        {
                            "264 Venture Capital and Entrepreneurial Management": "Technology & Entrepreneurship"
                        },
                        {
                            "264 Venture Capital and Entrepreneurial Management": "Technology and Entrepreneursh"
                        },
                        {
                            "264 Venture Capital and Entrepreneurial Management": "Technology and Entrepreneurshi"
                        },
                        {
                            "ASP - FIN-TECH": "Technology & Entrepreneurship"
                        },
                        {
                            "ASP - FIN-TECH": "Technology and Entrepreneursh"
                        },
                        {
                            "ASP - FIN-TECH": "Technology and Entrepreneurshi"
                        },
                        {
                            "Business Strategy and Policy": "Technology & Entrepreneurship"
                        },
                        {
                            "Business Strategy and Policy": "Technology and Entrepreneursh"
                        },
                        {
                            "Business Strategy and Policy": "Technology and Entrepreneurshi"
                        },
                        {
                            "Entrepreneurship": "Technology & Entrepreneurship"
                        },
                        {
                            "Entrepreneurship": "Technology and Entrepreneursh"
                        },
                        {
                            "Entrepreneurship": "Technology and Entrepreneurshi"
                        },
                        {
                            "Management of Technology": "Technology & Entrepreneurship"
                        },
                        {
                            "Management of Technology": "Technology and Entrepreneursh"
                        },
                        {
                            "Management of Technology": "Technology and Entrepreneurshi"
                        },
                        {
                            "Technological Innovation & Entrepreneurship": "Technology & Entrepreneurship"
                        },
                        {
                            "Technological Innovation & Entrepreneurship": "Technology and Entrepreneursh"
                        },
                        {
                            "Technological Innovation & Entrepreneurship": "Technology and Entrepreneurshi"
                        }
                    ]
                },
                {
                    "school": "Babson College",
                    "courses": [
                        {
                            "ECN3630-01 Industrial Organisation and Public Policy": "Industrial Organisation"
                        },
                        {
                            "Description ECN3671 THE ECONOMICS OF LABOR MARKETS": "Labour Economics"
                        },
                        {
                            "Money, Banking, and the Economy": "Monetary Economics"
                        },
                        {
                            "ECN3675 Environmental Economics – Policy and Analysis": "Environmental Economics"
                        },
                        {
                            "Environmental Economics – Policy and Analysis": "Environmental Economics"
                        },
                        {
                            "HEALTH ECONOMICS": "Health Economics"
                        },
                        {
                            "CHINA TODAY (HIS)": "Asian Studies"
                        },
                        {
                            "CHINA TODAY: THE DRAGON RISES": "Asian Studies"
                        },
                        {
                            "INTERNATIONAL POLITICS OF ASIA": "Asian Studies"
                        },
                        {
                            "SOUTH ASIAN HISTORY": "Asian Studies"
                        },
                        {
                            "BUILDING CONTRACTS FOR NEW VENTURE": "Business Option"
                        },
                        {
                            "BUSINESS INTELLIGENCE": "Business Option"
                        },
                        {
                            "BUSINESS INTELLIGENCE AND DATA ANALYTICS": "Business Option"
                        },
                        {
                            "Building Contracts for New Ventures": "Business Option"
                        },
                        {
                            "ENTREPRENEURIAL FINANCE": "Business Option"
                        },
                        {
                            "ENTREPRENEURSHIP WITH CHINESE CHARACTERS": "Business Option"
                        },
                        {
                            "INTRODUCTION TO SUSTAINABILITY": "Business Option"
                        },
                        {
                            "MANAGEMENT CONSULTING": "Business Option"
                        },
                        {
                            "Managing the Sales Process": "Business Option"
                        },
                        {
                            "Marketing Communications": "Business Option"
                        },
                        {
                            "Money, Banking, and the Economy": "Business Option"
                        },
                        {
                "NEGOTIATIONS": "Business Option"
            },
            {
                "PRIVACY LAW": "Business Option"
            },
            {
                "Strategic Decision Making": "Business Option"
            },
            {
                "Strategic Marketing": "Business Option"
            },
            {
                "USER INTERFACE DESIGN": "Business Option"
            },
            {
                "Web Technologies": "Business Option"
            },
            {
                "AFFORDABLE DESIGN AND ENTREPRENEURSHIP": "Business Elective"
            },
            {
                "Case Studies in Business Analytics": "Business Elective"
            },
            {
                "FINANCIAL TRADING STRAT AND RISK MGT": "Business Elective"
            },
            {
                "Financial Modeling Using Simulation and Optimization with Applications to Finance, Marketing and Man": "Business Elective"
            },
            {
                "Blockchain and Crypt": "Finance Major Elective"
            },
            {
                "CORPORATE FINANCE I:RAISING CAPITAL": "Finance Major Elective"
            },
            {
                "CORPORATE FINANCIAL MANAGEMENT": "Finance Major Elective"
            },
            {
                "ENTREPRENEURIAL FINANCE": "Finance Major Elective"
            },
            {
                "FINTECH FIN3502-01": "Finance Major Elective"
            },
            {
                "FIXED INCOME AND STRUCTURED PRODUCTS": "Finance Major Elective"
            },
            {
                "FIXED INCOME AND STRUCTURED PRODUCTS FIN4535-01": "Finance Major Elective"
            },
            {
                "Financial Trading Strategies": "Finance Major Elective"
            },
            {
                "Financial Trading Strategies and Risk Management": "Finance Major Elective"
            },
            {
                "PERSONAL FINANCE": "Finance Major Elective"
            },
            {
                "Personal Finance": "Finance Major Elective"
            },
            {
                "Personal Financial Management": "Finance Major Elective"
            },
            {
                "Real Estate Finance": "Finance Major Elective"
            },
            {
                "Real Estate development": "Finance Major Elective"
            },
            {
                "Security Valuation": "Finance Major Elective"
            },
            {
                "iNTERNATIONAL FINANCE": "Finance Major Elective"
            },
            {
                "MANAGING A GROWING BUSINESS": "Strategic Mgmt Major Elective"
            },
            {
                "THE ULTIMATE ENTREPRENEURIAL CHALLENGE": "Strategic Mgmt Major Elective"
            },
            {
                "BRAND MANAGEMENT": "Marketing Major Elective"
            },
            {
                "DIGITAL MARKETING": "Marketing Major Elective"
            },
            {
                "Marketing Communications": "Marketing Major Elective"
            },
            {
                "VALUE SELLING FOR THE ENTREPRENEUR": "Marketing Major Elective"
            },
            {
                "Media Studies": "Corp Comm Major Elective"
            },
            {
                "VALUE SELLING FOR THE ENTREPRENEUR": "Entrepreneurship Major Elec"
            },
            {
                "SF2 SILICON TECHNOLOGY VENTURES": "MGMT (Entre'ship Track) Elec"
            },
            {
                "APPLIED MULTIVARIATE STATISTICS": "Quantitative Finance Elective"
            },
            {
                "FIN4507-01 Risk Management": "Quantitative Finance Elective"
            },
            {
                "FIN4535-01 Fixed Income and Structured Products": "Quantitative Finance Elective"
            },
            {
                "Financial Simulation": "Quantitative Finance Elective"
            },
            {
                "MKT 4520-01 Digital Analytics": "Marketing (Marketing Analytics"
            },
            {
                "Building an Inclusive Organization: Diversity, Equity, Inclusion and Belonging in the Workplace.": "Capabilities - Managing"
            },
            {
                "Foundations of Entrepreneurial Management": "Capabilities - Managing"
            },
            {
                "MANAGMENT CONSULTING": "Capabilities - Managing"
            },
            {
                "NEGOTIATIONS MOB3580-01": "Capabilities - Managing"
            },
            {
                "Operations Management": "Capabilities - Managing"
            },
            {
                "NST1070 Climate and Human Health": "Comm - Technology & Society"
            },
            {
                "NST1070 Climate and Human Health": "Communities – Tech and Society"
            },
            {
                "SCN3660 Human Health and Disease": "Comm - Technology & Society"
            },
            {
                "SCN3660 Human Health and Disease": "Communities – Tech and Society"
            },
            {
                "ARAB CULTURE BUSINESS": "Comm - Cltr of the Modern Wrl"
            },
            {
                "ARAB CULTURE BUSINESS": "Comm - Cultures of the Mod W"
            },
            {
                "African History and Foodways Syllabus": "Comm - Cltr of the Modern Wrl"
            },
            {
                "African History and Foodways Syllabus": "Comm - Cultures of the Mod W"
            },
            {
                "Business Arabic": "Comm - Cltr of the Modern Wrl"
            },
            {
                "Business Arabic": "Comm - Cultures of the Mod W"
            },
            {
                "CVA2009-01 East Asian Cultures": "Comm - Cltr of the Modern Wrl"
            },
            {
                "CVA2009-01 East Asian Cultures": "Comm - Cultures of the Mod W"
            },
            {
                "Critical Race and Indigenous Studies": "Comm - Cltr of the Modern Wrl"
            },
            {
                "Critical Race and Indigenous Studies": "Comm - Cultures of the Mod W"
            },
            {
                "Introduction to Cultural Anthropology": "Comm - Cltr of the Modern Wrl"
            },
            {
                "Introduction to Cultural Anthropology": "Comm - Cultures of the Mod W"
            },
            {
                "Japanese I": "Comm - Cltr of the Modern Wrl"
            },
            {
                "Japanese I": "Comm - Cultures of the Mod W"
            },
            {
                "LVA 2062 - SUBURB AMER IN LIT": "Comm - Cltr of the Modern Wrl"
            },
            {
                "LVA 2062 - SUBURB AMER IN LIT": "Comm - Cultures of the Mod W"
            },
            {
                "LVA2062 SUBURBAN AMERICA IN LITERATURE AND CULTURE": "Comm - Cltr of the Modern Wrl"
            },
            {
                "LVA2062 SUBURBAN AMERICA IN LITERATURE AND CULTURE": "Comm - Cultures of the Mod W"
            },
            {
                "LVA2062-01 SUBURBAN AMERICA IN LITERATURE AND CULTURE": "Comm - Cltr of the Modern Wrl"
            },
            {
                "LVA2062-01 SUBURBAN AMERICA IN LITERATURE AND CULTURE": "Comm - Cultures of the Mod W"
            },
            {
                "LVA2062-01 Suburban America in Literature and Culture": "Comm - Cltr of the Modern Wrl"
            },
            {
                "LVA2062-01 Suburban America in Literature and Culture": "Comm - Cultures of the Mod W"
            },
            {
                "Mediating the Wild": "Comm - Cltr of the Modern Wrl"
            },
            {
                "Mediating the Wild": "Comm - Cultures of the Mod W"
            },
            {
                "Modern European History": "Comm - Cltr of the Modern Wrl"
            },
            {
                "Modern European History": "Comm - Cultures of the Mod W"
            },
            {
                "Modern Middle East": "Comm - Cltr of the Modern Wrl"
            },
            {
                "Modern Middle East": "Comm - Cultures of the Mod W"
            },
            {
                "Peoples and Cultures of Latin America": "Comm - Cltr of the Modern Wrl"
            },
            {
                "Peoples and Cultures of Latin America": "Comm - Cultures of the Mod W"
            },
            {
                "modern European history": "Comm - Cltr of the Modern Wrl"
            },
            {
                "modern European history": "Comm - Cultures of the Mod W"
            },
            {
                "SOUTH ASIAN HISTORY": "Comm-Cltr of Mdrn Wrld+AS std"
            },
            {
                "WOMEN IN CHINA": "Asia Studies"
            },
            {
                "Business Environment of the New Europe": "Economics Major Elective"
            },
            {
                "Contemporary Economic Systems": "Economics Major Elective"
            },
            {
                "Economic and Political Integration in the European Union": "Economics Major Elective"
            },
            {
                "Money, Banking, and the Economy": "Economics Major Elective"
            },
            {
                "Real Estate Investment": "EMR (Accounting/Business)"
            },
            {
                "Imagining Sustainability: Nature, Humanity, Business and the End of Sorrow": "Econ Major Rel/Econ Options"
            },
            {
                "MANAGEMENT CONSULTING": "Econ Major Rel/Econ Options"
            },
            {
                "EPS4515/Lecture/01 - AFFORDABLE DESIGN AND ENTREPRENEURSHIP": "Entrepreneurship Cluster"
            },
            {
                "Entrepreneurship in Fashion": "Entrepreneurship Cluster"
            },
            {
                "Foundations of Entrepreneurial Management": "Entrepreneurship Cluster"
            },
            {
                "LIVING THE SOCIAL ENTREPRENEURIAL EXPERIENCE": "Entrepreneurship Cluster"
            },
            {
                "New Technology Ventures": "Entrepreneurship Cluster"
            },
            {
                "ASTRONOMY": "Free Electives (SCIS only)"
            },
            {
                "CRIME SCIENCE": "Free Electives (SCIS only)"
            },
            {
                "SCIENCE OF SPORTS": "Free Electives (SCIS only)"
            },
            {
                "Science Of Sport": "Free Electives (SCIS only)"
            },
            {
                "FILM AND THE CITY (FLM)": "General Education - Arts"
            },
            {
                "Global Pop": "General Education - Arts"
            },
            {
                "SUSTAINABLE ENERGY SOLUTIONS": "General Education - Science"
            },
            {
                "Global Cities": "Globalisation"
            },
            {
                "Global Politics": "Globalisation"
            },
            {
                "Global Strategic Management": "Globalisation"
            },
            {
                "CHINA TODAY (HIS)": "Global and Regional Studies"
            },
            {
                "ECN AND POL INTEG IN THE EUROPEAN UNION": "Global and Regional Studies"
            },
            {
                "EPS AND NEW VENTURES IN CHINA": "Global and Regional Studies"
            },
            {
                "EPS3532 INTERNATIONAL ENTREPRENEURSHIP": "Global and Regional Studies"
            },
            {
                "Global Strategic Management": "Global and Regional Studies"
            },
            {
                "LAW 3560 - International Law for Business": "Global and Regional Studies"
            },
            {
                "Money, Banking, and the Economy": "Global and Regional Studies"
            },
            {
                "BUSINESS INTELLIGENCE AND DATA ANALYTICS": "IS Technology Depth Elective"
            },
            {
                "Case Studies in Business Analytics": "IS Technology Depth Elective"
            },
            {
                "Prototyping with IT": "IS Technology Depth Elective"
            },
            {
                "Web Technologies": "IS Technology Depth Elective"
            },
            {
                "Principles of Finance": "Business-Oriented Elective"
            },
            {
                "Digital Marketing": "IS Management Depth Elective"
            },
            {
                "NEW TECHNOLOGY VENTURES": "IS Management Depth Elective"
            },
            {
                "SPORTS APPLICATION OF MATHEMATICS": "IS Management Depth Elective"
            },
            {
                "SPORTS DECISIONS THROUGH ANALYTICS": "IS Management Depth Elective"
            },
            {
                "Digital Marketing": "ISMDE + MKTG"
            },
            {
                "After the Dictator: Cultural Transformations in Spain, Argentina, and Chile": "SSMR (Social Science)"
            },
            {
                "Business Environment of the New Europe": "SSMR (Social Science)"
            },
            {
                "COMPARATIVE POLITICS(POL)": "SSMR (Social Science)"
            },
            {
                "Global Politics": "SSMR (Social Science)"
            },
            {
                "INTRO TO PHILOSOPHY (PHL)": "SSMR (Social Science)"
            },
            {
                "JUSTICE, REVENGE & DEFEAT": "SSMR (Social Science)"
            },
            {
                "SOVIET & RUSSIAN POLITICS": "SSMR (Social Science)"
            },
            {
                "WOMEN'S STUDIES": "SSMR (Social Science)"
            },
            {
                "GENDER STUDIES (GDR)": "Sociology Major Elective"
            },
            {
                "CROWDFUNDING": "Technology & Entrepreneurship"
            },
            {
                "CROWDFUNDING": "Technology and Entrepreneursh"
            },
            {
                "CROWDFUNDING": "Technology and Entrepreneurshi"
            },
            {
                "Entrepreneurship and Opportunity": "Technology & Entrepreneurship"
            },
            {
                "Entrepreneurship and Opportunity": "Technology and Entrepreneursh"
            },
            {
                "Entrepreneurship and Opportunity": "Technology and Entrepreneurshi"
            },
            {
                "FINANCING AND VALUING SUSTAINABILITY": "Technology & Entrepreneurship"
            },
            {
                "FINANCING AND VALUING SUSTAINABILITY": "Technology and Entrepreneursh"
            },
            {
                "FINANCING AND VALUING SUSTAINABILITY": "Technology and Entrepreneurshi"
            },
            {
                "Foundations of Entrepreneurial Management": "Technology & Entrepreneurship"
            },
            {
                "Foundations of Entrepreneurial Management": "Technology and Entrepreneursh"
            },
            {
                "Foundations of Entrepreneurial Management": "Technology and Entrepreneurshi"
            },
            {
                "Great Entrepreneurial Wealth: Creation, Preservation and Destruction": "Technology & Entrepreneurship"
            },
            {
                "Great Entrepreneurial Wealth: Creation, Preservation and Destruction": "Technology and Entrepreneursh"
            },
            {
                "Great Entrepreneurial Wealth: Creation, Preservation and Destruction": "Technology and Entrepreneurshi"
            },
            {
                "New Venture Creation": "Technology & Entrepreneurship"
            },
            {
                "New Venture Creation": "Technology and Entrepreneursh"
            },
            {
                "New Venture Creation": "Technology and Entrepreneurshi"
            },
            {
                "Venture Growth Strategies": "Technology & Entrepreneurship"
            },
            {
                "Venture Growth Strategies": "Technology and Entrepreneursh"
            },
            {
                "Venture Growth Strategies": "Technology and Entrepreneurshi"
            },
            {
                "Venture Growth Strategy": "Technology & Entrepreneurship"
            },
            {
                "Venture Growth Strategy": "Technology and Entrepreneursh"
            },
            {
                "Venture Growth Strategy": "Technology and Entrepreneurshi"
            }
                    ]
                },
                {
                    "school": "University of Missouri",
                    "courses": [
                        {
                            "Economic Statistics": "Business Option"
                        },
                        {
                            "Introduction To Differential Equations": "Business Option"
                        },
                        {
                            "Fixed Income Analysis": "Finance Major Elective"
                        },
                        {
                            "Practicum In Investments": "Finance Major Elective"
                        },
                        {
                            "Intercultural Communication": "Corp Comm Major Elective"
                        },
                        {
                            "Big History: From the Big Bang to the Blackberry": "General Education - Arts"
                        },
                        {
                            "Human Anatomy And Physiology": "General Education - Science"
                        },
                        {
                            "INTERNATIONAL MANAGEMENT": "Global and Regional Studies"
                        },
                        {
                            "International Corporate Finance": "Global and Regional Studies"
                        },
                        {
                            "International Organizations And Global Problem-Solving": "Global and Regional Studies"
                        },
                        {
                            "Psychology of Women": "SSMR (Social Science)"
                        },
                        {
                            "Women and Politics in the Developing World": "SSMR (Social Science)"
                        },
                        {
                            "Marriage and the Family": "Sociology Major Elective"
                        },
                        {
                            "Women and Politics in the Developing World": "Sociology Major Elective"
                        },
                        {
                            "Computers And Information Systems": "Technology & Entrepreneurship"
                        },
                        {
                            "Computers And Information Systems": "Technology and Entrepreneursh"
                        },
                        {
                            "Computers And Information Systems": "Technology and Entrepreneurshi"
                        }
                    ]
                },
                {
                    "school": "University of Southern California (Marshall School of Business)",
                    "courses": [
                        {
                            "Corporate Financial Strategy": "Corporate Financial Mgmt"
                        },
                        {
                            "Business Forecasting": "Forecasting and Forensic Analy"
                        },
                        {
                            "The Global Economy": "International Economics A"
                        },
                        {
                            "Economics of Labor Markets and Human Capital": "Labour Economics"
                        },
                        {
                            "Financial Derivatives": "Analy of Derivative Securities"
                        },
                        {
                            "FBE423 - Introduction to Venture Capital and Private Equity": "Acct Options / Acct Elective"
                        },
                        {
                            "MERGERS, ACQUISITIONS AND RESTRUCTURING": "Acct Options / Acct Elective"
                        },
                        {
                            "Risk Management in Entertainment, Sports and the Arts": "Acct Options / Acct Elective"
                        },
                        {
                            "East Asian Humanities: The Great Tradition": "Asian Studies"
                        },
                        {
                            "Introduction to Contemporary East Asian Cinema and Culture": "Asian Studies"
                        },
                        {
                            "Japanese Literature and Culture": "Asian Studies"
                        },
                        {
                            "The Political Economy of China": "Asian Studies"
                        },
                        {
                            "Communication Strategy in Business": "Business Option"
                        },
                        {
                            "Compensation, Incentives, and Corporate Governance": "Business Option"
                        },
                        {
                            "Corporate Financial Strategy": "Business Option"
                        },
                        {
                            "Introduction to Advertising": "Business Option"
                        },
                        {
                            "Investments": "Business Option"
                        },
                        {
                            "MKT 526: Advertising and Promotion Strategy": "Business Option"
                        },
                        {
                            "Real Estate Finance and Investment": "Business Option"
                        },
                        {
                            "MERGERS, ACQUISITIONS AND RESTRUCTURING": "Business Elective"
                        },
                        {
                            "Marketing in a Digital World": "Business Elective"
                        },
                        {
                            "Persuasion": "Business Elective"
                        },
                        {
                            "Trading and Exchanges": "Business Elective"
                        },
                        {
                            "Applied Finance in Fixed Income Securities": "Finance Major Elective"
                        },
                        {
                            "Applied Portfolio Management": "Finance Major Elective"
                        },
                        {
                            "Entrepreneurial Finance: Financial Management for Developing Firms": "Finance Major Elective"
                        },
                        {
                            "Financial Analysis and Valuation": "Finance Major Elective"
                        },
                        {
                            "International Financial Mangement": "Finance Major Elective"
                        },
                        {
                            "Introduction to Forecasting and Risk Analysis": "Finance Major Elective"
                        },
                        {
                            "MERGERS, ACQUISITIONS AND RESTRUCTURING": "Finance Major Elective"
                        },
                        {
                            "Money and Capital Markets": "Finance Major Elective"
                        },
                        {
                            "Real Estate Finance and Investment": "Finance Major Elective"
                        },
                        {
                            "Trading and Exchanges": "Finance Major Elective"
                        },
                        {
                            "LAW OF CORPORATE FINANCE AND MANAGEMENT": "Law Major Elective"
                        },
                        {
                            "Advanced Methods in Strategy Analysis": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Design of Effective Organisations": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Management Consulting": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Advertising and Promotion Strategy": "Marketing Major Elective"
                        },
                        {
                            "Global Marketing Management": "Marketing Major Elective"
                        },
                        {
                            "MKT 445: New Product Development and Branding": "Marketing Major Elective"
                        },
                        {
                            "MKT 465: Global Marketing Management": "Marketing Major Elective"
                        },
                        {
                            "Marketing Blockbuster Entertainment": "Marketing Major Elective"
                        },
                        {
                            "Marketing of Creative Disruption and Innovation": "Marketing Major Elective"
                        },
                        {
                            "NEW PRODUCT DEVELOPMENT AND BRANDING": "Marketing Major Elective"
                        },
                        {
                            "Professional Selling": "Marketing Major Elective"
                        },
                        {
                            "Competitive Advantage through People": "Org Behaviour & HR Major Elec"
                        },
                        {
                            "Organization Change and Development": "Org Behaviour & HR Major Elec"
                        },
                        {
                            "Performance Management and Motivation": "Org Behaviour & HR Major Elec"
                        },
                        {
                            "Technology-Enabled Global Businesses, Markets and Sourcing": "Operations Mgmt Major Elective"
                        },
                        {
                            "Advertising and Communication": "Corp Comm Major Elective"
                        },
                        {
                            "Public Relations for Non-Profit Organizations": "Corp Comm Major Elective"
                        },
                        {
                            "Management of Real Estate Development: Feasibility Studies": "Finance (Real Estate Track)"
                        },
                        {
                            "Business Model Innovations in the Media Industry": "Digital Business Electives – A"
                        },
                        {
                            "Digital Marketing Fundamentals": "Digital Business Electives – A"
                        },
                        {
                            "Government and Business": "Capabilities - Managing"
                        },
                        {
                            "Negotiation and Persuasion": "Capabilities - Managing"
                        },
                        {
                            "Dance in Popular Culture": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Dance in Popular Culture": "Comm - Cultures of the Mod W"
                        },
                        {
                            "French 1": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "French 1": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Introduction to Cinema": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Introduction to Cinema": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Japanese I": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Japanese I": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Law, politics and public policy": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Law, politics and public policy": "Comm - Cultures of the Mod W"
                        },
                        {
                            "EALC 115 : Korean I": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "Japanese I": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "Korean I": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "Chinese Religions and Culture": "Asia Studies"
                        },
                        {
                            "Japanese Fiction": "Asia Studies"
                        },
                        {
                            "Economic Consulting and Applied Managerial Economics": "Economics Major Elective"
                        },
                        {
                            "Economics of Less Developed Countries": "Economics Major Elective"
                        },
                        {
                            "International Trade and Commercial Policy": "Economics Major Elective"
                        },
                        {
                            "Management of Small Businesses": "EMR (Accounting/Business)"
                        },
                        {
                            "Digital Playbook for Entrepreneurs: Creating a Tech Startup": "Entrepreneurship Cluster"
                        },
                        {
                            "Entrepreneurial Family Business": "Entrepreneurship Cluster"
                        },
                        {
                            "Fundamentals of Entrepreneurship": "Entrepreneurship Cluster"
                        },
                        {
                            "Business and Environmental Sustainability": "Free Electives (For LKCSB)"
                        },
                        {
                            "Introduction to Enterprise Risk Management": "Free Electives (For LKCSB)"
                        },
                        {
                            "Technical Entrepreneurship": "Free Electives (For LKCSB)"
                        },
                        {
                            "Changing Family Forms": "General Education - Arts"
                        },
                        {
                            "Classical Mythology": "General Education - Arts"
                        },
                        {
                            "Motion Picture Camera": "General Education - Arts"
                        },
                        {
                            "The Ancient World": "General Education - Arts"
                        },
                        {
                            "Global Marketing Management": "Globalisation"
                        },
                        {
                            "International Business Law": "Globalisation + LGST"
                        },
                        {
                            "International Finance": "GRS + FNCE"
                        },
                        {
                            "Digital Forensics": "IS Technology Depth Elective"
                        },
                        {
                            "Discrete Methods in Computer Science": "IS Technology Depth Elective"
                        },
                        {
                            "Enterprise Information Systems": "IS Technology Depth Elective"
                        },
                        {
                            "Introduction to Artificial Intelligence": "IS Technology Depth Elective"
                        },
                        {
                            "Parallel and Distributed Computation": "IS Technology Depth Elective"
                        },
                        {
                            "Programming Graphical User Interfaces": "IS Technology Depth Elective"
                        },
                        {
                            "Business and Environmental Sustainability": "Business-Oriented Elective"
                        },
                        {
                            "Introduction to Financial Accounting": "Business-Oriented Elective"
                        },
                        {
                            "The Business of Sports": "Business-Oriented Elective"
                        },
                        {
                            "The Urban Context for Policy and Planning": "Business-Oriented Elective"
                        },
                        {
                            "Business Information Systems Analysis and Design": "IS Management Depth Elective"
                        },
                        {
                            "Managing Communication and New Media": "IS Management Depth Elective"
                        },
                        {
                            "Marketing in a Digital World": "IS Management Depth Elective"
                        },
                        {
                            "Childhood, Birth and Reproduction": "SSMR (Social Science)"
                        },
                        {
                            "Criminal Behavior": "SSMR (Social Science)"
                        },
                        {
                            "Intergroup Relations": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Clinical Psychology": "SSMR (Social Science)"
                        },
                        {
                            "Social Cognition": "SSMR (Social Science)"
                        },
                        {
                            "Social Psychology": "SSMR (Social Science)"
                        },
                        {
                            "Public Policy and Management": "Political Science Major"
                        },
                        {
                            "Introduction to Clinical Psychology": "Psychology Major Elective"
                        },
                        {
                            "Social Psychology": "Psychology Major Elective"
                        },
                        {
                            "Feasibility Analysis": "Technology & Entrepreneurship"
                        },
                        {
                            "Feasibility Analysis": "Technology and Entrepreneursh"
                        },
                        {
                            "Feasibility Analysis": "Technology and Entrepreneurshi"
                        },
                        {
                            "Initiating New Ventures": "Technology & Entrepreneurship"
                        },
                        {
                            "Initiating New Ventures": "Technology and Entrepreneursh"
                        },
                        {
                            "Initiating New Ventures": "Technology and Entrepreneurshi"
                        },
                        {
                            "Internet Marketing": "Technology & Entrepreneurship"
                        },
                        {
                            "Internet Marketing": "Technology and Entrepreneursh"
                        },
                        {
                            "Internet Marketing": "Technology and Entrepreneurshi"
                        },
                        {
                            "The Business of Interactive Digital Media": "Technology & Entrepreneurship"
                        },
                        {
                            "The Business of Interactive Digital Media": "Technology and Entrepreneursh"
                        },
                        {
                            "The Business of Interactive Digital Media": "Technology and Entrepreneurshi"
                        },
                        {
                            "Direct Response and Internet Marketing": "TE + MKTG"
                        },
                        {
                            "Technical Entrepreneurship": "TE + MGMT"
                        }
                    ]
                },
                {
                    "school": "Clemson University",
                    "courses": [
                        {
                            "Executive Leadership and Entrepreneurship I (E L E 301)": "Technology & Entrepreneurship"
                        },
                        {
                            "Executive Leadership and Entrepreneurship I (E L E 301)": "Technology and Entrepreneursh"
                        },
                        {
                            "Executive Leadership and Entrepreneurship I (E L E 301)": "Technology and Entrepreneurshi"
                        }
                    ]
                },
                {
                    "school": "Tulsa University",
                    "courses": [
                        {
                            "History of Economic Theory": "Economic History"
                        },
                        {
                            "Health Economics": "Health Economics"
                        },
                        {
                            "Branding": "Business Option"
                        },
                        {
                            "Fundamentals of Energy Commodity Trading": "Business Option"
                        },
                        {
                            "Innovation and Qualitative Methods": "Business Option"
                        },
                        {
                            "Introduction to Digital Studies": "Business Option"
                        },
                        {
                            "Monetary Economics": "Business Option"
                        },
                        {
                            "Sales and Sales Management": "Business Option"
                        },
                        {
                            "International Business Finance": "Finance Major Elective"
                        },
                        {
                            "International Marketing": "Marketing Major Elective"
                        },
                        {
                            "Services Marketing": "Marketing Major Elective"
                        },
                        {
                            "SPAN-1004-06 Beginning Spanish I": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "SPAN-1004-06 Beginning Spanish I": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Labor Economics": "Economics Major Elective"
                        },
                        {
                            "Ceramics 1": "General Education - Arts"
                        },
                        {
                            "Astronomy": "General Education - Science"
                        },
                        {
                            "Applied Creativity and Innovation": "Business-Oriented Elective"
                        },
                        {
                            "Comparative Culture and International Business": "Business-Oriented Elective"
                        },
                        {
                            "Enterprise Creation and Development": "Business-Oriented Elective"
                        },
                        {
                            "International Business Finance": "Business-Oriented Elective"
                        },
                        {
                            "Operations Management": "Business-Oriented Elective"
                        },
                        {
                            "Principles of Advertising": "Business-Oriented Elective"
                        },
                        {
                            "Sociology of Work and Occupations": "Business-Oriented Elective"
                        },
                        {
                            "Strategic Management": "Business-Oriented Elective"
                        },
                        {
                            "Critical Thinking in Psychology: Lies and Damn Lies": "SSMR (Social Science)"
                        },
                        {
                            "Environmental Sociology": "SSMR (Social Science)"
                        },
                        {
                            "Liberalism and Democracy": "Political Science Major"
                        },
                        {
                            "VENTURE STARTUP EVALUATION": "Technology & Entrepreneurship"
                        },
                        {
                            "VENTURE STARTUP EVALUATION": "Technology and Entrepreneursh"
                        },
                        {
                            "VENTURE STARTUP EVALUATION": "Technology and Entrepreneurshi"
                        }
                    ]
                },
                {
                    "school": "Pitzer College",
                    "courses": [
                        {
                            "Asian Am Comics: Racial Politics": "Asian Studies"
                        },
                        {
                            "Asian American Women's Experience": "Asian Studies"
                        },
                        {
                            "Death, Dying, and the Afterlife": "Asian Studies"
                        },
                        {
                            "Relig, Politics, Global Violence": "Globalisation"
                        },
                        {
                            "Human Neuropsychology": "SSMR (Social Science)"
                        },
                        {
                            "International Relations in the Middle East": "SSMR (Social Science)"
                        },
                        {
                            "Rural and Urban Social Movements": "SSMR (Social Science)"
                        },
                        {
                            "Sociology of Gender": "SSMR (Social Science)"
                        },
                        {
                            "Sociology of Health and Science": "SSMR (Social Science)"
                        },
                        {
                            "Sociology of Religion": "SSMR (Social Science)"
                        },
                        {
                            "Contemporary Political and Social Movements in the Third World.": "Political Science Major"
                        },
                        {
                            "Global Politics": "Political Science Major"
                        },
                        {
                            "U.S. Foreign Policy The U.S as a Hemispheric Power": "Political Science Major"
                        },
                        {
                            "Social Stratification": "Sociology Major Elective"
                        },
                        {
                            "Sociology of Religion": "Sociology Major Elective"
                        }
                    ]
                },
                {
                    "school": "Emory University (School of Law)",
                    "courses": [
                        {
                            "International Law": "Public International Law"
                        },
                        {
                            "Computer Law": "IT and the Law"
                        },
                        {
                            "International Trade Law & Policy": "WTO: Law and Policy"
                        },
                        {
                            "White Collar Crime": "Corporate Crime"
                        },
                        {
                            "Banking Law": "Banking Law"
                        },
                        {
                            "Fundamentals of Income Taxation": "Law Major Elective"
                        },
                        {
                            "Alternative Dispute Resolution": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Analytical Methods": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Antitrust Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Banking Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Constitutional Law: Religion and State": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Directed Research": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Doing Deals: Commercial Lending Transactions": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Doing Deals: Corporate Practice": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Education Law and Policy": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Election Law: The Law of Democracy": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Environmental Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Family Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Global Public Health Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "History of Church-State Relations in the West": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "International Criminal Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "International Law and Ethics": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Labor Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Law & the Unconscious Mind": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Law and Politics": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Media Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "National Security Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Patent Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "White Collar Crimes Workshop": "Law Major Elective-LLB/JD only"
                        }
                    ]
                },
                {
                    "school": "Northeastern University",
                    "courses": [
                        {
                            "Development Economics": "Development Economics"
                        },
                        {
                            "Money and Banking": "Monetary Economics"
                        },
                        {
                            "Healthcare and Medical Economics": "Health Economics"
                        },
                        {
                            "Human Trafficking": "Human Rights in Intl Relations"
                        },
                        {
                            "Management Information Systems": "Acct Options / Acct Elective"
                        },
                        {
                            "Fundamentals of Information Analytics": "FNCE Forensics Elec + AO/AE"
                        },
                        {
                            "Information Visualization for Business": "FNCE Forensics Elec + AO/AE"
                        },
                        {
                            "Chinese Politics and Foreign Policy": "Asian Studies"
                        },
                        {
                            "East Asian Studies": "Asian Studies"
                        },
                        {
                            "Japanese Literature and Culture": "Asian Studies"
                        },
                        {
                            "Marketing in Asia": "Asian Studies"
                        },
                        {
                            "Modern Chinese History and Culture": "Asian Studies"
                        },
                        {
                            "Financial Risk Management": "Business Option"
                        },
                        {
                            "International Finance": "Business Option"
                        },
                        {
                            "Managing Organisational Change and Disruption": "Business Option"
                        },
                        {
                            "Money and Banking": "Business Option"
                        },
                        {
                            "Persuasion and Rhetoric": "Business Option"
                        },
                        {
                            "Retailing": "Business Option"
                        },
                        {
                            "Social Networks and Organizations": "Business Option"
                        },
                        {
                            "Strategies for Companies in Crisis": "Business Option"
                        },
                        {
                            "Sustaining Business in the New Economy": "Business Option"
                        },
                        {
                            "The Management Practices of Great Organizations": "Business Option"
                        },
                        {
                            "Valuation and Value Creation": "Business Option"
                        },
                        {
                            "Advanced Financial Strategy": "Finance Major Elective"
                        },
                        {
                            "Corporate Finance": "Finance Major Elective"
                        },
                        {
                            "Impact Investing and Social Finance": "Finance Major Elective"
                        },
                        {
                            "International Financial Management": "Finance Major Elective"
                        },
                        {
                            "Investment Analysis": "Finance Major Elective"
                        },
                        {
                            "Investments": "Finance Major Elective"
                        },
                        {
                            "Mergers and Acquisitions": "Finance Major Elective"
                        },
                        {
                            "Risk Management and Insurance": "Finance Major Elective"
                        },
                        {
                            "Valuation and Value Creation": "Finance Major Elective"
                        },
                        {
                            "Working Capital Management": "Finance Major Elective"
                        },
                        {
                            "New Product Development": "Marketing Major Elective"
                        },
                        {
                            "Global Supply Chain Strategy": "Operations Mgmt Major Elective"
                        },
                        {
                            "Logistics and Transportation Management": "Operations Mgmt Major Elective"
                        },
                        {
                            "Resource Planning and Scheduling": "Operations Mgmt Major Elective"
                        },
                        {
                            "Sourcing and Procurement": "Operations Mgmt Major Elective"
                        },
                        {
                            "Business and Professional Speaking": "Capabilities - Managing"
                        },
                        {
                            "Global and Intercultural Communication": "Capabilities - Managing"
                        },
                        {
                            "Leaders and Leadership in History?": "Capabilities - Managing"
                        },
                        {
                            "Principles of Organizational Communications": "Capabilities - Managing"
                        },
                        {
                            "Theories of Conflict and Negotiation": "Capabilities - Managing"
                        },
                        {
                            "History of Technology": "Comm - Technology & Society"
                        },
                        {
                            "History of Technology": "Communities – Tech and Society"
                        },
                        {
                            "Technology and Human Values": "Comm - Technology & Society"
                        },
                        {
                            "Technology and Human Values": "Communities – Tech and Society"
                        },
                        {
                            "Elementary Japanese 1": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Elementary Japanese 1": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Elementary Spanish 1": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Elementary Spanish 1": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Global Markets & Local Culture": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Global Markets & Local Culture": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Global Markets and Local Culture": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Global Markets and Local Culture": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Global Markets and Local Culture (Globalization and Resistance)": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Global Markets and Local Culture (Globalization and Resistance)": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Media, Culture, and Society": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Media, Culture, and Society": "Comm - Cultures of the Mod W"
                        },
                        {
                            "World Cultures through Film": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "World Cultures through Film": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Introduction to East Asian Studies": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "Introduction to Japanese Pop Culture": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "Modern Chinese History and Culture": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "Negotiation": "Career Skills"
                        },
                        {
                            "Bubbles, Busts, and Bailouts: Market and Regulatory Failures in the Financial Crisis": "Economics Major Elective"
                        },
                        {
                            "Economics of Sports": "Economics Major Elective"
                        },
                        {
                            "A Critique of Capitalism": "Econ Major Rel/Econ Options"
                        },
                        {
                            "Business Planning for Small and Medium Enterprises": "Entrepreneurship Cluster"
                        },
                        {
                            "Entrepreneurial Strategy and Business Model Design": "Entrepreneurship Cluster"
                        },
                        {
                            "Understanding Family Enterprise": "Entrepreneurship Cluster"
                        },
                        {
                            "Abnormal Psychology": "Free Electives (For LKCSB)"
                        },
                        {
                            "Classics of 20th-Century American Drama": "Free Electives (For LKCSB)"
                        },
                        {
                            "Developmental Psychology": "Free Electives (For LKCSB)"
                        },
                        {
                            "Fashion and costume design in Film & TV": "Free Electives (For LKCSB)"
                        },
                        {
                            "Film 101": "Free Electives (For LKCSB)"
                        },
                        {
                            "Introduction to Acting": "Free Electives (For LKCSB)"
                        },
                        {
                            "Music Therapy 1": "Free Electives (For LKCSB)"
                        },
                        {
                            "Personality": "Free Electives (For LKCSB)"
                        },
                        {
                            "Producing for the Entertainment Industry": "Free Electives (For LKCSB)"
                        },
                        {
                            "Improvisation": "Gen Educatn (>=2015 Intake)"
                        },
                        {
                            "Introduction to Acting": "Gen Educatn (>=2015 Intake)"
                        },
                        {
                            "The Professional Voice": "Gen Educatn (>=2015 Intake)"
                        },
                        {
                            "Counseling Theories and Practice": "General Education - Arts"
                        },
                        {
                            "Exploring Politics and Political Science": "General Education - Arts"
                        },
                        {
                            "Global Charities: Solution or Problem?": "General Education - Arts"
                        },
                        {
                            "Globalization and International Affairs": "General Education - Arts"
                        },
                        {
                            "Persuasion and Rhetoric": "General Education - Arts"
                        },
                        {
                            "Cities in a Global Context": "Globalisation"
                        },
                        {
                            "Global Markets and Local Culture (Globalization and Resistance)": "Globalisation"
                        },
                        {
                            "Globalization and International Affairs": "Globalisation"
                        },
                        {
                            "International Business and Global Social Responsibility": "Globalisation"
                        },
                        {
                            "Analyzing the Global Business Environment": "Global and Regional Studies"
                        },
                        {
                            "International Marketing": "Global and Regional Studies"
                        },
                        {
                            "Global Markets & Local Culture": "GRS + SSMR (Social Science)"
                        },
                        {
                            "Artificial Intelligence": "IS Technology Depth Elective"
                        },
                        {
                            "Computer Music Fundamentals": "IS Technology Depth Elective"
                        },
                        {
                            "Computer Systems": "IS Technology Depth Elective"
                        },
                        {
                            "Cryptography": "IS Technology Depth Elective"
                        },
                        {
                            "Data Mining for Business": "IS Technology Depth Elective"
                        },
                        {
                            "Foundations of Game Design": "IS Technology Depth Elective"
                        },
                        {
                            "Fundamentals of Information Analytics": "IS Technology Depth Elective"
                        },
                        {
                            "Information Visualization for Business": "IS Technology Depth Elective"
                        },
                        {
                            "Principles of Information Science": "IS Technology Depth Elective"
                        },
                        {
                            "Visualization Technologies 1": "IS Technology Depth Elective"
                        },
                        {
                            "Development Economics": "Business-Oriented Elective"
                        },
                        {
                            "Sustainability in the Business Environment": "Business-Oriented Elective"
                        },
                        {
                            "Fundamentals of Cloud Computing": "IS Options"
                        },
                        {
                            "Abnormal Psychology": "SSMR (Social Science)"
                        },
                        {
                            "Aging in Society": "SSMR (Social Science)"
                        },
                        {
                            "America and the Middle East": "SSMR (Social Science)"
                        },
                        {
                            "Drugs and Behavior": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Arabic Culture": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Women’s, Gender, and Sexuality Studies": "SSMR (Social Science)"
                        },
                        {
                            "Media,Culture and Society": "SSMR (Social Science)"
                        },
                        {
                            "Modern Political Thought": "SSMR (Social Science)"
                        },
                        {
                            "Personality": "SSMR (Social Science)"
                        },
                        {
                            "Physiopsychology": "SSMR (Social Science)"
                        },
                        {
                            "Principles of Organizational Communications": "SSMR (Social Science)"
                        },
                        {
                            "Religion and Politics": "SSMR (Social Science)"
                        },
                        {
                            "Social Psychology": "SSMR (Social Science)"
                        },
                        {
                            "Sociology of Poverty": "SSMR (Social Science)"
                        },
                        {
                            "Government and Politics in the Middle East": "Political Science Major"
                        },
                        {
                            "National Security, War, and Terrorism": "Political Science Major"
                        },
                        {
                            "Russian Foreign Policy": "Political Science Major"
                        },
                        {
                            "Social Stratification": "Sociology Major Elective"
                        },
                        {
                            "Family Business Management": "Technology & Entrepreneurship"
                        },
                        {
                            "Family Business Management": "Technology and Entrepreneursh"
                        },
                        {
                            "Family Business Management": "Technology and Entrepreneurshi"
                        },
                        {
                            "Global Entrepreneurship": "Technology & Entrepreneurship"
                        },
                        {
                            "Global Entrepreneurship": "Technology and Entrepreneursh"
                        },
                        {
                            "Global Entrepreneurship": "Technology and Entrepreneurshi"
                        },
                        {
                            "Social Entrepreneurship": "Technology & Entrepreneurship"
                        },
                        {
                            "Social Entrepreneurship": "Technology and Entrepreneursh"
                        },
                        {
                            "Social Entrepreneurship": "Technology and Entrepreneurshi"
                        },
                        {
                            "Practicum for DS 2000": "Technology Studies"
                        },
                        {
                            "Programming with Data": "Technology Studies"
                        }
                    ]
                },
                {
                    "school": "Oregon State University",
                    "courses": [
                        {
                            "INTRODUCTION TO BUSINESS ANALYTICS": "ADA Major Elective + AO/AE"
                        },
                        {
                            "ADVERTISING MANAGEMENT": "Business Option"
                        },
                        {
                            "APPLIED QUANTITATIVE METHODS": "Business Option"
                        },
                        {
                            "Advanced Financial Management": "Business Option"
                        },
                        {
                            "CUSTOMER RELATIONSHIP MANAGEMENT": "Business Option"
                        },
                        {
                            "GLOBAL MARKETING": "Business Option"
                        },
                        {
                            "Innovation & New Product Development": "Business Option"
                        },
                        {
                            "PERSONAL SELLING": "Business Option"
                        },
                        {
                            "VENTURE PLANNING": "Business Option"
                        },
                        {
                            "ADVANCED FINANCIAL MANAGEMENT": "Finance Major Elective"
                        },
                        {
                            "Commercial banking": "Finance Major Elective"
                        },
                        {
                            "Financial statement analysis": "Finance Major Elective"
                        },
                        {
                            "International Financial Management": "Finance Major Elective"
                        },
                        {
                            "International financial markets": "Finance Major Elective"
                        },
                        {
                            "New Venture Financing": "Finance Major Elective"
                        },
                        {
                            "Portfolio Management": "Finance Major Elective"
                        },
                        {
                            "INTERNATIONAL BUSINESS": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Venture Management": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Retail Management": "Marketing Major Elective"
                        },
                        {
                            "Compensation": "Org Behaviour & HR Major Elec"
                        },
                        {
                            "MANAGING INDIVIDUAL AND TEAM PERFORMANCE": "Org Behaviour & HR Major Elec"
                        },
                        {
                            "ADVANCED MANUFACTURING COSTING TECHNIQUES": "Operations Mgmt Major Elective"
                        },
                        {
                            "AGRICULTURAL AND FOOD MANAGEMENT": "Operations Mgmt Major Elective"
                        },
                        {
                            "Lean Manufacturing Systems Engineering": "Operations Mgmt Major Elective"
                        },
                        {
                            "Production Planning and Control": "Operations Mgmt Major Elective"
                        },
                        {
                            "Project Management in Engineering": "Operations Mgmt Major Elective"
                        },
                        {
                            "SUSTAINABLE BUSINESS OPERATIONS": "Operations Mgmt Major Elective"
                        },
                        {
                            "Digital Literacy and culture": "Comm - Technology & Society"
                        },
                        {
                            "Digital Literacy and culture": "Communities – Tech and Society"
                        },
                        {
                            "History of beer and brewing": "Comm - Technology & Society"
                        },
                        {
                            "History of beer and brewing": "Communities – Tech and Society"
                        },
                        {
                            "Introduction to climate change": "Comm - Technology & Society"
                        },
                        {
                            "Introduction to climate change": "Communities – Tech and Society"
                        },
                        {
                            "Introduction to environmental science and sustainability": "Comm - Technology & Society"
                        },
                        {
                            "Introduction to environmental science and sustainability": "Communities – Tech and Society"
                        },
                        {
                            "SOCIAL MEDIA AND EVERYDAY LIFE": "Comm - Technology & Society"
                        },
                        {
                            "SOCIAL MEDIA AND EVERYDAY LIFE": "Communities – Tech and Society"
                        },
                        {
                            "SUSTAINABLE COMMUNITIES": "Comm - Technology & Society"
                        },
                        {
                            "SUSTAINABLE COMMUNITIES": "Communities – Tech and Society"
                        },
                        {
                            "Science in the age of empires": "Comm - Technology & Society"
                        },
                        {
                            "Science in the age of empires": "Communities – Tech and Society"
                        },
                        {
                            "First-year Spanish": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "First-year Spanish": "Comm - Cultures of the Mod W"
                        },
                        {
                            "History of western civilization": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "History of western civilization": "Comm - Cultures of the Mod W"
                        },
                        {
                            "THE HISTORY OF HUMAN RIGHTS IN THE MODERN WORLD": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "THE HISTORY OF HUMAN RIGHTS IN THE MODERN WORLD": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Women in United States": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Women in United States": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Chinese Politics": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "History of Buddhist Philosophy": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "Introduction to the Buddhist Tradition": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "TRADITIONAL CHINA AND JAPAN": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "Introduction to Entrepreneurship": "Entrepreneurship Cluster"
                        },
                        {
                            "NEW VENTURE LABORATORY": "Entrepreneurship Cluster"
                        },
                        {
                            "ADOLESCENT DEVELOPMENT": "General Education - Arts"
                        },
                        {
                            "FILMS FOR THE FUTURE": "General Education - Arts"
                        },
                        {
                            "GENDER, FAMILY AND POLITICS IN MODERN CHINA": "General Education - Arts"
                        },
                        {
                            "HISTORY OF WESTERN CIVILIZATION (HST102)": "General Education - Arts"
                        },
                        {
                            "INTRODUCTION TO UNITED STATES GOVERNMENT AND POLITICS": "General Education - Arts"
                        },
                        {
                            "Introduction to the Visual Arts": "General Education - Arts"
                        },
                        {
                            "WORLD CINEMA PART II: 1968-PRESENT": "General Education - Arts"
                        },
                        {
                            "ENVIRONMENTAL GEOLOGY": "General Education - Science"
                        },
                        {
                            "Exploring the Deep: Geography of the world's oceans": "General Education - Science"
                        },
                        {
                            "GENERAL BIOLOGY": "General Education - Science"
                        },
                        {
                            "MANAGING NATURAL RESOURCES FOR THE FUTURE": "General Education - Science"
                        },
                        {
                            "MAP AND IMAGE INTERPRETATION": "General Education - Science"
                        },
                        {
                            "Modern China & Japan": "Global and Regional Studies"
                        },
                        {
                            "BUSINESS PROCESS MANAGEMENT": "Business-Oriented Elective"
                        },
                        {
                            "MANAGING INDIVIDUAL AND TEAM PERFORMANCE": "Business-Oriented Elective"
                        },
                        {
                            "NEW VENTURE LABORATORY": "Business-Oriented Elective"
                        },
                        {
                            "OPERATIONS MANAGEMENT": "Business-Oriented Elective"
                        }
                    ]
                },
                {
                    "school": "University of Illinois (College of Law)",
                    "courses": [
                        {
                            "Intellectual Property Topics": "Intellectual Property Law"
                        },
                        {
                            "Introduction to Intellectual Property": "Intellectual Property Law"
                        },
                        {
                            "International Law": "Public International Law"
                        },
                        {
                            "International Criminal Law": "Intl & C'parative Crim Justice"
                        },
                        {
                            "Law of War": "Law Major Elective"
                        },
                        {
                            "Intro Psych": "General Education - Science"
                        },
                        {
                            "American Legal History": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Antitrust Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Commercial Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Comparative Criminal Procedure": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Complex Litigation": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Copyright Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Corporate Finance": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Criminal Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Critical Race Theory": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Election Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Empirical Methods in Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Family Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Globalization": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Health Law and Policy": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Immigration Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Income Taxation": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Innovation Policy and Biopharmaceutical Industry": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "International Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Interviewing, Counseling and Fact Investigation": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Intro to United States Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Jurisprudence": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "LAW AND ECONOMICS": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Law and Society in China": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Legal Cultures of Early America": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Markets, Morals and the Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Medical Malpractice": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Mergers & Acquisitions": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Military Justice": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Oil and gas law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Patent Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Perspectives on Debt": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Products Liability": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "REAL ESTATE TRANSACTIONS": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Regulation of Financial Institutions": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Secured Transactions": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Trademark & Unfair Competition": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Trademark, Unfair Competition and Consumer Protection": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "White Collar Crime": "Law Major Elective-LLB/JD only"
                        }
                    ]
                },
                {
                    "school": "Syracuse University",
                    "courses": [
                        {
                            "International Macroeconomics and Finance": "International Economics A"
                        },
                        {
                            "Introduction to Derivatives": "Analy of Derivative Securities"
                        },
                        {
                            "Institutional Trading": "Finance Major Elective"
                        },
                        {
                            "International Financial Management": "Finance Major Elective"
                        },
                        {
                            "Investment Analysis": "Finance Major Elective"
                        },
                        {
                            "Best Advertisements in the Universe": "Marketing Major Elective"
                        },
                        {
                            "Brand Management": "Marketing Major Elective"
                        },
                        {
                            "Introduction to Project Management": "Operations Mgmt Major Elective"
                        },
                        {
                            "What’s the Big Idea?: Technology Innovation": "Operations Mgmt Major Elective"
                        },
                        {
                            "Trendspotting Digital Media": "Corp Comm Major Elective"
                        },
                        {
                            "Global Cities": "Global and Regional Studies"
                        },
                        {
                            "Globalization, Culture and Information Technology": "Global and Regional Studies"
                        },
                        {
                            "International Entrepreneurship": "Global and Regional Studies"
                        },
                        {
                            "Introduction to Artificial Intelligence": "IS Technology Depth Elective"
                        },
                        {
                            "Business Information Sources and Strategic Intelligence": "Business-Oriented Elective"
                        },
                        {
                            "Electronic Retailing and Marketing": "Business-Oriented Elective"
                        },
                        {
                            "Introduction to Strategic Management": "Business-Oriented Elective"
                        },
                        {
                            "Retailing Fundamentals": "Business-Oriented Elective"
                        },
                        {
                            "Data Mining": "Ana (Advanced Tech Track)"
                        },
                        {
                            "Information Visualization": "Ana (Advanced Tech Track)"
                        },
                        {
                            "Scripting Foundations": "ISTDE + ANA (Adv Tech Track)"
                        },
                        {
                            "Comparative Government and  Politics": "SSMR (Social Science)"
                        },
                        {
                            "Global Cities": "SSMR (Social Science)"
                        },
                        {
                            "Sociology of Sex and Gender": "SSMR (Social Science)"
                        },
                        {
                            "International Conflict and Peace": "Political Science Major"
                        },
                        {
                            "Discovering the Entrepreneur Within": "Technology & Entrepreneurship"
                        },
                        {
                            "Discovering the Entrepreneur Within": "Technology and Entrepreneursh"
                        },
                        {
                            "Discovering the Entrepreneur Within": "Technology and Entrepreneurshi"
                        },
                        {
                            "Entrepreneurial Marketing": "TE + MKTG"
                        }
                    ]
                },
                {
                    "school": "Washington University in St. Louis",
                    "courses": [
                        {
                            "Data Analysis and Visualization in Tableau": "Data Modelling & Visualisation"
                        },
                        {
                            "International Economics": "International Economics A"
                        },
                        {
                            "American Economic History": "Economic History"
                        },
                        {
                            "Game Theory for Business": "Game Theory"
                        },
                        {
                            "Labor and the Economy": "Labour Economics"
                        },
                        {
                            "Advanced Financial Management": "Acct Options / Acct Elective"
                        },
                        {
                            "Data Analytics in Python": "ADA Major Elective + AO/AE"
                        },
                        {
                            "Financial Technology: Methods and Practice": "ADA Major Elective + AO/AE"
                        },
                        {
                            "Culture, Illness, and Healing in Asia": "Asian Studies"
                        },
                        {
                            "From McDonald's to K-Pop: New Movements in East Asia": "Asian Studies"
                        },
                        {
                            "Korean Literature and Performance from P'ansori to K-Pop": "Asian Studies"
                        },
                        {
                            "Literature of Modern and Contemporary Korea": "Asian Studies"
                        },
                        {
                            "Advanced Valuation": "Business Option"
                        },
                        {
                            "Crisis Communications": "Business Option"
                        },
                        {
                            "Mergers and Acquisitions": "Business Option"
                        },
                        {
                            "People Metrics": "Business Option"
                        },
                        {
                            "Talent Analytics": "Business Option"
                        },
                        {
                            "Venture Consulting": "Business Option"
                        },
                        {
                            "Advanced Derivative Securities": "Finance Major Elective"
                        },
                        {
                            "Advanced Financial Management": "Finance Major Elective"
                        },
                        {
                            "Advanced Valuation": "Finance Major Elective"
                        },
                        {
                            "International Finance": "Finance Major Elective"
                        },
                        {
                            "Options, Futures and Derivative Securities": "Finance Major Elective"
                        },
                        {
                            "Personal finance": "Finance Major Elective"
                        },
                        {
                            "Game Theory for Business": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Introduction to International Business": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Making a Green Living: The Business of Sustainability": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Sports Management": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Business & Marketing Innovation": "Marketing Major Elective"
                        },
                        {
                            "Data Analysis for Brand Management": "Marketing Major Elective"
                        },
                        {
                            "Integrated Marketing Communication": "Marketing Major Elective"
                        },
                        {
                            "Pricing Strategy": "Marketing Major Elective"
                        },
                        {
                            "Retail Management": "Marketing Major Elective"
                        },
                        {
                            "Sports Marketing": "Marketing Major Elective"
                        },
                        {
                            "Advanced Operations Strategy": "Operations Mgmt Major Elective"
                        },
                        {
                            "Operations Analytics": "Operations Mgmt Major Elective"
                        },
                        {
                            "Operations Planning and Control": "Operations Mgmt Major Elective"
                        },
                        {
                            "Project Management": "Operations Mgmt Major Elective"
                        },
                        {
                            "Entertainment Journalism": "Corp Comm Major Elective"
                        },
                        {
                            "Integrated Marketing Communication": "Corp Comm Major Elective"
                        },
                        {
                            "Leadership in Organizations": "Capabilities - Managing"
                        },
                        {
                            "Analytics and Modelling for Business Decisions": "Cap - Modes of Thinking"
                        },
                        {
                            "Environmental Justice": "Comm - Technology & Society"
                        },
                        {
                            "Environmental Justice": "Communities – Tech and Society"
                        },
                        {
                            "Metropolitan Environment": "Comm - Technology & Society"
                        },
                        {
                            "Metropolitan Environment": "Communities – Tech and Society"
                        },
                        {
                            "The Metropolitan Environment": "Comm - Technology & Society"
                        },
                        {
                            "The Metropolitan Environment": "Communities – Tech and Society"
                        },
                        {
                            "A History of Modern China": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "A History of Modern China": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Archaeology of China: Food and People": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Archaeology of China: Food and People": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Economies as Cultural Systems": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Economies as Cultural Systems": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Elementary Spanish 1": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Elementary Spanish 1": "Comm - Cultures of the Mod W"
                        },
                        {
                            "A History of Modern China": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "A History of Modern China": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "Archaeology of China: Food and People": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "“Model Minority”: The Asian American Experience": "Asia Studies"
                        },
                        {
                            "Computational Macroeconomics": "Economics Major Elective"
                        },
                        {
                            "Economics of the Organization": "Economics Major Elective"
                        },
                        {
                            "Market Design": "Economics Major Elective"
                        },
                        {
                            "Understanding the Financial Crisis": "Economics Major Elective"
                        },
                        {
                            "Economic Realities of the American Dream": "Econ Major Rel/Econ Options"
                        },
                        {
                            "The Political Economy of Health": "ECON + HEM"
                        },
                        {
                            "CEL Entrepreneurial Consulting Team": "Entrepreneurship Cluster"
                        },
                        {
                            "Introduction to Entrepreneurship": "Entrepreneurship Cluster"
                        },
                        {
                            "Social Entrepreneurship": "Entrepreneurship Cluster"
                        },
                        {
                            "Data Analytics in Python": "Free Electives (SCIS only)"
                        },
                        {
                            "Introduction to Parallel and Concurrent Programming": "Free Electives (SCIS only)"
                        },
                        {
                            "Software Engineering Workshop": "Free Electives (SCIS only)"
                        },
                        {
                            "High Intermediate Ballet II": "General Education - Arts"
                        },
                        {
                            "Social Problems and Social Issues": "General Education - Arts"
                        },
                        {
                            "Taboo: Contesting Race, Sexuality and Violence in American Cinema": "General Education - Arts"
                        },
                        {
                            "The Art and Science of Living Sustainably": "General Education - Arts"
                        },
                        {
                            "Introduction to Social Psychology": "General Education - Science"
                        },
                        {
                            "Introduction to International Business": "Globalisation"
                        },
                        {
                            "Topics in Politics: Conflict and Security in International Relations": "Globalisation"
                        },
                        {
                            "International Business": "Global and Regional Studies"
                        },
                        {
                            "International Communication: The New Global Media": "Global and Regional Studies"
                        },
                        {
                            "Introduction to International Business": "Global and Regional Studies"
                        },
                        {
                            "Applications of GIS": "ANA (Marketing Track)"
                        },
                        {
                            "Web Development": "IT Solution Dev Elective"
                        },
                        {
                            "Comtemporary American Foreign Policy": "SSMR (Social Science)"
                        },
                        {
                            "Culture and Society in East Asia": "SSMR (Social Science)"
                        },
                        {
                            "Introduction to Social Psychology": "SSMR (Social Science)"
                        },
                        {
                            "Social Landscapes in a Global View": "SSMR (Social Science)"
                        },
                        {
                            "Sociological Approaches to American Health": "SSMR (Social Science)"
                        },
                        {
                            "The History of Popular CUlutre in the United States": "SSMR (Social Science)"
                        },
                        {
                            "Vote for Pedro: A Critical Look at Youth and Popular Cultures": "SSMR (Social Science)"
                        },
                        {
                            "Environmental and Energy Issues": "Political Science Major"
                        },
                        {
                            "Polarization in American Politics": "Political Science Major"
                        },
                        {
                            "The Politics of Privacy in the Digital Age": "Political Science Major"
                        },
                        {
                            "Topics in Comparative Politics: Politics and Identity": "Political Science Major"
                        },
                        {
                            "Topics in Politics: Theories of Social Justice": "Political Science Major"
                        },
                        {
                            "Introduction to Modern Art, Architecture and Design": "Arts & Cul Mgmt Major - A&C"
                        },
                        {
                            "Basics of Bio-Entrepreneurship": "Technology & Entrepreneurship"
                        },
                        {
                            "Basics of Bio-Entrepreneurship": "Technology and Entrepreneursh"
                        },
                        {
                            "Basics of Bio-Entrepreneurship": "Technology and Entrepreneurshi"
                        },
                        {
                            "Communications Technology and New Media": "Technology & Entrepreneurship"
                        },
                        {
                            "Communications Technology and New Media": "Technology and Entrepreneursh"
                        },
                        {
                            "Communications Technology and New Media": "Technology and Entrepreneurshi"
                        },
                        {
                            "Introduction to Entrepreneurship": "Technology & Entrepreneurship"
                        },
                        {
                            "Introduction to Entrepreneurship": "Technology and Entrepreneursh"
                        },
                        {
                            "Introduction to Entrepreneurship": "Technology and Entrepreneurshi"
                        },
                        {
                            "Seminar in Entrepreneurship": "Technology & Entrepreneurship"
                        },
                        {
                            "Seminar in Entrepreneurship": "Technology and Entrepreneursh"
                        },
                        {
                            "Seminar in Entrepreneurship": "Technology and Entrepreneurshi"
                        },
                        {
                            "Social Entrepreneurship": "Technology & Entrepreneurship"
                        },
                        {
                            "Social Entrepreneurship": "Technology and Entrepreneursh"
                        },
                        {
                            "Social Entrepreneurship": "Technology and Entrepreneurshi"
                        },
                        {
                            "Technology for Managers: Tools and Strategies": "Technology & Entrepreneurship"
                        },
                        {
                            "Technology for Managers: Tools and Strategies": "Technology and Entrepreneursh"
                        },
                        {
                            "Technology for Managers: Tools and Strategies": "Technology and Entrepreneurshi"
                        },
                        {
                            "The Digital Society": "Technology & Entrepreneurship"
                        },
                        {
                            "The Digital Society": "Technology and Entrepreneursh"
                        },
                        {
                            "The Digital Society": "Technology and Entrepreneurshi"
                        },
                        {
                            "Introduction to Big Data, Business Process Modeling and Data Management": "Technology Studies"
                        },
                        {
                            "Programming with Python": "Technology Studies"
                        },
                        {
                            "Web Development": "Technology Studies"
                        }
                    ]
                },
                {
                    "school": "University of Richmond",
                    "courses": [
                        {
                            "Economic Development in Asia, Africa and Latin America": "International Economics A"
                        },
                        {
                            "The Economics of Money, Banking and Financial Markets": "Monetary Economics"
                        },
                        {
                            "BUSINESS ANALYTICS": "Business Option"
                        },
                        {
                            "BUSINESS INFORMATION SYSTEMS": "Business Option"
                        },
                        {
                            "Cross-Cultural Management": "Business Option"
                        },
                        {
                            "Foundations of Society": "Business Option"
                        },
                        {
                            "International Business Issues": "Business Option"
                        },
                        {
                            "Introduction to Computing W/Lab": "Business Option"
                        },
                        {
                            "Fixed Income and Derivative Securities": "Finance Major Elective"
                        },
                        {
                            "Portfolio Management and Analysis": "Finance Major Elective"
                        },
                        {
                            "Risk Management And Insurance": "Finance Major Elective"
                        },
                        {
                            "Fundamentals of Abstract Mathematics": "Econ Major Rel/Econ Options"
                        },
                        {
                            "Innovation and Entrepreneurship": "Entrepreneurship Cluster"
                        },
                        {
                            "New Venture Creation": "Entrepreneurship Cluster"
                        },
                        {
                            "Gender and Work": "General Education - Arts"
                        },
                        {
                            "Introduction to Archaeology": "General Education - Arts"
                        },
                        {
                            "Introduction to Environmental Studies": "General Education - Arts"
                        },
                        {
                            "Bioethics": "General Education - Science"
                        },
                        {
                            "Exploring the deep: Geography of the World's Oceans": "General Education - Science"
                        },
                        {
                            "INTERNATIONAL BUS STRATEGY": "Global and Regional Studies"
                        },
                        {
                            "International Marketing": "GRS + MKTG"
                        },
                        {
                            "Contract Drafting": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Copyright Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "POLITICS OF ASIA": "SSMR (Social Science)"
                        },
                        {
                            "CRIME & JUSTICE POST MOD SOC": "Sociology Major Elective"
                        },
                        {
                            "INTRO: WOMEN, GENDER & SEXUALITY": "Sociology Major Elective"
                        },
                        {
                            "Innovation and Entrepreneurship": "Technology & Entrepreneurship"
                        },
                        {
                            "Innovation and Entrepreneurship": "Technology and Entrepreneursh"
                        },
                        {
                            "Innovation and Entrepreneurship": "Technology and Entrepreneurshi"
                        },
                        {
                            "Managing Innovation": "Technology & Entrepreneurship"
                        },
                        {
                            "Managing Innovation": "Technology and Entrepreneursh"
                        },
                        {
                            "Managing Innovation": "Technology and Entrepreneurshi"
                        }
                    ]
                },
                {
                    "school": "University of San Diego (School of Law)",
                    "courses": [
                        {
                            "Int'l Intellectual Property": "Intellectual Property Law"
                        },
                        {
                            "International Negotiation": "Negotn & Mediatn for Lawyers"
                        },
                        {
                            "Public International Law": "Public International Law"
                        },
                        {
                            "Cultures of Food": "General Education - Arts"
                        },
                        {
                            "Animal Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Antitrust": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Copyright Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Corporate Finance": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Energy Law & Policy": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "European Union Commercial Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "European Union Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "FAMILY LAW": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Federal Courts": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Health Law & Bioethics": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Health Law & Policy": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Honors Moot Competition": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Human Trafficking": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Intellectual Property Research": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "International Arbitration": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "International Business Transactions": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "International Civil Litigation": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "International Contracts": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "International Human Rights": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "International Sales": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Interviewing & Counseling": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Juvenile Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Labor law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Land Use Regulation": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Latin American Law & Institutions": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Mental Health Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Poverty Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Special Education and Disability": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Sports and the Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Trade Secrets": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Trademark Law": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Trial Advocacy": "Law Major Elective-LLB/JD only"
                        },
                        {
                            "Innovation, Markets, and Financial Regulation": "LAW + FNCE - LLB only"
                        }
                    ]
                },
                {
                    "school": "Boston University",
                    "courses": [
                        {
                            "Game Theory": "Game Theory"
                        },
                        {
                            "Economics of the Labor Market": "Labour Economics"
                        },
                        {
                            "Money, Financial Markets, and Economic Activity": "Monetary Economics"
                        },
                        {
                            "Introduction to Health Economics": "Health Economics"
                        },
                        {
                            "Economics of Corporate Organisation": "Organisational Economics"
                        },
                        {
                            "Special Topics in Economics": "Urban Economics and Policy"
                        },
                        {
                            "Immigration and Development in Asia": "Asian Studies"
                        },
                        {
                            "Introduction to India and South Asia": "Asian Studies"
                        },
                        {
                            "International Financial Management": "Business Option"
                        },
                        {
                            "Derivatives Securities and Market": "Finance Major Elective"
                        },
                        {
                            "EQUITY SECURITY ANALYSIS": "Finance Major Elective"
                        },
                        {
                            "Financing New Ventures": "Finance Major Elective"
                        },
                        {
                            "Fixed Income Analysis": "Finance Major Elective"
                        },
                        {
                            "Futures, Options and Financial Risk": "Finance Major Elective"
                        },
                        {
                            "Investment Banking (QST FE 454)": "Finance Major Elective"
                        },
                        {
                            "Multinational Finance & Trade": "Finance Major Elective"
                        },
                        {
                            "Private Equity": "Finance Major Elective"
                        },
                        {
                            "Digital Marketing Analytics": "Marketing Major Elective"
                        },
                        {
                            "International Marketing": "Marketing Major Elective"
                        },
                        {
                            "Integrated Marketing Communications": "MKTG + CORC"
                        },
                        {
                            "EQUITY SECURITY ANALYSIS": "Finance (Finance Analytics Tra"
                        },
                        {
                            "The Leadership Challenge": "Capabilities - Managing"
                        },
                        {
                            "Science, Technology and Values": "Comm - Technology & Society"
                        },
                        {
                            "Science, Technology and Values": "Communities – Tech and Society"
                        },
                        {
                            "Greek Tragedy and Film": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Greek Tragedy and Film": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Introduction To Chinese Philosophy": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Introduction To Chinese Philosophy": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Italian Cinema": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Italian Cinema": "Comm - Cultures of the Mod W"
                        },
                        {
                            "The Making of Asia": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "The Making of Asia": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Blacks and Asians: Encounters Through Time and Space": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "Conflict and Cooperation in Asia": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "History of International Relations since 1945": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "Screening Modern China (in English translation)": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "The Making of Asia": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "Women and Social Change in Asia (area)": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "Economics of Education": "Economics Major Elective"
                        },
                        {
                            "Dilemmas in Scaling New Ventures": "Entrepreneurship Cluster"
                        },
                        {
                            "Entrepreneurship": "Entrepreneurship Cluster"
                        },
                        {
                            "International Entrepreneurship": "Entrepreneurship Cluster"
                        },
                        {
                            "Entrepreneurship: Solving Problems in a Dynamic World": "Free Electives (For LKCSB)"
                        },
                        {
                            "Introduction to Information Systems": "Technology Studies"
                        }
                    ]
                },
                {
                    "school": "University of Oregon",
                    "courses": [
                        {
                            "Problems and Issues in the Developing Economies": "Development Economics"
                        },
                        {
                            "Iss Industrial Organisation": "Industrial Organisation"
                        },
                        {
                            "Labor Market Issues": "Labour Economics"
                        },
                        {
                            "Issues in Public Economics": "Public Sector Economics"
                        },
                        {
                            "Derivatives Markets and Financial Institutions": "Business Option"
                        },
                        {
                            "International Finance": "Business Option"
                        },
                        {
                            "Introduction to Programming & Problem Solving": "Business Option"
                        },
                        {
                            "Special Studies in Social Entrepreneurship": "MGMT (Entre'ship Track) Elec"
                        },
                        {
                            "INTRODUCTION TO POETRY": "General Education - Arts"
                        },
                        {
                            "Understanding Music": "General Education - Arts"
                        },
                        {
                            "Intro to International Issues": "Globalisation"
                        },
                        {
                            "Perspective International Development": "Globalisation"
                        },
                        {
                            "Intro to Political Sci": "Global and Regional Studies"
                        },
                        {
                            "Sports Products": "Global and Regional Studies"
                        },
                        {
                            "Analyzing Big Data": "Technology & Entrepreneurship"
                        },
                        {
                            "Analyzing Big Data": "Technology and Entrepreneursh"
                        },
                        {
                            "Analyzing Big Data": "Technology and Entrepreneurshi"
                        },
                        {
                            "Launching New Ventures": "Technology & Entrepreneurship"
                        },
                        {
                            "Launching New Ventures": "Technology and Entrepreneursh"
                        },
                        {
                            "Launching New Ventures": "Technology and Entrepreneurshi"
                        }
                    ]
                },
                {
                    "school": "University of Maryland",
                    "courses": [
                        {
                            "TAXATION OF INDIVIDUAL": "Acct Options / Acct Elective"
                        },
                        {
                            "Tax and Accounting for Real Estate Development": "Acct Options / Acct Elective"
                        },
                        {
                            "Taxation of Corporations, Partnerships and Estates": "Acct Options / Acct Elective"
                        },
                        {
                            "The Languages of East Asia": "Asian Studies"
                        },
                        {
                            "Designing Applications for Business Analytics": "Business Option"
                        },
                        {
                            "Applied Equity Analysis and Portfolio Management": "Finance Major Elective"
                        },
                        {
                            "Banking and Financial Institutions": "Finance Major Elective"
                        },
                        {
                            "Fixed Income": "Finance Major Elective"
                        },
                        {
                            "International Finance": "Finance Major Elective"
                        },
                        {
                            "Media Entrepreneurship": "Strategic Mgmt Major Elective"
                        },
                        {
                            "Digital Marketing": "Marketing Major Elective"
                        },
                        {
                            "Global Marketing": "Marketing Major Elective"
                        },
                        {
                            "Integrated Marketing Communications": "Marketing Major Elective"
                        },
                        {
                            "Marketing Policies and Strategies": "Marketing Major Elective"
                        },
                        {
                            "Retail Management": "Marketing Major Elective"
                        },
                        {
                            "Purchasing and Inbound Logistics": "Operations Mgmt Major Elective"
                        },
                        {
                            "Leadership and Teamwork in Organizations": "Capabilities - Managing"
                        },
                        {
                            "Asian American History": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Asian American History": "Comm - Cultures of the Mod W"
                        },
                        {
                            "History of Japan to 1800": "Asia Studies"
                        },
                        {
                            "Entrepreneurship": "Entrepreneurship Cluster"
                        },
                        {
                            "Consumer Analysis": "Free Electives (SCIS only)"
                        },
                        {
                            "Introduction to American Government": "Free Electives (SCIS only)"
                        },
                        {
                            "Introduction to International Business Management": "Free Electives (SCIS only)"
                        },
                        {
                            "Introduction to Logistics and Supply Chain Management": "Free Electives (SCIS only)"
                        },
                        {
                            "Introduction to Philosophy": "Free Electives (SCIS only)"
                        },
                        {
                            "Introduction to the Business Value Chain": "Free Electives (SCIS only)"
                        },
                        {
                            "Living the Good Life: The Psychology of Happiness": "Free Electives (SCIS only)"
                        },
                        {
                            "Politics and the Developing World": "Free Electives (SCIS only)"
                        },
                        {
                            "Popular Music in Black America": "Free Electives (SCIS only)"
                        },
                        {
                            "Causes and Implications of Global Change": "Globalisation"
                        },
                        {
                            "Data Sources and Manipulation": "IS Technology Depth Elective"
                        },
                        {
                            "Entrepreneurship": "Business-Oriented Elective"
                        },
                        {
                            "Foundations of Financial Management for Non Business Majors": "Business-Oriented Elective"
                        },
                        {
                            "Negotiations": "Business-Oriented Elective"
                        },
                        {
                            "Designing Fair Systems": "IS Depth Elective"
                        }
                    ]
                },
                {
                    "school": "City University of New York - Baruch College",
                    "courses": [
                        {
                            "Money, Banking, and Monetary Policy": "Monetary Economics"
                        },
                        {
                            "Financial Econometrics": "Economic Forecasting"
                        },
                        {
                            "International Markets, Cultures and Institution": "International Business"
                        },
                        {
                            "REAL ESTATE FINANCE AND INVESTMENT": "Acct Options / Acct Elective"
                        },
                        {
                            "JAPANESE FOR GLOBAL MARKETS": "Asian Studies"
                        },
                        {
                            "ADVANCED INVESTMENT ANALYSIS": "Finance Major Elective"
                        },
                        {
                            "Futures Markets": "Finance Major Elective"
                        },
                        {
                            "Introduction to Microfinance": "Finance Major Elective"
                        },
                        {
                            "REAL ESTATE FINANCE AND INVESTMENT": "Finance Major Elective"
                        },
                        {
                            "REAL ESTATE PRINCIPLES": "Finance Major Elective"
                        },
                        {
                            "RES3400 Real Estate Capital Markets": "Finance Major Elective"
                        },
                        {
                            "RISK MANAGEMENT IN FINANCIAL INSTITUTION I": "Finance Major Elective"
                        },
                        {
                            "Real Estate Capital Markets": "Finance Major Elective"
                        },
                        {
                            "Advertising Creative Strategy and Tracks": "Marketing Major Elective"
                        },
                        {
                            "Advertising and Marketing Communications": "Marketing Major Elective"
                        },
                        {
                            "Branding": "Marketing Major Elective"
                        },
                        {
                            "Entertainment Marketing": "Marketing Major Elective"
                        },
                        {
                            "International Marketing": "Marketing Major Elective"
                        },
                        {
                            "Internet Marketing": "Marketing Major Elective"
                        },
                        {
                            "Marketing Analytics with Big Data": "Marketing Major Elective"
                        },
                        {
                            "Introduction to Stochastic Processes": "Quantitative Finance Elective"
                        },
                        {
                            "Linear Algebra and Matrix Methods": "Quantitative Finance Elective"
                        },
                        {
                            "Mathematics of Statistical Data Analysis": "Quantitative Finance Elective"
                        },
                        {
                            "Numerical Methods for Differential Equations in Finance": "Quantitative Finance Elective"
                        },
                        {
                            "Management and Society": "Capabilities - Managing"
                        },
                        {
                            "Ethics & Critical Thinking": "Cap - Modes of Thinking"
                        },
                        {
                            "Ethics and Critical Thinking": "Cap - Modes of Thinking"
                        },
                        {
                            "ART1012 Art History II": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "ART1012 Art History II": "Comm - Cultures of the Mod W"
                        },
                        {
                            "ART3260 Asian Art and Architecture": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "ART3260 Asian Art and Architecture": "Comm - Cultures of the Mod W"
                        },
                        {
                            "FLM3001 History of Film I": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "FLM3001 History of Film I": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Philosophies of Japan": "Asia Studies"
                        },
                        {
                            "Behavioural Economics": "Economics Major Elective"
                        },
                        {
                            "Direct Marketing": "Econ Major Rel/Econ Options"
                        },
                        {
                            "Entrepreneurship Management": "Entrepreneurship Cluster"
                        },
                        {
                            "Contemporary International Conflict": "Globalisation"
                        },
                        {
                            "INTERNATIONAL BUSINESS PRINCIPLES": "Globalisation"
                        },
                        {
                            "International Communication": "Globalisation"
                        },
                        {
                            "International Economics and Finance": "Globalisation"
                        },
                        {
                            "Introduction to International Relations": "Globalisation"
                        },
                        {
                            "Seminar on Political Globalization": "Globalisation"
                        },
                        {
                            "Current Economic Problems": "Business-Oriented Elective"
                        },
                        {
                            "Data Mining for Business Analytics": "Business-Oriented Elective"
                        },
                        {
                            "Marketing Foundations": "Business-Oriented Elective"
                        },
                        {
                            "Money, Banking, and Monetary Policy": "Business-Oriented Elective"
                        },
                        {
                            "Regression and Forecasting Models for Business Applications": "Business-Oriented Elective"
                        }
                    ]
                },
                {
                    "school": "The University of North Carolina at Chapel Hill Kenan-Flagler Business School",
                    "courses": [
                        {
                            "Bollywood Cinema (Hindi and Urdu)": "Asian Studies"
                        },
                        {
                            "Introduction to FinTech – Blockchain Technologies and Cryptocurrencies": "Business Option"
                        },
                        {
                            "Introduction to Real Estate": "Business Option"
                        },
                        {
                            "Private Equity and Debt Markets": "Business Option"
                        },
                        {
                            "Entrepreneurial Finance": "Finance Major Elective"
                        },
                        {
                            "Financial Modeling": "Finance Major Elective"
                        },
                        {
                            "Fixed Income Securities, Credit Markets, and the Macro economy": "Finance Major Elective"
                        },
                        {
                            "Real Estate Finance": "Finance Major Elective"
                        },
                        {
                            "Digital Marketing": "Marketing Major Elective"
                        },
                        {
                            "Leading and Managing : An Introduction to Organizational Behavior": "Capabilities - Managing"
                        },
                        {
                            "Elementary Italian": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Elementary Italian": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Film, Nation and Identity in the Arab World": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Film, Nation and Identity in the Arab World": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Love in Classical Persian Poetry": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Love in Classical Persian Poetry": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Middle East Women Writers": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "Middle East Women Writers": "Comm - Cultures of the Mod W"
                        },
                        {
                            "The Arab-Jews: Culture Community and Coexistence": "Comm - Cltr of the Modern Wrl"
                        },
                        {
                            "The Arab-Jews: Culture Community and Coexistence": "Comm - Cultures of the Mod W"
                        },
                        {
                            "Bollywood Cinema": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "History, Memory and Reality in Contemporary Korea": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "History, Memory, and Reality in Contemporary Korea": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "Modern East Asia": "Comm-Cltr of Mdrn Wrld+AS std"
                        },
                        {
                            "Entrepreneurial Strategy: How to Think Like a Venture Capitalist": "Entrepreneurship Cluster"
                        },
                        {
                            "Entrepreneurship and Business Planning": "MGMT + Entrepreneurship Clust"
                        }
                    ]
                },        
        ],   //END USA   
            "australia": [
            {
                "school": "University of Western Australia",
                "courses": [
                    {
                        "A World of Mobile Learning": "General Education - Arts"
                    },
                    {
                        "Advertising and Promotion": "Marketing Major Elective"
                    },
                    {
                        "Applied Financial Management": "Finance Major Elective"
                    },
                    {
                        "Australian Employment Relations": "Global and Regional Studies"
                    },
                    {
                        "Contemporary Marketing Issues": "Marketing Major Elective"
                    },
                    {
                        "Contemporary Political Theory": "SSMR (Social Science)"
                    },
                    {
                        "Corporate Finance": "Finance Major Elective"
                    },
                    {
                        "Cultural Foundations of Asian Business": "Global and Regional Studies"
                    },
                    {
                        "Financial Statement Analysis": "Valuation"
                    },
                    {
                        "Global Governance": "SSMR (Social Science)"
                    },
                    {
                        "History of Political Ideas": "SSMR (Social Science)"
                    },
                    {
                        "INTERNATIONAL RELATIONS IN EAST ASIA": "SSMR (Social Science)"
                    },
                    {
                        "International Political Economy": "Political Science Major"
                    },
                    {
                        "Management Accounting: Issues and Perspectives": "AO (Financial Management Track"
                    },
                    {
                        "Negotiation: Theory and Practice": "Career Skills"
                    },
                    {
                        "Negotiation: Theory and Practice": "GEA + OBHR"
                    },
                    {
                        "New Product Development and Commercialisation": "Marketing Major Elective"
                    },
                    {
                        "Politics in the USA": "Political Science Major"
                    },
                    {
                        "Politics in the USA": "SSMR (Social Science)"
                    },
                    {
                        "Project Management": "Operations Mgmt Major Elective"
                    },
                    {
                        "Quantitative Methods for Finance": "Finance Major Elective"
                    },
                    {
                        "The Contemporary International System": "SSMR (Social Science)"
                    },
                    {
                        "The Liberal Democratic State": "SSMR (Social Science)"
                    }
                ]
            },
            {
                "school": "University of Sydney",
                "courses": [
                    {
                        "Animal Production and Management": "Business-Oriented Elective"
                    },
                    {
                        "Asia: Past, Present, Future": "Asian Studies"
                    },
                    {
                        "Australian Politics": "Political Science Major"
                    },
                    {
                        "Australian Taxation System": "AO (Taxation Track)"
                    },
                    {
                        "BUSINESS INTELLIGENCE FOR MANAGERS": "ADA Major Elective + AO/AE"
                    },
                    {
                        "BUSINESS INTELLIGENCE FOR MANAGERS": "Business Option"
                    },
                    {
                        "Brain and Behaviour": "SSMR (Social Science)"
                    },
                    {
                        "Buddhism in East Asia": "Asian Studies"
                    },
                    {
                        "Chinese Thought": "Asia Studies"
                    },
                    {
                        "Contemporary Cultural Issues": "Sociology Major Elective"
                    },
                    {
                        "Crime, Punishment and Society": "Sociology Major Elective"
                    },
                    {
                        "DATA SCIENCE IN BUSINESS": "IS Management Depth Elective"
                    },
                    {
                        "DIGITAL AND SOCIAL MEDIA MARKETING": "Marketing Major Elective"
                    },
                    {
                        "Data Analytics for Accounting": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Data Analytics: Learning from Data": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Data Governance and Technology Assurance": "IS Management Depth Elective"
                    },
                    {
                        "Data and Information Management": "Data Management"
                    },
                    {
                        "Derivative Securities": "Finance Major Elective"
                    },
                    {
                        "Developmental Psychology": "SSMR (Social Science)"
                    },
                    {
                        "Digital Business Innovation": "Business Option"
                    },
                    {
                        "ETHICAL INTERNATIONAL BUSINESS DECISIONS": "Global and Regional Studies"
                    },
                    {
                        "East Asian Economies": "Asian Studies"
                    },
                    {
                        "Entrepreneurship and Innovation": "Business-Oriented Elective"
                    },
                    {
                        "Entrepreneurship and Innovation": "Entrepreneurship Cluster"
                    },
                    {
                        "Environmental Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Foundations of Business Analytics": "Business Option"
                    },
                    {
                        "GLOBAL BUSINESS": "Global and Regional Studies"
                    },
                    {
                        "GOVT1105 - Geopolitics": "SSMR (Social Science)"
                    },
                    {
                        "Global Business": "Globalisation"
                    },
                    {
                        "Graphics and Multimedia": "IS Technology Depth Elective"
                    },
                    {
                        "Health System Data Standards and Analysis": "IS Technology Depth Elective"
                    },
                    {
                        "INTERNATIONAL AND GLOBAL MARKETING": "GRS + MKTG"
                    },
                    {
                        "INTERNATIONAL BUSINESS STRATEGY": "Global and Regional Studies"
                    },
                    {
                        "INTRODUCTION TO DATA ANALYTICS": "IS Technology Depth Elective"
                    },
                    {
                        "Intellectual Property: Copyright and Designs": "Intellectual Property Law"
                    },
                    {
                        "Intermediate Financial Economics": "Economic Growth"
                    },
                    {
                        "International Commercial Arbitration": "Intl Commercial Arbitration"
                    },
                    {
                        "International Corporate Governance": "AO (Risk Mgmt & Assurance Trk)"
                    },
                    {
                        "International Financial Management": "AO (Financial Management Track"
                    },
                    {
                        "International Human Rights Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "International Law and China": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "International Risk Management": "Acct Options / Acct Elective"
                    },
                    {
                        "Introduction to Islamic Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Investments & Portfolio Management": "Quantitative Finance Elective"
                    },
                    {
                        "Law of Restitution and Unjust Enrichment": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "MANAGEMENT, MARKETING AND THE LAW": "GRS + MKTG"
                    },
                    {
                        "Managing Food and Beverage Supply Chains": "Operations Mgmt Major Elective"
                    },
                    {
                        "Media Law: Contempt and Open Justice": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Media Law: Defamation and Privacy": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Media in Contemporary Society": "Sociology Major Elective"
                    },
                    {
                        "Medical Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "NEW PRODUCTS MARKETING": "Marketing Major Elective"
                    },
                    {
                        "Personality and Differential Psychology": "SSMR (Social Science)"
                    },
                    {
                        "Predictive Analytics": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Race and the Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "SOCIAL ENTREPRENEURSHIP": "Entrepreneurship Cluster"
                    },
                    {
                        "STRATEGY AND EMERGING MARKETS": "Global and Regional Studies"
                    },
                    {
                        "Secured Transactions in Commercial Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Sociology of Childhood and Youth": "SSMR (Social Science)"
                    },
                    {
                        "Sociology of Childhood and Youth": "Sociology Major Elective"
                    },
                    {
                        "Tax Strategies for Business": "AO (Taxation Track)"
                    },
                    {
                        "Topics in Legal History": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "World Politics": "Political Science Major"
                    },
                    {
                        "World Politics": "SSMR (Social Science)"
                    }
                ]
            },
            {
                "school": "University of New South Wales, Faculty of Law",
                "courses": [
                    {
                        "Along the Silk Road": "Asian Studies"
                    },
                    {
                        "Australian Immigration Law and Practice": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Children and the Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Cities, Planning, Law and Justice": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Corporate Misconduct and White Collar Crime": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Criminal Threats from Cyberspace": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Critical Issues in Restorative Justice": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Discrimination and the Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Drug Law and Policy": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Employment Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Environmental Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Environmental Law in Developing Countries": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Expert Evidence": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "FOOD LAW": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Family Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Financial Economics and Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Financial Law and Regulation in the Age of FinTech": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Gender, Race and Justice": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Global Business Environment": "Globalisation"
                    },
                    {
                        "Information Technology Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Intellectual Property 2": "Intl Patent Law and Policy"
                    },
                    {
                        "Intellectual Property Law": "Intellectual Property Law"
                    },
                    {
                        "International Children's Rights Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "International Criminal Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "International Financial Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "International Human Rights Law and Advocacy": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Issues in Space Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Law of banking": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Penology": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Public Interest Litigation": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Public Interest Litigation: Origins and Strategies": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Public International Law": "Public International Law"
                    },
                    {
                        "Remedies": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Renewable Energy Law: Structuring and Financing Renewable Energy Projects": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Roman Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Southeast Asia": "Asia Studies"
                    },
                    {
                        "Sport and the Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Takeovers and capital markets law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "The Australian Legal System in Comparative Perspective": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "The Criminal Trial": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "US Legal Systems": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Understanding Human Rights": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Work Health and Safety Law": "Law Major Elective-LLB/JD only"
                    }
                ]
            },
            {
                "school": "University of New South Wales",
                "courses": [
                    {
                        "ARTS2212 - Southeast Asia": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "ARTS2542 - Gods, Heroines & Heroes in Greek Myth": "General Education - Arts"
                    },
                    {
                        "Advanced and Parallel Algorithms": "IS Technology Depth Elective"
                    },
                    {
                        "Alternative Dispute Resolution in Practice": "Negotn & Mediatn for Lawyers"
                    },
                    {
                        "Artificial Intelligence": "IS Technology Depth Elective"
                    },
                    {
                        "Asia-Pacific Business": "Asian Studies"
                    },
                    {
                        "Asia-Pacific Capital Markets": "Asian Studies"
                    },
                    {
                        "Asia-Pacific Capital Markets - FINS2622": "GRS + FNCE"
                    },
                    {
                        "Australia's Asian Context": "General Education - Arts"
                    },
                    {
                        "Bank Financial Management": "Finance Major Elective"
                    },
                    {
                        "Behavioural Finance": "Finance Major Elective"
                    },
                    {
                        "Capital Markets and Institutions": "Finance Major Elective"
                    },
                    {
                        "Children and the Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Communication Strategies": "SSMR (Econs/Acct/Business)"
                    },
                    {
                        "Credit Analysis and Lending - FINS3634": "Finance Major Elective"
                    },
                    {
                        "Criminology: An Introduction": "General Education - Arts"
                    },
                    {
                        "Customer Relationship Management": "Marketing Major Elective"
                    },
                    {
                        "Customer Relationship Management": "Technology & Entrepreneurship"
                    },
                    {
                        "Customer Relationship Management": "Technology and Entrepreneursh"
                    },
                    {
                        "Customer Relationship Management": "Technology and Entrepreneurshi"
                    },
                    {
                        "Cyberspace Law 2.0": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Data Warehousing and Data Mining": "IS Technology Depth Elective"
                    },
                    {
                        "Development in a Global Context": "Global and Regional Studies"
                    },
                    {
                        "Development in a Global Context": "Globalisation"
                    },
                    {
                        "Digital Transformation in Business": "Econ Major Rel/Econ Options"
                    },
                    {
                        "ECON2107 Modern Labour Markets: Theory and Policy": "Labour Economics"
                    },
                    {
                        "Economic Growth, Technology and Structural Change": "Economics Major Elective"
                    },
                    {
                        "Entrepreneurial Ecosystems": "Entrepreneurship Major Elec"
                    },
                    {
                        "FINS3616 International Business Finance": "GRS + FNCE"
                    },
                    {
                        "FINS3616 International Business Finance": "Global and Regional Studies"
                    },
                    {
                        "FINS3630 BANK FINANCIAL MANAGEMENT": "Finance Major Elective"
                    },
                    {
                        "FINS3635 OPTIONS, FUTURES AND RISK MANAGEMENT TECHNIQUES": "Finance Major Elective"
                    },
                    {
                        "FINS3640 Investment Management Modelling": "Finance Major Elective"
                    },
                    {
                        "Financial Econometrics": "Economics Major Elective"
                    },
                    {
                        "Fine Arts Gateway 1": "General Education - Arts"
                    },
                    {
                        "Fundamentals of Business Programming": "Technology & Entrepreneurship"
                    },
                    {
                        "Fundamentals of Business Programming": "Technology and Entrepreneursh"
                    },
                    {
                        "Fundamentals of Business Programming": "Technology and Entrepreneurshi"
                    },
                    {
                        "Global Business Environment": "Global and Regional Studies"
                    },
                    {
                        "Global Business Environment": "Globalisation"
                    },
                    {
                        "Information Systems in Business": "Technology & Entrepreneurship"
                    },
                    {
                        "Information Systems in Business": "Technology and Entrepreneursh"
                    },
                    {
                        "Information Systems in Business": "Technology and Entrepreneurshi"
                    },
                    {
                        "Innovation Law and Policy": "Intellectual Property Law"
                    },
                    {
                        "Innovation and Technology Management": "IS Management Depth Elective"
                    },
                    {
                        "Innovation and Technology Management": "Operations Mgmt Major Elective"
                    },
                    {
                        "Intellectual Property 2": "Intellectual Property Law"
                    },
                    {
                        "International Business Finance": "Finance Major Elective"
                    },
                    {
                        "International Business and Multinational Operation": "Globalisation"
                    },
                    {
                        "International Trade Law: The Law and Policy of the WTO": "WTO: Law and Policy"
                    },
                    {
                        "Introduction to climate change": "Comm - Technology & Society"
                    },
                    {
                        "Introduction to climate change": "Communities – Tech and Society"
                    },
                    {
                        "Introduction to climate change": "General Education - Science"
                    },
                    {
                        "Law and Social Theory - LAWS3332": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Machine Learning and Data Mining": "IS Technology Depth Elective"
                    },
                    {
                        "Managing Innovation and Organisational Change": "Business-Oriented Elective"
                    },
                    {
                        "Marketing Communications and Promotions": "Marketing Major Elective"
                    },
                    {
                        "Marketing in a global economy": "Global and Regional Studies"
                    },
                    {
                        "Mobile Applications Development": "IS Technology Depth Elective"
                    },
                    {
                        "Neural Networks and Deep Learning": "IS Technology Depth Elective"
                    },
                    {
                        "Peak Carbon: Climate Change & Energy Policy": "Comm - Technology & Society"
                    },
                    {
                        "Peak Carbon: Climate Change & Energy Policy": "Communities – Tech and Society"
                    },
                    {
                        "Perception and Cognition (S2)": "Cognitive Psychology"
                    },
                    {
                        "Political Economy of Capitalism": "Economics Major Elective"
                    },
                    {
                        "Politics of Globalisation": "Political Science Major"
                    },
                    {
                        "Portfolio Management of Financial Assets": "Finance Major Elective"
                    },
                    {
                        "Protecting Earth's Environment": "General Education - Science"
                    },
                    {
                        "Psychology and Law": "SSMR (Social Science)"
                    },
                    {
                        "Psychology of the Individual and the Group": "General Education - Arts"
                    },
                    {
                        "Public International Law": "Public International Law"
                    },
                    {
                        "Real Estate Finance": "Finance Major Elective"
                    },
                    {
                        "Service marketing & management": "Marketing Major Elective"
                    },
                    {
                        "Social and Developmental Psychology": "SSMR (Social Science)"
                    },
                    {
                        "Southeast Asia": "Asian Studies"
                    },
                    {
                        "Technology, Energy and Civilization": "Technology & Entrepreneurship"
                    },
                    {
                        "Technology, Energy and Civilization": "Technology and Entrepreneursh"
                    },
                    {
                        "Technology, Energy and Civilization": "Technology and Entrepreneurshi"
                    },
                    {
                        "The Psychology of Addiction": "SSMR (Social Science)"
                    },
                    {
                        "Tourism: The Global Future": "Global and Regional Studies"
                    },
                    {
                        "Venture Capital": "Finance Major Elective"
                    },
                    {
                        "World Religions": "General Education - Arts"
                    },
                    {
                        "e-Business Applications and Technologies - INFS4885": "IS Management Depth Elective"
                    }
                ]
            },
            {
                "school": "University of Melbourne, Faculty of Business and Economics",
                "courses": [
                    {
                        "Advertising and Promotions": "Marketing Major Elective"
                    },
                    {
                        "Agricultural Economics": "Economics Major Elective"
                    },
                    {
                        "Algorithms and Complexity (COMP90038)": "Free Electives (SCIS only)"
                    },
                    {
                        "Asian Arts: Networks and Hubs": "Asia Studies"
                    },
                    {
                        "Asian Century: Meaning and Impact": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "Brand Management": "Marketing Major Elective"
                    },
                    {
                        "Business in the Global Economy": "Business Option"
                    },
                    {
                        "CLIMATE SCIENCE FOR DECISION-MAKING": "Comm - Technology & Society"
                    },
                    {
                        "CLIMATE SCIENCE FOR DECISION-MAKING": "Communities – Tech and Society"
                    },
                    {
                        "Chinese Business and Economy": "Asian Studies"
                    },
                    {
                        "Chinese Studies: Culture and Empire": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "Climate science for decision-making": "Comm - Technology & Society"
                    },
                    {
                        "Climate science for decision-making": "Communities – Tech and Society"
                    },
                    {
                        "Cold War Cultures in Asia": "Asia Studies"
                    },
                    {
                        "Corruption in Asia": "Asia Studies"
                    },
                    {
                        "Cryptocurrencies & decentralised ledgers (COMP90088)": "Free Electives (SCIS only)"
                    },
                    {
                        "Data Analysis for Finance": "Free Electives (SCIS only)"
                    },
                    {
                        "Derivative Securities": "Finance Major Elective"
                    },
                    {
                        "Design of Algorithms (COMP20007)": "Free Electives (SCIS only)"
                    },
                    {
                        "Digital Marketing": "Marketing Major Elective"
                    },
                    {
                        "Digital Media Research": "Digital Business Electives – A"
                    },
                    {
                        "Digital Technology and Social Change": "Digital Business Electives – A"
                    },
                    {
                        "Economic Analysis and Policy": "Economics Major Elective"
                    },
                    {
                        "Elements of Data Processing (COMP20008)": "Free Electives (SCIS only)"
                    },
                    {
                        "Entrepreneurial Marketing": "Marketing Major Elective"
                    },
                    {
                        "Ethical Theory": "Cap - Modes of Thinking"
                    },
                    {
                        "Foundations of Algorithms": "Free Electives (SCIS only)"
                    },
                    {
                        "Foundations of FinTech": "Business Option"
                    },
                    {
                        "GLOBAL CULTURES IN JAPAN AND KOREA": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "Global Cultures of Japan and Korea (ASIA30005)": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "International Finance": "Finance Major Elective"
                    },
                    {
                        "International Human Resource Management": "Org Behaviour & HR Major Elec"
                    },
                    {
                        "Introduction to Climate Change": "Comm - Technology & Society"
                    },
                    {
                        "Introduction to Climate Change": "Communities – Tech and Society"
                    },
                    {
                        "KOREAN1": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "Korean 1 (KORE10001)": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Korean 1 (KORE10001)": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Language and Power in Asian Societies": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "Leadership and Team Dynamics": "Capabilities - Managing"
                    },
                    {
                        "Managerial Economics": "Economics Major Elective"
                    },
                    {
                        "Managing Entrepreneurship and Innovation": "Entrepreneurship Cluster"
                    },
                    {
                        "Media, Identity and Everyday Life": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Media, Identity and Everyday Life": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Modern China in Global History 1949-1999": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "Modern Southeast Asia": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "Natural Language Processing": "Free Electives (SCIS only)"
                    },
                    {
                        "Object Oriented Software Development (SWEN20003)": "Free Electives (SCIS only)"
                    },
                    {
                        "Past Climates: Icehouse to Greenhouse": "Comm - Technology & Society"
                    },
                    {
                        "Past Climates: Icehouse to Greenhouse": "Communities – Tech and Society"
                    },
                    {
                        "Product Management": "Marketing Major Elective"
                    },
                    {
                        "Strategic Marketing": "Business Option"
                    },
                    {
                        "Sustainability: hope for the Earth?": "Comm - Technology & Society"
                    },
                    {
                        "Sustainability: hope for the Earth?": "Communities – Tech and Society"
                    },
                    {
                        "Taiwan & Beyond: Chinese Settler Culture": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "Thinking Tools for Wicked Problems": "Cap - Modes of Thinking"
                    }
                ]
            },
            {
                "school": "University of Melbourne, Faculty of Arts",
                "courses": [
                    {
                        "Derivative Securities": "Finance Major Elective"
                    },
                    {
                        "Digital Business and Marketing": "Digital Business Electives – A"
                    },
                    {
                        "Digital Marketing": "Digital Business Electives – A"
                    },
                    {
                        "Digital Technology and Social Change": "Comm - Technology & Society"
                    },
                    {
                        "Digital Technology and Social Change": "Communities – Tech and Society"
                    },
                    {
                        "Entrepreneurial Finance": "Finance Major Elective"
                    },
                    {
                        "Essentials of Corporate Valuation": "Finance Major Elective"
                    },
                    {
                        "Gender and Contemporary Culture": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Gender and Contemporary Culture": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Global Intersections: Gender, Race, Class": "Globalisation"
                    },
                    {
                        "International Politics": "Globalisation"
                    },
                    {
                        "Introduction to Climate Change": "Comm - Technology & Society"
                    },
                    {
                        "Introduction to Climate Change": "Communities – Tech and Society"
                    },
                    {
                        "Leadership and Team Dynamics": "Capabilities - Managing"
                    },
                    {
                        "Marketing Communications": "Marketing Major Elective"
                    },
                    {
                        "Media Convergence and Digital Culture": "Digital Business Electives – A"
                    },
                    {
                        "Media, Identity and Everyday Life": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Media, Identity and Everyday Life": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Sex, Gender and Culture: An Introduction": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Sex, Gender and Culture: An Introduction": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Sociology of Culture": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Sociology of Culture": "Comm - Cultures of the Mod W"
                    },
                    {
                        "The Developing World": "Globalisation"
                    },
                    {
                        "Usability Evaluation Methods": "Digital Business Electives – A"
                    }
                ]
            },
            {
                "school": "University of Adelaide",
                "courses": [
                    {
                        "Applied Entrepreneurship": "Business Option"
                    },
                    {
                        "Australia and the Asia-Pacific": "Political Science Major"
                    },
                    {
                        "Community, Gender and Critical Development": "SSMR (Social Science)"
                    },
                    {
                        "Doing Research in Psychology": "SSMR (Social Science)"
                    },
                    {
                        "Entrepreneurial Strategy and Resourcing": "Technology & Entrepreneurship"
                    },
                    {
                        "Entrepreneurial Strategy and Resourcing": "Technology and Entrepreneursh"
                    },
                    {
                        "Entrepreneurial Strategy and Resourcing": "Technology and Entrepreneurshi"
                    },
                    {
                        "Foundations of Linguistics": "General Education - Arts"
                    },
                    {
                        "Game Theory III": "Game Theory"
                    },
                    {
                        "Gender, Work and Society": "SSMR (Social Science)"
                    },
                    {
                        "Gender, Work and Society": "Sociology Major Elective"
                    },
                    {
                        "Global Environmental Politics": "Global and Regional Studies"
                    },
                    {
                        "Individual Differences, Personality and Assessment": "Psychology Major Elective"
                    },
                    {
                        "International Financial Institutions & Markets I": "Econ Major Rel/Econ Options"
                    },
                    {
                        "International Marketing III": "Business Option"
                    },
                    {
                        "International Marketing III": "Marketing Major Elective"
                    },
                    {
                        "Introduction to Development Studies": "SSMR (Social Science)"
                    },
                    {
                        "Introduction to Marketing II": "Business-Oriented Elective"
                    },
                    {
                        "Justice, Virtue and the Good": "Political Science Major"
                    },
                    {
                        "Marketing Communications III": "Marketing Major Elective"
                    },
                    {
                        "Media Democracies and E-Participation": "Corp Comm Major Elective"
                    },
                    {
                        "Medical Law and Ethics": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Money, banking and financial markets III": "Finance Major Elective"
                    },
                    {
                        "Opportunity Assessment": "Technology & Entrepreneurship"
                    },
                    {
                        "Opportunity Assessment": "Technology and Entrepreneursh"
                    },
                    {
                        "Opportunity Assessment": "Technology and Entrepreneurshi"
                    },
                    {
                        "Options, Futures and Risk Management III": "Finance Major Elective"
                    },
                    {
                        "Politics, Power and Popular Culture": "Political Science Major"
                    },
                    {
                        "Politics, Power and Popular Culture": "Sociology Major Elective"
                    },
                    {
                        "Portfolio Theory & Management III": "Finance Major Elective"
                    },
                    {
                        "Public International Law": "GRS + LGST"
                    },
                    {
                        "Regulation of Security Trading Markets": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Remedies": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Resource and Environmental Economics III": "Environmental Economics"
                    },
                    {
                        "Succession": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Writing for News Media": "Corp Comm Major Elective"
                    },
                    {
                        "international business II": "Business Option"
                    }
                ]
            },
            {
                "school": "The University of Queensland",
                "courses": [
                    {
                        "Entrepreneurial Mindset and Ideation": "Entrepreneurship Major Elec"
                    },
                    {
                        "Entrepreneurial Mindset and Ideation": "Free Electives (For LKCSB)"
                    },
                    {
                        "GAMING CULTURES": "Comm - Technology & Society"
                    },
                    {
                        "GAMING CULTURES": "Communities – Tech and Society"
                    },
                    {
                        "INTRODUCTION TO CRITICAL THINKING": "Cap - Modes of Thinking"
                    },
                    {
                        "INTRODUCTION TO DIGITAL CULTURES": "Comm - Technology & Society"
                    },
                    {
                        "INTRODUCTION TO DIGITAL CULTURES": "Communities – Tech and Society"
                    },
                    {
                        "INTRODUCTION TO FILM AND TELEVISION STUDIES": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "INTRODUCTION TO FILM AND TELEVISION STUDIES": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Money and Mind": "Finance Major Elective"
                    },
                    {
                        "Real Estate Investment": "Finance Major Elective"
                    },
                    {
                        "Understanding Digital Health": "Health Economics and Mgmt Elec"
                    }
                ]
            },
            {
                "school": "Queensland University of Technology",
                "courses": [
                    {
                        "Advanced Taxation Law": "AO (Taxation Track)"
                    },
                    {
                        "Advertising Creative: Trends in New Media": "Business-Oriented Elective"
                    },
                    {
                        "Bridging Cultures": "General Education - Arts"
                    },
                    {
                        "Building IT Systems": "Technology & Entrepreneurship"
                    },
                    {
                        "Building IT Systems": "Technology and Entrepreneursh"
                    },
                    {
                        "Building IT Systems": "Technology and Entrepreneurshi"
                    },
                    {
                        "Building IT systems": "Technology & Entrepreneurship"
                    },
                    {
                        "Building IT systems": "Technology and Entrepreneursh"
                    },
                    {
                        "Building IT systems": "Technology and Entrepreneurshi"
                    },
                    {
                        "Business Technologies": "Business Option"
                    },
                    {
                        "Concept Development for Game Design and Interactive Media": "IS Technology Depth Elective"
                    },
                    {
                        "Data Warehousing and Mining": "IS Technology Depth Elective"
                    },
                    {
                        "Enterprise Software Architecture": "IS Technology Depth Elective"
                    },
                    {
                        "Entrepreneurship and Innovation": "Business-Oriented Elective"
                    },
                    {
                        "Global Business": "Global and Regional Studies"
                    },
                    {
                        "IT Systems Design": "Technology Studies"
                    },
                    {
                        "Innovation, Knowledge and Creativity": "Business Option"
                    },
                    {
                        "International Business in the Asia-Pacific": "Asian Studies"
                    },
                    {
                        "International Finance": "GRS + FNCE"
                    },
                    {
                        "Interpersonal Processes and Skills": "SSMR (Social Science)"
                    },
                    {
                        "Introduction to Public Relations": "Business Option"
                    },
                    {
                        "Introduction to Web Design and Development": "IS Technology Depth Elective"
                    },
                    {
                        "Managing Projects": "Business Option"
                    },
                    {
                        "Managing Risk": "AO (Risk Mgmt & Assurance Trk)"
                    },
                    {
                        "Marketing Planning and Management": "Business Option"
                    },
                    {
                        "Network Planning": "IS Technology Depth Elective"
                    },
                    {
                        "Networks": "IS Technology Depth Elective"
                    },
                    {
                        "Risk Management and Derivatives": "Finance Major Elective"
                    },
                    {
                        "Taxation Law": "AO (Taxation Track)"
                    },
                    {
                        "Web Application Development": "IS Technology Depth Elective"
                    },
                    {
                        "Wireless and Mobile Network": "IS Technology Depth Elective"
                    },
                    {
                        "Working in Business": "Business-Oriented Elective"
                    }
                ]
            },
            {
                "school": "Monash University",
                "courses": [
                    {
                        "AI, technology and the law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Asia's underside: Violence, crime and protest": "Asian Studies"
                    },
                    {
                        "Contemporary Japan": "Asian Studies"
                    },
                    {
                        "Entrepreneurship": "Entrepreneurship Cluster"
                    },
                    {
                        "Financial analysis and valuation": "AO (Financial Management Track"
                    },
                    {
                        "Global Asia": "Asian Studies"
                    },
                    {
                        "Indonesia now: Culture, conflict and crisis management in the Asian century": "Asian Studies"
                    },
                    {
                        "Innovation, entrepreneurship and intrapreneurship": "Entrepreneurship Cluster"
                    },
                    {
                        "Introduction to data science": "Technology Studies"
                    },
                    {
                        "LAW 4193 Biotechnology and the law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "LAW 4198 Australian Commercial Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "LAW 4244 Construction law (dispute resolution)": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "LAW 4313 International Environmental Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "LAW 4342- Patents, Trade Marks and Unfair Competition": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "LAW 4702 Competition and Consumer Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "LAW 4704 Taxation Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "LAW4227 Criminal Investigation Law and Procedure": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "LAW4230 Animal Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "LAW4311 - Succession law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "LAW4312 Legal Issues in Medicine": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "LAW4341 Copyright and Designs": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "LAW4702 Competition and Consumer Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Litigation and Dispute Resolution": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Managing Employee Relations": "Business Option"
                    },
                    {
                        "Organisations and Society": "Business Option"
                    },
                    {
                        "Prosperity, poverty and sustainability in a globalised world": "Globalisation"
                    },
                    {
                        "The global challenge": "Globalisation"
                    },
                    {
                        "War and memory in the Asia Pacific: Legacies of World War II": "Asian Studies"
                    }
                ]
            },
            {
                "school": "La Trobe University",
                "courses": [
                    {
                        "Communication Theory and Analysis": "Corp Comm Major Elective"
                    },
                    {
                        "Competition policy and law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Consumer Behaviour (MKT2CBE)": "Business Option"
                    },
                    {
                        "DESTINATION MARKETING AND MANAGEMENT": "Marketing Major Elective"
                    },
                    {
                        "Dispute Resolution": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "ECM1001 ECONOMIC AND FINANCE DATA ANALYSIS": "Economics Major Elective"
                    },
                    {
                        "ECONOMIC DEVELOPMENT AND POLICY": "Development Economics"
                    },
                    {
                        "EMPLOYMENT AND LABOR RELATIONS LAW": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "ENVIRONMENTAL & NATURAL RESOURCES LAW": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Economics of Developing Countries": "Business Option"
                    },
                    {
                        "GLOBALISATION AND DEVELOPMENT": "Global and Regional Studies"
                    },
                    {
                        "GLOBALISATION AND DEVELOPMENT": "Globalisation"
                    },
                    {
                        "INTRODUCTION TO ASIA: JAPAN AND INDONESIA": "Global and Regional Studies"
                    },
                    {
                        "INTRODUCTION TO INTERNATIONAL BUSINESS": "Globalisation"
                    },
                    {
                        "INVESTMENT AND PORTFOLIO MANAGEMENT": "Business Option"
                    },
                    {
                        "Income Taxation Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "International Criminal Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Introduction to International Business": "Business Option"
                    },
                    {
                        "Justice after atrocity": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "MERGERS AND ACQUISITIONS": "Business Option"
                    },
                    {
                        "Marketing Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "SERVICES MARKETING": "Business Option"
                    },
                    {
                        "SOCIAL ENTREPRENEURSHIP: THE BIG IDEA": "Entrepreneurship Cluster"
                    },
                    {
                        "SOCIAL MEDIA AND RELATIONSHIP MARKETING": "Marketing Major Elective"
                    },
                    {
                        "SOCIAL MEDIA AND RELATIONSHIP MARKETING": "Technology Studies"
                    },
                    {
                        "Strategic Communication Issues and Crisis Management": "Corp Comm Major Elective"
                    }
                ]
            },
            {
                "school": "Bond University",
                "courses": [
                    {
                        "Australian Legal System": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Canadian Criminal Law and Procedure": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Copyright & Entertainment Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Electronic Commerce and the Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Equitable Remedies": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Foundations of United States Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Introduction to Philosophy": "General Education - Arts"
                    },
                    {
                        "Sports Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Takeovers and Securities Regulation": "Law Major Elective-LLB/JD only"
                    }
                ]
            },
            {
                "school": "Australian National University",
                "courses": [
                    {
                        "Advanced Algorithms": "IS Depth Elective"
                    },
                    {
                        "Advanced Derivatives Pricing and Applications": "Quantitative Finance Elective"
                    },
                    {
                        "Advertising": "Marketing Major Elective"
                    },
                    {
                        "Algorithms": "IS Depth Elective"
                    },
                    {
                        "Asia and the Pacific in Motion": "Asia Studies"
                    },
                    {
                        "Asian Capital Markets": "Asian Studies"
                    },
                    {
                        "Bankruptcy and Insolvency": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Behavioural Economics: Psychology and Economics": "Economics Major Elective"
                    },
                    {
                        "Business and Economic Forecasting": "Economic Forecasting"
                    },
                    {
                        "Business in China": "Global and Regional Studies"
                    },
                    {
                        "Career Planning and Management": "Business-Oriented Elective"
                    },
                    {
                        "Career Planning and Management": "Org Behaviour & HR Major Elec"
                    },
                    {
                        "Climate Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Commercial Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Competition Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Computer Graphics": "IS Options"
                    },
                    {
                        "Corporate Social Responsibility, Accountability and Reporting": "AO (Financial Management Track"
                    },
                    {
                        "Data Wrangling": "IS Depth Elective"
                    },
                    {
                        "Democracy in Southeast Asia": "Asian Studies"
                    },
                    {
                        "Derivatives": "Finance Major Elective"
                    },
                    {
                        "Design Thinking: Entrepreneurial Innovation": "Entrepreneurship Cluster"
                    },
                    {
                        "Development Poverty and Famine(P)": "Development Economics"
                    },
                    {
                        "E-Marketing": "Marketing Major Elective"
                    },
                    {
                        "Economies of Emerging Asia": "Asian Studies"
                    },
                    {
                        "Enterprise Systems in Business": "IS Options"
                    },
                    {
                        "Entrepreneurship and Innovation": "Entrepreneurship Cluster"
                    },
                    {
                        "Environmental Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Feminist and Critical Legal Theory": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Financial Markets and Takeovers": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Financial Mathematics": "Finance Major Elective"
                    },
                    {
                        "Financial Statement Analysis": "Business-Oriented Elective"
                    },
                    {
                        "Gender and Culture in Iran & Middle East": "SSMR (Social Science)"
                    },
                    {
                        "Global Citizen: Culture, Development and Inequality": "Globalisation"
                    },
                    {
                        "Global and Local": "General Education - Arts"
                    },
                    {
                        "Globalisation: Communications, Culture and Democracy": "Globalisation"
                    },
                    {
                        "Health Economics": "Health Economics"
                    },
                    {
                        "Human Computer Interface Design and Evaluation": "IS Depth Elective"
                    },
                    {
                        "Human Resource Management and Strategy": "Business-Oriented Elective"
                    },
                    {
                        "Information Systems Strategy and Management": "IS Management Depth Elective"
                    },
                    {
                        "International Human Resource Management": "Business-Oriented Elective"
                    },
                    {
                        "International Marketing": "Marketing Major Elective"
                    },
                    {
                        "International Security issues in the Asia Pacific": "Asian Studies"
                    },
                    {
                        "International Strategic Management": "Global and Regional Studies"
                    },
                    {
                        "Introduction to International Relations: Contemporary Global Issues": "Globalisation"
                    },
                    {
                        "Japanese Popular Culture: Manga, Anime, Film & the Visual Arts": "Asian Studies"
                    },
                    {
                        "Labour Economics and Industrial Relations": "Business Option"
                    },
                    {
                        "Language in Asia and the Pacific": "Asian Studies"
                    },
                    {
                        "Law and Art: Representation and Critique": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Law and the Humanities": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Leadership": "Capabilities - Managing"
                    },
                    {
                        "Legislative Drafting and Technology": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Leviathan, Art, and Law: Constituting the Body Politic": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Managing Organisational Change (MGMT 2035)": "Org Behaviour & HR Major Elec"
                    },
                    {
                        "Mathematical Economics: Technique and Applications": "Advanced Mathematical Methods"
                    },
                    {
                        "Money and Banking": "Business-Oriented Elective"
                    },
                    {
                        "Money and Banking": "Monetary Economics"
                    },
                    {
                        "Negotiation": "Capabilities - Managing"
                    },
                    {
                        "Organisational Behaviour (MGMT2007)": "Org Behaviour & HR Major Elec"
                    },
                    {
                        "Perspectives on Crime from Psychology and Criminology": "SSMR (Social Science)"
                    },
                    {
                        "Principles of Programming Languages": "IS Depth Elective"
                    },
                    {
                        "Programming for Scientists": "IS Depth Elective"
                    },
                    {
                        "Public Sector Economics": "Public Sector Economics"
                    },
                    {
                        "Real-Time & Embedded Systems": "IS Depth Elective"
                    },
                    {
                        "Restitution": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Robotics": "IS Options"
                    },
                    {
                        "Samurai Society and Social Control in Japan": "Asia Studies"
                    },
                    {
                        "Service Marketing": "Marketing Major Elective"
                    },
                    {
                        "Special Law Elective 1: Animals and the Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Succession": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Survival Models": "Business-Oriented Elective"
                    },
                    {
                        "Systems, Networks and Concurrency": "IS Depth Elective"
                    },
                    {
                        "Taiwan: History and Culture": "SSMR (Social Science)"
                    },
                    {
                        "The Illicit Economy": "Economics Major Elective"
                    },
                    {
                        "The Law of Money": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "The Mongol Empire in World History": "SSMR (Social Science)"
                    },
                    {
                        "The Politics of China": "Asian Studies"
                    },
                    {
                        "The Twentieth Century World": "Globalisation"
                    },
                    {
                        "Weather, Climate and Fire": "General Education - Arts"
                    }
                ]
            }
        ],  // END australia
            "brazil": [
            {
                "school": "Insper Institute of Education and Research",
                "courses": [
                    {
                        "Trading the Financial Market": "Business Option"
                    },
                    {
                        "THE FINANCIAL CRISIS": "Business Option"
                    },
                    {
                        "Private Equity and Venture Capital": "Business Option"
                    },
                    {
                        "Marketing B2B": "Business Option"
                    },
                    {
                        "Macroeconomic Imbalances and Currency Crisis in Recent Latin America": "Business Option"
                    },
                    {
                        "LATIN AMERICA TODAY: A HISTORY OF MACROECONOMIC IMBALANCES FROM 1982 UP TO OUR DAYS": "Business Option"
                    },
                    {
                        "Introduction to Behavioral Economics": "Business Option"
                    },
                    {
                        "INSTITUTIONAL ECONOMICS AND BUSINESS STRATEGY": "Business Option"
                    },
                    {
                        "Environmental Management and Corporate Social Responsibility": "Business Option"
                    },
                    {
                        "VALUATION": "Business-Oriented Elective"
                    },
                    {
                        "Technological Innovation": "Business-Oriented Elective"
                    },
                    {
                        "SUSTAINABLE DESIGN": "Business-Oriented Elective"
                    },
                    {
                        "PRODUCT-SERVICE SYSTEM DESIGN": "Business-Oriented Elective"
                    },
                    {
                        "PRODUCT-SERVICE SYSTEM (PSS) DESIGN": "Business-Oriented Elective"
                    },
                    {
                        "PRODUCT-SERVICE SYSTEM": "Business-Oriented Elective"
                    },
                    {
                        "MARKETING TRENDS": "Business-Oriented Elective"
                    },
                    {
                        "MARKETING METRICS AND DATE MARKETING": "Business-Oriented Elective"
                    },
                    {
                        "MACROECONOMICS AND FINANCIAL MARKETS": "Business-Oriented Elective"
                    },
                    {
                        "Digital Marketing": "Business-Oriented Elective"
                    },
                    {
                        "DESIGN THINKING": "Business-Oriented Elective"
                    },
                    {
                        "COMPETITION POLICY AND INSTITUTIONS": "Business-Oriented Elective"
                    },
                    {
                        "ADVANCED TOPICS IN CORPORATE FINANCE": "Business-Oriented Elective"
                    },
                    {
                        "DESIGN THINKING": "Entrepreneurship Cluster"
                    },
                    {
                        "TRADING THE FINANCIAL MARKETS: OPTIONS AND FUTURES": "Finance Major Elective"
                    },
                    {
                        "CIRCULAR ECONOMY: DESIGN FOR THE FUTURE": "General Education - Arts"
                    },
                    {
                        "Trading in Financial Markets": "Global and Regional Studies"
                    },
                    {
                        "The Chinese Economy and Doing Business In China": "Global and Regional Studies"
                    },
                    {
                        "LATIN AMERICA TODAY: A HISTORY OF MACROECONOMIC IMBALANCES FROM 1982 UP TO OUR DAYS": "Global and Regional Studies"
                    },
                    {
                        "Analysis of the Economic Environment I": "Global and Regional Studies"
                    },
                    {
                        "TRADING THE FINANCIAL MARKETS": "Globalisation"
                    },
                    {
                        "GLOBAL CITIES": "Globalisation"
                    },
                    {
                        "PUTTING STRATEGY INTO PRACTICE: THE ROLE OF TOP MANAGEMENT TEAMS": "Strategic Mgmt Major Elective"
                    },
                    {
                        "New Venture Creation": "Strategic Mgmt Major Elective"
                    },
                    {
                        "Entrepreneurship": "Strategic Mgmt Major Elective"
                    },
                    {
                        "Technological Innovation": "TE + MGMT"
                    },
                    {
                        "FAMILY BUSINESS": "Technology & Entrepreneurship"
                    },
                    {
                        "FAMILY BUSINESS": "Technology and Entrepreneursh"
                    },
                    {
                        "FAMILY BUSINESS": "Technology and Entrepreneurshi"
                    }
                ]
            }
        ],
            "italy": [
            {
                "school": "Bocconi University",
                "courses": [
                    {
                        "PYTHON PROGRAMMING FOR ECONOMICS, MANAGEMENT AND FINANCE": "ADA Major Elective + AO/AE"
                    },
                    {
                        "MACHINE LEARNING": "ADA Major Elective + AO/AE"
                    },
                    {
                        "INTRODUCTION TO BLOCKCHAIN": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Forecasting Economic, Business And Financial Data. Coding And Applications": "ADA Major Elective + AO/AE"
                    },
                    {
                        "FUNDAMENTALS OF COMPUTER SCIENCE": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Big data for business analytics": "ADA Major Elective + AO/AE"
                    },
                    {
                        "BIG DATA FOR BUSINESS DECISIONS": "ADA Major Elective + AO/AE"
                    },
                    {
                        "BIG DATA AND DATABASES": "ADA Major Elective + AO/AE"
                    },
                    {
                        "ADVANCED PYTHON PROGRAMMING FOR ECONOMICS, MANAGEMENT AND FINANCE": "ADA Major Elective + AO/AE"
                    },
                    {
                        "ADVANCED PROGRAMMING AND OPTIMIZATION ALGORITHMS": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Management of Financial Institutions": "Acct Options / Acct Elective"
                    },
                    {
                        "FRAUD DETECTION AND RISK ASSESSMENT": "Acct Options / Acct Elective"
                    },
                    {
                        "APPLIED VALUATION ANALYSIS FOR MERGERS AND OTHER BUSINESS COMBINATIONS": "Acct Options / Acct Elective"
                    },
                    {
                        "30495 - INNOVATION AND BIG DATA FOR THE PUBLIC SECTOR": "Acct Options / Acct Elective"
                    },
                    {
                        "INTRODUCTION TO OPTIONS AND FUTURES": "Analy of Derivative Securities"
                    },
                    {
                        "BUSINESS MANAGEMENT IN CHINA": "Asia Studies"
                    },
                    {
                        "Marketing Analytics": "Business Elective"
                    },
                    {
                        "Corporate Valuation": "Business Elective"
                    },
                    {
                        "WORKSHOP IN MANAGEMENT OF THE MUSIC BUSINESS": "Business Option"
                    },
                    {
                        "WORKSHOP IN DESIGN BASED INDUSTRIES AND COMPANIES": "Business Option"
                    },
                    {
                        "ORGANIZATION THEORY": "Business Option"
                    },
                    {
                        "Management of Financial Institutions": "Business Option"
                    },
                    {
                        "MANAGEMENT OF FASHION COMPANIES": "Business Option"
                    },
                    {
                        "Introduction to Blockchain": "Business Option"
                    },
                    {
                        "Innovation & Big Data for Public Sector": "Business Option"
                    },
                    {
                        "INTERNATIONAL AND MONETARY ECONOMICS": "Business Option"
                    },
                    {
                        "FISCAL MACROECONOMICS": "Business Option"
                    },
                    {
                        "European Economic Policy": "Business Option"
                    },
                    {
                        "EVENT AND MEGA EVENT MANAGEMENT AND CREATIVE INDUSTRIES": "Business Option"
                    },
                    {
                        "EQUITY PORTFOLIO MANAGEMENT": "Business Option"
                    },
                    {
                        "DIGITAL DISRUPTION AND ENTREPRENEURSHIP": "Business Option"
                    },
                    {
                        "Corporate Banking": "Business Option"
                    },
                    {
                        "CULTURE, INSTITUTIONS AND DEVELOPMENT": "Business Option"
                    },
                    {
                        "Alternative Investments": "Business Option"
                    },
                    {
                        "APPLIED VALUATION ANALYSIS FOR MERGERS AND OTHER BUSINESS COMBINATIONS": "Business Option"
                    },
                    {
                        "Marketing": "Business-Oriented Elective"
                    },
                    {
                        "MIND AND SOCIETY: INTRO TO COGNITIVE SCIENCES": "Cap - Modes of Thinking"
                    },
                    {
                        "LOGIC AND METHODOLOGY OF SOCIAL SCIENCES": "Cap - Modes of Thinking"
                    },
                    {
                        "LEADERSHIP SKILLS": "Capabilities - Managing"
                    },
                    {
                        "Decision Making and Negotiation": "Career Skills"
                    },
                    {
                        "THE TRANSFORMATION OF CULTURAL SECTOR AND ART MARKET: CRITICAL ISSUES AND CASES": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "ISLAM, POLITICS AND THE MIDDLE EAST": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "CRITICAL APPROACHES TO THE ARTS II - MODULE II (CINEMA)": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "CRITICAL APPROACHES TO THE ARTS II - MODULE II (ART AND POLITICS)": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "CRITICAL APPROACHES TO THE ARTS II - MODULE I (TELEVISION AND CULTURE)": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "CRITICAL APPROACHES TO THE ARTS II - MODULE I (MUSIC AND SOCIETY)": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "CRITICAL APPROACHES TO THE ARTS II - MODULE I (CONTEMPORARY ART)": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "THE TRANSFORMATION OF CULTURAL SECTOR AND ART MARKET: CRITICAL ISSUES AND CASES": "Comm - Cultures of the Mod W"
                    },
                    {
                        "ISLAM, POLITICS AND THE MIDDLE EAST": "Comm - Cultures of the Mod W"
                    },
                    {
                        "CRITICAL APPROACHES TO THE ARTS II - MODULE II (CINEMA)": "Comm - Cultures of the Mod W"
                    },
                    {
                        "CRITICAL APPROACHES TO THE ARTS II - MODULE II (ART AND POLITICS)": "Comm - Cultures of the Mod W"
                    },
                    {
                        "CRITICAL APPROACHES TO THE ARTS II - MODULE I (TELEVISION AND CULTURE)": "Comm - Cultures of the Mod W"
                    },
                    {
                        "CRITICAL APPROACHES TO THE ARTS II - MODULE I (MUSIC AND SOCIETY)": "Comm - Cultures of the Mod W"
                    },
                    {
                        "CRITICAL APPROACHES TO THE ARTS II - MODULE I (CONTEMPORARY ART)": "Comm - Cultures of the Mod W"
                    },
                    {
                        "CLIMATE CHANGE ECONOMICS": "Comm - Technology & Society"
                    },
                    {
                        "CLIMATE CHANGE ECONOMICS": "Communities – Tech and Society"
                    },
                    {
                        "30514 - BIG DATA FOR BUSINESS ANALYTICS": "Data Modelling & Visualisation"
                    },
                    {
                        "ECONOMICS (POVERTY, INEQUALITY AND INCOME DISTRIBUTION)": "Development Economics"
                    },
                    {
                        "EMPIRICAL METHODS FOR FINANCE (INTRODUCTION TO ECONOMETRICS FOR FINANCE)": "ECON + FNCE"
                    },
                    {
                        "European Economic Policy": "EMR (Social Science)"
                    },
                    {
                        "MONETARY AND FISCAL POLICY: CURRENT CHALLENGES": "Economics Major Elective"
                    },
                    {
                        "MARKETS, ORGANIZATIONS AND INCENTIVES": "Economics Major Elective"
                    },
                    {
                        "MACROECONOMICS AND THE WORLD ECONOMY": "Economics Major Elective"
                    },
                    {
                        "Entrepreneurial Economics and Entrepreneurship": "Economics Major Elective"
                    },
                    {
                        "Empirical Research Methods and Data Analysis": "Economics Major Elective"
                    },
                    {
                        "Economics of Financial Regulation": "Economics Major Elective"
                    },
                    {
                        "CLIMATE CHANGE ECONOMICS": "Economics Major Elective"
                    },
                    {
                        "Strategic Management for Small and Medium Enterprises": "Entrepreneurship Cluster"
                    },
                    {
                        "SOCIAL ENTREPRENEURSHIP AND IMPACT INVESTING": "Entrepreneurship Cluster"
                    },
                    {
                        "ENTREPRENEURSHIP AND STRATEGIC INNOVATION IN THE FASHION INDUSTRY": "Entrepreneurship Cluster"
                    },
                    {
                        "ENTREPRENEURSHIP AND BUSINESS PLANNING": "Entrepreneurship Cluster"
                    },
                    {
                        "Principles of International Finance": "FNCE + Globalisation"
                    },
                    {
                        "FINTECH FOR BANKING AND FINANCIAL TRANSFORMATION": "Finance (Banking Trk) Elective"
                    },
                    {
                        "EQUITY PORTFOLIO MANAGEMENT": "Finance (ITT Track) Electives"
                    },
                    {
                        "VENTURE AND DEVELOPMENT CAPITAL": "Finance Major Elective"
                    },
                    {
                        "THE MICROSTRUCTURE OF FINANCIAL MARKETS": "Finance Major Elective"
                    },
                    {
                        "RISK MANAGEMENT WITH DERIVATIVES": "Finance Major Elective"
                    },
                    {
                        "PRIVATE EQUITY AND VENTURE CAPITAL": "Finance Major Elective"
                    },
                    {
                        "MERGERS AND ACQUISITIONS": "Finance Major Elective"
                    },
                    {
                        "INVESTMENT BANKING": "Finance Major Elective"
                    },
                    {
                        "INTRODUCTION TO OPTIONS AND FUTURES": "Finance Major Elective"
                    },
                    {
                        "INTERNATIONAL BANKING": "Finance Major Elective"
                    },
                    {
                        "Financial Economics": "Finance Major Elective"
                    },
                    {
                        "Financial Contracting": "Finance Major Elective"
                    },
                    {
                        "FIXED INCOME (ADVANCED METHODS)": "Finance Major Elective"
                    },
                    {
                        "FINTECH FOR BANKING AND FINANCIAL TRANSFORMATION": "Finance Major Elective"
                    },
                    {
                        "FINANCIAL MODELLING": "Finance Major Elective"
                    },
                    {
                        "ENTREPRENEURSHIP, FINANCE AND INNOVATION": "Finance Major Elective"
                    },
                    {
                        "Corporate Valuation": "Finance Major Elective"
                    },
                    {
                        "Corporate Banking": "Finance Major Elective"
                    },
                    {
                        "BUSINESS VALUATION": "Finance Major Elective"
                    },
                    {
                        "Asset Management": "Finance Major Elective"
                    },
                    {
                        "Alternative Investments": "Finance Major Elective"
                    },
                    {
                        "30511 - FINTECH FOR BANKING AND FINANCIAL TRANSFORMATION": "Finance Major Elective"
                    },
                    {
                        "TECHNOLOGY AND INNOVATION MANAGEMENT": "Free Electives (For LKCSB)"
                    },
                    {
                        "PUBLIC FINANCE": "Free Electives (For LKCSB)"
                    },
                    {
                        "PHILOSOPHY OF ART": "Free Electives (For LKCSB)"
                    },
                    {
                        "GLOBAL SUSTAINABILITY STRATEGY": "Free Electives (For LKCSB)"
                    },
                    {
                        "GLOBAL ECONOMIC AND SOCIAL HISTORY": "Free Electives (For LKCSB)"
                    },
                    {
                        "Financial Statement Analysis for Company Valuation": "Free Electives (For LKCSB)"
                    },
                    {
                        "Financial Modelling": "Free Electives (For LKCSB)"
                    },
                    {
                        "EQUITY PORTFOLIO MANAGEMENT": "Free Electives (For LKCSB)"
                    },
                    {
                        "CRITICAL APPROACHES TO THE ARTS II - MODULE II (ART AND POLITICS)": "Free Electives (For LKCSB)"
                    },
                    {
                        "Business Plan": "Free Electives (For LKCSB)"
                    },
                    {
                        "30475 - CRITICAL APPROACHES TO THE ARTS II - MODULE II (CINEMA)": "Free Electives (For LKCSB)"
                    },
                    {
                        "SOCIOLOGY": "Free Electives (SOA only)"
                    },
                    {
                        "GAME THEORY: ANALYSIS OF STRATEGIC THINKING": "Game Theory"
                    },
                    {
                        "Workshop in Film Industry Management": "General Education - Arts"
                    },
                    {
                        "Psychology of Marketing": "General Education - Arts"
                    },
                    {
                        "METHOD, CRITIQUE AND RESEARCH IN ARTISTIC DISCIPLINES II - MODULE II (SOCIAL THEORY AND CINEMA)": "General Education - Arts"
                    },
                    {
                        "International Demography": "General Education - Arts"
                    },
                    {
                        "COMPARATIVE BUSINESS HISTORY: COMPETITION AND  GLOBALIZATION": "General Education - Arts"
                    },
                    {
                        "THE GLOBAL INDUSTRY OF IMAGINERIES": "Global and Regional Studies"
                    },
                    {
                        "INTERNATIONAL TRADE LAW": "Global and Regional Studies"
                    },
                    {
                        "INTERNATIONAL AND MONETARY ECONOMICS": "Global and Regional Studies"
                    },
                    {
                        "LONG TERM INVESTMENTS AND PUBLIC PRIVATE PARTNERSHIPS": "Globalisation"
                    },
                    {
                        "INTERNATIONAL RELATIONS": "Globalisation"
                    },
                    {
                        "INTERNATIONAL CORPORATE FINANCE": "Globalisation"
                    },
                    {
                        "HISTORY (MODULE I - GLOBAL HISTORY)": "Globalisation"
                    },
                    {
                        "GLOBAL ECONOMIC AND SOCIAL HISTORY": "Globalisation"
                    },
                    {
                        "GEOPOLITICS": "Globalisation"
                    },
                    {
                        "TELECOMMUNICATIONS": "IS Management Depth Elective"
                    },
                    {
                        "COMPUTER PROGRAMMING": "Introduction to Programming"
                    },
                    {
                        "Introduction to Legal System 1": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "International and European Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Eurpoean Commercial Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "DIRITTI DI PROPRIETA' INTELLETTUALE E CONCORRENZA [INTELLECTUAL PROPERTY AND COMPETITION LAW]": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "CIVIL LIBERTIES AND HUMAN RIGHTS": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "BANKING LAW": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "COMMUNICATION EVENTS AND ENTERTAINMENT INDUSTRIES": "MKTG + CORC"
                    },
                    {
                        "Principles of e-Marketing and e-Commerce": "Marketing Major Elective"
                    },
                    {
                        "Personal Selling": "Marketing Major Elective"
                    },
                    {
                        "NEW PRODUCTS AND PRODUCT MANAGEMENT": "Marketing Major Elective"
                    },
                    {
                        "NEW PRODUCT DEVELOPMENT AND OPEN INNOVATION": "Marketing Major Elective"
                    },
                    {
                        "MARKETING IN CREATIVE INDUSTRIES": "Marketing Major Elective"
                    },
                    {
                        "MARKETING COMMUNICATION": "Marketing Major Elective"
                    },
                    {
                        "MARKET RESEARCH FOR CULTURAL SETTINGS": "Marketing Major Elective"
                    },
                    {
                        "GREEN MARKETING": "Marketing Major Elective"
                    },
                    {
                        "DISTRIBUTION NETWORKS AND INTERNATIONAL RETAILING": "Marketing Major Elective"
                    },
                    {
                        "DIGITAL MARKETING AND E-COMMERCE ADVANCED": "Marketing Major Elective"
                    },
                    {
                        "MONETARY THEORY AND POLICY": "Monetary Economics"
                    },
                    {
                        "30054 - INTERNATIONAL AND MONETARY ECONOMICS": "Monetary Economics"
                    },
                    {
                        "SUSTAINABLE OPERATIONS MANAGEMENT": "Operations Mgmt Major Elective"
                    },
                    {
                        "POLITICAL PHILOSOPHY": "Political Philosophy"
                    },
                    {
                        "INTERNATIONAL LAW": "Public International Law"
                    },
                    {
                        "RISK MANAGEMENT WITH DERIVATIVES": "Quantitative Finance Elective"
                    },
                    {
                        "Public Management": "SSMR (Social Science)"
                    },
                    {
                        "POLITICAL ECONOMICS": "SSMR (Social Science)"
                    },
                    {
                        "International Demography": "Sociology Major Elective"
                    },
                    {
                        "30456 - STATISTICS - MODULE 1 (THEORY AND METHODS)": "Statistical Programming"
                    },
                    {
                        "30401 - MATHEMATICS AND STATISTICS - MODULE 2 (STATISTICS)": "Statistical Programming"
                    },
                    {
                        "Strategic Management for Small and Medium Enterprises": "Strategic Mgmt Major Elective"
                    },
                    {
                        "SHARING ECONOMY AND SMART CITIES MANAGEMENT": "Strategic Mgmt Major Elective"
                    },
                    {
                        "INTERNATIONAL BUSINESS AND MANAGEMENT": "Strategic Mgmt Major Elective"
                    },
                    {
                        "ENTREPRENEURIAL STRATEGY": "Strategic Mgmt Major Elective"
                    },
                    {
                        "Business Plan": "Strategic Mgmt Major Elective"
                    },
                    {
                        "VENTURE AND DEVELOPMENT CAPITAL": "Technology & Entrepreneurship"
                    },
                    {
                        "Strategic Management for Small and Medium Enterprises": "Technology & Entrepreneurship"
                    },
                    {
                        "ORGANIZATION THEORY AND ENTREPRENEURSHIP": "Technology & Entrepreneurship"
                    },
                    {
                        "ENTREPRENEURIAL STRATEGY": "Technology & Entrepreneurship"
                    },
                    {
                        "TECHNOLOGY AND INNOVATION MANAGEMENT": "Technology Studies"
                    },
                    {
                        "Machine Learning": "Technology Studies"
                    },
                    {
                        "Big data for business analytics": "Technology Studies"
                    },
                    {
                        "BIG DATA AND DATABASES": "Technology Studies"
                    },
                    {
                        "VENTURE AND DEVELOPMENT CAPITAL": "Technology and Entrepreneursh"
                    },
                    {
                        "Strategic Management for Small and Medium Enterprises": "Technology and Entrepreneursh"
                    },
                    {
                        "ORGANIZATION THEORY AND ENTREPRENEURSHIP": "Technology and Entrepreneursh"
                    },
                    {
                        "ENTREPRENEURIAL STRATEGY": "Technology and Entrepreneursh"
                    },
                    {
                        "VENTURE AND DEVELOPMENT CAPITAL": "Technology and Entrepreneurshi"
                    },
                    {
                        "Strategic Management for Small and Medium Enterprises": "Technology and Entrepreneurshi"
                    },
                    {
                        "ORGANIZATION THEORY AND ENTREPRENEURSHIP": "Technology and Entrepreneurshi"
                    },
                    {
                        "ENTREPRENEURIAL STRATEGY": "Technology and Entrepreneurshi"
                    },
                    {
                        "POLITICAL ECONOMICS": "The Economics of Politics"
                    },
                    {
                        "INCENTIVES DESIGN AND POLICY": "The Econs of Asymmetric Info"
                    },
                    {
                        "FAIR VALUE ACCOUNTING, REPORTING AND VALUATION": "Valuation"
                    },
                    {
                        "Corporate Valuation": "Valuation"
                    }
                ]
            },
            {
                "school": "Bocconi University (School of Law - Themis)",
                "courses": [
                    {
                        "Economics (Poverty, Inequality and Income Distribution)": "General Education - Arts"
                    },
                    {
                        "GLOBAL HISTORY": "Globalisation"
                    },
                    {
                        "Advanced Intellectual Property Law": "Intellectual Property Law"
                    },
                    {
                        "Private Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "PRIVATE LAW": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Introduction to the Legal System - Module 2": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Competition Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Comparative Industrial Relations Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Advanced European Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "International Trade Law": "WTO: Law and Policy"
                    }
                ]
            },
            {
                "school": "Bocconi University (School of Law)",
                "courses": [
                    {
                        "Management of Financial Institutions": "Finance Major Elective"
                    },
                    {
                        "International Banking": "Finance Major Elective"
                    },
                    {
                        "METHOD, CRITIQUE AND RESEARCH IN ARTISTIC DISCIPLINES II - MODULE I (VISUAL CULTURES)": "General Education - Arts"
                    },
                    {
                        "GLOBAL HISTORY": "Globalisation"
                    },
                    {
                        "GLOBAL ECONOMIC AND SOCIAL HISTORY": "Globalisation"
                    },
                    {
                        "INTELLECTUAL PROPERTY LAW": "Intellectual Property Law"
                    },
                    {
                        "INTELLECTUAL PROPERTY AND COMPETITION LAW": "Intellectual Property Law"
                    },
                    {
                        "LEGAL ISSUES IN MARKETING": "LAW + Business Elec - LLB only"
                    },
                    {
                        "White Collar Crime": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Private Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "National and International Institutions Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Migration Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "MERGERS AND ACQUISITIONS": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Legal Argumentation and Economic Analysis of the Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Law and Public Policy": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Law U.E. [European Union Law]": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "LAW OF NATIONAL AND INTERNATIONAL INSTITUTIONS [NATIONAL AND INTERNATIONAL LAW Institutions]": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "LAW - MODULE 1 (PUBLIC LAW)": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "KEY ISSUES IN EU LAW": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Introduction to the Legal System – Module 2": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Internet Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "International and European Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "International Trade Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "INTRODUCTION TO THE LEGAL SYSTEM II": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "INTERNATIONAL TRADE LAW": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "INTERNATIONAL TRADE AND INVESTMENT LAW": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "INTERNATIONAL AND COMPARATIVE TAXATION": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "INTELLECTUAL PROPERTY LAW": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Gender Law and Women’s Rights": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Fundamental Rights in Europe": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "EUROPEAN AND INTERNATIONAL ADVANCED IP LAW": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Dispute Resolution in a Globalised World": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Competition Law and Practice": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "CIVIL LIBERTIES AND HUMAN RIGHT": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "CITIZENSHIP AND MIGRATION LAW": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "ADVANCED CONSTITUTIONAL LAW - TRANSNATIONAL CONSTITUTIONAL LAW AND GOVERNMENT POLICIES": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "ADVANCED CONSTITUTIONAL LAW - CONSTITUTIONAL JUSTICE": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "ADVANCED COMPANIES AND BUSINESS LAW - ANTITRUST LAW": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "MERGERS AND ACQUISITIONS": "Law of Mergers & Acquisitions"
                    },
                    {
                        "Introduction to Management Consulting": "MGMT (Entre'ship Track) Elec"
                    },
                    {
                        "MANAGEMENT OF FASHION COMPANIES": "Strategic Mgmt Major Elective"
                    },
                    {
                        "INTERNATIONAL TRADE LAW": "WTO: Law and Policy"
                    }
                ]
            },
            {
                "school": "Libera Università Internazionale degli Studi Sociali Guido Carli",
                "courses": [
                    {
                        "Machine Learning": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Emerging Technologies: Ai, Machine Learning, Blockchain, Iot, 5g": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Digital Transformation & Emerging Technologies": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Data Visualization": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Customer Intelligence and Big Data": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Big Data and Smart Data Analytics": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Artificial Intelligence and Machine Learning": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Valuation And Accounting In M&A Transactions": "Acct Options / Acct Elective"
                    },
                    {
                        "Cybercrime And Fraud Detection": "Acct Options / Acct Elective"
                    },
                    {
                        "Economic Development And Business In China": "Asia Studies"
                    },
                    {
                        "Chinese Studies": "Asia Studies"
                    },
                    {
                        "Asian Studies": "Asian Studies"
                    },
                    {
                        "Tourism Management": "Business Elective"
                    },
                    {
                        "RETAIL AND SERVICE EXPERIENCE MARKETING": "Business Elective"
                    },
                    {
                        "CUSTOMER INTELLIGENCE AND BIG DATA": "Business Elective"
                    },
                    {
                        "political economy of development": "Business Option"
                    },
                    {
                        "Valuation And Accounting In M&A Transactions": "Business Option"
                    },
                    {
                        "Principles of Civil Law": "Business Option"
                    },
                    {
                        "Organizing Innovation": "Business Option"
                    },
                    {
                        "Operations Management": "Business Option"
                    },
                    {
                        "NeuroMarketing": "Business Option"
                    },
                    {
                        "Markets, Regulations & Law": "Business Option"
                    },
                    {
                        "MONETARY POLICY, ECONOMIC GROWTH AND INTERNATIONAL AFFAIRS": "Business Option"
                    },
                    {
                        "METHODS OF SOCIAL RESEARCH": "Business Option"
                    },
                    {
                        "MERGERS AND ACQUISITIONS": "Business Option"
                    },
                    {
                        "INTELLECTUAL PROPERTY RIGHTS": "Business Option"
                    },
                    {
                        "Global organization design": "Business Option"
                    },
                    {
                        "Financial Reporting and Performance Measurement": "Business Option"
                    },
                    {
                        "Fashion Management": "Business Option"
                    },
                    {
                        "Economics and Management of Energy Business": "Business Option"
                    },
                    {
                        "Digital Marketing": "Business Option"
                    },
                    {
                        "Consumer behavior": "Business Option"
                    },
                    {
                        "CREATIVE INDUSTRIES AND BUSINESS MODEL INNOVATION": "Business Option"
                    },
                    {
                        "Asset Management": "Business Option"
                    },
                    {
                        "Advanced organization design": "Business Option"
                    },
                    {
                        "Management of Technology": "Capabilities - Managing"
                    },
                    {
                        "Digital and Organizatinal Innovation": "Capabilities - Managing"
                    },
                    {
                        "Digital Business and Workplace Technology": "Capabilities - Managing"
                    },
                    {
                        "The Politics of Cultural Heritage in Europe": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Social And Economic Development Of The Mediterranean Countries": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Japan In International Affairs": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "History And Culture Of Mediterranean Countries": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Demography, Society and Policy in Europe": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Demography And Social Challenges": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "African Politics And Society": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "The Politics of Cultural Heritage in Europe": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Social And Economic Development Of The Mediterranean Countries": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Japan In International Affairs": "Comm - Cultures of the Mod W"
                    },
                    {
                        "History And Culture Of Mediterranean Countries": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Demography, Society and Policy in Europe": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Demography And Social Challenges": "Comm - Cultures of the Mod W"
                    },
                    {
                        "African Politics And Society": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Space Tech For Life Sciences & Climate Change": "Comm - Technology & Society"
                    },
                    {
                        "Smart Cities": "Comm - Technology & Society"
                    },
                    {
                        "Population Environment And Sustainability": "Comm - Technology & Society"
                    },
                    {
                        "Legal Tech & Ai Law": "Comm - Technology & Society"
                    },
                    {
                        "Earth Science, Sustainable Development And Climate Change Impacts": "Comm - Technology & Society"
                    },
                    {
                        "Digital and Organizational Innovation": "Comm - Technology & Society"
                    },
                    {
                        "Climate: Neutral and Smart Cities": "Comm - Technology & Society"
                    },
                    {
                        "Climate - Neutral & Smart Cities": "Comm - Technology & Society"
                    },
                    {
                        "Japan In International Affairs": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "Chinese Studies": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "Asian Culture And Politics": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "Space Tech For Life Sciences & Climate Change": "Communities – Tech and Society"
                    },
                    {
                        "Smart Cities": "Communities – Tech and Society"
                    },
                    {
                        "Population Environment And Sustainability": "Communities – Tech and Society"
                    },
                    {
                        "Legal Tech & Ai Law": "Communities – Tech and Society"
                    },
                    {
                        "Earth Science, Sustainable Development And Climate Change Impacts": "Communities – Tech and Society"
                    },
                    {
                        "Digital and Organizational Innovation": "Communities – Tech and Society"
                    },
                    {
                        "Climate: Neutral and Smart Cities": "Communities – Tech and Society"
                    },
                    {
                        "Climate - Neutral & Smart Cities": "Communities – Tech and Society"
                    },
                    {
                        "Global Justice": "Conflict & Justice in Intl Rel"
                    },
                    {
                        "The Economics Of Europe": "Economics Major Elective"
                    },
                    {
                        "Real Estate Finance": "Economics Major Elective"
                    },
                    {
                        "Markets and Strategies": "Economics Major Elective"
                    },
                    {
                        "Internet And Network Economics": "Economics Major Elective"
                    },
                    {
                        "European Economics (M110)": "Economics Major Elective"
                    },
                    {
                        "Entrepreneurship and Venture Capital": "Entrepreneurship Cluster"
                    },
                    {
                        "ENTREPREUNERSHIP AND Venture Capital": "Entrepreneurship Cluster"
                    },
                    {
                        "Structured finance": "FNCE + QF"
                    },
                    {
                        "Risk Management And Compliance": "FNCE + QF"
                    },
                    {
                        "Risk Management": "FNCE + QF"
                    },
                    {
                        "Structured Finance": "Finance Major Elective"
                    },
                    {
                        "Securities and Derivatives (Future and Swaps)": "Finance Major Elective"
                    },
                    {
                        "Risk Management And Compliance": "Finance Major Elective"
                    },
                    {
                        "Risk Management": "Finance Major Elective"
                    },
                    {
                        "Real Estate Finance": "Finance Major Elective"
                    },
                    {
                        "Mathematical Finance": "Finance Major Elective"
                    },
                    {
                        "M&A and Investment Banking": "Finance Major Elective"
                    },
                    {
                        "M&A Investment Banking": "Finance Major Elective"
                    },
                    {
                        "M&A And Investment Banking": "Finance Major Elective"
                    },
                    {
                        "Green and sustainable finance": "Finance Major Elective"
                    },
                    {
                        "Green and Sustainable Finance": "Finance Major Elective"
                    },
                    {
                        "Financial and Credit Derivatives": "Finance Major Elective"
                    },
                    {
                        "FINANCIAL ECONOMICS (MARKETS, INTERMEDIARIES, REGULATION)": "Finance Major Elective"
                    },
                    {
                        "Digital Finance": "Finance Major Elective"
                    },
                    {
                        "Corporate and Investment Banking": "Finance Major Elective"
                    },
                    {
                        "Corporate Finance": "Finance Major Elective"
                    },
                    {
                        "Capital Markets": "Finance Major Elective"
                    },
                    {
                        "Asset Management": "Finance Major Elective"
                    },
                    {
                        "Advanced Corporate Finance": "Finance Major Elective"
                    },
                    {
                        "ASSET PRINCING AND COMMODITIES": "Finance Major Elective"
                    },
                    {
                        "Neuromarketing": "Free Electives (For LKCSB)"
                    },
                    {
                        "THEORY, METHODOLOGY AND NEGOTIATION TECHNIQUE": "Free Electives (SCIS only)"
                    },
                    {
                        "Gender Politics": "Free Electives (SCIS only)"
                    },
                    {
                        "Demography And Social Challenges": "Free Electives (SCIS only)"
                    },
                    {
                        "BIOETHICS": "Free Electives (SCIS only)"
                    },
                    {
                        "Managerial Decision Making": "Free Electives (SOA only)"
                    },
                    {
                        "International Economics": "Free Electives (SOA only)"
                    },
                    {
                        "Demography And Social Challenges": "Free Electives (SOA only)"
                    },
                    {
                        "Capital Markets": "GRS + FNCE"
                    },
                    {
                        "history of political institutions": "General Education - Arts"
                    },
                    {
                        "MEDITERRANEAN STUDIES": "General Education - Arts"
                    },
                    {
                        "International Relations": "General Education - Arts"
                    },
                    {
                        "Asian Studies": "General Education - Arts"
                    },
                    {
                        "Introduction to the Economics of EU Integration": "Global and Regional Studies"
                    },
                    {
                        "International trade and commercial policies": "Global and Regional Studies"
                    },
                    {
                        "International Business": "Global and Regional Studies"
                    },
                    {
                        "HISTORY AND THEORY OF EUROPEAN UNION AND REGIONAL INTEGRATIONS -": "Global and Regional Studies"
                    },
                    {
                        "Global Economic Challenge": "Global and Regional Studies"
                    },
                    {
                        "Competition and High Tech Markets": "Global and Regional Studies"
                    },
                    {
                        "Asian Studies": "Global and Regional Studies"
                    },
                    {
                        "POLITICAL ECONOMY OF GLOBALIZATION (CodeGLOBAL MANAGEMENT AND POLITICS [LM19GMP])": "Globalisation"
                    },
                    {
                        "POLITICAL ECONOMY OF GLOBALIZATION (Code GLOBAL MANAGEMENT AND POLITICS [LM19GMP])": "Globalisation"
                    },
                    {
                        "Monetary Policy, Economic Growth and International Affairs": "Globalisation"
                    },
                    {
                        "MONETARY POLICY, ECONOMIC GROWTH AND INTERNATIONAL AFFAIRS": "Globalisation"
                    },
                    {
                        "International trade and commercial policies": "Globalisation"
                    },
                    {
                        "International Trade and Commercial Policies": "Globalisation"
                    },
                    {
                        "International Public Policies": "Globalisation"
                    },
                    {
                        "International Organization and Human Rights": "Globalisation"
                    },
                    {
                        "International Business": "Globalisation"
                    },
                    {
                        "INTERNATIONAL INSTITUTIONS AND GLOBAL GOVERNANCE (CodeGLOBAL MANAGEMENT AND POLITICS [LM19GMP])": "Globalisation"
                    },
                    {
                        "INTERNATIONAL INSTITUTIONS AND GLOBAL GOVERNANCE (Code GLOBAL MANAGEMENT AND POLITICS [LM19GMP])": "Globalisation"
                    },
                    {
                        "Global Trade": "Globalisation"
                    },
                    {
                        "Compliance and Internal Auditing": "Internal Audit"
                    },
                    {
                        "INTERNATIONAL ECONOMICS AND INDUSTRIAL DYNAMICS": "International Economics A"
                    },
                    {
                        "INTERNATIONAL ARBITRATION: LAW AND PRACTICE (CodeGIURISPRUDENZA [LM3GS])": "Intl Commercial Arbitration"
                    },
                    {
                        "INTERNATIONAL ARBITRATION: LAW AND PRACTICE (Code GIURISPRUDENZA [LM3GS])": "Intl Commercial Arbitration"
                    },
                    {
                        "European political systems: historical approach": "Intro to European Union Pols"
                    },
                    {
                        "Roman Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "REGULATORY INNOVATION (CodeLAW, DIGITAL INNOVATION AND SUSTAINABILITY [LM20LDS])": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Public Comparative Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "New Technologies And Labour Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "NEW TECHNOLOGIES AND LABOUR LAW (Giurisprudenza GPLI06)": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Media Law (CodeGIURISPRUDENZA [LM3GS])": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Legal Issues in Marketing": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Legal Informatics": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "International Protection of Cultural Heritage": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "International Organisation and Human Rights": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "European Taxation": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "European Private Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "European Criminal Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "European Business Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "EUROPEAN PRIVATE LAW (Code Giurisprudenza AD4)": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "EUROPEAN LABOUR LAW": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "EU Internal Market": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Diplomacy & Negotiation": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "DATA PROTECTION LAW (CodeLAW, DIGITAL INNOVATION AND SUSTAINABILITY [LM20LDS])": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Competition and high-tech markets": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Competition and Innovation Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Competition and High-Tech Markets": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Comparative Corporate Governance": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "CYBERSECURITY & CYBERCRIMES (CodeLAW, DIGITAL INNOVATION AND SUSTAINABILITY [LM20LDS])": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "CYBERSECURITY & CYBERCRIMES (Code LAW, DIGITAL INNOVATION AND SUSTAINABILITY [LM20LDS])": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Web Analytics & Marketing": "Marketing Major Elective"
                    },
                    {
                        "Trade and Retail marketing": "Marketing Major Elective"
                    },
                    {
                        "Services Marketing": "Marketing Major Elective"
                    },
                    {
                        "Product & Brand Management": "Marketing Major Elective"
                    },
                    {
                        "Marketing Metrics": "Marketing Major Elective"
                    },
                    {
                        "Marketing Communication & New Media": "Marketing Major Elective"
                    },
                    {
                        "International Marketing": "Marketing Major Elective"
                    },
                    {
                        "Fashion Management": "Marketing Major Elective"
                    },
                    {
                        "Digital Marketing": "Marketing Major Elective"
                    },
                    {
                        "CUSTOMER INTELLIGENCE AND BIG DATA": "Marketing Major Elective"
                    },
                    {
                        "Political Philosophy (in English)": "Political Philosophy"
                    },
                    {
                        "POLITICAL PHILOSOPHY": "Political Philosophy"
                    },
                    {
                        "Sustainable Development": "Political Science Major"
                    },
                    {
                        "Social Choice": "Political Science Major"
                    },
                    {
                        "History of international relations": "Political Science Major"
                    },
                    {
                        "History of Globalization": "Political Science Major"
                    },
                    {
                        "History of Globalisation": "Political Science Major"
                    },
                    {
                        "Democracy in Europe and beyond": "Political Science Major"
                    },
                    {
                        "International Law": "Public International Law"
                    },
                    {
                        "Public economics": "Public Sector Economics"
                    },
                    {
                        "Mathematics 2": "Quantitative Finance Elective"
                    },
                    {
                        "SUSTAINABLE DEVELOPMENT": "SSMR (Social Science)"
                    },
                    {
                        "PSYCHOLOGY AND ECONOMICS": "SSMR (Social Science)"
                    },
                    {
                        "POLITICAL PHILOSOPHY": "SSMR (Social Science)"
                    },
                    {
                        "Comparative Politics": "SSMR (Social Science)"
                    },
                    {
                        "Behavioural Psychology and Economics": "SSMR (Social Science)"
                    },
                    {
                        "Entrepreunership and Venture Capital": "Strategic Mgmt Major Elective"
                    },
                    {
                        "Economics and Management of Business Innovation": "Strategic Mgmt Major Elective"
                    },
                    {
                        "Management Innovation": "Technology & Entrepreneurship"
                    },
                    {
                        "Information Systems": "Technology & Entrepreneurship"
                    },
                    {
                        "Entrepreneurship, innovation and technology": "Technology & Entrepreneurship"
                    },
                    {
                        "Economics and Management of Innovation": "Technology & Entrepreneurship"
                    },
                    {
                        "ENTREPRENEURSHIP, INNOVATION AND TECHNOLOGY": "Technology & Entrepreneurship"
                    },
                    {
                        "ENTREPRENEURSHIP & INNOVATION TECHNOLOGY": "Technology & Entrepreneurship"
                    },
                    {
                        "Advanced organizational design": "Technology & Entrepreneurship"
                    },
                    {
                        "Digital and Organizational Innovation": "Technology Studies"
                    },
                    {
                        "Management Innovation": "Technology and Entrepreneursh"
                    },
                    {
                        "Information Systems": "Technology and Entrepreneursh"
                    },
                    {
                        "Entrepreneurship, innovation and technology": "Technology and Entrepreneursh"
                    },
                    {
                        "Economics and Management of Innovation": "Technology and Entrepreneursh"
                    },
                    {
                        "ENTREPRENEURSHIP, INNOVATION AND TECHNOLOGY": "Technology and Entrepreneursh"
                    },
                    {
                        "ENTREPRENEURSHIP & INNOVATION TECHNOLOGY": "Technology and Entrepreneursh"
                    },
                    {
                        "Advanced organizational design": "Technology and Entrepreneursh"
                    },
                    {
                        "Management Innovation": "Technology and Entrepreneurshi"
                    },
                    {
                        "Information Systems": "Technology and Entrepreneurshi"
                    },
                    {
                        "Entrepreneurship, innovation and technology": "Technology and Entrepreneurshi"
                    },
                    {
                        "Economics and Management of Innovation": "Technology and Entrepreneurshi"
                    },
                    {
                        "ENTREPRENEURSHIP, INNOVATION AND TECHNOLOGY": "Technology and Entrepreneurshi"
                    },
                    {
                        "ENTREPRENEURSHIP & INNOVATION TECHNOLOGY": "Technology and Entrepreneurshi"
                    },
                    {
                        "Advanced organizational design": "Technology and Entrepreneurshi"
                    }
                ]
            },
            {
                "school": "Universita degli Studi Di Milano",
                "courses": [
                    {
                        "Sustainable Development": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Anglophone Cultures I": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Sustainable Development": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Anglophone Cultures I": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Online Game Design": "Free Electives (SCIS only)"
                    },
                    {
                        "Information Management": "Free Electives (SCIS only)"
                    },
                    {
                        "Algorithms for Massive Datasets": "Free Electives (SCIS only)"
                    }
                ]
            },
            {
                "school": "Università Carlo Cattaneo - LIUC",
                "courses": [
                    {
                        "Information Structure and Management": "AO (Data Analytics Track)"
                    },
                    {
                        "Tax Law": "Acct Options / Acct Elective"
                    },
                    {
                        "Data analytics and shop-floor management": "Acct Options / Acct Elective"
                    },
                    {
                        "Information Structure and Management": "Analytics Major Elective"
                    },
                    {
                        "Emotional Intelligence and Business (Digital Innovation: Models and Tools)": "Analytics Major Elective"
                    },
                    {
                        "Social Entrepreneurship and Innovation": "Business Option"
                    },
                    {
                        "Quantitative Methods for Economics, Finance and Management": "Business Option"
                    },
                    {
                        "Management Information Systems": "Business Option"
                    },
                    {
                        "International Financial Markets": "Business Option"
                    },
                    {
                        "Financial Investment and Pricing": "Business Option"
                    },
                    {
                        "Tax Law": "Business-Oriented Elective"
                    },
                    {
                        "Business Logistics & Supply Chain Management": "Business-Oriented Elective"
                    },
                    {
                        "Understanding Italy (L. Pes)": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Italian Level 1": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Understanding Italy (L. Pes)": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Italian Level 1": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Organizing Digital Change": "Digital Business Electives – A"
                    },
                    {
                        "The Economics and Law of European Union": "Economics Major Elective"
                    },
                    {
                        "Comparative Economics": "Economics Major Elective"
                    },
                    {
                        "Social Entrepreneurship and Innovation": "Entrepreneurship Cluster"
                    },
                    {
                        "Entrepreneurship by design": "Entrepreneurship Cluster"
                    },
                    {
                        "Entrepreneurial and Growth Finance": "Entrepreneurship Cluster"
                    },
                    {
                        "Creativity for Entrepreneurs": "Entrepreneurship Cluster"
                    },
                    {
                        "Financial Mathematics": "Finance"
                    },
                    {
                        "International financial and foreign exchange markets": "Finance Major Elective"
                    },
                    {
                        "Financial Modelling and Management": "Finance Major Elective"
                    },
                    {
                        "Financial Mathematics": "Finance Major Elective"
                    },
                    {
                        "Entrepreneurial and Growth Finance": "Finance Major Elective"
                    },
                    {
                        "Distress debt: investment and management in the insolvency zone": "Finance Major Elective"
                    },
                    {
                        "Corporate Finance": "Finance Major Elective"
                    },
                    {
                        "Asset Management": "Finance Major Elective"
                    },
                    {
                        "A83152 Corporate Finance": "Finance Major Elective"
                    },
                    {
                        "Corporate Governance": "Free Electives (For SOE only)"
                    },
                    {
                        "Strategic Issues of Made in Italy - 2": "GRS + OPIM"
                    },
                    {
                        "Understanding Italy": "General Education - Arts"
                    },
                    {
                        "Italian society": "General Education - Arts"
                    },
                    {
                        "Introduction to Italian Law": "General Education - Arts"
                    },
                    {
                        "Introduction to Ecological Economics": "General Education - Arts"
                    },
                    {
                        "Intercultural Competences": "General Education - Arts"
                    },
                    {
                        "Heritage & Competition": "General Education - Arts"
                    },
                    {
                        "Economics and the city - How to use financial and economic analysis to shape cities": "General Education - Arts"
                    },
                    {
                        "Comparative Economics": "General Education - Arts"
                    },
                    {
                        "international business economies": "Global and Regional Studies"
                    },
                    {
                        "international business economics": "Global and Regional Studies"
                    },
                    {
                        "The economics and law of international trade": "Global and Regional Studies"
                    },
                    {
                        "The Italian Way of Doing Business": "Global and Regional Studies"
                    },
                    {
                        "The Economics & Law of International Trade": "Global and Regional Studies"
                    },
                    {
                        "Public Economics and Economic History": "Global and Regional Studies"
                    },
                    {
                        "Managing Project & Multi-cultural Organizations": "Global and Regional Studies"
                    },
                    {
                        "International Strategy & Multinational Corporation": "Global and Regional Studies"
                    },
                    {
                        "India in the World Economy": "Global and Regional Studies"
                    },
                    {
                        "Human Resources & Project Management in Multicultural Context": "Global and Regional Studies"
                    },
                    {
                        "Global Markets and Economic Policies (Part 1)": "Global and Regional Studies"
                    },
                    {
                        "A91030 - Cosmetic Industry World": "Global and Regional Studies"
                    },
                    {
                        "International Strategy & Multinational Corporation": "Globalisation"
                    },
                    {
                        "International Business Economics": "Globalisation"
                    },
                    {
                        "Innovation and competition in the global market": "Globalisation"
                    },
                    {
                        "Global Markets and Economic Policies (Topics in the Global Market module)": "Globalisation"
                    },
                    {
                        "Global Markets and Economic Policies (Part 1)": "Globalisation"
                    },
                    {
                        "Global Markets and Economic Policies (International Monetary Economics module Part 2)": "Globalisation"
                    },
                    {
                        "International business law": "Law Major Elective"
                    },
                    {
                        "White collar crimes": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "The economics and law of international trade": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Merger and Acquisition Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Legal Issues in Entrepreneurship and Innovation": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Law for Engineering": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "International Tax Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "International Business Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Global Litigation": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "European Union Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Clinic in Governance & Corporate Law (International Business La)": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Arbitration Law (domestic and international)": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Arbitration Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "International Marketing": "Marketing Major Elective"
                    },
                    {
                        "From Storytelling to Storybranding": "Marketing Major Elective"
                    },
                    {
                        "Design Management": "Marketing Major Elective"
                    },
                    {
                        "I90086 - Global Markets and Economic Policies (International Monetary Economics module)": "Monetary Economics"
                    },
                    {
                        "Modelling and Simulation - English Version": "Operations Mgmt Major Elective"
                    },
                    {
                        "Decision Management": "Operations Mgmt Major Elective"
                    },
                    {
                        "Intercultural Competences": "Org Behaviour & HR Major Elec"
                    },
                    {
                        "Human Resource & Project Management in Multicultural Context": "Org Behaviour & HR Major Elec"
                    },
                    {
                        "Public Economics and Economic History": "Public Sector Economics"
                    },
                    {
                        "Strategic Management Accounting": "Strategic Mgmt Accounting"
                    },
                    {
                        "eBusiness: Methodology and Technology": "Technology & Entrepreneurship"
                    },
                    {
                        "Managing R&D and Innovation": "Technology & Entrepreneurship"
                    },
                    {
                        "Management Information Systems": "Technology & Entrepreneurship"
                    },
                    {
                        "Information Structure and Management": "Technology & Entrepreneurship"
                    },
                    {
                        "Global corporate Entrepreneurship": "Technology & Entrepreneurship"
                    },
                    {
                        "Innovation Management and New Product Development": "Technology Studies"
                    },
                    {
                        "Innovation Management": "Technology Studies"
                    },
                    {
                        "eBusiness: Methodology and Technology": "Technology and Entrepreneursh"
                    },
                    {
                        "Managing R&D and Innovation": "Technology and Entrepreneursh"
                    },
                    {
                        "Management Information Systems": "Technology and Entrepreneursh"
                    },
                    {
                        "Information Structure and Management": "Technology and Entrepreneursh"
                    },
                    {
                        "Global corporate Entrepreneurship": "Technology and Entrepreneursh"
                    },
                    {
                        "eBusiness: Methodology and Technology": "Technology and Entrepreneurshi"
                    },
                    {
                        "Managing R&D and Innovation": "Technology and Entrepreneurshi"
                    },
                    {
                        "Management Information Systems": "Technology and Entrepreneurshi"
                    },
                    {
                        "Information Structure and Management": "Technology and Entrepreneurshi"
                    },
                    {
                        "Global corporate Entrepreneurship": "Technology and Entrepreneurshi"
                    }
                ]
            }
        ],
            "japan": [
            {
                "school": "Chuo University",
                "courses": [
                    {
                        "Japanese Economic History": "Asian Studies"
                    },
                    {
                        "Gender Gap in Japan": "Asian Studies"
                    },
                    {
                        "Advertising and Marketing Communications": "Digital Business Electives – A"
                    },
                    {
                        "Gender Gap in Japan": "Econ Major Rel/Econ Options"
                    },
                    {
                        "Foreign Studies B": "Econ Major Rel/Econ Options"
                    },
                    {
                        "International Finance": "Finance Major Elective"
                    },
                    {
                        "Judaism, The Origin of Western Religions,": "General Education - Arts"
                    },
                    {
                        "Advanced Studies 2": "General Education - Arts"
                    },
                    {
                        "Individual Differences": "General Education - Science"
                    },
                    {
                        "Unspecified Lecture of Business Economy Cluster": "Global and Regional Studies"
                    },
                    {
                        "The Global Environment: Institutions, Policy and Law": "Global and Regional Studies"
                    },
                    {
                        "Economics Seminar I": "Global and Regional Studies"
                    },
                    {
                        "Economic Analysis II": "Global and Regional Studies"
                    },
                    {
                        "The Environment and Society": "Globalisation"
                    },
                    {
                        "Multiculturalism in a Global SocietyⅠ": "Globalisation"
                    },
                    {
                        "Lecture (Global Media Industries)": "Globalisation"
                    },
                    {
                        "Global Tutorial": "Globalisation"
                    },
                    {
                        "Environment and Development": "IAS/GA Maj-PEL"
                    },
                    {
                        "Civil Society and Democratic Governance": "IAS/GA Maj-PEL"
                    },
                    {
                        "Applied Statistics": "Quantitative Finance Elective"
                    },
                    {
                        "Introduction to Japanese Studies 1": "SSMR (Social Science)"
                    }
                ]
            },
            {
                "school": "Doshisha University",
                "courses": [
                    {
                        "Comparative Studies of International Media (Understanding Contemporary Journalism)": "Corp Comm Major Elective"
                    }
                ]
            },
            {
                "school": "Graduate School of Economics and Faculty of Economics, Kyoto University",
                "courses": [
                    {
                        "Japanese Economic History": "Economics Major Elective"
                    }
                ]
            },
            {
                "school": "Hitotsubashi University",
                "courses": [
                    {
                        "Japanese Culture B": "Asia Studies"
                    },
                    {
                        "Japanese Business B": "Asia Studies"
                    },
                    {
                        "Japanese Management B": "Asian Studies"
                    },
                    {
                        "Japanese Business B": "Asian Studies"
                    },
                    {
                        "Special Topics in Social Sciences D": "Business Option"
                    },
                    {
                        "Selected Topics in Economics D": "Business Option"
                    },
                    {
                        "Japanese Business A": "Business Option"
                    },
                    {
                        "Intermediate Macroeconomics": "Business Option"
                    },
                    {
                        "Intermediate Course in Management": "Business Option"
                    },
                    {
                        "Interactive Course on Business Basics(Management)": "Business Option"
                    },
                    {
                        "Advanced Microeconomics": "Business Option"
                    },
                    {
                        "Basic Japanese I": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Basic Japanese 2": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Basic Japanese I": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Basic Japanese 2": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Japanese Business Culture": "Corp Comm Major Elective"
                    },
                    {
                        "Special Topics on Management C": "Economics Major Elective"
                    },
                    {
                        "Methods of area studies": "Economics Major Elective"
                    },
                    {
                        "Economics Mechanism I": "Economics Major Elective"
                    },
                    {
                        "Special Topics on Management H": "Finance Major Elective"
                    },
                    {
                        "Special Topics on Management C": "Finance Major Elective"
                    },
                    {
                        "Special Lecture(HGP) [Special Lectures]": "Finance Major Elective"
                    },
                    {
                        "Contemporary Economy 2D (商工中金寄附講義)": "Finance Major Elective"
                    },
                    {
                        "Basic Seminar B": "Finance Major Elective"
                    },
                    {
                        "Asset Management (投資信託協会・投資顧問業協会寄附講義)": "Finance Major Elective"
                    },
                    {
                        "Special Topics in Social Sciences D": "GEA + CORC"
                    },
                    {
                        "Japanese Business Culture": "GEA + CORC"
                    },
                    {
                        "Seminar on Global Issues I": "Gen Educatn (>=2015 Intake)"
                    },
                    {
                        "Selected Topics in Economics D (HGP) (Language and Economy)": "General Education - Arts"
                    },
                    {
                        "Introduction to global leadership": "General Education - Arts"
                    },
                    {
                        "History of Modern Japan": "General Education - Arts"
                    },
                    {
                        "World Affairs E": "Global and Regional Studies"
                    },
                    {
                        "Special Topics in Social Sciences 8:International Relations: Current Affairs": "Global and Regional Studies"
                    },
                    {
                        "Special Topics in Commerce and Management Ⅰ": "Global and Regional Studies"
                    },
                    {
                        "Japanese Management B": "Global and Regional Studies"
                    },
                    {
                        "Japanese Culture B": "Global and Regional Studies"
                    },
                    {
                        "Japanese Corporate Management 2(HGP)(Real Management through Case Studies)": "Global and Regional Studies"
                    },
                    {
                        "Japanese Business B": "Global and Regional Studies"
                    },
                    {
                        "International Business": "Global and Regional Studies"
                    },
                    {
                        "Comparison of U.S. and Japanese Automobile Industry": "Global and Regional Studies"
                    },
                    {
                        "Topics in Social Sciences I": "Globalisation"
                    },
                    {
                        "Seminar on Global Issues I": "Globalisation"
                    },
                    {
                        "Global Business": "Globalisation"
                    },
                    {
                        "Labor Economics": "Labour Economics"
                    },
                    {
                        "World Affairs E": "Strategic Mgmt Major Elective"
                    },
                    {
                        "Japanese Management B": "Strategic Mgmt Major Elective"
                    },
                    {
                        "Japanese Management A": "Strategic Mgmt Major Elective"
                    },
                    {
                        "Japanese Culture B": "Strategic Mgmt Major Elective"
                    },
                    {
                        "Japanese Business A": "Strategic Mgmt Major Elective"
                    },
                    {
                        "Innovation Management": "Strategic Mgmt Major Elective"
                    },
                    {
                        "Design Thinking and Management by Design": "Strategic Mgmt Major Elective"
                    },
                    {
                        "Advanced Course in Management": "Strategic Mgmt Major Elective"
                    },
                    {
                        "Japanese Business B": "Technology & Entrepreneurship"
                    },
                    {
                        "Japanese Business A": "Technology & Entrepreneurship"
                    },
                    {
                        "International Comparison in Innovation": "Technology & Entrepreneurship"
                    },
                    {
                        "Global Business": "Technology & Entrepreneurship"
                    },
                    {
                        "Entrepreneurship study (起業家論)": "Technology & Entrepreneurship"
                    },
                    {
                        "Applied Information Technology (Different Instructor)": "Technology & Entrepreneurship"
                    },
                    {
                        "Japanese Business B": "Technology and Entrepreneursh"
                    },
                    {
                        "Japanese Business A": "Technology and Entrepreneursh"
                    },
                    {
                        "International Comparison in Innovation": "Technology and Entrepreneursh"
                    },
                    {
                        "Global Business": "Technology and Entrepreneursh"
                    },
                    {
                        "Entrepreneurship study (起業家論)": "Technology and Entrepreneursh"
                    },
                    {
                        "Applied Information Technology (Different Instructor)": "Technology and Entrepreneursh"
                    },
                    {
                        "Japanese Business B": "Technology and Entrepreneurshi"
                    },
                    {
                        "Japanese Business A": "Technology and Entrepreneurshi"
                    },
                    {
                        "International Comparison in Innovation": "Technology and Entrepreneurshi"
                    },
                    {
                        "Global Business": "Technology and Entrepreneurshi"
                    },
                    {
                        "Entrepreneurship study (起業家論)": "Technology and Entrepreneurshi"
                    },
                    {
                        "Applied Information Technology (Different Instructor)": "Technology and Entrepreneurshi"
                    },
                    {
                        "Applied microeconomics B": "The Economics of Politics"
                    }
                ]
            },
            {
                "school": "Hitotsubashi University, Graduate School of Law, Business Law Department",
                "courses": [
                    {
                        "Introduction to Japanese Business Law": "Law Major Elective-LLB/JD only"
                    }
                ]
            },
            {
                "school": "Hokkaido University",
                "courses": [
                    {
                        "Introduction to Japanese Studies II (Culture)": "Asian Studies"
                    },
                    {
                        "Resources sustainability": "Globalisation"
                    },
                    {
                        "Countries and Cultures": "Globalisation"
                    }
                ]
            },
            {
                "school": "Kansai Gaidai University",
                "courses": [
                    {
                        "The Japanese Economy: Growth and Stagnation": "Analytics Major Elective"
                    },
                    {
                        "Monsters, Ghosts and the Making of Modern Japan": "Asia Studies"
                    },
                    {
                        "International History of East Asia (from the late 19th century to the late 20th century)": "Asia Studies"
                    },
                    {
                        "Geisha, Gangsters and Samurai: Japan in Western Film": "Asia Studies"
                    },
                    {
                        "Varieties of Capitalism in East Asia: Japan, South Korea, Taiwan, and China": "Asian Studies"
                    },
                    {
                        "The History and Culture of Japanese Martial Arts (Kendō / Jōdō)": "Asian Studies"
                    },
                    {
                        "Sexuality and Culture in Japan: Shifting Dimensions of Desire, Relationship and Society": "Asian Studies"
                    },
                    {
                        "Politics and Security Challenges in East Asia": "Asian Studies"
                    },
                    {
                        "Japan’s Search for Identity in the Wider World": "Asian Studies"
                    },
                    {
                        "International Relations of East Asia": "Asian Studies"
                    },
                    {
                        "International Relations of Asia": "Asian Studies"
                    },
                    {
                        "Intercultural Communication in Japan": "Asian Studies"
                    },
                    {
                        "Globalization, Culture & Identity in East Asia": "Asian Studies"
                    },
                    {
                        "Fashion in Japan: Art and History of the Kimono and Western Dress Culture": "Asian Studies"
                    },
                    {
                        "Culture, Power and Belonging in Japan: Anthropological Perspectives on the making of Minorities": "Asian Studies"
                    },
                    {
                        "Corporate Strategy in East Asia": "Asian Studies"
                    },
                    {
                        "International Entrepreneurship: Focus on Japan": "Business Option"
                    },
                    {
                        "International Capital Markets with Focus on Asia": "Business Option"
                    },
                    {
                        "Financial and Operational Auditing": "Business Option"
                    },
                    {
                        "Financial Statements Analysis": "Business Option"
                    },
                    {
                        "International Negotiation: Resolving Conflict and Closing the Deal": "Business-Oriented Elective"
                    },
                    {
                        "Entrepreneurship": "Business-Oriented Elective"
                    },
                    {
                        "Japanese 1": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Japanese 1": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Medicine and Health Care in East Asia": "Comm - Technology & Society"
                    },
                    {
                        "Medicine and Health Care in East Asia": "Communities – Tech and Society"
                    },
                    {
                        "Entrepreneurship": "Entrepreneurship Cluster"
                    },
                    {
                        "Japan and globalisation A": "Free Electives (For SOE only)"
                    },
                    {
                        "Monsters, Ghosts and the Making of Modern Japan": "General Education - Arts"
                    },
                    {
                        "Introduction to Japanese History": "General Education - Arts"
                    },
                    {
                        "Varieties of Capitalism in East Asia: Japan, South Korea, Taiwan, and China": "Global and Regional Studies"
                    },
                    {
                        "Japanese Management, Innovation and Education in the 21st-Century": "Global and Regional Studies"
                    },
                    {
                        "Japan and Globalization: A Cultural Approach": "Global and Regional Studies"
                    },
                    {
                        "International Relations of East Asia": "Global and Regional Studies"
                    },
                    {
                        "International Business Consulting": "Global and Regional Studies"
                    },
                    {
                        "Contemporary Japan and Globalizatoin: Home and Abroad": "Global and Regional Studies"
                    },
                    {
                        "International Relations of Asia": "Globalisation"
                    },
                    {
                        "International Business": "Globalisation"
                    },
                    {
                        "Globalization, Culture and Identity in East Asia A": "Globalisation"
                    },
                    {
                        "Global and Transnational Sociology": "Globalisation"
                    },
                    {
                        "Medicine and Health Care in East Asia": "Health Economics and Mgmt Elec"
                    },
                    {
                        "Grass-Roots Japan": "Political Science Major"
                    },
                    {
                        "Challenges in Modern Japanese History and Politics": "Political Science Major"
                    },
                    {
                        "Religion in Japan": "SSMR (Social Science)"
                    },
                    {
                        "Principles of Sociology: Focus on Japan": "SSMR (Social Science)"
                    },
                    {
                        "Pacific Rivalry": "SSMR (Social Science)"
                    },
                    {
                        "Japanese Popular Media & Culture": "SSMR (Social Science)"
                    },
                    {
                        "Japan-China: Problems in Historical and Cultural Interaction": "SSMR (Social Science)"
                    },
                    {
                        "Japanese Management, Innovation and Education in the 21st-Century": "Strategic Mgmt Major Elective"
                    },
                    {
                        "Entrepreneurship in Japan: Focus on Japan": "Technology & Entrepreneurship"
                    },
                    {
                        "Entrepreneurship in Japan: Focus on Japan": "Technology and Entrepreneursh"
                    },
                    {
                        "Entrepreneurship in Japan: Focus on Japan": "Technology and Entrepreneurshi"
                    }
                ]
            },
            {
                "school": "Keio University",
                "courses": [
                    {
                        "International Taxation": "AO (Taxation Track)"
                    },
                    {
                        "DOMESTIC TAX LAW(COMPARATIVE STUDIES ON TAX SYSTEMS)": "AO (Taxation Track)"
                    },
                    {
                        "Microeconomics of Taxation": "Acct Options / Acct Elective"
                    },
                    {
                        "International Taxation": "Acct Options / Acct Elective"
                    },
                    {
                        "Financial Management and Corporate Governance": "Acct Options / Acct Elective"
                    },
                    {
                        "DOMESTIC TAX LAW(COMPARATIVE STUDIES ON TAX SYSTEMS)": "Acct Options / Acct Elective"
                    },
                    {
                        "CORPORATE FINANCE IN JAPAN": "Acct Options / Acct Elective"
                    },
                    {
                        "Advanced Finance": "Acct Options / Acct Elective"
                    },
                    {
                        "JAPANESE LINGUISTICS IN SOCIOCULTURAL CONTEXT": "Asia Studies"
                    },
                    {
                        "HUMAN ENGINEERING WITH FOCUS ON JAPAN": "Asia Studies"
                    },
                    {
                        "The Art of Japanese Garden in Cultural and Historical Contexts": "Asian Studies"
                    },
                    {
                        "Religions in Japan": "Asian Studies"
                    },
                    {
                        "OTAKU CULTURE IN JAPAN AND ITS TRANSNATIONAL RELATION": "Asian Studies"
                    },
                    {
                        "MINORITIES IN JAPANESE EDUCATION": "Asian Studies"
                    },
                    {
                        "Japanese Buddhism and Social Suffering": "Asian Studies"
                    },
                    {
                        "JAPANESE SOCIETY AND COMMUNICATION": "Asian Studies"
                    },
                    {
                        "Introduction to Japanese Cinema": "Asian Studies"
                    },
                    {
                        "Historical Memory in East and Southeast Asia": "Asian Studies"
                    },
                    {
                        "HUMAN TRAFFICKING IN SOUTHEAST ASIA : PAST AND PRESENT": "Asian Studies"
                    },
                    {
                        "GENDER, CULTURE AND MODERNITY IN INTERWAR JAPAN": "Asian Studies"
                    },
                    {
                        "Buddhism and Social Change in Contemporary Asia": "Asian Studies"
                    },
                    {
                        "ARTS/ART WORKSHOP:DISCOVERING ARTS AND CULTURE IN JAPAN": "Asian Studies"
                    },
                    {
                        "Japanese Supply Chain Management": "Business Elective"
                    },
                    {
                        "Japanese Production Management Systems": "Business Elective"
                    },
                    {
                        "ENTREPRENEURSHIP AND SMALL BUSINESS DEVELOPMENT IN JAPAN": "Business Elective"
                    },
                    {
                        "DEEP CULTURE DIFFERENCE : UNDERSTANDING JAPAN THROUGH CROSS-CULTURAL COMPARISON": "Business Elective"
                    },
                    {
                        "Cultural Presuppositions in Japanese Communication": "Business Elective"
                    },
                    {
                        "Spatial Economics": "Business Option"
                    },
                    {
                        "Passport Members' Workshop D - Negotiation & Persuasion": "Business Option"
                    },
                    {
                        "Organizational Analysis and Management Theory": "Business Option"
                    },
                    {
                        "Microeconomics of Taxation": "Business Option"
                    },
                    {
                        "Marketing Data Analysis": "Business Option"
                    },
                    {
                        "Macroeconomic Aspects of Public Finance": "Business Option"
                    },
                    {
                        "LECTURE SERIES ON EUROPEAN AND ASIAN ECONOMICS": "Business Option"
                    },
                    {
                        "Japanese Supply Chain Management": "Business Option"
                    },
                    {
                        "JAPANESE COMPANY INTRODUCTION AND FACTORY VISITS": "Business Option"
                    },
                    {
                        "JAPANESE BUSINESS AND SOCIETY": "Business Option"
                    },
                    {
                        "International Management": "Business Option"
                    },
                    {
                        "HISTORY OF JAPANESE ECONOMY 2": "Business Option"
                    },
                    {
                        "HISTORY OF JAPANESE ECONOMY 1": "Business Option"
                    },
                    {
                        "EMPIRICAL ANALYSIS IN INTERNATIONAL MONETARY THEORY AND POLICY": "Business Option"
                    },
                    {
                        "Consumer psychology in global market": "Business Option"
                    },
                    {
                        "Competing in Emerging Asia": "Business Option"
                    },
                    {
                        "CASE ANALYSIS ON MANAGEMENT AND STRATEGY OF JAPANESE CORPORATIONS": "Business Option"
                    },
                    {
                        "BUSINESS AND STRATEGIC MANAGEMENT IN EAST AND SOUTH EAST ASIA": "Business Option"
                    },
                    {
                        "Asia-Japan Economic Relations": "Business Option"
                    },
                    {
                        "ARTISANRY IN JAPAN'S SMALL BUSINESSES": "Business Option"
                    },
                    {
                        "Topics in contemporary business 1 Introduction to venture business-\"Rivalry that connected the world": "Business-Oriented Elective"
                    },
                    {
                        "RESEARCH ON MARKETING": "Business-Oriented Elective"
                    },
                    {
                        "Japanese Supply Chain Management": "Business-Oriented Elective"
                    }
                ]
            },
            {
                "school": "Keio University (Law School)",
                "courses": [
                    {
                        "Intellectual Property from a Global Perspective": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "INTRODUCTION TO ARBITRATION": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "INTERNATIONAL LAW": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Global Intellectual Property Management": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Current Legal Issues in Japan": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Corporate Governance & Risk Management": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Comparative Corporate Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Comparative Constitutional Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "COMPARATIVE IP CASE LAW AND LITIGATION": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Asian Current Legal Issues": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "AREA STUDIES OF LAW(EU)": "Law Major Elective-LLB/JD only"
                    }
                ]
            },
            {
                "school": "Kwansei Gakuin University",
                "courses": [
                    {
                        "Innovation and Entrepreneurship": "Business Option"
                    },
                    {
                        "Development Economics": "Business-Oriented Elective"
                    },
                    {
                        "Innovation and Intrapreneurship": "Entrepreneurship Cluster"
                    },
                    {
                        "Innovation and Entrepreneurship": "Entrepreneurship Cluster"
                    },
                    {
                        "US-Japan Relations": "General Education - Arts"
                    },
                    {
                        "The Geography of Japan B": "General Education - Arts"
                    },
                    {
                        "Minorities in Japanese Society": "General Education - Arts"
                    },
                    {
                        "Japanese Cinema": "General Education - Arts"
                    },
                    {
                        "Japan's Foreign Relations": "General Education - Arts"
                    },
                    {
                        "Japan's Emigration Policy and Japanese Immigration": "General Education - Arts"
                    },
                    {
                        "JSC Traditional Japanese Theatre": "General Education - Arts"
                    },
                    {
                        "JSC The Geography of Japan B": "General Education - Arts"
                    },
                    {
                        "JSC Political Economy of Japan": "General Education - Arts"
                    },
                    {
                        "JSC Government and Politics in Japan A": "General Education - Arts"
                    },
                    {
                        "Intercultural Understanding": "General Education - Arts"
                    },
                    {
                        "Contemporary Japanese Society and Culture": "General Education - Arts"
                    },
                    {
                        "Changing Images of Women": "General Education - Arts"
                    },
                    {
                        "CKSC Japan in Globalizing World": "General Education - Arts"
                    },
                    {
                        "CCC Introduction to Multicultural Studies　１": "General Education - Arts"
                    },
                    {
                        "CCC Introduction to Multicultural Studies": "General Education - Arts"
                    },
                    {
                        "CCC Introduction to International Relations 1": "General Education - Arts"
                    },
                    {
                        "Asia Pacific Relations": "General Education - Arts"
                    },
                    {
                        "International Finance and Asia-Pacific": "Global and Regional Studies"
                    },
                    {
                        "International Conflict": "Global and Regional Studies"
                    },
                    {
                        "Business-Government Relations in East Asia": "Global and Regional Studies"
                    },
                    {
                        "Topics in International Politics A": "Globalisation"
                    },
                    {
                        "Global Governance": "Globalisation"
                    },
                    {
                        "民法総則 (General Part of the Civil Code)": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "基本演習１４ (kihon enshuu 14)": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "基本演習　８ (kihon enshuu 8)": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Human resource management in the USA": "SSMR (Econs/Acct/Business)"
                    },
                    {
                        "Human Resource Management in USA": "SSMR (Econs/Acct/Business)"
                    },
                    {
                        "The Japanese Legal System": "SSMR (Social Science)"
                    },
                    {
                        "Contemporary Korean Studies B": "SSMR (Social Science)"
                    },
                    {
                        "Japanese Society": "Sociology Major Elective"
                    },
                    {
                        "International Management": "Strategic Mgmt Major Elective"
                    }
                ]
            },
            {
                "school": "Kyushu University",
                "courses": [
                    {
                        "Japanese Academic Courses: JK-1+2/ Japanese: Kanji 1+2": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Japanese Academic Courses - JI-1/Japanese: Integrated 1": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Japanese Academic Courses: JK-1+2/ Japanese: Kanji 1+2": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Japanese Academic Courses - JI-1/Japanese: Integrated 1": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Advanced Environmental Economics": "Environmental Economics"
                    },
                    {
                        "Japanese Digital Culture and the Law": "Technology & Entrepreneurship"
                    },
                    {
                        "Japanese Digital Culture and the Law": "Technology and Entrepreneursh"
                    },
                    {
                        "Japanese Digital Culture and the Law": "Technology and Entrepreneurshi"
                    }
                ]
            },
            {
                "school": "Osaka University",
                "courses": [
                    {
                        "Multivariate Data Science": "Analytics Major Elective"
                    },
                    {
                        "Social Innovation and Social Design": "Strategic Mgmt Major Elective"
                    }
                ]
            },
            {
                "school": "Rikkyo University",
                "courses": [
                    {
                        "Sustainabiity": "Business Option"
                    },
                    {
                        "Multinational Enterprises and Strategy in Asia": "Business Option"
                    },
                    {
                        "Marketing Positioning Strategy": "Business Option"
                    },
                    {
                        "Global Innovation Management": "Business Option"
                    },
                    {
                        "Financial Statement Analysis": "Business Option"
                    },
                    {
                        "Creative Industries in Global Markets": "Business Option"
                    },
                    {
                        "Business and Society in Japan": "Business Option"
                    },
                    {
                        "Business Negotiation": "Business Option"
                    },
                    {
                        "Advanced Small Group Communication": "Business Option"
                    },
                    {
                        "International Human Resource Management": "Business-Oriented Elective"
                    },
                    {
                        "Business Project": "Business-Oriented Elective"
                    },
                    {
                        "Language and Culture - Critical Conjunctures of Culture and Technology": "Cap - Modes of Thinking"
                    },
                    {
                        "Japanese Relations in Asia 1 - Asia in Japanese Popular Culture": "Cap - Modes of Thinking"
                    },
                    {
                        "Japanese Language J4-3": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Japanese Language & Society A": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Japanese J4-2": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Japanese J4-1": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Japanese Language J4-3": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Japanese Language & Society A": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Japanese J4-2": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Japanese J4-1": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Seminar 1 (3rd year)": "Corp Comm Major Elective"
                    },
                    {
                        "Seminar 1 (2nd Year)": "Corp Comm Major Elective"
                    },
                    {
                        "Lecture & Discussion on Media and Communication A": "Corp Comm Major Elective"
                    },
                    {
                        "Language and Culture": "Corp Comm Major Elective"
                    },
                    {
                        "Communication between Cultures A": "Corp Comm Major Elective"
                    },
                    {
                        "Development Economics": "Development Economics"
                    },
                    {
                        "(Solution Approach B(development economics))": "Development Economics"
                    },
                    {
                        "Solution Approach F": "Econ Major Rel/Econ Options"
                    },
                    {
                        "Marketing Communications and Penetrating the Japanese Market": "Econ Major Rel/Econ Options"
                    },
                    {
                        "Introduction to Strategic Management": "Econ Major Rel/Econ Options"
                    },
                    {
                        "Introduction to Global Issues <Learning global issues from vulnerable groups' point of view>": "Econ Major Rel/Econ Options"
                    },
                    {
                        "Global Innovation Management": "Econ Major Rel/Econ Options"
                    },
                    {
                        "Business Negotiation": "Econ Major Rel/Econ Options"
                    },
                    {
                        "Japanese Economy": "Economics Major Elective"
                    },
                    {
                        "Agricultural Economics and Policy Analysis": "Economics Major Elective"
                    },
                    {
                        "Topics in Business 3 (Investments: Industry Practice and Management)": "Finance Major Elective"
                    },
                    {
                        "Introduction to Sports Finance": "Finance Major Elective"
                    },
                    {
                        "Capital Markets": "Finance Major Elective"
                    },
                    {
                        "Introduction to International Business": "GRS + MGMT"
                    },
                    {
                        "Skills for Interational Business": "GRS + MKTG"
                    },
                    {
                        "Modern Japanese History 1 <Introduction to Women's History in Modern Japan>": "General Education - Arts"
                    },
                    {
                        "Japanese Studies Through English": "General Education - Arts"
                    },
                    {
                        "Japanese Culture 2": "General Education - Arts"
                    },
                    {
                        "Japanese Culture 1 <Basic Japanese culture and concepts in the field of sociology>": "General Education - Arts"
                    },
                    {
                        "Topics in Business 4 <Managing Across Distinct Key Business Markets>": "Global and Regional Studies"
                    },
                    {
                        "Topics in Business 3 <International Business and Strategy>": "Global and Regional Studies"
                    },
                    {
                        "Managing International Assignments": "Global and Regional Studies"
                    },
                    {
                        "Managing Across Cultures": "Global and Regional Studies"
                    },
                    {
                        "Lecture & Discussion on Social Issues A": "Global and Regional Studies"
                    },
                    {
                        "Japanese and East Asian Business Environment": "Global and Regional Studies"
                    },
                    {
                        "Intercultural Business Management": "Global and Regional Studies"
                    },
                    {
                        "Topics in Business 3 <International Business and Strategy>": "Globalisation"
                    },
                    {
                        "Lecture & Discussion on Social Issues A": "Globalisation"
                    },
                    {
                        "Topics in Business 2": "Marketing Major Elective"
                    },
                    {
                        "Modern Consumer Culture and Society": "Marketing Major Elective"
                    },
                    {
                        "Marketing Positioning Strategy": "Marketing Major Elective"
                    },
                    {
                        "Marketing Communications and Penetrating the Japanese Market": "Marketing Major Elective"
                    },
                    {
                        "Cases in Marketing Strategy and Operations - Dissecting Design Marketing Management": "Marketing Major Elective"
                    },
                    {
                        "Language and Culture": "SSMR (Social Science)"
                    },
                    {
                        "Japanese Society 2": "SSMR (Social Science)"
                    },
                    {
                        "Japanese Society 1": "SSMR (Social Science)"
                    },
                    {
                        "Japan in Asia 1": "SSMR (Social Science)"
                    },
                    {
                        "Research Seminar 3rd Year (International Business)": "Strategic Mgmt Major Elective"
                    },
                    {
                        "Business and Society in Japan": "Strategic Mgmt Major Elective"
                    }
                ]
            },
            {
                "school": "Ritsumeikan Asia Pacific University",
                "courses": [
                    {
                        "Marketing data analysis EB": "Analytics Major Elective"
                    },
                    {
                        "NPO/NGO StudiesEA": "Asian Studies"
                    },
                    {
                        "Japanese culture and society EA": "Asian Studies"
                    },
                    {
                        "Asian EconomyEA": "Asian Studies"
                    },
                    {
                        "legal strategy in businessEB": "Business Option"
                    },
                    {
                        "The Business Tourism IndustryEA": "Business Option"
                    },
                    {
                        "Social TheoryEA": "Business Option"
                    },
                    {
                        "Resort Management": "Business Option"
                    },
                    {
                        "Japanese Economy": "Business Option"
                    },
                    {
                        "Introduction to Tourism and HospitalityEA": "Business Option"
                    },
                    {
                        "International Comparative ManagementEA": "Business Option"
                    },
                    {
                        "E-CommerceEA": "Business Option"
                    },
                    {
                        "Development EconomicsEA": "Business Option"
                    },
                    {
                        "Business Legal Strategy EA": "Business Option"
                    },
                    {
                        "Brand Management": "Business Option"
                    },
                    {
                        "Tourism and Hospitality LawEA": "Business-Oriented Elective"
                    },
                    {
                        "Production ManagementEA": "Business-Oriented Elective"
                    },
                    {
                        "Organizational ManagementEA": "Business-Oriented Elective"
                    },
                    {
                        "Organizational BehaviorEA": "Business-Oriented Elective"
                    },
                    {
                        "Negotiation SkillsEA": "Business-Oriented Elective"
                    },
                    {
                        "Marketing ResearchEA": "Business-Oriented Elective"
                    },
                    {
                        "Management of Human Resources and Organizational BehaviorEA": "Business-Oriented Elective"
                    },
                    {
                        "Management AccountingEA": "Business-Oriented Elective"
                    },
                    {
                        "Introduction to ManagementEB": "Business-Oriented Elective"
                    },
                    {
                        "Introduction to ManagementEA": "Business-Oriented Elective"
                    },
                    {
                        "Hospitality ManagementEA": "Business-Oriented Elective"
                    },
                    {
                        "Development Economics": "Business-Oriented Elective"
                    },
                    {
                        "Business Negotiation": "Business-Oriented Elective"
                    },
                    {
                        "Brand Management": "Business-Oriented Elective"
                    },
                    {
                        "Career Design II EA": "Career Skills"
                    },
                    {
                        "Cultural Studies": "Corp Comm Major Elective"
                    },
                    {
                        "Development EconomicsEA": "Development Economics"
                    },
                    {
                        "Business and Economy in the Asia PacificEA": "Econ Major Rel/Econ Options"
                    },
                    {
                        "Asia Pacific Economy EA": "Econ Major Rel/Econ Options"
                    },
                    {
                        "Tourism EconomicsSA": "Economics Major Elective"
                    },
                    {
                        "Japanese Economy": "Economics Major Elective"
                    },
                    {
                        "International Political Economy": "Economics Major Elective"
                    },
                    {
                        "Asian EconomyEA": "Economics Major Elective"
                    },
                    {
                        "Investment and Securities AnalysisEA": "Finance Major Elective"
                    },
                    {
                        "International FinanceEB": "Finance Major Elective"
                    },
                    {
                        "Social TheoryEB": "General Education - Arts"
                    },
                    {
                        "Religions of the Asia PacificEA": "General Education - Arts"
                    },
                    {
                        "Media and the ArtsEA": "General Education - Arts"
                    },
                    {
                        "Introduction to MediaEA": "General Education - Arts"
                    },
                    {
                        "Introduction to Intercultural CommunicationEA": "General Education - Arts"
                    },
                    {
                        "Bridge Program BEA": "General Education - Arts"
                    },
                    {
                        "Introduction to Environmental StudiesEC": "General Education - Science"
                    },
                    {
                        "Global Issues and Policies": "Global Issues and Institutions"
                    },
                    {
                        "Tourism DevelopmentEA": "Global and Regional Studies"
                    },
                    {
                        "International MarketingEB": "Global and Regional Studies"
                    },
                    {
                        "International ManagementEA": "Global and Regional Studies"
                    },
                    {
                        "Heritage and Cultural TourismEA": "Global and Regional Studies"
                    },
                    {
                        "Globalization and Law": "Global and Regional Studies"
                    },
                    {
                        "Asian EconomyEA": "Global and Regional Studies"
                    },
                    {
                        "Asia Pacific TourismE1": "Global and Regional Studies"
                    },
                    {
                        "Special Lecture (International Relations and Peace Studies)EA": "Globalisation"
                    },
                    {
                        "Introduction to International Relations EB": "Globalisation"
                    },
                    {
                        "Globalization and norms JA": "Globalisation"
                    },
                    {
                        "Globalization and Law": "Globalisation"
                    },
                    {
                        "Global History and the World SystemEC": "Globalisation"
                    },
                    {
                        "Programming IEB": "IS Technology Depth Elective"
                    },
                    {
                        "Development and Production SystemsEA": "IS Technology Depth Elective"
                    },
                    {
                        "Applied Programming": "IS Technology Depth Elective"
                    },
                    {
                        "GeoinformaticsEA": "ISTDE + ANA - BSc(ISM) only"
                    },
                    {
                        "Promotion and Sales Management": "Marketing Major Elective"
                    },
                    {
                        "Marketing Strategy": "Marketing Major Elective"
                    },
                    {
                        "Project Management in Development": "Operations Mgmt Major Elective"
                    },
                    {
                        "International LogisticsEA": "Operations Mgmt Major Elective"
                    },
                    {
                        "Negotiation SkillsEA": "Org Behaviour & HR Major Elec"
                    },
                    {
                        "Theories for Asia Pacific StudiesSA": "Political Science Major"
                    },
                    {
                        "Special Lecture (International Relations and Peace Studies)EA": "Political Science Major"
                    },
                    {
                        "Special Lecture (Asia Pacific Studies)EA": "Political Science Major"
                    },
                    {
                        "Introduction to the Asia Pacific Region 1SA": "Political Science Major"
                    },
                    {
                        "International Peace StudiesE1": "Political Science Major"
                    },
                    {
                        "International OrganizationsSA": "Political Science Major"
                    },
                    {
                        "International CooperationEA": "Political Science Major"
                    },
                    {
                        "Traditions and Societies of the Asia PacificEA": "SSMR (Social Science)"
                    },
                    {
                        "The Asia Pacific and Human RightsEA": "SSMR (Social Science)"
                    },
                    {
                        "Special Lecture (Asia Pacific Studies)EA": "SSMR (Social Science)"
                    },
                    {
                        "NGOs and NPOs and Citizen NetworkingEA": "SSMR (Social Science)"
                    },
                    {
                        "International Peace StudiesEA": "SSMR (Social Science)"
                    },
                    {
                        "Identity and PoliticsEA": "SSMR (Social Science)"
                    },
                    {
                        "History of International PoliticsEA": "SSMR (Social Science)"
                    },
                    {
                        "Environmental PolicyEA": "SSMR (Social Science)"
                    },
                    {
                        "Developmental SociologyEA": "SSMR (Social Science)"
                    },
                    {
                        "Contemporary Societies of the Asia PacificSA": "SSMR (Social Science)"
                    },
                    {
                        "Contemporary Japanese Society": "SSMR (Social Science)"
                    },
                    {
                        "Urban and Rural Studies in the Asia PacificEA": "Sociology Major Elective"
                    },
                    {
                        "Traditions and Societies of the Asia PacificEA": "Sociology Major Elective"
                    },
                    {
                        "Sociology of TourismEA": "Sociology Major Elective"
                    },
                    {
                        "Social TheoryEB": "Sociology Major Elective"
                    },
                    {
                        "Migration StudiesE1": "Sociology Major Elective"
                    },
                    {
                        "Education and SocietyEA": "Sociology Major Elective"
                    },
                    {
                        "Development Sociology and AnthropologyEA": "Sociology Major Elective"
                    },
                    {
                        "Cultural Sociology": "Sociology Major Elective"
                    },
                    {
                        "Internet Technology IntegrationEA": "Technology & Entrepreneurship"
                    },
                    {
                        "GeoinformaticsEA": "Technology & Entrepreneurship"
                    },
                    {
                        "E-CommerceEA": "Technology & Entrepreneurship"
                    },
                    {
                        "Database Management SystemsEA": "Technology & Entrepreneurship"
                    },
                    {
                        "Internet Technology IntegrationEA": "Technology and Entrepreneursh"
                    },
                    {
                        "GeoinformaticsEA": "Technology and Entrepreneursh"
                    },
                    {
                        "E-CommerceEA": "Technology and Entrepreneursh"
                    },
                    {
                        "Database Management SystemsEA": "Technology and Entrepreneursh"
                    },
                    {
                        "Internet Technology IntegrationEA": "Technology and Entrepreneurshi"
                    },
                    {
                        "GeoinformaticsEA": "Technology and Entrepreneurshi"
                    },
                    {
                        "E-CommerceEA": "Technology and Entrepreneurshi"
                    },
                    {
                        "Database Management SystemsEA": "Technology and Entrepreneurshi"
                    }
                ]
            },
            {
                "school": "Sophia University",
                "courses": [
                    {
                        "SEMINAR IN BUSINESS": "Business-Oriented Elective"
                    },
                    {
                        "INTRODUCTION TO ACCOUNTING": "Business-Oriented Elective"
                    },
                    {
                        "TOPICS IN JAPANESE BUSINESS AND ECONOMICS": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "TOPICS IN JAPANESE BUSINESS AND ECONOMICS": "Comm - Cultures of the Mod W"
                    },
                    {
                        "INTERNATIONAL FINANCE": "GRS + FNCE"
                    },
                    {
                        "JAPANESE WOMEN'S HISTORY": "General Education - Arts"
                    },
                    {
                        "Introduction to International Relations": "General Education - Arts"
                    },
                    {
                        "Peace and Security in Southeast Asia": "Global and Regional Studies"
                    },
                    {
                        "MANAGEMENT IN JAPAN": "Global and Regional Studies"
                    },
                    {
                        "International Business": "Global and Regional Studies"
                    },
                    {
                        "INTERNATIONAL FINANCE": "Global and Regional Studies"
                    },
                    {
                        "HUMAN RESOURCE DEVELOP IN JAPN": "Global and Regional Studies"
                    },
                    {
                        "GLOBALIZATION AND ORGANIZATIONS": "Global and Regional Studies"
                    },
                    {
                        "ECONOMIC SURVEY OF CONTEMPORARY JAPAN": "Global and Regional Studies"
                    },
                    {
                        "Controversies in Globalization": "Global and Regional Studies"
                    },
                    {
                        "Comparative Marketing": "Marketing Major Elective"
                    },
                    {
                        "JAPANESE GOVERNMENT & POLITICS": "Political Science Major"
                    },
                    {
                        "Society and Politics": "SSMR (Social Science)"
                    },
                    {
                        "Religion and Society in Japan": "SSMR (Social Science)"
                    },
                    {
                        "Japanese Government and Politics": "SSMR (Social Science)"
                    },
                    {
                        "Japanese Foreign Policy": "SSMR (Social Science)"
                    },
                    {
                        "International Political Economy": "SSMR (Social Science)"
                    },
                    {
                        "Comparative Politics of Advanced Industrial Democracies": "SSMR (Social Science)"
                    },
                    {
                        "Classical Western Political Theory": "SSMR (Social Science)"
                    },
                    {
                        "DEVELOPMENT SOCIOLOGY": "Sociology Major Elective"
                    },
                    {
                        "CULTURAL SOCIOLOGY": "Sociology Major Elective"
                    }
                ]
            },
            {
                "school": "Waseda University",
                "courses": [
                    {
                        "Topics in Economics (Data Science in Economics) [E] 01": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Introduction to Data Science alpha 01": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Introduction to Business Analytics and Applications 1": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Data Mining": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Computational Approaches to Complex Systems and Networks with Python 1": "ADA Major Elective + AO/AE"
                    },
                    {
                        "Think and Speak: Japanese Conversation 1-2 (Japanese course for International Student)": "Asia Studies"
                    },
                    {
                        "The European Union and the Asia-Pacific": "Asia Studies"
                    },
                    {
                        "Politics in Modern Japan": "Asia Studies"
                    },
                    {
                        "LANJ101L Nihongo 1(1) (Japanese course for International Student)": "Asia Studies"
                    },
                    {
                        "Issues in Japanese Economic History A [E] 01": "Asia Studies"
                    },
                    {
                        "Comprehensive Japanese 1 (Japanese course for International Student)": "Asia Studies"
                    },
                    {
                        "Casual Speech in Japanese 1 (Japanese course for International Student)": "Asia Studies"
                    },
                    {
                        "Japanese Political Thought": "Asian Studies"
                    },
                    {
                        "Japanese Economy": "Asian Studies"
                    },
                    {
                        "Japan's Foreign Policy": "Asian Studies"
                    },
                    {
                        "Culture and Society of Southeast Asia": "Asian Studies"
                    },
                    {
                        "The Basis of Intellectual Property and Business Design 01": "Business Option"
                    },
                    {
                        "Strategy and Organization of Firms": "Business Option"
                    },
                    {
                        "Media and Communication 51": "Business Option"
                    },
                    {
                        "Japan's Foreign Policy": "Business Option"
                    },
                    {
                        "Introduction to World Politics and Journalism 01": "Business Option"
                    },
                    {
                        "Interpreting Industry of Japan II 01": "Business Option"
                    },
                    {
                        "Enterprise and Governance": "Business Option"
                    },
                    {
                        "Cognitive Psychology": "Business Option"
                    },
                    {
                        "Asian Total Leadership Innovation Seminar 01": "Business Option"
                    },
                    {
                        "The Basis of Intellectual Property and Business Design 01": "Business-Oriented Elective"
                    },
                    {
                        "Introduction to Marketing 01": "Business-Oriented Elective"
                    },
                    {
                        "Introduction to Business 01": "Business-Oriented Elective"
                    },
                    {
                        "Cost- Benefit Analysis 01": "Business-Oriented Elective"
                    },
                    {
                        "Corporate Finance 1": "Business-Oriented Elective"
                    },
                    {
                        "Behavioral & Experimental Game Theory 01": "Business-Oriented Elective"
                    },
                    {
                        "Leadership in Asian Culture 1": "Cap – Managing + Asia Studies"
                    },
                    {
                        "Leading Diverse Teams 1": "Capabilities - Managing"
                    },
                    {
                        "Leadership in Asian Culture 1": "Capabilities - Managing"
                    },
                    {
                        "職場でのコミュニケーション 3 Communication(negotiation) at Workplace": "Career Skills"
                    },
                    {
                        "Negotiation Skills for Problem Solving 7-8": "Career Skills"
                    },
                    {
                        "Vocabulary Building 5-6 (Japanese course for International Student)": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Nihongo 1(1) (Japanese course for International Student)": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Japanese for 'Zero' Beginners (Japanese course for International Student)": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "International History I [E] 01": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Intensive Studies 7 (American Studies 1)": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "History of Political Thought [E] 01": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Explaining My life's Journey in Japanese 1 (Japanese course for International Student)": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Comprehensive Japanese 1 (Japanese course for International Student)": "Comm - Cltr of the Modern Wrl"
                    },
                    {
                        "Vocabulary Building 5-6 (Japanese course for International Student)": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Nihongo 1(1) (Japanese course for International Student)": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Japanese for 'Zero' Beginners (Japanese course for International Student)": "Comm - Cultures of the Mod W"
                    },
                    {
                        "International History I [E] 01": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Intensive Studies 7 (American Studies 1)": "Comm - Cultures of the Mod W"
                    },
                    {
                        "History of Political Thought [E] 01": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Explaining My life's Journey in Japanese 1 (Japanese course for International Student)": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Comprehensive Japanese 1 (Japanese course for International Student)": "Comm - Cultures of the Mod W"
                    },
                    {
                        "Science and Religion": "Comm - Technology & Society"
                    },
                    {
                        "Pronunciation: Speaking with Fluency 3-4 (Japanese course for International Student)": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "Kanji learning methods 3-4 (Japanese course for International Student)": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "Intensive Studies 54 (Seminar: East Asian Cultures in Global Perspective 1)": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "Empathetic conversation 4-5 (Japanese course for International Student)": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "APM- Realist Literature in Korea(in English) 01": "Comm-Cltr of Mdrn Wrld+AS std"
                    },
                    {
                        "Science and Religion": "Communities – Tech and Society"
                    },
                    {
                        "Media History": "Corp Comm Major Elective"
                    },
                    {
                        "Study of Economics (Development Economics)": "Development Economics"
                    },
                    {
                        "Urban and Regional Planning 01": "ECON (RET)"
                    },
                    {
                        "Economics of Human Resource Management 01": "Econ Major Rel/Econ Options"
                    },
                    {
                        "Advanced Computer Programming 01": "Econ Major Rel/Econ Options"
                    },
                    {
                        "Study of Economics 01": "Economics Major Elective"
                    },
                    {
                        "Study of Economics (Energy Economics, Environment and Policy)": "Economics Major Elective"
                    },
                    {
                        "Monetary and Financial Economics": "Economics Major Elective"
                    },
                    {
                        "Modern Korean Economic Development 01": "Economics Major Elective"
                    },
                    {
                        "Law and Economics　01": "Economics Major Elective"
                    },
                    {
                        "Japanese Economy 01": "Economics Major Elective"
                    },
                    {
                        "Japanese Economic History 01": "Economics Major Elective"
                    },
                    {
                        "Economics of Resources and Food 01": "Economics Major Elective"
                    },
                    {
                        "Science, Technology and Entrepreneurship": "Entrepreneurship Cluster"
                    },
                    {
                        "Entrepreneurship(Full-time)": "Entrepreneurship Cluster"
                    },
                    {
                        "Business Idea Design": "Entrepreneurship Cluster"
                    },
                    {
                        "Environmental Economics 01": "Environmental Economics"
                    },
                    {
                        "Risk and Insurance in a Global Perspective 1": "Free Electives (For LKCSB)"
                    },
                    {
                        "Japanese Business 1": "Free Electives (For LKCSB)"
                    },
                    {
                        "Italian: Through English (Beginner)": "Free Electives (For LKCSB)"
                    },
                    {
                        "Introduction to Business Analytics and Applications 1": "Free Electives (For LKCSB)"
                    },
                    {
                        "Fiscal Issues on Social Security 01": "Free Electives (For LKCSB)"
                    },
                    {
                        "Fiscal Issues on Social Security": "Free Electives (For LKCSB)"
                    },
                    {
                        "Environment and Economics 1": "Free Electives (For LKCSB)"
                    },
                    {
                        "Business in the Natural environment 1": "Free Electives (For LKCSB)"
                    },
                    {
                        "Urban Studies": "Free Electives (SCIS only)"
                    },
                    {
                        "Studies in Cultures of the English-speaking World 1": "Free Electives (SCIS only)"
                    },
                    {
                        "Social Design & Design Thinking for Urban Change 51": "Free Electives (SCIS only)"
                    },
                    {
                        "Principles of Advertising 01": "Free Electives (SCIS only)"
                    },
                    {
                        "Music and Musicology": "Free Electives (SCIS only)"
                    },
                    {
                        "Introduction to Environmental Science": "Free Electives (SCIS only)"
                    },
                    {
                        "Interpreting Industry of Japan II 01": "Free Electives (SCIS only)"
                    },
                    {
                        "International Consumer Behavior 1": "Free Electives (SCIS only)"
                    },
                    {
                        "Intensive Studies 55 (Seminar: East Asian Cultures in Global Perspective 2)": "Free Electives (SCIS only)"
                    },
                    {
                        "Intensive Studies 29 (Japanese Visual Culture and Media 1)": "Free Electives (SCIS only)"
                    },
                    {
                        "Intensive Studies 26 (Japanese Culture and Society 1)": "Free Electives (SCIS only)"
                    },
                    {
                        "Intensive Studies 21 (Education 1)": "Free Electives (SCIS only)"
                    },
                    {
                        "Intensive Studies 20 (Introduction to Japanese Visual and Performing Arts 3)": "Free Electives (SCIS only)"
                    },
                    {
                        "Intensive Studies 17 (Introduction to Japanese Thought and Religion 3)": "Free Electives (SCIS only)"
                    },
                    {
                        "History of Pre-Modern Japan": "Free Electives (SCIS only)"
                    },
                    {
                        "Ethical Consumption 1": "Free Electives (SCIS only)"
                    },
                    {
                        "Designing Corporate Communications 01": "Free Electives (SCIS only)"
                    },
                    {
                        "Culture in Context": "Free Electives (SCIS only)"
                    },
                    {
                        "Contemporary Performing Arts 01": "Free Electives (SCIS only)"
                    },
                    {
                        "Behavioral & Experimental Game Theory 01": "Free Electives (SCIS only)"
                    },
                    {
                        "Art and Lifestyle of Japan: as seen through Two Centuries of Japanese Arts and Crafts 01": "Free Electives (SCIS only)"
                    },
                    {
                        "American Music": "Free Electives (SCIS only)"
                    },
                    {
                        "Applied Linguistics": "General Education - Arts"
                    },
                    {
                        "Urban and Regional Planning 01": "Global and Regional Studies"
                    },
                    {
                        "Japan's Monetary Integration into the World Economy": "Global and Regional Studies"
                    },
                    {
                        "International Organizations and Japan": "Global and Regional Studies"
                    },
                    {
                        "European Integration and Foreign Policy": "Global and Regional Studies"
                    },
                    {
                        "Corporate Case Study: An Automotive Company 51": "Global and Regional Studies"
                    },
                    {
                        "Urban and Regional Planning 01": "Globalisation"
                    },
                    {
                        "Theories of International Relations 01": "Globalisation"
                    },
                    {
                        "Introduction to Global Economic History 01": "Globalisation"
                    },
                    {
                        "International Political Economy 01": "Globalisation"
                    },
                    {
                        "International Organizations and Japan": "Globalisation"
                    },
                    {
                        "International Organization": "Globalisation"
                    },
                    {
                        "International Microeconomic Policy 01": "Globalisation"
                    },
                    {
                        "International Economic Institutions (A Historical Perspective) 1": "Globalisation"
                    },
                    {
                        "Global Economic History (Intermediate)": "Globalisation"
                    },
                    {
                        "Political Text Analysis": "IS Depth Elective"
                    },
                    {
                        "Network Analysis": "IS Depth Elective"
                    },
                    {
                        "Applied Econometrics (Econometrics and Data Analysis using R)": "IS Depth Elective"
                    },
                    {
                        "Operating Systems": "IS Options"
                    },
                    {
                        "Behavioral Economics": "IS Options"
                    },
                    {
                        "Programming for Social and Cultural Data Analysis 01": "IS Technology Depth Elective"
                    },
                    {
                        "Data Mining": "IS Technology Depth Elective"
                    },
                    {
                        "Labor Economics I": "Labour Economics"
                    },
                    {
                        "Designing Corporate Communications 01": "Marketing Major Elective"
                    },
                    {
                        "Islamic Area Studies": "PPPM Major - Public Management"
                    },
                    {
                        "Public Economics 01": "Public Sector Economics"
                    },
                    {
                        "Comparative Cultural Studies": "SSMR (Social Science)"
                    },
                    {
                        "Cognitive Psychology": "SSMR (Social Science)"
                    },
                    {
                        "Programming for Web": "Technology & Entrepreneurship"
                    },
                    {
                        "Media Economics": "Technology & Entrepreneurship"
                    },
                    {
                        "Programming for Web": "Technology and Entrepreneursh"
                    },
                    {
                        "Media Economics": "Technology and Entrepreneursh"
                    },
                    {
                        "Programming for Web": "Technology and Entrepreneurshi"
                    },
                    {
                        "Media Economics": "Technology and Entrepreneurshi"
                    }
                ]
            }
        ],
            "new_zealand": [
            {
                "school": "University of Canterbury",
                "courses": [
                    {
                        "Advanced Employment Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Applied Corporate Finance": "Finance Major Elective"
                    },
                    {
                        "Applied Human Resource Management": "Global and Regional Studies"
                    },
                    {
                        "Child and Family Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Commercial Law II: Personal Property Security and Credit": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Customer Experience": "Marketing Major Elective"
                    },
                    {
                        "Democracy, Technology and Power": "Political Science Major"
                    },
                    {
                        "Derivative Securities": "Finance Major Elective"
                    },
                    {
                        "Ethnicity": "Sociology Major Elective"
                    },
                    {
                        "European Languages in Europe and Beyond": "General Education - Arts"
                    },
                    {
                        "Financial Modelling": "Finance Major Elective"
                    },
                    {
                        "Fixed Income Securities": "Finance Major Elective"
                    },
                    {
                        "Health Economics": "Health Economics"
                    },
                    {
                        "Information Systems and Technology": "Technology and Entrepreneurshi"
                    },
                    {
                        "Information Systems and Technology": "Technology and Entrepreneursh"
                    },
                    {
                        "Information Systems and Technology": "Technology & Entrepreneurship"
                    },
                    {
                        "Insurance Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Intellectual Property Law": "Intellectual Property Law"
                    },
                    {
                        "International Criminal Law": "Intl & C'parative Crim Justice"
                    },
                    {
                        "International Environmental Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "International Human Rights": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Introduction to World Politics": "Political Science Major"
                    },
                    {
                        "Law and Medicine": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Law of the Sea": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Leading Change & Innovation": "Strategic Mgmt Major Elective"
                    },
                    {
                        "Macro and Monetary Economics": "Monetary Economics"
                    },
                    {
                        "Marketing for Behavioural Change": "Marketing Major Elective"
                    },
                    {
                        "Media and the Representation of Differences": "General Education - Arts"
                    },
                    {
                        "Postcolonialism and Identities": "Sociology Major Elective"
                    },
                    {
                        "Principles of Public International Law": "Public International Law"
                    },
                    {
                        "Project Management": "Operations Mgmt Major Elective"
                    },
                    {
                        "Propaganda, Public Relations and Power": "Corp Comm Major Elective"
                    },
                    {
                        "Resource Management Act 1991: Selected Issues": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Selected Issues in Taxation": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Services marketing & management": "Marketing Major Elective"
                    },
                    {
                        "Social media and public life": "Corp Comm Major Elective"
                    },
                    {
                        "Special Topic: Business and Culture": "Business Option"
                    },
                    {
                        "Special Topic: Business and Sustainability": "Business Option"
                    },
                    {
                        "Strategic Marketing": "Marketing Major Elective"
                    },
                    {
                        "The European Union in the Asia-Pacific": "Global and Regional Studies"
                    },
                    {
                        "Transnational Criminal Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "World Cinema in the 21st Century": "Arts & Cul Mgmt Major - A&C"
                    }
                ]
            },
            {
                "school": "Victoria University of Wellington",
                "courses": [
                    {
                        "Applied Finance": "Finance Major Elective"
                    },
                    {
                        "Banking Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Buyer Behaviour": "Business Option"
                    },
                    {
                        "Climate Change and the Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Culture and International Relations": "Political Science Major"
                    },
                    {
                        "Gender: Politics and Policy": "Sociology Major Elective"
                    },
                    {
                        "International Law": "Public International Law"
                    },
                    {
                        "International Relations of East Asia": "Political Science Major"
                    },
                    {
                        "Introduction to Commercial Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Introduction to Family Law": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Introduction to International Relations": "Political Science Major"
                    },
                    {
                        "Introduction to Investments": "Finance Major Elective"
                    },
                    {
                        "Introduction to Tourism": "Operations Mgmt Major Elective"
                    },
                    {
                        "Regulating Labour and Work": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Relationship Property and Succession": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Remedies": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Sentencing and Penal Policy": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Services Marketing": "Marketing Major Elective"
                    },
                    {
                        "Special Topic: Freedom of Expression and Privacy": "Public International Law"
                    },
                    {
                        "Special Topic: Immigration and Asylum": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Special Topic: Indigenous Rights Compared: NZ, Canada, Australia, America": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Special Topic: Youth Justice": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Special Topics: Law of the Sea": "Public International Law"
                    },
                    {
                        "The Criminal Justice Process": "Law Major Elective-LLB/JD only"
                    },
                    {
                        "Understanding Behaviour: Working with People": "SSMR (Social Science)"
                    }
                ]
            }
        ],
            "south_africa": [
        {
            "school": "University of Pretoria, South Africa",
            "courses": [
                {
                    "Developmental Psychology": "Developmental Psychology"
                },
                {
                    "Philosophy of Religion": "General Education - Arts"
                },
                {
                    "Heritage and Cultural Tourism 320": "General Education - Arts"
                },
                {
                    "Tourism and hospitality management 311": "Global and Regional Studies"
                },
                {
                    "International Business Management": "Global and Regional Studies"
                },
                {
                    "Marketing management 321": "Marketing Major Elective"
                },
                {
                    "Marketing management 311": "Marketing Major Elective"
                },
                {
                    "International Relations 220": "Political Science Major"
                },
                {
                    "Public Administration 322": "SSMR (Social Science)"
                },
                {
                    "City Structure, Environment and Society 266": "SSMR (Social Science)"
                },
                {
                    "Developmental Psychology": "Developmental Psychology"
                },
                {
                    "Philosophy of Religion": "General Education - Arts"
                },
                {
                    "Heritage and Cultural Tourism 320": "General Education - Arts"
                },
                {
                    "Tourism and hospitality management 311": "Global and Regional Studies"
                },
                {
                    "International Business Management": "Global and Regional Studies"
                },
                {
                    "Marketing management 321": "Marketing Major Elective"
                },
                {
                    "Marketing management 311": "Marketing Major Elective"
                },
                {
                    "International Relations 220": "Political Science Major"
                },
                {
                    "Public Administration 322": "SSMR (Social Science)"
                },
                {
                    "City Structure, Environment and Society 266": "SSMR (Social Science)"
                }
            ]
        },
        {
            "school": "University of Pretoria, Faculty of Law, Republic of South Africa",
            "courses": [
                {
                    "Socio-economic rights under comparative and international law": "Law Major Elective-LLB/JD only"
                },
                {
                    "Legal Problems of HIV and AIDs 410": "Law Major Elective-LLB/JD only"
                },
                {
                    "International humanitarian law and human rights in military operations 801": "Law Major Elective-LLB/JD only"
                },
                {
                    "International Environmental Law": "Law Major Elective-LLB/JD only"
                },
                {
                    "History and Philosophy of Human Rights HPH 801": "Law Major Elective-LLB/JD only"
                },
                {
                    "Applied International Law": "Law Major Elective-LLB/JD only"
                }
            ]
        }
        ],

    } // END records

            
        }
    },
      methods:{
       test_function(){
        var list = [];
        const dbref = ref(db);
        get(dbref)
        .then((snapshot) => {
            var currentData = [];
            var currentData = snapshot.val();

            for (const [school, details] of Object.entries(currentData)) {
                list.push([school, details]);
            }
            console.log(list);

            for(var country of list){
                this.countries.push(String(country[0]))
                // this.countries.push(country[0])
            }
            console.log(this.countries)

            // console.log(list[1][0]);
            // console.log(list[0][0]);
            //vue app. -> computed -> loop thru all the values ->
            //e.g. school: list.school, coordinates: list.coordinates

        })

        .catch(() => {
            //error
        });
       }
       
    }
  
  
    }
    
</script>

<style>

:root {
      --light: #EEEEEE;
      --dark: #031b4e;
      --shadow: lightgrey;
}

*{
    color: #031b4e;
}

#search-button{
    height: 33px;
}
#search-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    height: 33px;
    color: #031b4e
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
    padding-top: 50px;
    margin: 0 auto;
}



</style>