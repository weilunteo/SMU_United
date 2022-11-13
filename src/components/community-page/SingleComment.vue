<template>
    <div class="comment">
        <div class="avatar">
            <img :src="comment.avatar" alt="">
        </div>

        <div class="text username  ms-3 mt-2">
            <ul class="list-inline">
                <li class="list-inline-item"><h6>{{comment.user}}</h6></li>
                <li class="list-inline-item text-primary">{{comment.time}}</li>
            </ul>
            <p class="fs-10">{{comment.text}}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'singleComment',
        props: ['comment']
    }
</script>

<style scoped>
/* Single-comment component */
.comment {
    display: flex;
    padding: 10px;
    margin-bottom: 10px;
    align-items: center;
    color: #031b4e;
    background-color: #F2F2F2;
    border-radius: 30px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.comment .avatar {
    align-self: flex-start;
}

.comment .avatar > img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    align-self: start;
}

.comment .text {
    text-align: left;
    margin-left: 5px;
}

.comment .text span {
    margin-left: 5px;
}

.comment .text .username {
    font-weight: bold;
    color: #031b4e;
}

.comment .username span {
    margin-left: 0px;
}
</style>