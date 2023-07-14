<template>
  <v-app>
    <NavigationBar/>
    <default-view  style="min-height:80vh;"/>
    <Footer/>
  </v-app>
</template>

<script setup>
  import DefaultView from './View.vue'
  import NavigationBar from "@/components/shared/NavigationBar.vue";
  import Footer from "@/components/shared/Footer.vue";
</script>
