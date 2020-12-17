<template>
  <div>
    <div class="w-full md:w-5/6">
      <span>{{ getCommentCountPost }} Comments in this Post : </span>
      <div v-for="comment in getCommentPost" :key="comment.id" class="border-l-2 border-transparent p-3  mb-3 rounded-xl">
        <div class="text-blue-500 mb-1">{{comment.email}} <span class="text-sm ml-4 text-black">{{comment.name}}</span></div>
        <p class="text-gray-500 ml-2 pl-2 border-l-2 border-blue-400">{{comment.body}}</p>
      </div>
    </div>
    <add-comment/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AddComment from './AddComment.vue'
export default {
    props:['postId'],
    computed:{
        ...mapGetters(['getCommentPost', 'getCommentCountPost'])
    },
    methods: {
        ...mapActions(['fetchCommentPost'])
    },
    created(){
        this.fetchCommentPost(this.postId ?? this.$route.params.postId)
    },
    components:{
      AddComment
    }
}
</script>

<style lang="postcss">



</style>