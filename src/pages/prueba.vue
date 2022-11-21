
<template>
  <q-page >
    <!-- {{$route.params.idCompra}} -->
    <div class="q-pa-md">
      <div class="row justify-evenly">
        <!-- componente del carrusel -->
        <div class="mobile-hide"> <carruselImagen class="col-lg-12 col-md-5 col-sm-6 col-xs-10 flex justify-center" >
        </carruselImagen></div>

        <!-- tamaño movil -->
        <div  class="desktop-hide"><carruselMovil></carruselMovil></div>

        <!-- parte que solo se usa en esta pagina -->
        <div class="col-12 col-md-5 q-pa flex content-center q-mt-sm">
          <q-card class="shadow-0 ancho">
            <q-card-section>
              <!-- titulo -->
              <p class="texto">Iphone 6 pantalla de 8 pulgadas, 64Gb internos,
                2Gb de Ram, Sólo Banda Tigo, Nuevo
              </p>
              <!-- precio -->
              <p class="precio mobile-hide">$235.00</p>
              <p class="precio desktop-hide text-center">$235.00</p>
              <!-- boton comprar -->
              <q-btn  class="boton mobile-hide" color="purple" label="Comprar" />
              <!-- nombre del vendedor -->
              <q-card class="info col-12">
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
  <div class="desktop-hide fixed-bottom">
    <botonesFlotantes></botonesFlotantes>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import carruselImagen from 'components/CarruselImagen.vue'
import descripcionCompra from 'components/descripcionCompra.vue'
import carruselMovil from 'components/carruselMovil.vue'
import botonesFlotantes from 'components/botonesFlotantes.vue'

export default defineComponent({
  name: 'pruebaCompra',

  components: {

    carruselImagen,
    descripcionCompra,
    carruselMovil,
    botonesFlotantes

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
