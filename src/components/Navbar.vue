<template>
  <nav class="flex lg:w-8/12 lg:mx-auto px-6 lg:px-0 h-full items-center justify-between">
    <div class="text-xl font-semibold text-white">Posty</div>
    <ul class="flex space-x-7">
      <li>
        <router-link to="/add-post" class="text-white  flex items-center">
          <i><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></i>
          New
        </router-link>
      </li>
      <li><router-link to="/" class="text-white ">Posts</router-link></li>
      <li><router-link to="/about" class="text-white ">About</router-link></li>
    </ul>
  </nav>
</template>