<template>
  <q-page >
    <!-- {{$route.params.idCompra}} -->
    <div class="q-pa-md">
      <div class="row justify-evenly">
        <!-- componente del carrusel -->

        <div class="col-lg-12 col-md-5  col-sm-6 col-xs-12">
          <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
          style="max-width: 600px; max-height: 350px; margin-top: 20px; border-radius:.5em"
          v-if="imagens.length > 0"
          >
          <q-carousel-slide v-for="(img,id) in imagens" :key="id" :name="id+1" :img-src="img" />
          </q-carousel>
        </div>

        <!-- tamaño movil -->
        <!-- <div  class="desktop-hide"><carruselMovil></carruselMovil></div> -->

        <!-- parte que solo se usa en esta pagina -->
        <div class="col-11 col-md-5  q-mt-sm">
          <q-card class="shadow-0 ">
            <q-card-section>
              <!-- titulo -->
              <p class="mobile-hide tamaño">{{final.titulo}}</p>
              <p class="desktop-hide tamaño">{{final.titulo}}
              </p>
              <!-- precio -->
              <p class="precio mobile-hide "><label>$ </label>{{final.precio}} Dolares</p>
              <p class="precio1 desktop-hide "><label>$ </label>{{final.precio}}</p>
              <!-- boton comprar -->
              <q-btn  class="boton mobile-hide" color="purple" label="Comprar"  @click="compra" to="../" />

              <!-- nombre del vendedor -->
              <q-card class=" col-10 q-my-lg">
                <q-card-section>
                    <div class="flex justify-between content-center rounded-3  shadow-sm col-10 ">
                      <p class="centro">{{final.vendedor}}</p>
                      <p class="centro">{{final.telefono}}</p>
                    </div>
                </q-card-section>
              </q-card>

            </q-card-section>
          </q-card>
        </div>

        <!-- componente de descripcion -->
        <div class=" col-12 row justify-evenly arriba mobile-hide">
          <h4 class="text-center ">Descripción</h4>
        </div>

        <!-- card de especificacion -->
        <div class="arriba row justify-evenly col-12 q-mb-lg mobile-hide">
          <q-card class="my-card col-4 q-mt-md">
            <q-card-section>
              <label>Estado: {{final.group}}</label><br>
                          <label>Marca: {{final.marca}}</label><br>
                          <label>Modelo: {{final.modelo}}</label><br>
                          <label>Pantalla: {{final.pantalla}}</label><br>
                          <label>Sistema: {{final.model}}</label><br>
                          <label>Rom: {{final.rom}} <label> GB de Almacenamiento interno </label></label><br>
                          <label>Ram: {{final.ram}} <label> GB </label></label><br>
            </q-card-section>
          </q-card>
          <!-- card de descripcion -->
          <q-card class="my-card col-4 q-mt-md">
            <q-card-section>
              {{ final.des }}
            </q-card-section>
          </q-card>
        </div>

        <!-- movil -->
        <div class="arriba row justify-evenly col-12 q-mb-lg desktop-hide" >
          <q-card class="my-card col-10 q-mt-md">
            <q-card-section>
              <label>Estado: {{final.group}}</label><br>
                          <label>Marca: {{final.marca}}</label><br>
                          <label>Modelo: {{final.modelo}}</label><br>
                          <label>Pantalla: {{final.pantalla}}</label><br>
                          <label>Sistema: {{final.model}}</label><br>
                          <label>Rom: {{final.rom}} <label> GB de Almacenamiento interno </label></label><br>
                          <label>Ram: {{final.ram}} <label> GB </label></label><br>
            </q-card-section>
          </q-card>
          <!-- card de descripcion -->
          <q-card class="my-card col-10 q-mt-md">
            <q-card-section>
              {{ final.des }}
            </q-card-section>
          </q-card>
        </div>

      </div>
      </div>
  </q-page>
  <div class="desktop-hide fixed-bottom">
    <div class="row justify-evenly q-mb-md">
      <q-btn  class="boton " color="purple-5" label="Inicio" to="/compra/edtrft" />
      <q-btn  class="boton text-purple-6" color="purple-1" label="Comprar"  @click="compra" to="../"/>
    </div>
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getStorage, ref as refStorage, listAll, getDownloadURL } from 'firebase/storage'
import { db } from 'src/boot/database'
import { collection, getDocs } from '@firebase/firestore'
import { useRoute } from 'vue-router'
import { useQuasar } from 'quasar'
const storage = getStorage()
const slide = ref(1)
const route = useRoute()
const articuloDetalle = ref([])
const idarticulo = ref('')
const articulo = ref([])
const imagens = ref([])
const final = ref({})
// const router = useRouter()
// let myTimeout = (null)
async function cargarArticulos () {
  const querySnapshot = await getDocs(collection(db, 'articulos'))
  querySnapshot.forEach((doc) => {
    const doc2 = doc.data()
    doc2.id = doc.id

    if (doc2.id === idarticulo.value) {
      console.log('entro')
      articuloDetalle.value.push(doc2)
      articulo.value.push(doc.data())
    }
  })
  console.log(articuloDetalle.value)
  cargarImagenes()
}
function cargarImagenes () {
  final.value = articulo.value[0]

  articuloDetalle.value.forEach((arti) => {
    const listRef = refStorage(storage, arti.id)
    listAll(listRef)
      .then((res) => {
        if (res.items.length > 0) {
          for (let index = 0; index < res.items.length; index++) {
            getDownloadURL(refStorage(storage, res.items[index].fullPath))
              .then((url) => {
                arti.urlImagen = url
                // console.log(url)
                imagens.value.push(arti.urlImagen)
              })
              .catch((error) => {
                console.log(error)
              })
          }
        }
      }).catch((error) => {
        console.log(error)
      })
  })
}
const $q = useQuasar()
function compra () {
  $q.notify({
    message: 'La compra se realizo con exito',
    color: 'primary',
    icon: 'fa-solid fa-check'
  }
  )
  // router.push('../')
  // myTimeout = setTimeout(inicio, 1500)
}
onMounted(() => {
  idarticulo.value = route.params.idCompra
  console.log(route.params.idCompra)
  cargarArticulos()
})

// export default defineComponent({
//   name: 'pruebaCompra',

//   components: {

//     carruselImagen,
//     descripcionCompra,
//     carruselMovil,
//     botonesFlotantes

//     setup{

//     }

//   }
// })

</script>

<style>
.tamaño{
  font-size: 1.5em;
}
.arriba{
  margin-top: -2em;
}
.carta{
  min-width: 200px;
}

.texto{
  font-size: 1.4em;
  text-align: center;
}
.precio{
  font-size: 2.9em;

}
.precio1{
  text-align: center;
  font-size: 2.9em;
  margin-left: -22px;
}
.boton{
  padding: 0.6em 1.5em 0.6em 1.5em;
  font-size: 1.4em;
  border-radius: 0.3em;
}

.info{
  margin: 1.3em 0 0 0;
  max-width: 400px;
}
.centro{
  margin: 0.3em ;
  font-size: 0.99em;
  padding: 0.5em;

}
.espacio{

  display: block;
}
</style>
