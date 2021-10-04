import Vue from 'vue'
import Home from '../components/Home.vue'
import PersonDetail from '../components/PersonDetail.vue'
import PlanetDetail from '../components/PlanetDetail.vue'
import StarshipDetail from '../components/StarshipDetail.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/planetDetail', component: PlanetDetail },
  { path: '/personDetail', component: PersonDetail },
  { path: '/starshipDetail', component: StarshipDetail },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
// export const app = new Vue({
//   router
// }).$mount('#app')

// Now the app has started!