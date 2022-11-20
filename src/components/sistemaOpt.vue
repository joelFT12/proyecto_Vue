<template>
  <div class="">
    <div class="q-gutter-y-md column">

      <!-- equivalent -->
      <q-select color="purple-9" filled dense v-model="model" :options="options" label="Sistema">
        <template v-if="model" v-slot:append >
          <q-icon style="font-size: .85em; margin: .3em;" name="cancel" @click.stop.prevent="model = null" class="icono cursor-pointer" />
        </template>
      </q-select>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'sistemaOpt',

  setup () {
    return {
      model: ref(''),

      options: [
        'Android', 'Ios', 'Windows'
      ]
    }
  }
}
</script>
<style>
.icono{
width: 10px;
}

</style>
