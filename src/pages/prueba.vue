
<template>
  <q-page >
    <!-- {{$route.params.idCompra}} -->
    <div class="q-pa-md">
      <div class="row justify-center">
        <!-- componente del carrusel -->
        <carruselImagen class="col-12 col-md-6 flex justify-center" >
        </carruselImagen>

        <!-- parte que solo se usa en esta pagina -->
        <div class="col-12 col-md-6 q-pa flex content-center">
          <q-card class="shadow-0 ancho">
            <q-card-section>
              <!-- titulo -->
              <p class="texto">Iphone 6 pantalla de 8 pulgadas, 64Gb internos,
                2Gb de Ram, Sólo Banda Tigo, Nuevo
              </p>
              <!-- precio -->
              <p class="precio">$235.00</p>
              <!-- boton comprar -->
              <q-btn  class="boton" color="purple" label="Comprar" />
              <!-- nombre del vendedor -->
              <q-card class="info col-12 col-md-3 ">
                <q-card-section>
                    <div class="flex justify-between content-center rounded-3  shadow-sm">
                      <p class="centro">Vendedor: Juan Perez</p>
                      <p class="centro">Teléfono: 7374-2312</p>
                    </div>
                </q-card-section>
              </q-card>
            </q-card-section>
          </q-card>
        </div>

        <!-- componente de descripcion -->
        <descripcionCompra>
        </descripcionCompra>

      </div>
      </div>
  </q-page>

</template>

<script>
import { defineComponent } from 'vue'
import carruselImagen from 'components/CarruselImagen.vue'
import descripcionCompra from 'components/descripcionCompra.vue'
export default defineComponent({
  name: 'pruebaCompra',

  components: {

    carruselImagen,
    descripcionCompra
  }
})

</script>

<style>
.texto{
  font-size: 1.4em;
}
.precio{
  font-size: 2.9em;
}
.boton{
  padding: 0.6em 1.5em 0.6em 1.5em;
  font-size: 1.4em;
  border-radius: 0.3em;
}
.ancho{
  margin-right: 0.8em;
}
.info{
  margin: 1.3em 0 0 0;
  max-width: 500px;
}
.centro{
  margin: 0.3em ;
  font-size: 0.99em;
  padding: 0.5em;

}
</style>
