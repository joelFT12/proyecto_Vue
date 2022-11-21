
<template>
  <!-- la grid -->
  <div class="q-pa-sm">
    <div class="row justify-center">
      <q-card class="shadow-0 ancho">
        <q-card-section>
          <h2 class="text-center descripcion">Descripción</h2>
          <!-- card de especificacion -->
          <div class="q-pa-md row flex justify-evenly q-gutter-md">
            <q-card class="my-card col-12 col-md-4 ">
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>
            <!-- card de descripcion -->
            <q-card class="my-card col-lg-12 col-xs-12 col-md-4 ">
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>
            </div>

        </q-card-section>
      </q-card>
  </div>
  </div>
</template>

<script >

export default {
  name: 'descripcionCompra',
  setup () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }

}
</script>

<style >
.descripcion{
  font-size: 3em;
}
</style>
