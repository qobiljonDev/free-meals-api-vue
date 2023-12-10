<template>
  <h3 class="font-bold text-4xl text-orange-500 px-8 mt-12">
    Meals for {{ route.params.ingredient }}
  </h3>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const meals = computed(() => store.state.searchedMealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
