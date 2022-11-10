<template>
  <div class="q-pa-md">
    <div class="espacio">
        <q-carousel class="tamanio rounded-borders shadow-3"
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
        </q-carousel></div>
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
.tamanio{
  width: 510px;
  height: 350px;
  padding: 0;
  }
.espacio{
  max-height: 350px;
}

</style>
