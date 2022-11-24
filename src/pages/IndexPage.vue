<template>
  <q-page style="background-color: #F2F2F2;" class="">
    <div class="row">
      <q-scroll-area style="height: 100vh; max-width: 250px;"
        class="col bg-white q-pt-lg q-pl-sm q-pr-sm  gt-sm hidde q-mr-sm">
        <div class="flex q-pa-xs">
          <q-toggle v-model="valueToggle" label="Nuevo" class="text-primary" />
        </div>
        <q-list bordered separator class="text-center">
          <span class="text-h6 text-primary">Marcas</span>
          <q-item v-for="(marca, key) in marcas" :key="'mar-' + key" clickable v-ripple class="">
            <q-item-section>
              <q-checkbox v-model="marca.value">
                {{ marca.label }}
                <q-badge color="bg-primary q-ml-sm" align="top">
                  {{ marca.cantidad }}
                </q-badge>
              </q-checkbox>
            </q-item-section>
          </q-item>
        </q-list>
        <q-list bordered separator class="text-center q-mt-lg">
          <span class="text-h6 text-primary">Sistemas</span>
          <q-item v-for="(sistema, key) in sistemas" :key="'sis-' + key" clickable v-ripple class="">
            <q-item-section>
              <q-checkbox v-model="sistema.value">
                {{ sistema.label }}
                <q-badge color="bg-primary q-ml-sm" align="top">
                  {{ sistema.cantidad }}
                </q-badge>
              </q-checkbox>
            </q-item-section>
          </q-item>
        </q-list>

        <q-list bordered separator class="text-center q-mt-lg">
          <span class="text-h6 text-primary">Pantallas</span>
          <q-item v-for="(pantalla, key) in pantallas" :key="'pan-' + key" clickable v-ripple class="">
            <q-item-section>
              <q-checkbox v-model="pantalla.value">
                {{ pantalla.label }}
                <q-badge color="bg-primary q-ml-sm" align="top">
                  {{ pantalla.cantidad }}
                </q-badge>
              </q-checkbox>
            </q-item-section>
          </q-item>
        </q-list>
        <div class="flex justify-center q-pt-md">
          <q-btn @click="clickFilter" color="primary" icon="fa-solid fa-filter" class="q-mr-lg" label="Filtrar" />
        </div>

      </q-scroll-area>
      <!-- Here -->
      <div class="col ">
        <div class="row q-mt-md flex  justify-center items-center ">
          <div class="lt-md hidde">
            <q-btn @click="cargarDatosOriginales" v-show="hayFiltro" square color="primary" icon="delete"
              class="q-mr-lg" />
          </div>
          <div class="col-lg-2 q-mr-lg lt-md hidde">
            <q-select outlined v-model="sortBy" :options="sortOption" color="primary"
              @update:model-value="sortSelect" />
          </div>
          <div class="lt-md hidde">
            <q-btn-dropdown color="primary" label="" icon="fa-solid fa-filter">
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>
                      <q-list bordered separator class="text-center">
                        <span class="text-h6 text-primary">Marcas</span>
                        <q-item v-for="(marca, key) in marcas" :key="'mar-' + key" clickable v-ripple class="">
                          <q-item-section>
                            <q-checkbox v-model="marca.value">
                              {{ marca.label }}
                              <q-badge color="bg-primary q-ml-sm" align="top">
                                {{ marca.cantidad }}
                              </q-badge>
                            </q-checkbox>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>
                      <q-list bordered separator class="text-center q-mt-lg">
                        <span class="text-h6 text-primary">Sistemas</span>
                        <q-item v-for="(sistema, key) in sistemas" :key="'sis-' + key" clickable v-ripple class="">
                          <q-item-section>
                            <q-checkbox v-model="sistema.value">
                              {{ sistema.label }}
                              <q-badge color="bg-primary q-ml-sm" align="top">
                                {{ sistema.cantidad }}
                              </q-badge>
                            </q-checkbox>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>
                      <q-list bordered separator class="text-center q-mt-lg">
                        <span class="text-h6 text-primary">Pantallas</span>
                        <q-item v-for="(pantalla, key) in pantallas" :key="'pan-' + key" clickable v-ripple class="">
                          <q-item-section>
                            <q-checkbox v-model="pantalla.value">
                              {{ pantalla.label }}
                              <q-badge color="bg-primary q-ml-sm" align="top">
                                {{ pantalla.cantidad }}
                              </q-badge>
                            </q-checkbox>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
              <div class="flex justify-center q-pa-md ">
                <q-btn @click="clickFilter" color="primary" icon="fa-solid fa-filter" class="q-mr-lg" label="Filtrar" />
              </div>
            </q-btn-dropdown>
          </div>
          <div class="col-lg-5 gt-sm hidde">
            <div class=" flex justify-center items-center">
              <div>
                <q-btn @click="cargarDatosOriginales" v-show="hayFiltro" square color="primary" icon="delete"
                  class="q-mr-lg" />
              </div>
              <div class="q-mr-md">
                <q-input label="Desde:" v-model.number="desde" type="number" rounded standout="bg-primary text-white"
                  dense color="white" style="max-width: 120px;">
                  <template v-slot:prepend>
                    <q-icon name="attach_money" />
                  </template>
                </q-input>
              </div>
              <div class="q-mr-md">
                <q-input label="Hasta:" v-model.number="hasta" type="number" rounded standout="bg-primary text-white"
                  dense color="white" style="max-width: 120px;">
                  <template v-slot:prepend>
                    <q-icon name="attach_money" />
                  </template>
                </q-input>
              </div>
              <div>
                <q-btn @click="filtrarPrecio" round color="primary" icon="search" class="q-mr-lg" />
              </div>
              <label for="" class="q-pr-md">ordenar por:</label>
              <q-btn-toggle v-model="sortBy" class="my-custom-toggle" no-caps rounded unelevated toggle-color="primary"
                color="white" text-color="primary" :options="sortOption" @click="sortCards" />
            </div>
          </div>
        </div>
        <div class="row q-pr-xs q-mt-xs">
          <div class="col-lg-3 col-md-3 col-xs-6 q-pa-xs q-mt-md" v-for="(item, key) in articulos" :key="key">
            <q-card class=" my-card" flat bordered>
              <q-img :ratio="16 / 9" :src="item.imagen"></q-img>

              <q-card-section>
                <div class="text-h6">${{ item.precio }}</div>
              </q-card-section>

              <q-card-section class="q-pt-none text-justify">
                <!-- {{item.titulo}} -->
                <q-item-section>
                  <q-item-label lines="1" class="">{{ item.titulo }}</q-item-label>
                </q-item-section>
              </q-card-section>
              <q-separator />
              <q-card-actions class="flex justify-end">
                <q-btn outline color="primary" :to="'compra/' + item.id">Detalles</q-btn>
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
import { db } from 'src/boot/database'
import { collection, getDocs } from 'firebase/firestore'
import { getStorage, ref as refStorage, listAll, getDownloadURL } from 'firebase/storage'

