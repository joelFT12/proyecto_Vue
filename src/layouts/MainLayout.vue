<template>
  <q-layout view="lHh lpR fFf">
    <q-header bordered>
      <q-toolbar>
        <q-btn class="" flat dense round icon="fa-solid fa-bars" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Tienda CellPhone
        </q-toolbar-title>
        <div>
          <q-btn class="q-mr-md" color="secondary" label="Inicio "/>
          <q-btn class="q-mr-md" color="primary" label="Estadisticas" />
          <q-btn class="q-mr-md" round color="primary" icon="fa-solid fa-circle-plus" />
          <q-btn class="q-mr-md" round color="primary" icon="fa-solid fa-cart-shopping" />

        </div>
      </q-toolbar>
    </q-header>
    <q-footer reveal elevated class="q-secondary">
      <q-toolbar>
        <q-toolbar-title class="text-center">FMOcc: Fundamentos de programacion en internet</q-toolbar-title>
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
