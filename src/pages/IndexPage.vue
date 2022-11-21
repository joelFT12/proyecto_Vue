<template>
  <q-page style="background-color: #F2F2F2;" class="">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->

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
          <q-item clickable v-ripple class="">
            <q-item-section>
              <q-checkbox v-model="right" label="Huawei" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="">
            <q-item-section>
              <q-checkbox v-model="right" label="Nokia" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="">
            <q-item-section>
              <q-checkbox v-model="right" label="Xiaomi" />
            </q-item-section>
          </q-item>
        </q-list>
        <q-list bordered separator class="q-mt-lg text-center">
          <span class="text-h6 text-primary">Sistema</span>
          <q-item clickable v-ripple class="">
            <q-item-section>
              <q-checkbox v-model="right" label="Android" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="">
            <q-item-section>
              <q-checkbox v-model="right" label="Windows" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="">
            <q-item-section>
              <q-checkbox v-model="right" label="ios" />
            </q-item-section>
          </q-item>
        </q-list>
        <q-list bordered separator class="q-mt-lg text-center">
          <span class="text-h6 text-primary">Pantalla</span>
          <q-item clickable v-ripple class="">
            <q-item-section>
              <q-checkbox v-model="right" label="Android" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="">
            <q-item-section>
              <q-checkbox v-model="right" label="Windows" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple class="">
            <q-item-section>
              <q-checkbox v-model="right" label="ios" />
            </q-item-section>
          </q-item>
        </q-list>

      </q-scroll-area>
      <!-- Here -->
      <div class="col">
        <div class="row q-pr-xs q-mt-xs">
          <div class="col-lg-3 col-md-3 col-xs-6 q-pa-xs q-mt-md" v-for="(item, key) in 5" :key="key">
            <q-card class=" my-card" flat bordered>
              <img src="https://cdn.quasar.dev/img/parallax2.jpg">

              <q-card-section>
                <div class="text-h6">$132.00</div>
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

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
