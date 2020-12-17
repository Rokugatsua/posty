<template>
    <div class="flex w-full border-b-2 mb-4 py-2 justify-between">
        <h1>All post</h1>
        <div>
            <label>Show : </label>
            <select @change="filterShowed" class="bg-white border-blue-400 border rounded w-16 text-right appearance-none hover:bg-blue-400 hover:text-white">
                <option value="100">100</option>
                <option value="50">50</option>
                <option value="20">20</option>
                <option value="10">10</option>
            </select>
        </div>
    </div>
    <div class="">
        <div class="mb-2 w-full card-post" v-for="post in allPosts" :key="post.id">
            <router-link :to="{name: 'Post', params: {postId: post.id}}">
                <h1 class="text-lg group-hover:text-white">{{post.title}}</h1>
                <p class="text-sm text-gray-500 group-hover:text-white">{{post.body}}</p>
                <div class="flex">
                    <span class="text-sm text-gray-600 mr-3 italic group-hover:text-white">Author : {{getUsernameById(post.userId)}}</span>
                </div>
            </router-link>
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
        ...mapGetters(['allPosts', 'getAllUsers', 'getUsernameById'])
    },
    methods: {
        async filterShowed(event) {
            let limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText)
            await this.$store.dispatch('fetchPostWithLimit', limit)
        }
    }
}
</script>

<style lang="postcss">
.card-post {
    @apply border border-opacity-40 border-gray-500 shadow-md rounded-lg p-2 group hover:bg-blue-500;
}
</style>