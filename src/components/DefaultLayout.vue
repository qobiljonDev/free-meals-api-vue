<template lang="">
  <div class="bg-gray-100 min-h-screen">
    <navbar />
    <main class="max-w-[1200px] mx-auto">
      <router-view />
    </main>
  </div>
</template>
<script setup>
import Navbar from "./Navbar.vue";
</script>
<style lang=""></style>
