<template>
  <q-page style="background-color: #F2F2F2;" class="">
    <div class="row">
      <q-scroll-area style="height: 100vh; max-width: 250px;"
        class="col bg-white q-pt-lg q-pl-sm q-pr-sm  gt-sm hidde q-mr-sm">

        <q-list bordered separator class="text-center">
          <span class="text-h6 text-primary">Marcas</span>
          <q-item clickable v-ripple class="">
            <q-item-section>
              <q-checkbox v-model="right" label="Samsung">
                <q-badge color="bg-primary q-ml-sm" align="top">
                  23
                </q-badge>
              </q-checkbox>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <!-- Here -->
      <div class="col ">
        <div class="row q-mt-md flex  justify-center items-center ">
          <div class="col-lg-2 q-mr-lg lt-md hidde">
            <q-select outlined v-model="sortBy" :options="sortOption" color="primary" @update:model-value="sortSelect"/>
          </div>
          <div class="col-lg-5 gt-sm hidde">
            <div class=" flex justify-center items-center">
              <label for="" class="q-pr-md">ordenar por:</label>
              <q-btn-toggle v-model="sortBy" class="my-custom-toggle" no-caps rounded unelevated toggle-color="primary"
                color="white" text-color="primary" :options="sortOption" @click="sortCards" />
            </div>
          </div>
        </div>
        <div class="row q-pr-xs q-mt-xs">
          <div class="col-lg-3 col-md-3 col-xs-6 q-pa-xs q-mt-md" v-for="(item, key) in articulos" :key="key">
            <q-card class=" my-card" flat bordered>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>

              <q-card-section>
                <div class="text-h6">${{ item.precio }}</div>
              </q-card-section>

              <q-card-section class="q-pt-none text-justify">
                Samsung J6, Pantalla de 5.5
                64GB, 2GB Ram, Color Negro
              </q-card-section>
              <q-separator />
              <q-card-actions class="flex justify-end">
                <q-btn outline color="primary" to="compra/ertb">Detalles</q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { onMounted, ref } from 'vue'
const articulosOriginales = [
  { id: '001', precio: 24.25, titulo: 'Samsung J6, Pantalla de 5.5 64GB, 2GB Ram, Color Negro', vendedor: 'juan perez', telefono: '806045-3456', fecha: '2013-06-03' },
  { id: '002', precio: 60.05, titulo: 'Samsung J6, Pantalla de 5.5 64GB, 2GB Ram, Color Negro', vendedor: 'juan perez', telefono: '806045-3456', fecha: '2013-01-03' },
  { id: '003', precio: 46.32, titulo: 'Samsung J6, Pantalla de 5.5 64GB, 2GB Ram, Color Negro', vendedor: 'juan perez', telefono: '806045-3456', fecha: '2013-01-02' },
  { id: '004', precio: 10.89, titulo: 'Samsung J6, Pantalla de 5.5 64GB, 2GB Ram, Color Negro', vendedor: 'juan perez', telefono: '806045-3456', fecha: '2013-01-04' },
  { id: '005', precio: 67.66, titulo: 'Samsung J6, Pantalla de 5.5 64GB, 2GB Ram, Color Negro', vendedor: 'juan perez', telefono: '806045-3456', fecha: '2013-10-03' },
  { id: '006', precio: 67.25, titulo: 'Samsung J6, Pantalla de 5.5 64GB, 2GB Ram, Color Negro', vendedor: 'juan perez', telefono: '806045-3456', fecha: '2013-07-30' },
  { id: '007', precio: 36.02, titulo: 'Samsung J6, Pantalla de 5.5 64GB, 2GB Ram, Color Negro', vendedor: 'juan perez', telefono: '806045-3456', fecha: '2013-08-30' }
]

const articulos = ref([])
const sortBy = ref('PRECIO')
const sortOption = ref([
  { label: 'PRECIO', value: 'PRECIO' },
  { label: 'FECHA', value: 'FECHA' }
])

function sortCards () {
  console.log(sortBy.value)
  if (sortBy.value === 'PRECIO') {
    articulos.value.sort((a, b) => a.precio - b.precio)
  }
  if (sortBy.value === 'FECHA') {
    articulos.value.sort((a, b) => {
      if (a.fecha < b.fecha) {
        return -1
      }
      if (a.fecha > b.fecha) {
        return 1
      }

      return 0
    })
  }
}

function sortSelect (value) {
  sortBy.value = value.value
  sortCards()
}

onMounted(() => {
  articulosOriginales.forEach(item => {
    articulos.value.push(item)
  })
  sortCards()
})

</script>
