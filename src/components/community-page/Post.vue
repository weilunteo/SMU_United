<template>
                      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content bg-light">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Creating Post...</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                        <div class="form mx-3">
                                            <div class="mb-4">
                                                <label for="title" class="input-label fw-semibold mb-1 ml-3">Title</label>
                                                <input v-model="title" type="text" name="text" id="text" class="form-control" style="background-color: #c8dfff99;">
                                            </div>

                                            <div class="mb-4">
                                                <label for="content" class="input-label fw-semibold mb-1">What's on your mind?</label>
                                                <textarea v-model="content" type="text" name="content" id="content" class="form-control" style="height:200px; background-color: #c8dfff99"></textarea>
                                            </div>
                                        </div>
                                           
                                        </div>
                                        <div class="modal-footer">
                                            <div class="input-control w-100 mx-3">
                                                <input  @click="$emit('click', idx)" type="submit" name="submit" class="input-submit btn btn-primary w-100 d-block align-items-center justify-content-center fw-bold" value="Post">
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
            <div class="post row"> 
                <div class="col-lg-12">
                    <div class="d-flex justify-content-between">
                        <div class="me-2">
                            <img class="rounded-circle img-fluid" :src="current_user.avatar" alt="">
                        </div>
                        <div class="w-100">

                            <div>
                                <h6 class="mb-0 d-inline-block user">{{current_user.user}}</h6>
                                <p class="mb-0 text-primary ">{{current_user.time}}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- Post Title & Content -->
                <div class="mt-3 mb-0">
                    <p v-for="post in postList" class="fw-bold fs-5">{{post.title}}</p>
                    <p v-for="post in postList">{{post.content}}</p>
                </div>

                <!--Like & Comments-->

                <div class="postition-absolute d-flex align-items-center">
                    <div class="ms-1">
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <button v-on:click="incrementLikes()" type="button" class="btn btn-outline-light"><img src="../assets/img/thumbs-up.png" class="img-fluid" alt="">
                                </button><b>{{likes}} Likes</b>
                            </li>
                            <li class="list-inline-item">
                                <button type="button" class="btn btn-outline-light" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                <img src="../assets/img/comments.png" class="img-fluid" style="width: 24px; height:24px;">
                                </button><b>{{comments.length}} Comments</b>
                            </li>
                        </ul>
                    </div>
                </div>

        </div>

</template>

<script>

    export default {
        name: 'post',
        components: {
            
        },
        data() {
            return {
                postList: [],
                title: '',
                content: '',
                current_user: {
                    avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=random',
                    user: 'johndoe',
                    time: '1 sec ago'
                },
            }
        },
        methods: {
            addPost(){
            this.postList.push( { 
                'title': this.title, 
                'content': this.content
            } )
            this.title = ''
            this.content = ''

            console.log(this.postList)
        }
            
        },
        props: ['title', 'content', 'likes']
    }
</script>