<template>

    <div class="">
      <q-btn round labal="maximized" icon="fa-solid fa-circle-plus"   @click="dialog = true" />

      <q-dialog
        v-model="dialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="bg-purple-8 text-white">
          <q-bar>
            <q-space />
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Cerrar</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section>
            <div>
              <h5 class="text-center anuncio">Nuevo anuncio</h5>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="row justify-evenly ">

              <!-- contenedor 1 especificaciones del celular-->
              <div class=" col-lg-6 col-md-6  col-sm-6 col-xs-12  bg-white text-black contenedor1">

                <div class="col-12">
                  <!-- estado del movil -->
                  <div class="row items-center " style="margin-bottom:20px">
                    <label for="inputPantalla" class="col-lg-2 col-md-2  col-sm-2 col-xs-2">Estado: </label>
                    <div>
                      <q-form
                      @submit.prevent.stop="onSubmit"
                      @reset.prevent.stop="onReset"
                    >
                      <q-option-group
                        v-model="datos.group"
                        :options="options"
                        color="primary"
                        ref="estadoB"
                        inline
                      />
                      </q-form>
                    </div>

                  </div>

                  <!-- marca -->
                  <div class="row items-center maar ">
                    <label for="inputMarca" class="col-lg-2 col-md-2  col-sm-2 col-xs-2" style="margin-top:-12px">Marca: </label>
                    <div class="col-5">
                    <div class="q-gutter-y-md column">

                      <!-- equivalent -->
                      <q-form @reset.prevent.stop="onReset" @submit.prevent.stop="onSubmit">
                        <q-select
                        color="purple-9"
                        filled
                        dense
                        v-model="datos.marca"

                        :options="marcas"
                        label="Marca"
                        style="margin-bottom: 1em;"
                        clearable
                        ref="marcaB"
                        >
                        </q-select>
                      </q-form>

                    </div>
                    </div>
                  </div>
                  <!-- modelo -->
                  <div class="row items-center maar">
                    <label for="inputMarca" class="col-lg-2 col-md-2  col-sm-2 col-xs-2" style="margin-top:-12px">Modelo: </label>
                    <div class="col-5 ">
                      <q-form
                      @submit.prevent.stop="onSubmit"
                      @reset.prevent.stop="onReset"
                    >
                      <q-input
                        color="purple-9"
                        dense
                        ref="modeloB"
                        filled
                        type="text"
                        v-model="datos.modelo"
                        label="Modelo"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Por favor completar']"
                      />
                    </q-form>
                    </div>
                  </div>
                  <!-- pantalla -->
                  <div class="row items-center maar">
                    <label for="inputMarca" class="col-lg-2 col-md-2  col-sm-2 col-xs-2" style="margin-top:-12px" >Pantalla: </label>
                    <div class="col-4 ">
                      <div class="q-gutter-y-md column">

                        <!-- equivalent -->
                        <q-form @reset.prevent.stop="onReset" @submit.prevent.stop="onSubmit">
                          <q-select
                          style="margin-bottom: 1em;"
                          color="purple-9"
                          filled
                          dense
                          v-model="datos.pantalla"
                          :options="pantallas"
                          label="Tamaño de pantalla"
                          ref="pantallaB"
                          clearable
                          >
                          </q-select>
                        </q-form>

                      </div>

                    </div>
                    <span style="margin:-12px 0 0 10px">Pulgadas </span>
                  </div>

                  <!-- sistema -->
                  <div class=" maar row items-center" style="margin-bottom:20px">
                    <label for="inputSis" class="col-lg-2 col-md-2  col-sm-2 col-xs-2">Sistema:</label>
                    <div class="col-3">
                    <!-- <sistemaOpt></sistemaOpt> -->
                    <div class="q-gutter-y-md column">

                      <!-- equivalent -->
                      <q-form @reset.prevent.stop="onReset" @submit.prevent.stop="onSubmit">
                        <q-select
                        color="purple-9"
                        filled
                        dense
                        v-model="datos.model"

                        :options="optiones"
                        label="Sistema"
                        clearable
                        >
                        </q-select>
                      </q-form>

                    </div>
                    </div>

                  </div>

                  <!-- rom -->
                  <div class="row items-center maar">
                    <label for="inputMarca" class="col-lg-2 col-md-2 col-sm-2 col-xs-2" style="margin-top:-12px">ROM: </label>
                    <div class="col-4">
                      <q-form
                      @submit.prevent.stop="onSubmit"
                      @reset.prevent.stop="onReset"
                    >
                      <q-input
                        dense
                        ref="romB"
                        color="purple-9"
                        type="number"
                        filled
                        v-model="datos.rom"
                        label="ROM "
                        lazy-rules
                        :rules="[val => val !== null && val !== '' || 'Escribe un numero',
                                val => val > 0 && val < 512 || 'Ingresa otro numero']"
                      />
                    </q-form>

                    </div>
                    <span  class="col-lg-4 col-md-4  col-sm-4 col-xs-4" style="margin:-20px 0 0 10px ">Almacenamiento interno</span>

                  </div>
                  <!-- ram -->
                  <div class="row items-center maar">
                    <label for="inputMarca" class="col-lg-2 col-md-2  col-sm-2 col-xs-2" style="margin-top:-12px">RAM: </label>
                    <div class="col-4">
                      <q-form
                      @submit.prevent.stop="onSubmit"
                      @reset.prevent.stop="onReset"
                    >
                      <q-input
                        dense
                        ref="ramB"
                        color="purple-9"
                        type="number"
                        filled
                        v-model="datos.ram"
                        label="RAM"
                        lazy-rules
                        :rules="[val => val !== null && val !== '' || 'Escribe un numero',
                                val => val > 0 && val < 100 || 'Ingresa otro numero']"
                      />
                    </q-form>

                    </div>

                  </div>

                </div>
              </div>

              <!-- contenedor 2 informacion del vendedor-->
              <div class="col-lg-5 col-sm-5 col-xs-12  text-white column justify-center q-gutter-y-md">
                <!-- titulo -->
                <div class="row q-gutter-y-md">
                  <label class="col-6">Titulo breve del anuncio:</label>

                  <div class="col-12">
                    <q-form
                    @submit.prevent.stop="onSubmit"
                    @reset.prevent.stop="onReset"
                  >
                    <q-input
                      color="purple-9"
                      ref="tituloB"
                      bg-color="white"
                      filled
                      type="text"
                      v-model="datos.titulo"
                      label="Escribe un titulo para el anuncio"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || '']"
                    />
                  </q-form>
                  </div>
                </div>
                <!-- vendedor -->
                <div class="row items-center ">
                  <label class="col-lg-2 col-md-2 col-sm-2 col-xs-3" style="margin-top:-12px">Vendedor: </label>
                  <div class="col-7">
                    <q-form
                    @submit.prevent.stop="onSubmit"
                    @reset.prevent.stop="onReset"
                  >
                    <q-input
                      color="purple-9"
                      bg-color="white"
                      ref="vendedorB"
                      dense
                      filled
                      type="text"
                      v-model="datos.vendedor"
                      label="Vendedor"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || '']"
                    />
                  </q-form>
                  </div>
                </div>
                <!-- telefono -->
                <div class="row items-center ">
                  <label class="col-lg-2 col-md-2 col-sm-2 col-xs-3" style="margin-top:-12px">Telefono: </label>
                  <div class="col-5">
                    <q-form
                    @submit.prevent.stop="onSubmit"
                    @reset.prevent.stop="onReset"
                  >
                    <q-input
                      dense
                      ref="telefonoB"
                      color="purple-9"
                      bg-color="white"
                      type="tel"
                      filled
                      v-model="datos.telefono"
                      label="Telefono"
                      lazy-rules
                      :rules="[val => val !== null && val !== '' || ' ',
                      val => val > 0 && val < 99999999 || ' ']"
                    />
                  </q-form>

                  </div>

                </div>
                <!-- Descripcion -->
                <div class="row items-center q-gutter-y-md">
                  <label class="col-lg-2 col-md-2 col-sm-2 col-xs-3" style="margin-top:-12px">Descripción: </label>
                  <div class="col-12" >
                    <q-form
                    @submit.prevent.stop="onSubmit"
                    @reset.prevent.stop="onReset"
                  >
                    <q-input
                      color="purple-9"
                      bg-color="white"
                      ref="desB"
                      dense
                      filled
                      type="textarea"
                      v-model="datos.des"
                      label="Descripcion del articulo"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || '']"
                    />
                  </q-form>
                  </div>
                </div>

              </div>
            </div>

            <div class="row justify-evenly ">
              <!-- contenedor 3 añadir imagenes-->
              <div class="col-lg-6 col-md-6  col-sm-6 col-xs-12  bg-white text-black contenedor1  q-gutter-y-md">
                <label>Añadir imagenes de producto a vender</label>
                  <div class="row justify-center " >
                    <!-- <agregarFotos ></agregarFotos> -->
                    <div>
                    <q-uploader
                    url="http://localhost:4444/upload"
                    label="Elige tus imagenes"
                    multiple
                    batch

                    color="purple-8"
                    style="width: 325px; height: 270px;"
                    accept=".jpg, .png, image/*"

                    @submit.prevent.stop="onSubmit"
                    @reset.prevent.stop="onReset"
                  />
                </div>
                </div>

              </div>

             <!-- contenedor 4 botones de guardado-->
             <div class="col-lg-5 col-md-5  col-sm-5 col-xs-12  text-black contenedor1 column justify-center">
              <div class="row justify-center ">
                <div class="bg-white precios q-mb-xl col-9" >
                  <div class="q-gutter-y-sm ">
                    <label class="" style="margin-top:-12px">Precio: </label>
                    <div class="row justify-center">
                      <q-form
                      @submit.prevent.stop="onSubmit"
                      @reset.prevent.stop="onReset"
                    >
                      <q-input
                        ref="precioB"
                        style="max-width: 300px;"
                        dense
                        color="purple-9"
                        bg-color="white"
                        type="tel"
                        filled
                        v-model="datos.precio"
                        label="Precio"
                        lazy-rules
                        :rules="[val => val !== null && val !== '' || 'Escribe un numero',
                        val => val > 0 && val < 99999999 || 'Ingresa otro numero']"
                      />
                    </q-form>

                    </div>

                  </div>
                </div>
              <div class="q-pa-sm q-gutter-lg">
                <q-btn
                  class="iconos"
                  dark-percentage
                  unelevated
                  color="white"
                  text-color="purple-9"
                  @click="borrarDatos"
                  label="Cancelar"
                  type="reset"
                  icon="fa-solid fa-circle-xmark"

                />
            </div>
            <div class="q-pa-sm q-gutter-lg">
              <q-btn

                  class="iconos"
                  dark-percentage
                  unelevated
                  color="white"
                  text-color="purple-9"
                  @click="guardarDatos"
                  label="Guardar"
                  icon="fa-solid fa-floppy-disk"

                />
              </div>

            </div>
             </div>
             </div>

          </q-card-section>
        </q-card>
      </q-dialog>
    </div>

