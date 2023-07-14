<template>
  <v-card
    theme="dark"
    flat
    rounded="0"
  >
    <v-window v-model="onboarding">
      <v-window-item
        v-for="n in length"
        :key="`card-${n}`"
        :value="n"
      >
        <v-card
          height="500"
          class="d-flex justify-center align-center"
        >
          <span class="text-h2 text-red">
            Card {{ n }}
          </span>
        </v-card>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-space-between">
      <v-btn
        variant="plain"
        icon="mdi-chevron-left"
        @click="prev"
      ></v-btn>
      <v-item-group
        v-model="onboarding"
        class="text-center"
        mandatory
      >
        <v-item
          v-for="n in length"
          :key="`btn-${n}`"
          v-slot="{ isSelected, toggle }"
          :value="n"
        >
          <v-btn
            :variant="isSelected ? 'outlined' : 'text'"
            icon="mdi-record"
            @click="toggle"
          ></v-btn>
        </v-item>
      </v-item-group>
      <v-btn
        variant="plain"
        icon="mdi-chevron-right"
        @click="next"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import {ref} from "vue";

const length = ref(3)
let onboarding = ref(0)

function next() {
  onboarding.value = onboarding.value + 1 > length.value
    ? 1
    : onboarding.value + 1
}

function prev() {
  onboarding.value = onboarding.value - 1 <= 0
    ? length.value
    : onboarding.value - 1
}
</script>

<style scoped>

</style>
