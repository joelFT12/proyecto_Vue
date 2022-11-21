<template>
  <div class="row">
    <div class="espacios ">
        <q-carousel class="tamanios rounded-borders shadow-3"  style="max-width: 350px ; max-height:250px"
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide class="bg-purple-5" :name="1"/>
          <q-carousel-slide class="bg-purple-6" :name="2"/>
          <q-carousel-slide class="bg-purple-7" :name="3"/>
          <q-carousel-slide class="bg-purple-8" :name="4"/>
        </q-carousel>
      </div>
</div>

</template>

<script>
import { ref } from 'vue'
export default {
  name: 'carruselImagen',
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>

<style>
.tamanios{
  width: 510px;
  height: 350px;
  padding: 0;
  }
.espacios{
  max-height: 350px;
}

</style>
