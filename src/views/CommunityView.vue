<template>
    <HeaderSidebar/>

    <section>

        <div class="container-fluid d-flex flex-wrap justify-content-center align-items-center px-5">
            
            <div class="create row">
                <div class="col-lg-12">
                <div class="tab-content null" id="pills-tabContent-2">
                    <div class="tab-pane fade show active" id="profile-feed" role="tabpanel" aria-labelledby="pills-feed-tab">
        
                            <div class="create-card card w-100 h-150" id="post-modal-data">
                                <!-- Create Post Section-->
                                <div class="card-header d-flex justify-content-between">
                                    <div class="header-title">
                                        <h4 class="card-title">Create Post</h4>
                                    </div>
                                    
                                </div>

                                <div class="card-body">

                                    <div class="d-flex align-items-center">
                                        <div class="user-img">
                                            <img class="rounded-circle" src="../assets/img/user.png">
                                        </div>
                                        <form class="ml-3 w-100">
                                            <input v-on:click= "newPost()" type="text" placeholder="Write something here..." class="rounded form-control" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style="border: none;">
                                        </form>
                                    </div>

                                <!-- Modal -->
                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content bg-light">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Creating Post...</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="form">
                                            <div class="mb-4 form-control">
                                                <label for="title" class="input-label fw-semibold mb-1 ml-3">Title</label>
                                                <input v-model="title" type="text" name="text" id="text" class="form-control">
                                            </div>
                                            <div class="mb-4 form-control">
                                                <label for="content" class="input-label fw-semibold mb-1">What's on your mind?</label>
                                                <textarea type="text" name="content" id="content" class="form-control" style="height:200px"></textarea>
                                            </div>
                                        </div>
                                           
                                        </div>
                                        <div class="modal-footer">
                                            <div class="input-control w-100">
                                                <input  v-on:click="" type="submit" name="submit" class="input-submit btn btn-primary w-100 d-block align-items-center justify-content-center" value="Post">
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                          
                                </div>  <!--End of card body-->
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <!-- Start of Post-->
            <div class="post row"> 
                <div class="col-lg-12">
                    <div class="d-flex justify-content-between">
                        <div class="me-2">
                            <img class="rounded-circle img-fluid" src="../assets/img/user.png" alt="">
                        </div>
                        <div class="w-100">

                            <div>
                                <h6 class="mb-0 d-inline-block user">Ira Membrit</h6>
                                <p class="mb-0 text-primary ">6 hour ago</p>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- Post Title & Content -->
                <div class="mt-3 mb-0">
                    <p class="fw-bold fs-5">For Paris/France students</p>
                    <p>
                        Would anyone be interested in going on a day trip from Paris to Mont St Michel and the Caen WW2 Memorial Museum on 11 September, Sunday? Hoping to rent a car. Timing can be flexible. Leave your comments below if interested!! </p>
                </div>

                <!--Like & Comments-->

                <div class="postition-absolute d-flex align-items-center">
                    <div class="ms-1">
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <button type="button" class="btn btn-outline-light"><img src="../assets/img/thumbs-up.png" class="img-fluid" alt="">
                                </button>{{likes}} Likes
                            </li>
                            <li class="list-inline-item">
                                <button type="button" class="btn btn-outline-light" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                <img src="../assets/img/comments.png" class="img-fluid" style="width: 24px; height:24px;">
                                </button>{{comments}} Comments
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="collapse" id="collapseExample">
                    <div class="card card-body-collapse">
                    <br>
                    <div class="row">
                        <ul class="list-unstyled p-0 m-0">
                            <li>
                                <div class="d-flex flex-wrap">
                                    <div class="user-img">
                                        <img src="../assets/img/user.png" class="avatar rounded-circle img-fluid">
                                    </div>
                                    <div class="comment-data-block ms-3">
                                        <h6>Monty Carlo</h6>
                                        <p class="mb-0">Let's goooooo!!</p>

                                        <div class="d-flex flex-wrap align-items-center comment-activity">
                                            <ul class="list-inline">
                                                <li class="list-inline-item text-primary">Like</li>
                                                <li class="list-inline-item text-primary">Reply</li>
                                                <li class="list-inline-item text-muted">5 mins</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <br>
                            
                            <li>
                                <div class="d-flex flex-wrap">
                                    <div class="user-img">
                                        <img src="../assets/img/user.png" class="avatar rounded-circle img-fluid">
                                    </div>
                                    <div class="comment-data-block ms-3">
                                        <h6>Paul Molive</h6>
                                        <p class="mb-0">I'm interested as well :D</p>
                                        <div class="d-flex flex-wrap align-items-center comment-activity">
                                            <ul class="list-inline">
                                                <li class="list-inline-item text-primary">Like</li>
                                                <li class="list-inline-item text-primary">Reply</li>
                                                <li class="list-inline-item text-muted">5 mins</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                    
                    <form class="comment-text d-flex align-items-center mt-3">
                        <input v-model="comment" type="text" class="form-control rounded" placeholder="Write a comment...">
                        <button v-show="comment != '' " class="btn btn-secondary">Submit</button>
                    </form>
                </div>
            </div>
    
    </div> <!--end post row-->

</div> <!--end container-->
            
    </section>
</template>
    
    <script> /*Javascript */
    import HeaderSidebar from '../components/feed-page/HeaderSidebar.vue'
    
    export default {
    name: "CommunityView",
    components: {
      HeaderSidebar
    },
    data (){
      return{
        comment: '',
        createPost: false,
        viewComments: false,
        text: '',
        likes: 5,
        comments: 2,
          
      }
    },
    methods:{

        showComments(){
            this.viewComments = true
            return this.viewComments
        },
        
        newPost(){
            this.createPost = true
            return this.createPost
        }
  
    
    }
    
    }
    </script>
    
    
    <style> /* CSS*/

    .create{
        box-sizing: border-box;
        max-width: 100%;
        flex: 0 0 auto;
        width: 85%;
        padding: 25px;
        margin: 20px 30px;

    }

    .post{
        background-color: white;
        border-radius: 10px;
        padding: 20px 10px;
        margin: 20px 30px;
        box-sizing: border-box;
        max-width: 100%;
        flex: 0 0 auto;
        width: 80%;
    }
    .avatar{
        margin-left: 20px;
        height: 35px;
        width: 35px;
    }
    h6{
        font-weight: 600;
    }

    .container-fluid{
        margin-top: 150px;
        /* height: -webkit-calc(100vh - 120px); google, safari */
    }

    .create-card{
        height: 150px;
        width: 100%;
    }

    .card-body-collapse{
        height: 270PX;
    }

    </style>