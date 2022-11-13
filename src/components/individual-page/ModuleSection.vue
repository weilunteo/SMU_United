<template>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link type="text/css" rel="stylesheet" href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css"/>


<div class="container-sm ">
    <div class="row">
        <h2 class="modules-text">Modules</h2>
    </div>
    <div class="row symbol">
                <a href="http://google.com" style="color: black">
                    <i class="fa-solid fa-bookmark"></i><br>
                </a>
                <button>Your Bookmarked Page</button>
            </div>

<div class="row">
    <div class="col-xl-6" v-for="mod in module_list1">
    <div class="indiv-module-list-div">   
        <svg v-on:click="do_function()" class="bookmark" id="bookmark" fill="#C8DFFF99" width="40" height="55" viewBox="0 0 48 61">
            <path d="M 0 4C 0 1.79086 1.79086 0 4 0L 24 0C 24 0 24 0 24 0L 44 0C 46.2091 0 48 1.79086 48 4L 48 56.5259C 48 59.7207 44.4394 61.6263 41.7812 59.8541L 26.2188 49.4792C 24.8752 48.5835 23.1248 48.5835 21.7812 49.4792L 6.2188 59.8541C 3.56058 61.6263 0 59.7207 0 56.5259L 0 4Z" />
        </svg>    
        <span class="indiv-module-list-span">{{mod}}</span></div>
    </div>
    <div class="col-xl-6" v-for="mod in module_list2">
    <div class="indiv-module-list-div">   
        <svg v-on:click="do_function()" class="bookmark" id="bookmark" fill="#C8DFFF99" width="40" height="55" viewBox="0 0 48 61">
            <path d="M 0 4C 0 1.79086 1.79086 0 4 0L 24 0C 24 0 24 0 24 0L 44 0C 46.2091 0 48 1.79086 48 4L 48 56.5259C 48 59.7207 44.4394 61.6263 41.7812 59.8541L 26.2188 49.4792C 24.8752 48.5835 23.1248 48.5835 21.7812 49.4792L 6.2188 59.8541C 3.56058 61.6263 0 59.7207 0 56.5259L 0 4Z" />
        </svg>    
        <span class="indiv-module-list-span">{{mod}}</span></div>
    </div>
</div>




    

<!-- <div class="row">
        <div class="row">
            <div class="col">
                <div class="box text-start rounded-pill">
                    <strong>IS110</strong>
                    <i class="fa-solid fa-circle-info"></i>
                    <i id="IS110" class="fa-regular fa-bookmark icon"></i>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
        <br>

        <div class="row">
            <div class="col">
                <div class="box text-start rounded-pill">
                    <strong>IS111</strong>
                    <i class="fa-solid fa-circle-info"></i>
                    <i id="IS11" class="fa-regular fa-bookmark icon"></i>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col">
                <div class="box text-start rounded-pill">
                    <strong>IS112</strong>
                    <i class="fa-solid fa-circle-info"></i>
                    <i id="IS112" class="fa-regular fa-bookmark icon"></i>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col">
                <div class="box text-start rounded-pill">
                    <strong>IS113</strong>
                    <i class="fa-solid fa-circle-info"></i>
                    <i id="IS113" class="fa-regular fa-bookmark icon"></i>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
        <br>
        
</div> -->
</div>

</template>
    
<script>

import { toHandlers } from 'vue';

export default {
    name: "ModuleSection",
    components: {

},
data() {
    return {
        module_list1: 
        ["Digital Business: Technology and Transformation", "Web Application Design", "Introduction to Programming", "Management Communication", "Mandarin", "Business Process and Analysis"],
        module_list2: 
        ["Digital Business: Technology and Transformation", "Web Application Design", "Introduction to Programming", "Management Communication", "Mandarin", "Business Process and Analysis"],
        
        bookmarked: []
    }
},
    methods:{
        do_function() {
            var current_status = document.getElementById("bookmark");
            console.log(current_status)
            if (current_status.getAttribute("fill") == "#C8DFFF99"){
                current_status.setAttribute("fill", "#0069FC")
            }
            else {
                current_status.setAttribute("fill", "#C8DFFF99")
            }
            
            ;

            }
    
}


}
    
</script>

<style>

body .cont {
  width: 192px;
  height: 192px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0px 8px 8px 0px rgba(0,0,0,0.02);
}

.bookmark-component {
    margin: 30px;
}
body .cont:hover {
  box-shadow: 0px 32px 64px 0px rgba(0,0,0,0.12);
  cursor: pointer;
}
body .cont .label,
body .cont .label2 {
  position: absolute;
  width: auto;
  margin-top: 54px;
  font-size: 24px;
  color: rgba(51,51,51,0.3);
  font-weight: 300;
  font-family: "SF Pro Display", sans-serif;
}
body .cont .label2 {
  color: rgba(255,255,255,0.3);
}
.cont_alter {
  background: #333 !important;
}
.bookmark {
  margin-top: -16px;
  position: absolute;
}
.hide_label {
  opacity: 0;
}
.bookmarked path {
  d: path("M 0 4.00673C 0 0.811944 3.56058 -1.09362 6.2188 0.678524L 21.7812 11.0535C 23.1248 11.9492 24.8752 11.9492 26.2188 11.0535L 41.7812 0.678525C 44.4394 -1.09362 48 0.811944 48 4.00673L 48 56.5327C 48 58.7418 46.2091 60.5327 44 60.5327L 24 60.5327C 24 60.5327 24 60.5327 24 60.5327L 4 60.5327C 1.79086 60.5327 0 58.7418 0 56.5327L 0 4.00673Z");
  fill: #fff;
}
* {
  -webkit-transition: 0.2s ease-in-out;
}


.modules-text{
    font-size: 36px;
    font-weight: bold;
    margin: 50px;
}
.container_fluid_style {
    max-width: 85%;
}
.mod_list_container {
    text-align: center;
    text-align: middle;
    margin-left: auto;
    margin-right: auto;
}

        .symbol {
            position: absolute;
            right: 70px;
            top: 0px;
            text-align: center;
        }
        .box {
            background-color: rgb(204, 209, 211);
            text-align: start;
            padding-left: 5%;
        }
        .container {
            padding: 0px;
            
        }

        .icon {
            position: absolute;
            right: 5%;
            top: 15%;
        }


.indiv-module-list-span{
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: auto;
    background-color: #c8dfff99;
    font-weight: bold;
    font-size: 16px;
    padding: 20px;
    color: #031b4e;
    border-radius: 12px;
    margin: 20px 0 0 50px;
}

.indiv-module-list-div{
    margin: 0px 50px 50px 50px;
}

.container-sm{
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-bottom: 40px;
  padding-bottom: 24px;
}
</style>