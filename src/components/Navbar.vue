<template lang="">
  <header class="bg-white h-16 shadow flex justify-between items-stretch sticky top-0 z-10">
    <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full px-5 text-orange-500 font-bold">{{
      $t("Home")
    }}</router-link>
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
        >{{ $t("search_meals") }}</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
        >{{ $t("meals_by_letter") }}</router-link
      >
      <router-link
        :to="{ name: 'Ingredients' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
        >{{ $t("meals_by_ingredient") }}</router-link
      >
    </div>
  </header>
</template>
