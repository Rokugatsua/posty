<template>
  <div class="flex p-4">
    <div class="w-9/12">
      <Posts />
    </div>
    <aside class="w-3/12">
      
    </aside>
  </div>
</template>

<script>
import Posts from '../components/Posts.vue'

export default {
  name: 'Home',
  components: {
    Posts
  }
}
</script>

<style>

</style>