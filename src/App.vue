<template>
  <v-app>
    <TheNavbar />
    <v-main>
      <RouterView />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script setup lang="ts">
import TheNavbar from './layouts/default/TheNavbar.vue';
import TheFooter from './layouts/default/TheFooter.vue';
</script>
