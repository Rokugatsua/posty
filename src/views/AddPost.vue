<template>
  <div class="text-semibold flex items-center text-xl px-5 py-2 border-b-2">
    <i class="mr-2"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></i>
    Add New Post
  </div>
  <div class="px-4 py-2">
    <form @submit.prevent="addNewPost">
      <div class="flex items-center my-2">
        <label for="title" class="w-32">Title</label>
        <input type="text" class="form-control" :class="{'form-error':postErr.title}" v-model="postTitle" :placeholder="[postErr.title ? 'Fill this title':'your title post']">
      </div>
      <div class="flex my-2">
        <label for="body" class="w-32">Content</label>
        <textarea class="form-control" :class="{'form-error':postErr.body}" v-model="postBody" placeholder="write something..."></textarea>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="btn btn-primary focus:outline-none" :class="{'cursor-wait':onAddedPost}">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// need title, body, userId
export default {
    data() {
        return {
            postTitle:'',
            postBody:'',
            postErr: {
                title: false,
                body: false
            },
            onAddedPost: false
        }
    },
    methods: {
        ...mapActions(['addPost']),
        async addNewPost(){
            if(this.postTitle && this.postBody) {
              try {
                let userId = 1 // example current user is with id 1
                this.onAddedPost = true
                let response = await this.addPost({title:this.postTitle, body:this.postBody, userId:userId})
                if (response){
                  this.onAddedPost = false
                  this.$router.push('/')
                }                
              } catch (err) {
                
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
    }
}
</script>

<style lang="postcss">

.form-error {
  @apply placeholder-red-500 border-red-500 border-2 w-full;
}

</style>