<template>
  <v-card
    theme="dark"
    flat
    rounded="0"
  >
    <v-window show-arrows v-model="onboarding">
      <template v-slot:prev="{ props }">
        <v-icon size="large" @click="props.onClick">mdi-chevron-left</v-icon>
      </template>
      <template v-slot:next="{ props }">
        <v-icon size="large" @click="props.onClick">mdi-chevron-right</v-icon>
      </template>
      <v-window-item
        v-for="item in nowPlayingData"
        :key="`card-${item}`"
      >
        <v-card
          class="d-flex justify-center align-center"
        >
          <v-img class="hidden-sm-and-down" style="object-position: 100% 20%;" height="700" cover sizes="100%"
                 :src="imgUrl+item.backdrop_path"></v-img>
          <v-img class="hidden-md-and-up" height="100%" sizes="100%" :src="imgUrl+item.backdrop_path"></v-img>
          <div class="info-section">
            <div>
              <span class="font-weight-bold v-card-title">{{ item.title }}</span>
              <div class="text-center">
                <small>Votes </small>
                <VoteAverage :vote="item.vote_average"/>
                <small> From {{ item.vote_count }} Total Votes  </small>
              </div>
            </div>
            <div>
              <p class="hidden-xs">{{ item.overview }}</p>
            </div>
          </div>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script setup>
import {onMounted, ref} from "vue";
import MovieLists from "@/api/apis/MovieLists";
import VoteAverage from "@/components/shared/VoteAverage.vue";

let onboarding = ref(0)
const nowPlayingData = ref()
const imgUrl = import.meta.env.VITE_IMG_URL


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

<style lang="scss">
.info-movie {
  position: absolute;
  bottom: 10px;
  left: 25%;
  right: 25%;
  @extend .card-info;
}

.info-section {
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  gap: 20px;
  color: #fff;
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(1, 1, 19, 0.24413515406162467) 57%);
}
</style>
