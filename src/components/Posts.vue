<template>
    <h1>All post</h1>
    <div class="">
        <div class="mb-2 w-full card-post" v-for="post in allPosts" :key="post.id">
            <router-link :to="{name: 'Post', params: {postId: post.id}}">
                <h1 class="text-lg group-hover:text-white">{{post.title}}</h1>
                </router-link>
            <p class="text-sm text-gray-500 group-hover:text-white">{{post.body}}</p>
            <div class="flex">
                <span class="text-sm text-gray-600 mr-3 italic group-hover:text-white">Author : {{getUsernameById(post.userId)}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
    data(){
        return{
            count:0
        }
    },
    computed:{
        ...mapGetters(['allPosts', 'getAllUsers', 'getUsernameById']),
        // username(id){
        //     return this.getAllUsers.find(user => user.id === parseInt(id)).username
        // }
    },
}
</script>

<style lang="postcss">
.card-post {
    @apply border border-opacity-40 border-gray-500 shadow-md rounded-lg p-2 group hover:bg-blue-400;
}
</style>