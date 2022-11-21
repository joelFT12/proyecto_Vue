<template>
  <q-layout view="lHh lpR fFf">
    <q-header bordered>
      <q-toolbar>
        <q-btn class="lt-md hidde" flat dense round icon="fa-solid fa-bars" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <i class="fa-solid fa-bullhorn"></i>
          Tienda CellPhone
        </q-toolbar-title>
        <div class="gt-sm hidde">
          <q-btn class="q-mr-md" color="secondary" label="Inicio "/>
          <q-btn class="q-mr-md" color="secondary" label="Estadisticas" />
          <!-- <q-btn class="q-mr-md" round color="primary" icon="fa-solid fa-circle-plus" /> -->
          <q-btn class="q-mr-md" round color="primary" icon="fa-solid fa-cart-shopping" />
        </div>
        <div class="gt-sm hidde"><modalAgregar></modalAgregar></div>
      </q-toolbar>
    </q-header>
    <!-- <q-footer reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-space/>
          &copy; 2022 FMOcc: | Fundamentos de programacion en internet
        <q-space/>
      </q-toolbar>
    </q-footer> -->
    <q-drawer v-model="leftDrawerOpen" class="bg-primary text-white">
      <q-list>
        <q-item-label  header class="text-white row justify-center">
          <i class="fa-solid fa-bullhorn"></i>
          <span class="q-ml-sm">Tienda CellPhone</span>
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

  <!-- footer -->
  <div class="mobile-hide">
    <footerP></footerP>
  </div>

  <div class="desktop-hide">
    <footerM></footerM>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import modalAgregar from 'components/modalAgregar.vue'
import footerP from 'components/footerP.vue'
import footerM from 'components/footerM.vue'
const linksList = [
  {
    title: 'Inicio',
    caption: '',
    icon: 'fa-solid fa-house',
    link: 'https://quasar.dev'
  },
  {
    title: 'Nuevo Anuncio',
    caption: '',
    icon: 'fa-solid fa-circle-plus',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Carrito',
    caption: '',
    icon: 'fa-solid fa-cart-shopping',
    link: 'https://chat.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    modalAgregar,
    footerP,
    footerM
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500;700&family=Quicksand:wght@700&family=Space+Mono&display=swap');

*{
    font-family: 'Quicksand', sans-serif;

}

</style>
