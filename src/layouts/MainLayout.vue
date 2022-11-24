<template>
  <q-layout view="lHh lpR fFf">
    <q-header bordered>
      <q-toolbar>
        <q-btn class="lt-md hidde" flat dense round icon="fa-solid fa-bars" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="gt-sm hidde ">
          <i class="fa-solid fa-bullhorn"></i>
          Tienda CellPhone
        </q-toolbar-title>

          <div class="q-mx-sm col-lg-6 col-md-6 col-xs-10 baraa " >
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
      <!-- <q-list class="row col-12">
        <q-item-label  header class="text-white row justify-center q-my-sm q-ml-xl">
          <i class="fa-solid fa-bullhorn q-mr-lg"></i>
          <span class="q-ml-sm ">Tienda CellPhone</span>
        </q-item-label>
        <q-separator color="grey" />
      <q-item
        clickable
        tag="a"
        @click="$router.push('/')"
        class="q-my-sm col-12"

      ><q-separator color="white" />
        <q-item-section class="col-5">
        <i class="fa-solid fa-house iconos "></i> -->
        <!-- <q-btn class="q-mr-md" icon="fa-solid fa-house"  to="../" label="Inicio "/> -->
        <!-- </q-item-section>
        <q-item-section class="labeles2">
          <q-item-label >Inicio</q-item-label>
        </q-item-section>
      </q-item>

      <q-item
      clickable
      tag="a"
      class="col-12"
      >
        <modalAgregar class="iconos2"></modalAgregar>
        <q-item-section class="labales">
          <q-item-label >Nuevo anuncio</q-item-label>
        </q-item-section>
    </q-item> -->

        <!-- <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" /> -->
      <!-- </q-list> -->

      <q-list class="bg-primary text-white rounded-borders  blures">
        <q-item class=" q-py-md  margen" >
          <q-item-section avatar>
            <q-avatar>
              <i class="fa-solid fa-bullhorn q-mr-lg"></i>
            </q-avatar>
          </q-item-section>
          <q-item-section>Tienda CellPhone</q-item-section>
        </q-item>

        <q-separator dark />

        <q-item class=" q-py-md " clickable
        tag="a"
        @click="$router.push('/')">
          <q-item-section avatar class="margen1">
            <q-avatar>
              <i class="fa-solid fa-house"></i>
            </q-avatar>
          </q-item-section>
          <q-item-section>Inicio</q-item-section>
        </q-item>
        <q-separator dark />
        <q-item class=" q-py-md " clickable >
          <q-item-section avatar class="margen2">
            <q-avatar>
              <modalAgregar></modalAgregar>
            </q-avatar>
          </q-item-section>
          <q-item-section>Nuevo anuncio</q-item-section>
        </q-item>
        <q-separator dark />
        <q-item class=" q-py-md " clickable>
          <q-item-section avatar class="margen3">
            <q-avatar>
              <i class="fa-solid fa-cart-shopping"></i>

            </q-avatar>
          </q-item-section>
          <q-item-section>Carrito</q-item-section>
        </q-item>
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
.margen{
  margin-left: 2.7em;
}
.margen1{
  margin-left: 4.8em;
}
.margen2{
  margin-left: 2.9em;
}
.margen3{
  margin-left: 4.8em;
}

.iconos{
  margin-left: 5em;
  margin-top: -2px;

}
.iconos2{
  margin-left: 3em;
  margin-top: -2px;
}
.labales{
  margin-left: 20px;
}
.labales2{
  margin-left: 30px;

}
</style>
