<template>
  <v-menu
    open-on-hover
  >
    <template v-slot:activator="{ props }">
      <span class="v-card-title pointer"  v-bind="props">
        {{ prop.activator }}
      </span>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in prop.items"
        :key="index"
        :active="route.path === item.to"
        active-color="green"
      >
        <v-list-item-title class="pointer" @click="router.push(item.to)">{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
const prop = defineProps(['activator', 'items'])
</script>

<style>
</style>
