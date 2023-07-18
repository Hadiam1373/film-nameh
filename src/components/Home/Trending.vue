<template>
  <div class="main-slider">
    <v-container>
      <div class="d-flex flex-row w-100 align-center">
        <div class="mr-5"><h3 class="text-white">Trending</h3></div>
        <div>
          <Switch @switchHandler="(n) => switchHandler(n)" class="mx-5" first-value="Day" second-value="Week"/>
        </div>
      </div>
    </v-container>
    <Slider :items="trending">
      <template v-slot:card="{data}">
        <v-card
          color="grey-lighten-1"
          class="ma-4"
          height="225"
          width="150"
        >
          <v-img height="225" cover :src="imgUrl+data.backdrop_path"></v-img>
        </v-card>
      </template>
    </Slider>
  </div>
</template>

<script setup>
import Slider from "@/components/shared/Slider.vue";
import Trending from "@/api/apis/Trending";
import {onMounted, ref} from "vue";
import Switch from "@/components/shared/Switch.vue";

const imgUrl = import.meta.env.VITE_IMG_URL

const trending = ref()

function getAllTrending() {
  Trending.allTrending('day').then(
    (r) => {
      trending.value = r.data.results
    }
  )
}

function switchHandler(value) {
  Trending.allTrending(value).then(
    (r) => {
      trending.value = r.data.results
    }
  )
}

onMounted(() => {
  getAllTrending()
})
</script>

<style scoped>

</style>
