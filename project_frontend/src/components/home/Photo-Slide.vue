<template>

  <vueper-slides autoplay  fixed-height="400px" :bullets="false">
  <vueper-slide 
  v-for="(slide, i) in slides" 
  :key="i" :title="slide.title" 
  :content="slide.content" 
  :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]" 
  />
</vueper-slides>
</template>

<script>

import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
export default {
  name : 'photo',
  components: { VueperSlides, VueperSlide },
  data: () => ({
  slides: [
    {
      title: 'Slide #1',
      content: 'Slide content.'
    },
    {
      title: 'Slide #2',
      content: 'Slide content.'
    },
    {
      title: 'Slide #2',
      content: 'Slide content.'
    }
  ]
})
};
</script>
<style scoped>

.container-photo{

  width: 100%; 
  height: 100%;
  max-width: 100%;
  position: relative;

}
.vueperslides__bullet .default {
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}

.vueperslides__bullet--active .default {background-color: #42b983;}

.vueperslides__bullet span {
  display: block;
  color: #fff;
  font-size: 10px;
  opacity: 0.8;
}

</style>