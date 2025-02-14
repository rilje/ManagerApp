<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigacija from './components/Navigacija.vue';
import { ref } from 'vue';
import Footer from './components/Footer.vue';
const today = ref(new Date().toLocaleDateString('sr-RS', { 
  day: '2-digit', 
  month: '2-digit', 
  year: 'numeric' 
}));
</script>

<template>

  <Navigacija />
  <br>
  <RouterView class="container "/>
  <Footer />
</template>

<style>
body {
    zoom: 0.8; /* Zumira sadržaj na 80% */
}


</style>