</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

const datos = ref({
  marca: null,
  modelo: null,
  pantalla: null,
  rom: null,
  ram: null,
  titulo: null,
  vendedor: null,
  telefono: null,
  des: null,
  group: null,
  model: null,
  imagen: null,
  precio: null
})

// const accept = ref(false)
const precioB = ref(null)
const tituloB = ref(null)
const vendedorB = ref(null)
const telefonoB = ref(null)
const desB = ref(null)
const marcaB = ref(null)
const modeloB = ref(null)
const pantallaB = ref(null)
const romB = ref(null)
const ramB = ref(null)

const borrarDatos = function () {
  // marca.value = null
  // modelo.value = null
  // pantalla.value = null
  // rom.value = null
  // ram.value = null
  // titulo.value = null
  // vendedor.value = null
  // telefono.value = null
  // des.value = null
  // precio.value = null
  // accept.value = false
  // model.value = null
  // group.value = null
  // imagen.value = null
  // datos.value = null
  precioB.value.resetValidation()
  tituloB.value.resetValidation()
  vendedorB.value.resetValidation()
  telefonoB.value.resetValidation()
  desB.value.resetValidation()
  marcaB.value.resetValidation()
  modeloB.value.resetValidation()
  pantallaB.value.resetValidation()
  romB.value.resetValidation()
  ramB.value.resetValidation()
}

