<template>
  <q-layout view="lHh lpR fFf">
    <q-header bordered>
      <q-toolbar>
        <q-btn class="lt-md hidde" flat dense round icon="fa-solid fa-bars" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="gt-sm hidde">
          <i class="fa-solid fa-bullhorn"></i>
          Tienda CellPhone
        </q-toolbar-title>

          <div class="q-mx-sm col-lg-6 col-md-6 col-xs-10 baraa" >
            <q-input rounded outlined dense type="search" bg-color="white" v-model="text" style="max-width:650px">
              <template v-slot:prepend>
                <q-avatar>
                  <q-icon name="fa-solid fa-magnifying-glass" />

                </q-avatar>

              </template>
            </q-input>
          </div>

        <div class="gt-sm hidde">
          <q-btn class="q-mr-md" color="secondary" to="../" label="Inicio "/>
          <q-btn class="q-mr-md" color="secondary" label="Estadisticas" />
          <!-- <q-btn class="q-mr-md" round color="primary" icon="fa-solid fa-circle-plus" /> -->
          <q-btn class="q-mr-md" round color="primary" icon="fa-solid fa-cart-shopping" />
        </div>
        <div class="gt-sm hidde"><modalAgregar></modalAgregar></div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" class="bg-primary text-white">
      <q-list>
        <q-item-label  header class="text-white row justify-center">
          <i class="fa-solid fa-bullhorn"></i>
          <span class="q-ml-sm">Tienda CellPhone</span>
        </q-item-label>

        <!-- <q-item-label  header class="text-white row justify-center" >
          <i class="fa-solid fa-house" to="../"></i>
          <span class="q-ml-sm">Inicio</span>
        </q-item-label> -->

      <q-item
        clickable
        tag="a"
      >
        <q-item-section  @click="$router.push('/')">
        <i class="fa-solid fa-house"></i>
        <!-- <q-btn class="q-mr-md" icon="fa-solid fa-house"  to="../" label="Inicio "/> -->
        </q-item-section>
        <q-item-section>
          <q-item-label>Inicio</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
      clickable
      tag="a"
      >
        <q-item-section>
          <div class=""><modalAgregar></modalAgregar></div>
          <!-- <i class="fa-solid fa-house" @click="$router.push('/')"></i> -->
        <!-- <q-btn class="q-mr-md" icon="fa-solid fa-house"  to="../" label="Inicio "/> -->
        </q-item-section>
        <q-item-section>
          <q-item-label>Nuevo anuncio</q-item-label>
        </q-item-section>
    </q-item>

        <!-- <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" /> -->
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
// import EssentialLink from 'components/EssentialLink.vue'
import modalAgregar from 'components/modalAgregar.vue'
import footerP from 'components/footerP.vue'
import footerM from 'components/footerM.vue'
const linksList = [
  {
    title: 'Inicio',
    caption: '',
    icon: 'fa-solid fa-house',
    to: '../'
  },
  {
    title: 'Nuevo Anuncio',
    caption: '',
    icon: 'fa-solid fa-circle-plus',

    link: ''
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
    // EssentialLink,
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
.baraa{
  margin-right: 3em;
}
</style>