const storage = getStorage()

let articulosOriginales = []
const articulos = ref([])
const sortBy = ref('PRECIO')
const sortOption = ref([
  { label: 'PRECIO', value: 'PRECIO' },
  { label: 'FECHA', value: 'FECHA' }
])
const valorMarcas = ref([])
const valorSistemas = ref([])
const valorPantallas = ref([])
const sistemas = ref([
  { value: false, label: 'Android', cantidad: 25 },
  { value: false, label: 'IOS', cantidad: 18 },
  { value: false, label: 'Windows', cantidad: 3 }
])

const marcas = ref([
  { value: false, label: 'Samsung', cantidad: 2 },
  { value: false, label: 'Huawei', cantidad: 18 },
  { value: false, label: 'Nokia', cantidad: 3 },
  { value: false, label: 'Iphone', cantidad: 3 },
  { value: false, label: 'Xiaomi', cantidad: 3 },
  { value: false, label: 'Motorola', cantidad: 2 },
  { value: false, label: 'Otros', cantidad: 1 }
])
const pantallas = ref([
  { value: false, label: '6,0', cantidad: 25 },
  { value: false, label: '5,5', cantidad: 18 },
  { value: false, label: '5', cantidad: 3 },
  { value: false, label: '6,5', cantidad: 25 }
])

