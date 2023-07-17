<template>
  <v-chip
    class="ma-2"
    :color="computedColor"
    text-color="white"
  >
    {{ props.vote }}
  </v-chip>
</template>

<script setup>
import {computed, ref} from "vue";

const props = defineProps(['vote'])
let color = ref('')
let computedColor = computed(() => {
  if(props.vote >= 7 ){
    color.value = '#2bb57a'
  }
  else if(props.vote >= 4){
    color.value = '#FCE83A'
  }
  else if(props.vote < 4){
    color.value = '#e85050'
  }
  return color.value
})
</script>

<style scoped>

</style>
