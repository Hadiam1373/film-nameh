<template>
  <NowPlaying/>
  <Trending/>
  <what-is-popular/>
</template>

<script>
import NowPlaying from "@/components/Home/Now-Playing.vue";
import Trending from "@/components/Home/Trending.vue";
import WhatIsPopular from "@/components/Home/WhatIsPopular.vue";

export default {
  name: "index",
  components: {WhatIsPopular, Trending, NowPlaying}
}
</script>

<style scoped>

</style>
