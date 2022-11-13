<template>
    <div class="post row"> 
                <div class="col-lg-12">
                    <div class="d-flex justify-content-between">
                        <div class="me-2">
                            <img class="rounded-circle img-fluid" :src="creator.avatar" alt="">
                        </div>
                        <div class="w-100">

                            <div>
                                <h6 class="mb-0 d-inline-block user">{{creator.user}}</h6>
                                <p class="mb-0 text-primary ">{{creator.time}}</p>
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
    </div>
</template>

<script>
 export default {
      name: "AddPostComponent",
      components: {
    
    },
}
</script>

<style>
</style>