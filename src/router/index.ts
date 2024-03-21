// Composables

import { createRouter, createWebHistory } from 'vue-router';
import About from '@/views/About.vue';
import Home from '@/views/Home.vue';
import Blog from '@/views/Blog.vue';

// TOOLS ROUTE IMPORT 
import HeadingText from '@/components/TheTools/HeadingText.vue';
import TheDashboardVue from '@/components/TheTools/TheDashboard.vue';


const routes = [
  {
    path: '/',
    routes: [

    ],

    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: '/about',
        name: '/About',
        component: About,
      },
      {
        path: '/blog',
        name: '/Blog',
        component: Blog,
      },

      /** TOOLS ROUTING */

      {
        path: '/heading-extractor',
        name: '/Heading',
        component: HeadingText,
      },
      {
        path: '/about',
        name: '/About',
        component: About,
      },
      {
        path: '/blog',
        name: '/Blog',
        component: Blog,
      },
      {
        path: '/tools',
        name: '/tools',
        component: TheDashboardVue,
      },
    ],

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
