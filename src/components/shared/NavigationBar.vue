<template>
  <v-app-bar :elevation="2">
    <div class="w-100 d-flex align-center justify-space-between px-3">
      <div class="d-flex align-center">
        <span class="font-weight-bold mr-5">Title</span>
        <div class="mx-5 pa-3 hidden-sm-and-down">
          <span class="mx-2">Item1</span>
          <span class="mx-2">Item1</span>
          <span class="mx-2">Item1</span>
          <span class="mx-2">Item1</span>
        </div>
      </div>
      <div class="d-flex align-center justify-space-between">
        <div class="d-flex align-center mx-5">
          <v-btn icon="mdi-heart"></v-btn>
          <v-btn icon="mdi-magnify"></v-btn>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </div>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon class="hidden-lg hidden-md" :elevation="0"></v-app-bar-nav-icon>
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
