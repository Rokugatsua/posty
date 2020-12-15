<template>
  <nav class="flex w-full bg-blue-400">
    <div class="">Rokugatsua</div>
    <div class="flex">
      <router-link to="/" class="mx-3">Home</router-link>
      <router-link to="/about" class="mx-3">About</router-link>
    </div>
  </nav>
  <div class="container">
    <router-view />
  </div>

  
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>
