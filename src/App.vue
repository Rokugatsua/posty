<template>
  <div class="w-screen h-16 lg:fixed top-0 bg-blue-500">
    <navbar />
  </div>
  <div class="w-full lg:w-8/12 lg:mx-auto bg-white lg:mt-24 lg:rounded-md shadow-md">
    <router-view />
  </div>
  <div class="w-full lg:w-8/12 lg:mx-auto px-4 lg:px-0">
    <div class="mt-4 mb-3">
      <span class="text-gray-500 text-sm font-semibold">by Rokugatsua</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  components: {
    Navbar,
    Sidebar
  },
  methods:{
    ...mapActions(['fetchPosts'])
  },
  created() {
    this.fetchPosts()
  }
}
</script>

<style lang="postcss">
.btn {
    @apply px-3 py-2 rounded ;
}

.btn-primary {
    @apply bg-blue-700 text-white shadow focus:ring-2 focus:ring-offset-1 focus:ring-blue-800 focus:outline-none hover:bg-blue-600;
}
.form-control {
  @apply w-full border-2 rounded px-2 py-1 focus:ring-2 focus:ring-offset-2 focus:border-transparent focus:outline-none;
}
</style>