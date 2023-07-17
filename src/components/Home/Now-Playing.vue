<template>
  <v-card
    theme="dark"
    flat
    rounded="0"
  >
    <v-window show-arrows v-model="onboarding">
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
          <div class="info-movie">
             <h2>{{item.title}}</h2>
              <VoteAverage :vote="item.vote_average"/>
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

<style  lang="scss">
.info-movie {
  position: absolute;
  bottom: 20px;
  left: 25%;
  right: 25%;
  @extend .card-info;
}
</style>
