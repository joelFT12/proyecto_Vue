<template>

    <div class="">
      <q-btn round labal="maximized" class="botn" desktop-hide icon="fa-solid fa-circle-plus"  @click="dialog = true" />

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
              <div class=" col-lg-6 col-md-6  col-sm-12 col-xs-12 q-pl-lg bg-white text-black contenedor1 mobile-hide">

                <div class="col-12 q-pl-md">
                  <!-- estado del mo vil -->
                  <div class="row items-center " style="margin-bottom:20px">
                    <label for="inputPantalla" class="col-lg-3 col-md-3  col-sm-3 col-xs-3">Estado: </label>
                    <div>
                      <q-form
                      @submit.prevent.stop="onSubmit"
                      @reset.prevent.stop="onReset"
                    >
                      <q-option-group
                        v-model="datos.group"
                        :options="options"
                        color="primary"
                        style="margin-left:-17px"
                        ref="estadoB"
                        inline
                      />
                      </q-form>
                    </div>

                  </div>

                  <!-- marca -->
                  <div class="row items-center maar ">
                    <label for="inputMarca" class="col-lg-3 col-md-3  col-sm-3 col-xs-3" style="margin-top:-12px">Marca: </label>
                    <div class="col-7">
                    <div class="q-gutter-y-md column">

                      <!-- equivalent -->
                      <q-form @reset.prevent.stop="onReset" @submit.prevent.stop="onSubmit">
                        <q-select
                        color="purple-9"
                        filled
                        dense
                        v-model="datos.marca"
                        :rules="[ val => val && val.length > 0 || 'Por favor completar']"
                        :options="marcas"
                        label="Marca"
                        style="margin-bottom: 1em;"
                        clearable
                        ref="marB2"
                        >
                        </q-select>
                      </q-form>

                    </div>
                    </div>
                  </div>
                  <!-- modelo -->
                  <div class="row items-center maar">
                    <label for="inputMarca" class="col-lg-3 col-md-3  col-sm-3 col-xs-3" style="margin-top:-12px">Modelo: </label>
                    <div class="col-7 ">
                      <q-form
                      @submit.prevent.stop="onSubmit"
                      @reset.prevent.stop="onReset"
                    >
                      <q-input
                        color="purple-9"
                        dense
                        ref="modeloB2"
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
                    <label for="inputMarca" class="col-lg-3 col-md-3  col-sm-3 col-xs-3" style="margin-top:-12px" >Pantalla: </label>
                    <div class="col-6 ">
                      <div class="q-gutter-y-md column">

                        <!-- equivalent -->
                        <q-form @reset.prevent.stop="onReset" @submit.prevent.stop="onSubmit">
                          <q-select
                          style="margin-bottom: .5em;"
                          color="purple-9"
                          filled
                          dense
                          v-model="datos.pantalla"
                          :options="pantallas"
                          label="Tamaño de pantalla"
                          ref="pantallaB"
                          clearable
                          :rules="[val => val !== null && val !== '' || 'Selecciona un numero']"
                          >
                          </q-select>
                        </q-form>

                      </div>

                    </div>
                    <span style="margin:-20px 0 0 10px">Pulgadas </span>
                  </div>

                  <!-- sistema -->
                  <div class=" maar row items-center" style="margin-bottom:20px">
                    <label for="inputSis" class="col-lg-3 col-md-3  col-sm-3 col-xs-3">Sistema:</label>
                    <div class="col-7">
                    <!-- <sistemaOpt></sistemaOpt> -->
                    <div class="q-gutter-y-md column">

                      <!-- equivalent -->
                      <q-form @reset.prevent.stop="onReset" @submit.prevent.stop="onSubmit">
                        <q-select
                        color="purple-9"
                        filled
                        dense
                        v-model="datos.model"
                        :rules="[val => val !== null && val !== '' || 'Selecciona un sistema']"
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
                    <label for="inputMarca" class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="margin-top:-12px">ROM: </label>
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
                                val => val > 0 && val < 999999 || 'Ingresa otro numero']"
                      />
                    </q-form>

                    </div>
                    <span  class="col-lg-4 col-md-4  col-sm-4 col-xs-4" style="margin:-20px 0 0 10px ">Almacenamiento interno</span>

                  </div>
                  <!-- ram -->
                  <div class="row items-center maar">
                    <label for="inputMarca" class="col-lg-3 col-md-3  col-sm-3 col-xs-3" style="margin-top:-12px">RAM: </label>
                    <div class="col-7">
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
              <!-- contenedor 1 añadir imagenes en movil-->
              <div class="col-lg-6 col-md-6  col-sm-6 col-xs-12  bg-white text-black contenedor1  q-gutter-y-md desktop-hide">
                <label>Añadir imagenes de producto a vender</label>

                <div class="row justify-evenly " >

                  <div class="col-10">

                  <q-file
                  v-model="files"
                  label="Elige imagenes para el dispositivo"
                  filled
                  multiple
                  accept=".jpg, image/*"
                  :rules="[val => !!val || 'Campo Requerido']"
                  @update:model-value="obtenerURL"
                />
                </div>

                <div class="col-lg-8 col-md-8  col-sm-6 col-xs-12">
                  <q-carousel
                  animated
                  v-model="slide"
                  arrows
                  navigation
                  infinite
                  style="max-width: 500px; max-height: 200px; margin-top: 20px; border-radius:.5em"
                  v-if="fotosURL.length > 0"
                  >
                  <q-carousel-slide v-for="(img,id) in fotosURL" :key="id" :name="id+1" :img-src="img" />
                  </q-carousel>
                </div>

              </div>

              </div>

              <!-- contenedor 2 informacion del vendedor-->
              <div class="col-lg-5  col-md-5 col-sm-12 col-xs-12  text-white column justify-center q-gutter-y-md q-px-lg">
                <!-- titulo -->
                <div class="row q-gutter-y-md">
                  <label class="col-9">Titulo breve del anuncio:</label>

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
                  <label class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="margin-top:-12px">Vendedor: </label>
                  <div class="col-9">
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
                  <label class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="margin-top:-12px">Telefono: </label>
                  <div class="col-9">
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
                      val => val > 0 && val < 9999999999 || ' ']"
                    />
                  </q-form>

                  </div>

                </div>
                <!-- Descripcion -->
                <div class="row items-center q-gutter-y-md">
                  <label class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="margin-top:-12px">Descripción: </label>
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
              <!-- vista movil -->
              <div class=" col-lg-6 col-md-6  col-sm-12 col-xs-12 q-pl-lg bg-white text-black contenedor1 desktop-hide">

                <div class="col-12 q-pl-md">
                  <!-- estado del mo vil -->
                  <div class="row items-center " style="margin-bottom:20px">
                    <label for="inputPantalla" class="col-lg-3 col-md-3  col-sm-3 col-xs-3">Estado: </label>
                    <div>
                      <q-form
                      @submit.prevent.stop="onSubmit"
                      @reset.prevent.stop="onReset"
                    >
                      <q-option-group
                        v-model="datos.group"
                        :options="options"
                        color="primary"
                        style="margin-left:-17px"
                        ref="estadoB"
                        inline
                        :rules="[ val => val && val.length > 0 || 'Por favor completar']"
                      />
                      </q-form>
                    </div>

                  </div>

                  <!-- marca -->
                  <div class="row items-center maar ">
                    <label for="inputMarca" class="col-lg-3 col-md-3  col-sm-3 col-xs-3" style="margin-top:-12px">Marca: </label>
                    <div class="col-7">
                    <div class="q-gutter-y-md column">

                      <!-- equivalent -->
                      <q-form @reset.prevent.stop="onReset" @submit.prevent.stop="onSubmit">
                        <q-select
                        color="purple-9"
                        filled
                        dense
                        v-model="datos.marca"
                        :rules="[ val => val && val.length > 0 || 'Por favor completar']"
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
                    <label for="inputMarca" class="col-lg-3 col-md-3  col-sm-3 col-xs-3" style="margin-top:-12px">Modelo: </label>
                    <div class="col-7 ">
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
                    <label for="inputMarca" class="col-lg-3 col-md-3  col-sm-3 col-xs-3" style="margin-top:-12px" >Pantalla: </label>
                    <div class="col-6 ">
                      <div class="q-gutter-y-md column">

                        <!-- equivalent -->
                        <q-form @reset.prevent.stop="onReset" @submit.prevent.stop="onSubmit">
                          <q-select
                          style="margin-bottom: .5em;"
                          color="purple-9"
                          filled
                          dense
                          v-model="datos.pantalla"
                          :options="pantallas"
                          label="Tamaño de pantalla"
                          ref="pantallaB"
                          clearable
                          :rules="[val => val !== null && val !== '' || 'Selecciona un numero']"
                          >
                          </q-select>
                        </q-form>

                      </div>

                    </div>
                    <span style="margin:-20px 0 0 10px">Pulgadas </span>
                  </div>

                  <!-- sistema -->
                  <div class=" maar row items-center" style="margin-bottom:20px">
                    <label for="inputSis" class="col-lg-3 col-md-3  col-sm-3 col-xs-3">Sistema:</label>
                    <div class="col-7">
                    <!-- <sistemaOpt></sistemaOpt> -->
                    <div class="q-gutter-y-md column">

                      <!-- equivalent -->
                      <q-form @reset.prevent.stop="onReset" @submit.prevent.stop="onSubmit">
                        <q-select
                        color="purple-9"
                        filled
                        dense
                        v-model="datos.model"
                        :rules="[val => val !== null && val !== '' || 'Selecciona un sistema']"
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
                    <label for="inputMarca" class="col-lg-3 col-md-3 col-sm-3 col-xs-3" style="margin-top:-12px">ROM: </label>
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
                    <label for="inputMarca" class="col-lg-3 col-md-3  col-sm-3 col-xs-3" style="margin-top:-12px">RAM: </label>
                    <div class="col-7">
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

              <!-- contenedor 3 y 4 -->
              <div class="row justify-evenly ">
              <!-- contenedor 3 añadir imagenes-->
              <div class="col-lg-6 col-md-6  col-sm-6 col-xs-12  bg-white text-black contenedor1  q-gutter-y-md mobile-hide">
                <label>Añadir imagenes de producto a vender</label>

                <div class="row justify-evenly " >

                  <div class="col-10">

                  <q-file
                  v-model="files"
                  label="Elige imagenes para el dispositivo"
                  filled
                  multiple
                  accept=".jpg, image/*"
                  :rules="[val => !!val || 'Campo Requerido']"
                  @update:model-value="obtenerURL"
                />
                </div>

                <div class="col-lg-8 col-md-8  col-sm-6 col-xs-12">
                  <q-carousel
                  animated
                  v-model="slide"
                  arrows
                  navigation
                  infinite
                  style="max-width: 500px; max-height: 200px; margin-top: 20px; border-radius:.5em"
                  v-if="fotosURL.length > 0"
                  >
                  <q-carousel-slide v-for="(img,id) in fotosURL" :key="id" :name="id+1" :img-src="img" />
                  </q-carousel>
                </div>

              </div>

              </div>

             <!-- contenedor 4 botones de guardado-->
             <div class="col-lg-5 col-md-5  col-sm-5 col-xs-12  text-black contenedor1 column justify-center">
              <div class="row justify-center ">

                <div class="bg-white precios q-mb-xl col-9 " >
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
                <div  class="col-lg-5 col-md-12  col-sm-12 col-xs-12 row justify-evenly">
                  <div class="q-pa-sm q-gutter-lg ">
                    <q-btn
                      class="iconose"
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

                      class="iconose"
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
             </div>

          </q-card-section>
        </q-card>
      </q-dialog>
    </div>

