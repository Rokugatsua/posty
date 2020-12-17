<template>
  <div class="p-4">
    <header class="mb-2 pb-2 border-b border-blue-400">
      <h1 class="font-bold font-serif text-xl">{{post.title}}</h1>
    </header>
    <main>
      <p class="text-gray-700">{{post.body}}</p>
    </main>
    <footer class="my-3 flex justify-between">
      <p class="text-gray-400 text-sm">Posted by <span>{{post.userId}}</span></p>
      <ul class="flex">
        <li class="text-blue-400 ml-4 flex text-center">
          <button type="button" @click="editPost(post.id)" class="flex btn-sm hover:bg-blue-400">
            <i><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></i>
            Edit
          </button>
        </li>
        <li class="text-red-400 ml-4 flex text-center">
          <button type="button" @click="deletePost(post.id)" class="flex btn-sm hover:bg-red-400">
            <i><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></i>
            Delete
          </button>
        </li>
      </ul>
    </footer>
    <comments :postId="postId" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Comments from '../components/Comments.vue'
export default {
  name: 'Post',
  data(){
    return {
      post:{},
      toDelete: false,
      hasFetch: false
    }
  },
  components:{
    Comments
  },
  computed: {
    // post() {
    //   return this.$store.getters.getPostById(parseInt(this.$route.params.postId))
    // },
    postId() {
      return this.$route.params.postId
    }
  },
  methods: {
    async deletePost(postId){
      const response = await this.$store.dispatch('deletePostById',postId)
      if (response) {
        this.$router.push('/')
      }
    },
    async fetchPost() {
      await this.$store.dispatch('fetchPostById', this.$route.params.postId) 
    },
    editPost(postId){
      this.$router.push({name:'EditPost', params: { postId:postId }})
    }
  },
  created(){
    this.fetchPost().then(()=>{
      this.post = this.$store.getters.getPostById(parseInt(this.$route.params.postId))
    })
  },
  mounted(){
    if (this.post) this.post = this.$store.getters.getPostById(parseInt(this.$route.params.postId))
  },
}
</script>

<style lang="postcss">
.btn-sm {
  @apply px-2 py-1 hover:text-white rounded-md hover:border-transparent border-b-2 shadow hover:shadow-inner;
}
</style>