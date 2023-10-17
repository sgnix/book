import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';

// Define route components
const routes = [
  { path: '/login', component: Login },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
