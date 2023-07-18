<template>
  <div class="wrapper-switch">
    <div class="selector pointer">
      <div class="active" :class="{'active-one':selected === 'one' , 'active-two':selected === 'two'}"></div>
      <div @click="changeSide('one')" class="first">
        <span>{{ prop.firstValue }}</span>
      </div>
      <div @click="changeSide('two')" class="second">
        <span>{{ prop.secondValue }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const prop = defineProps(['firstValue', 'secondValue'])
const emit = defineEmits(['switchHandler'])
let selected = ref('one')

function changeSide(side) {
  selected.value = side
  emit('switchHandler', side)
}

</script>

<style scoped lang="scss">
.wrapper-switch {
  min-width: 192px;
  color: #ffffff;
  position: relative;

  .selector {
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #25293C;
    border-radius: 20px;
  }

  .first {
    width: 50%;
    height: 100%;
    border-radius: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    left: 0;
    position: absolute;
  }

  .second {
    width: 50%;
    height: 100%;
    border-radius: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    right: 0;
    position: absolute;
  }
}

.active {
  background-color: #00D1BC !important;
  font-weight: bold;
  width: 50%;
  height: 100%;
  border-radius: 20px;
  position: absolute;
  transition: left .2s;

  &.active-one {
    left: 0;
  }

  &.active-two {
    left: calc(100% - 50%);
  }
}


</style>
