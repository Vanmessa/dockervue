<template>
  <div>
    
    <vueper-slides
  ref="vueperslides1"
  @slide="$refs.vueperslides2 && $refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
  :slide-ratio="1 / 4"
  :bullets="false">
  <vueper-slide
    v-for="i in 8"
    :key="i"
    :title="i.toString()"
    content="Navigation in sync"
    :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]" />
</vueper-slides>

<vueper-slides
  ref="vueperslides2"
  :slide-ratio="1 / 8"
  :dragging-distance="50"
  @slide="$refs.vueperslides1 && $refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
  :visible-slides="3"
  :arrows="false"
  :bullets="false"
  fixed-height="100px">
  <vueper-slide
  
  v-for="i in 8"
  :key="i"
  @click.native="$refs.vueperslides2 && $refs.vueperslides2.goToSlide(i - 1)">
    <template v-slot:content>
      <div class="vueperslide__content-wrapper" :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]">
        <div class="vueperslide__title">{{ i.toString() }}</div>
      </div>
    </template>
  </vueper-slide>
</vueper-slides>
  </div>
</template>

<script>

import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';


export default {
  components: { VueperSlides, VueperSlide },

}
</script>

<style>

</style>