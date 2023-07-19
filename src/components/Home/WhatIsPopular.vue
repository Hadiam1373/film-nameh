<template>
  <div class="main-slider">
    <v-container>
      <div class="d-flex flex-row w-100 align-center">
        <div class="mr-5"><h3 class="text-white">What's Popular</h3></div>
        <div>
          <Switch @switchHandler="(n) => switchHandler(n)" class="mx-5" first-value="On TV" second-value="in Theatre"/>
        </div>
      </div>
    </v-container>
    <Slider :items="popular">
      <template v-slot:card="{data}">
        <v-card
          color="grey-lighten-1"
          class="ma-4 card-position"
          height="220"
          width="150"
        >
          <v-img height="300" cover :src="imgUrl+data.backdrop_path"></v-img>
          <div class="circular-position">
            <small class="text-maxWidth font-weight-bold">{{ data.title }}</small>
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
import MovieLists from "@/api/apis/MovieLists";
import TVSeries from "@/api/apis/TVSeries";

const imgUrl = import.meta.env.VITE_IMG_URL

const popular = ref()

function getPopularMovie() {
  MovieLists.Popular().then(
    (r) => {
      popular.value = r.data.results
    }
  )
}

function getPopularSeries() {
  TVSeries.getPopular().then(
    (r) => {
      popular.value = r.data.results
    }
  )
}

function switchHandler(value) {
  if (value === 'one') {
    getPopularMovie()
  } else if (value === 'two') {
    getPopularSeries()
  }
}

onMounted(() => {
  getPopularMovie()
})
</script>

<style lang="scss">
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

.text-maxWidth {
  @include textMaxWidth(150px)
}
</style>