const desde = ref(0)
const hasta = ref(0)
const hayFiltro = ref(false)
const countPhotos = ref(0)
const valueToggle = ref(true)

function sortCards () {
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

function filtrarPrecio () {
  if (desde.value > 0 && hasta.value > 0) {
    hayFiltro.value = true
    articulos.value = articulos.value.filter((item) => {
      if (item.precio >= desde.value && item.precio <= hasta.value) {
        return true
      } else {
        return false
      }
    })
  }
}

async function cargarDatosOriginales () {
  articulosOriginales = []
  desde.value = 0
  hasta.value = 0
  hayFiltro.value = false
  articulos.value = []
  countPhotos.value = 0
  let count = 0
  // articulosOriginales.forEach(item => {
  //   articulos.value.push(item)
  // })
  const querySnapshot = await getDocs(collection(db, 'articulos'))
  querySnapshot.forEach((doc) => {
    articulosOriginales.push(doc.data())
    articulosOriginales[count].id = doc.id
    count++
  })
  // completeFiles()
  setImage()
}

function clickFilter () {
  marcas.value.forEach(item => {
    if (item.value) {
      valorMarcas.value.push(item.label)
    }
  })
  sistemas.value.forEach(item => {
    if (item.value) {
      valorSistemas.value.push(item.label)
    }
  })

  pantallas.value.forEach(item => {
    if (item.value) {
      valorPantallas.value.push(item.label)
    }
  })
  aplicarFiltroCheckbox()
}

function aplicarFiltroCheckbox () {
  if (valorMarcas.value.length > 0) {
    hayFiltro.value = true
    articulos.value = articulos.value.filter((item) => {
      if (valorMarcas.value.includes(item.marca)) {
        return true
      } else {
        return false
      }
    })
    valorMarcas.value = []
  }

  if (valorSistemas.value.length > 0) {
    hayFiltro.value = true
    articulos.value = articulos.value.filter((item) => {
      if (valorSistemas.value.includes(item.model)) {
        return true
      } else {
        return false
      }
    })
    valorSistemas.value = []
  }

  if (valorPantallas.value.length > 0) {
    hayFiltro.value = true
    articulos.value = articulos.value.filter((item) => {
      if (valorPantallas.value.includes(item.pantalla)) {
        return true
      } else {
        return false
      }
    })
    valorPantallas.value = []
  }

  hayFiltro.value = true
  let validar = ''
  if (valueToggle.value === true) {
    validar = 'Nuevo'
  } else {
    validar = 'Usado'
  }
  articulos.value = articulos.value.filter(item => {
    if (validar.includes(item.group)) {
      return true
    } else {
      return false
    }
  })
}

function setImage () {
  articulosOriginales.forEach((item) => {
    const listRef = refStorage(storage, item.id)
    listAll(listRef)
      .then((res) => {
        if (res.items.length > 0) {
          getDownloadURL(refStorage(storage, res.items[0].fullPath))
            .then((url) => {
              countPhotos.value++
              item.imagen = url
              // console.log(url)
              completeFiles()
            })
            .catch((error) => {
              console.log(error)
            })
        }
      }).catch((error) => {
        console.log(error)
      })
  })
}

function completeFiles () {
  if (countPhotos.value === articulosOriginales.length) {
    articulos.value = [...articulosOriginales]
    sortCards()
  }
}

onMounted(() => {
  cargarDatosOriginales()
})

</script>
