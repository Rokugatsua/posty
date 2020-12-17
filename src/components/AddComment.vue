<template>
  <div class="w-full mb-4">
    <form @submit.prevent="addNewComment" class="p-1 bg-white focus-within:shadow-md rounded-md border">
      <div class="w-full flex mb-1 space-x-1">
        <div class="w-3/6 flex items-center space-x-1">
          <label for="email">Email</label>
          <input type="text" v-model="comment.email" class="form-control" :class="{'form-error':commentErr.email}" :placeholder="[commentErr.email ? 'please fill your email' : 'your email@example.com']">
        </div>
        <div class="w-3/6 flex items-center space-x-1">
          <label for="name">Name</label>
          <input type="text" v-model="comment.name" class="form-control" :class="{'form-error':commentErr.name}" :placeholder="[commentErr.name ? 'please fill your name':'Jhon doe']">
        </div>
      </div>
      <div class="w-full">
        <textarea v-model="comment.body" rows="5" class="w-full h-full focus:ring-2 focus:border-transparent border-2 rounded p-2" :class="{'form-error':commentErr.body}" placeholder="Comment something about this post...">
        </textarea>
      </div>
      <div class="w-full justify-end">
        <button type="submit" class="btn btn-primary" :class="{'cursor-wait': onAddedPost}">Add Comment</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: {
        postId: 0,
        name: '',
        email: '',
        body:''
      },
      commentErr:{
        name: false,
        email: false,
        body: false
      },
      onAddedPost: false
    }
  },
  methods:{
    async addNewComment(){
      try {
        if (this.comment.name && this.comment.email && this.comment.body) {
          this.comment.postId = parseInt(this.$route.params.postId)
          this.onAddedPost = true
          const res = await this.$store.dispatch('addCommentPost', this.comment)
          if (res) {
            this.onAddedPost = false
            this.comment.name = ''
            this.comment.body = ''
            this.comment.email = ''
            this.commentErr = {name: false, email: false, body: false}
          }
        } else {
          if (!this.comment.name) this.commentErr.name = true
          if (!this.comment.email) this.commentErr.email = true
          if (!this.comment.body) this.commentErr.body = true
        }
      } catch(err) {

      }
    }
  }

}
</script>

<style lang="postcss">


</style>