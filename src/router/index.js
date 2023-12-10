import { createWebHistory, createRouter } from "vue-router"

import DefaultLayout from "../components/DefaultLayout.vue"
import DefaultGuest from "../components/DefaultGuest.vue"
import Home from "../view/Home.vue"

const MealDetails = () => import("../view/MealDetails.vue")
const MealsByName = () => import("../view/MealsByName.vue")
const MealsByLetter = () => import("../view/MealsByLetter.vue")
const MealsByIngredients = () => import("../view/MealsByIngredients.vue")
const Ingredients = () => import("../view/Ingredients.vue")

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails
      },
      {
        path: "/by-name",
        name: "byName",
        component: MealsByName
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter
      },
      {
        path: "/ingredient",
        name: "Ingredients",
        component: Ingredients
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredients
      }
    ]
  },
  {
    path: "/guest",
    component: DefaultGuest,
    children: []
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// router.beforeEach((to, from, next) => {
//   console.log(to, from, next)
//   const lang = to.params.lang || "uz"
//   next()
// })
// router.beforeResolve(async (to) => {
//   console.log({ to })
//   if (to.meta.requiresCamera) {
//     try {
//       await askForCameraPermission()
//     } catch (error) {
//       if (error instanceof NotAllowedError) {
//         return false
//       } else {
//         throw error
//       }
//     }
//   }
// })

export default router
