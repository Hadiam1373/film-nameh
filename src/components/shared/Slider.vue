<template>
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-success"
      show-arrows
      center-active
    >
      <v-slide-group-item
        v-for="(item , index) in prop.items"
        :key="index"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <slot name="card" :data="item">

        </slot>
      </v-slide-group-item>
    </v-slide-group>
</template>

<script setup>
import {ref} from "vue";

const model = ref()
const prop = defineProps(['items'])
</script>

<style scoped>

</style>
