<template>
<div class="bg-white precio q-mb-xl " >
  <div class="q-gutter-y-sm ">
    <label class="col-lg-2 col-md-2 col-sm-2 col-xs-3" style="margin-top:-12px">Precio: </label>
    <div class="col-5">
      <q-form
      @submit="onSubmit"
      @reset="onReset"
    >
      <q-input
        dense
        color="purple-9"
        bg-color="white"
        type="tel"
        filled
        v-model="telefono"
        label="Precio"
        lazy-rules
        :rules="[val => val !== null && val !== '' || 'Escribe un numero',
        val => val > 0 && val < 99999999 || 'Ingresa otro numero']"
      />
    </q-form>

    </div>

  </div>
</div>

  <div class="q-pa-md q-gutter-lg">
    <q-btn
      class="iconos"
      dark-percentage
      unelevated
      color="white"
      text-color="purple-9"
      @click="startComputing(0)"
      label="Cancelar"
      icon="fa-solid fa-circle-xmark"

    />

  <q-btn
      :loading="progress[1].loading"
      :percentage="progress[1].percentage"
      dark-percentage
      unelevated
      color="white"
      text-color="purple-9"
      @click="startComputing(1)"
      label="Guardar"
      icon="fa-solid fa-floppy-disk"

    />
  </div>

</template>

<script>
import { ref, onBeforeUnmount } from 'vue'

export default {
  setup () {
    const precio = ref(null)
    const progress = ref([
      { loading: false, percentage: 0 },
      { loading: false, percentage: 0 },
      { loading: false, percentage: 0 }
    ])

    const intervals = [null, null, null]

    function startComputing (id) {
      progress.value[id].loading = true
      progress.value[id].percentage = 0

      intervals[id] = setInterval(() => {
        progress.value[id].percentage += Math.floor(Math.random() * 8 + 10)
        if (progress.value[id].percentage >= 100) {
          clearInterval(intervals[id])
          progress.value[id].loading = false
        }
      }, 700)
    }

    onBeforeUnmount(() => {
      intervals.forEach(val => {
        clearInterval(val)
      })
    })

    return {
      progress,
      startComputing,
      precio,

      onReset () {
        precio.value = null
      }
    }
  }
}
</script>

<style>
.precio{
  border-radius: .5em;
  padding: 1.5em;
  }
</style>
