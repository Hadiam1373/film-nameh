<template>
  <v-app-bar :elevation="2">
    <div class="w-100 d-flex align-center justify-space-between px-3">
      <div class="d-flex w-75 align-center">
        <img style="width: 200px" src="../../assets/logo.svg" alt=""/>
        <v-row class="mx-5 pa-3 hidden-sm-and-down">
          <Menu activator="Movies" :items="moviesItem"/>
          <Menu activator="TV Shows" :items="tvItem"/>
          <Menu activator="People" :items="peopleItem"/>
          <Menu activator="More" :items="moreItem"/>
        </v-row>
      </div>
      <div class="d-flex align-center justify-space-between">
        <div class="d-flex align-center mx-5">
          <v-btn icon="mdi-magnify"></v-btn>
        </div>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon class="hidden-lg-and-up hidden-md" :elevation="0"></v-app-bar-nav-icon>
      </div>

    </div>
  </v-app-bar>
</template>

<script setup>
import Menu from "@/components/shared/Menu.vue";

const moviesItem = [
  {title: 'Popular', to: '/'},
  {title: 'Now Playing', to: '/v'},
  {title: 'Upcoming', to: '/fe'},
  {title: 'Top Rated', to: '/e'}
]
const tvItem = [
  {title: 'Popular', to: '/r'},
  {title: 'Airing Today', to: '/h'},
  {title: 'On TV', to: '/k'},
  {title: 'Top Rated', to: '/vc'}
]
const peopleItem = [
  {title: 'Popular People', to: '/df'},
]
const moreItem = [
  {title: 'Discussions', to: '/dfg'},
  {title: 'Leaderboard', to: '/dfg'},
  {title: 'Support', to: '/df'},
]
</script>

<style scoped>

</style>
