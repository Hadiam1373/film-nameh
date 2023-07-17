<template>
  <v-app-bar :elevation="2">
    <div class="w-100 d-flex align-center justify-space-between px-3">
      <div class="d-flex w-50 align-center">
        <img style="width: 200px" src="../../assets/logo.svg"  alt=""/>
        <div class="mx-5 d-flex pa-3 hidden-sm-and-down">
          <span class="mx-2 v-card-title">Movies</span>
          <span class="mx-2 v-card-title">TV Shows</span>
          <span class="mx-2 v-card-title">People</span>
          <span class="mx-2 v-card-title">More</span>
        </div>
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

<script>
export default {
  name: "NavigationBar"
}
</script>

<style scoped>

</style>
