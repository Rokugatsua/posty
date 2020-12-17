<template>
  <div class="text-semibold flex items-center text-xl px-5 py-2 border-b-2">
    <i class="mr-4"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></i>
    Edit Post
  </div>
  <div class="px-4 py-2" >
    <form @submit.prevent="updatePost">
      <div class="flex items-center my-2">
        <label for="title" class="w-32">Title</label>
        <input type="text" class="form-control" :class="{'form-error':postErr.title}" v-model="postTitle" :placeholder="[postErr.title ? 'Fill this title':'your title post']">
      </div>
      <div class="flex my-2">
        <label for="body" class="w-32">Content</label>
        <textarea class="form-control" rows="8" :class="{'form-error':postErr.body}" v-model="postBody" placeholder="write something..."></textarea>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="btn btn-primary focus:outline-none" :class="{'cursor-wait':onUpdatePost}">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postTitle:'',
      postBody:'',
      postErr:{title:false, body:false},
      post:{},
      onUpdatePost: false
    }
  },
  methods:{
    async updatePost(){
      if(this.postTitle && this.postBody) {
        this.post.body = this.postBody
        this.post.title = this.postTitle

        this.onUpdatePost = true

        const res =  await this.$store.dispatch('updatePost', this.post)
        if (res) {
          this.onUpdatePost = false
          this.$router.push({name:'Post', params: {postId: this.post.id}})
        }
      } else {
        if (!this.postTitle) {
          this.postErr.title = true
        }
        if (!this.postBody) {
          this.postErr.body = true
        }
      }
    }
  },
  mounted(){
    let post = this.$store.getters.getPostById(parseInt(this.$route.params.postId))
    this.post = post
    this.postTitle = post.title
    this.postBody = post.body
  }
    
}
</script>