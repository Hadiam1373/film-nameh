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
          class="ma-4 card-position"
          height="225"
          width="150"
        >
          <v-img height="225" cover :src="imgUrl+data.backdrop_path"></v-img>
          <div class="circular-position">
            <small>{{ data.title}}</small>
            <Progresscircular class="circular" :vote="data.vote_average"/>
          </div>
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
import Progresscircular from "@/components/shared/Progresscircular.vue";

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

<style scoped lang="scss">
.card-position {
  position: relative;

  .circular-position {
    position: absolute;
    bottom: 0;
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(1, 1, 19, 0.24413515406162467) 57%);
    height: 70px;
    width: 100%;
    text-align: left;
    color: white;
    padding: 5px;

    .circular {
      position: absolute;
      bottom: 3px;
      right: 5px;
    }
  }
}
</style>
