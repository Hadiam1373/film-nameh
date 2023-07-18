<template>
  <NowPlaying/>
  <Trending/>
</template>

<script>
import NowPlaying from "@/components/Home/Now-Playing.vue";
import Trending from "@/components/Home/Trending.vue";

export default {
  name: "index",
  components: {Trending, NowPlaying}
}
</script>

<style scoped>

</style>