</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { db } from 'boot/database'
import { collection, addDoc } from 'firebase/firestore'
import { useRouter } from 'vue-router'
import { getStorage, ref as ref2, uploadBytes } from 'firebase/storage'

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
  precio: null,
  ima: null
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
// const precioB2 = ref(null)
// const tituloB2 = ref(null)
// const vendedorB2 = ref(null)
// const telefonoB2 = ref(null)
// const desB2 = ref(null)
// const marB2 = ref(null)
// const modeloB2 = ref(null)
// const pantallaB2 = ref(null)
// const romB2 = ref(null)
// const ramB2 = ref(null)
const idMovil = ref('')
let myTimeout = (null)
const fotosURL = ref([])
const files = ref(null)

export default {

  setup () {
    const $q = useQuasar()
    const contaImg = ref(0)
    // const ima = ref(null)
    const inicio = function () {
      reloj()
    }
    const router = useRouter()
    const accept = ref(false)

    const obtenerURL = function () {
      console.log(files.value)
      if (files.value) {
        files.value.forEach(element => {
          fotosURL.value.push(URL.createObjectURL(element))
        })
      }
      console.log(fotosURL.value)
    }

    // subir imagen
    const subirImagen = function () {
      console.log('subirimagenes')
      const storage = getStorage()
      files.value.forEach((foto) => {
        const storageRef = ref2(storage, idMovil.value + '/' + foto.name)
        uploadBytes(storageRef, foto).then((snapshot) => {
          contaImg.value++
          eslaUltima()
          console.log('Uploaded a blob or file!')
        })
      }

      )
    }

    // iguala si es la ultima imagen para poder subirla a storage
    const eslaUltima = function () {
      if (contaImg.value === files.value.length) {
        $q.notify({
          message: 'Se guardo la informacion',
          color: 'green',
          icon: 'save'
        })
        router.push('../')
        myTimeout = setTimeout(inicio, 500)
      }
    }

    const reloj = function () {
      window.location.reload()
    }

    // elimino campos y validacion
    const borrarDatos = function () {
      datos.value = ''
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

      // precioB2.value.resetValidation()
      // tituloB2.value.resetValidation()
      // vendedorB2.value.resetValidation()
      // telefonoB2.value.resetValidation()
      // desB2.value.resetValidation()
      // marB2.value.resetValidation()
      // modeloB2.value.resetValidation()
      // pantallaB2.value.resetValidation()
      // romB2.value.resetValidation()
      // ramB2.value.resetValidation()

      myTimeout = setTimeout(inicio, 900)
      $q.notify({
        message: 'No se guardo la informacion',
        color: 'red'
      })
    }
    // valido y guardo datos
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

        subirDatos()
      }
    }
    // subo datos a la BD
    const subirDatos = async function () {
      try {
        const docRef = await addDoc(collection(db, 'articulos'), datos.value)
        console.log('Document written with ID: ', docRef.id)
        idMovil.value = docRef.id
        subirImagen()
      } catch (e) {
        console.error('Error al subir los articulos: ', e)
      }
    }

    return {
      slide: ref(1),
      guardarDatos,
      files,
      fotosURL,
      obtenerURL,
      borrarDatos,
      subirImagen,
      subirDatos,
      datos,
      db,
      router,
      myTimeout,
      inicio,
      ima: ref(null),

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
      // precioB2,
      // tituloB2,
      // vendedorB2,
      // telefonoB2,
      // desB2,
      // marB2,
      // modeloB2,
      // pantallaB2,
      // romB2,
      // ramB2,

      color: ref('purple-9'),
      options: [
        {
          label: 'Nuevo',
          value: 'Nuevo'
        },
        {
          label: 'Usado',
          value: 'Usado'
        }
      ],

      optiones: [
        'Android', 'Ios', 'Windows', 'Otro SO'
      ],

      marcas: [
        'Samsung', 'Iphone', 'Huawei', 'Motorola', 'Xiaomi', 'Otra marca'
      ],

      pantallas: [
        '5,5', '6,0', '6,5', '5,0', 'Otra medida'
      ]

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
.iconose{
  padding: 1em;
  border-radius: .5em;
}

</style>
