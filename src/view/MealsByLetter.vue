<template lang="">
  <div class="flex flex-col p-8">
    <div class="flex justify-center gap-2 mt-2">
      <router-link
        :key="letter"
        v-for="letter of letters"
        :to="{ name: 'byLetter', params: { letter } }"
        class="dark:text-white hover:font-bold transition-all"
        >{{ letter }}</router-link
      >
    </div>
    <Meals :meals="meals" />
  </div>
</template>
<script setup>
import { useRoute } from "vue-router"
import { computed, ref, watch } from "vue"

import store from "../store"
import Meals from "../components/Meals.vue"

const route = useRoute()

const letters = ref("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))
const meals = computed(() => store.state.searchedMealsByLetter)

watch(route, () => {
  if (route.params.letter) store.dispatch("searchMealsByLetter", route.params.letter)
})
</script>
