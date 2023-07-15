<template>
  <v-card
    theme="dark"
    flat
    rounded="0"
  >
    <v-window v-model="onboarding">
      <v-window-item
        v-for="item in nowPlayingData"
        :key="`card-${item}`"
        :value="item"
      >
        <v-card
          class="d-flex justify-center align-center"
        >
         <v-img style="object-position: 100% 20%;" height="700" cover sizes="100%" :src="imgUrl+item.backdrop_path"></v-img>
         <div class="info-movie">
           dfgdfgfdgfdgdfg
         </div>
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
          v-for="n in nowPlayingData"
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
import {onMounted, ref} from "vue";
import MovieLists from "@/api/apis/MovieLists";


const length = ref(3)
let onboarding = ref(0)
const nowPlayingData = ref()
const imgUrl = import.meta.env.VITE_IMG_URL

function next() {
  onboarding.value = onboarding.value + 1 > nowPlayingData.value.length
    ? 1
    : onboarding.value + 1
}

function prev() {
  onboarding.value = onboarding.value - 1 <= 0
    ? nowPlayingData.value.length
    : onboarding.value - 1
}

function nowPlaying() {
  MovieLists.nowPlaying().then(
    (r) => {
      nowPlayingData.value = r.data.results
    }
  )
}

onMounted(() => {
  nowPlaying()
})

</script>

<style scoped>
.info-movie{
  position: absolute;
  bottom: 20px;
  left: 25%;
  right: 25%;
  background-color: rgba(0, 0, 0, 0.82);
  color: white;
}
</style>
