<template lang="">
  <div class="bg-gray-100 dark:bg-slate-800 min-h-screen">
    <navbar />
    <main class="max-w-[1200px] mx-auto">
      <router-view />
    </main>
  </div>
</template>
<script setup>
import Navbar from "./Navbar/Navbar.vue"
</script>
<style lang=""></style>