const guardarDatos = function () {
  console.log('datos.value')
  precioB.value.validate()
  desB.value.validate()
  romB.value.validate()
  ramB.value.validate()
  pantallaB.value.validate()
  modeloB.value.validate()
  marcaB.value.validate()
  telefonoB.value.validate()
  tituloB.value.validate()
  vendedorB.value.validate()
  if (!precioB.value.hasError && !desB.value.hasError && !ramB.value.hasError && !romB.value.hasError && !pantallaB.value.hasError && !modeloB.value.hasError && !marcaB.value.hasError && !telefonoB.value.hasError && !tituloB.value.hasError && !vendedorB.value.hasError) {
    console.log(datos.value)
  }
}
export default {

  setup () {
    const $q = useQuasar()

    const accept = ref(false)

    // const progress = ref([
    //   { loading: false, percentage: 0 },
    //   { loading: false, percentage: 0 },
    //   { loading: false, percentage: 0 }
    // ])

    // const intervals = [null, null, null]
    // function startComputing (id) {
    //   progress.value[id].loading = true
    //   progress.value[id].percentage = 0

    //   intervals[id] = setInterval(() => {
    //     progress.value[id].percentage += Math.floor(Math.random() * 8 + 10)
    //     if (progress.value[id].percentage >= 100) {
    //       clearInterval(intervals[id])
    //       progress.value[id].loading = false
    //     }
    //   }, 700)
    // }

    // onBeforeUnmount(() => {
    //   intervals.forEach(val => {
    //     clearInterval(val)
    //   })
    // })

    function onRejected (rejectedEntries) {
      $q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    }

    // const guardarDatos = function () {
    //   console.log('nuevo.value')
    // }

    return {
      guardarDatos,
      borrarDatos,
      onRejected,
      datos,
      // imagen,
      // progress,
      // startComputing,
      dialog: ref(false),
      maximizedToggle: ref(true),

      accept,
      precioB,
      tituloB,
      vendedorB,
      telefonoB,
      desB,
      marcaB,
      modeloB,
      pantallaB,
      romB,
      ramB,

      color: ref('purple-9'),

      options: [
        {
          label: 'Nuevo',
          value: 'op1'
        },
        {
          label: 'Usado',
          value: 'op2'
        }
      ],
      optiones: [
        'Android', 'Ios', 'Windows'
      ],

      marcas: [
        'Samsung', 'Iphone', 'Motorola', 'Xiaomi', 'Otra marca'
      ],

      pantallas: [
        '5,5', '6,0', '6,5', 'Otra medida'
      ],

      onSubmit () {

      }

      // onReset () {
      // marca.value = null
      // modelo.value = null
      // pantalla.value = null
      // rom.value = null
      // ram.value = null
      // titulo.value = null
      // vendedor.value = null
      // telefono.value = null
      // des.value = null
      // precio.value = null
      // accept.value = false
      // model.value = null
      // group.value = null
      // imagen.value = null
      //   datos.value = null

      // }

    }
  }
}
</script>

<style>
.contenedor1{
  padding: 1.3em;
  border-radius: .5em;
  margin-top: 1em;

}

.maar{
  margin: 0.5em 0 0.5em 0;
}

.entrada{
  border: 0px;
  border-color: #dee2e6;
  border-radius: .5em;
  padding: 10px;
  background-color: #fafaff;
}

.anuncio{
  margin: .5em;
}
.precios{
  border-radius: .5em;
  padding: 1.5em;
  }
.iconos{
  padding: 1em;
  border-radius: .5em;
}

</style>
