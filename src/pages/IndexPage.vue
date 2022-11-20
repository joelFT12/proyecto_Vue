<template>
  <q-page style="background-color: #FBFAFA;" class="">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->

    <div class="row">
      <div style="min-height: 100vh; max-width: 250px;" class="col bg-blue-1 gt-sm hidde q-mr-sm">

        <q-list bordered separator>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-checkbox v-model="right" label="Label on Right" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-checkbox v-model="right" label="Label on Right" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-checkbox v-model="right" label="Label on Right" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-checkbox v-model="right" label="Label on Right" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-checkbox v-model="right" label="Label on Right" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
              <q-checkbox v-model="right" label="Label on Right" />
            </q-item-section>
          </q-item>
        </q-list>

      </div>
      <div class="col">
        <div class="row q-pr-xs q-mt-xs">
          <div class="col-lg-3 col-md-4 col-xs-6 q-pa-xs q-mt-md" v-for="(item, key) in 5" :key="key">
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
            <q-card-actions>
              <q-btn flat color="primary">Action 2</q-btn>
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
