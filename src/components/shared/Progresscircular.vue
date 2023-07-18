<template>
  <v-progress-circular
    :color="computedColor"
    :model-value="vote"
    :size="40"
    :width="6"
  >
    <span class="font-weight-bold">
       {{ vote }}
    </span>
  </v-progress-circular>
</template>

<script setup>
import {computed, ref} from "vue";

let color = ref()
const prop = defineProps(['vote'])
let vote = computed(() => {
  return (prop.vote * 10).toFixed(0)
})
let computedColor = computed(() => {
  if (prop.vote >= 7) {
    color.value = '#2bb57a'
  } else if (prop.vote >= 4) {
    color.value = '#FCE83A'
  } else if (prop.vote < 4) {
    color.value = '#e85050'
  }
  return color.value
})
</script>

<style scoped>

</style>
