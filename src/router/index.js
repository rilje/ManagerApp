import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },


    {
      path: '/registracija',
      name: 'registracija',
      component: () => import('../views/RegistracijaView.vue'),
    },



    {
      path: '/log-in',
      name: 'log-in',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/svi-radnici',
      name: 'svi-radnici',
      component: () => import('../views/SviRadnici.vue'),
   
    },
    {
      path: '/radnik/dodaj',
      name: 'dodaj-radnika',
      component: () => import('../views/DodajRadnika.vue'),

    },
    {
      path: '/projects',
      name: 'projects-all',
      component: () => import('../views/ProjectsView.vue'),

    },
    {
      path: '/projects/add',
      name: 'projects-add',
      component: () => import('../views/ProjectsAddView.vue'),
    },
    {
      path: '/single-project/:id',
      name: 'single-project',
      component: () => import('../views/SingleProjectView.vue'),
      props: true
    },
    {
      path: '/organizuj-radnike/:id',
      name: 'organizuj-radnike',
      component: () => import('../views/OrganizujRadnikeView.vue'),
      props: true
    },
    // {
    //   path: '/inicijalizacija',
    //   name: 'inicijalizacija',
    //   component: () => import('../views/InicijalizacijaView.vue'),
    // },
  ],
})

export default router
