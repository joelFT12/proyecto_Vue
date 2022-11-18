<template>
  <q-layout view="lHh lpR fFf">
    <q-header bordered class="bg-purple-8">
      <q-toolbar>
        <q-btn flat dense round icon="fa-solid fa-bars" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Cellphone Ebay
        </q-toolbar-title>

      </q-toolbar>
    </q-header>
    <q-footer reveal elevated class="bg-purple-3 text-dark ">
      <q-toolbar>
        <q-toolbar-title class="text-center">Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <q-drawer v-model="leftDrawerOpen">
      <q-list>
        <q-item-label header>
          Tienda CellPhone
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

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
  },
  {
    title: 'Estadisticas',
    caption: '',
    icon: 'fa-solid fa-chart-bar',
    link: 'https://forum.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
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

* {
  font-family: 'Quicksand', sans-serif;

}
</style>
