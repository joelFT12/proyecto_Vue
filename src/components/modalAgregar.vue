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

              <!-- contenedor 1 desktop-->
              <div class=" col-lg-6 col-md-6  col-sm-6 col-xs-12  bg-white text-black contenedor1">

                <div class="col-12">
                  <!-- estado del movil -->
                  <div class="row items-center " style="margin-bottom:20px">
                    <label for="inputPantalla" class="col-lg-2 col-md-2  col-sm-2 col-xs-2">Estado: </label>
                    <div>
                      <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                    >
                      <q-option-group
                        v-model="group"
                        :options="options"
                        color="primary"
                        inline
                      />
                      </q-form>
                    </div>

                  </div>

                  <!-- marca -->
                  <div class="row items-center maar ">
                    <label for="inputMarca" class="col-lg-2 col-md-2  col-sm-2 col-xs-2" style="margin-top:-12px">Marca: </label>
                    <div class="col-5">
                      <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                    >
                      <q-input
                        color="purple-9"
                        dense
                        filled
                        v-model="marca"
                        label="Marca"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Por favor completar']"
                      />
                    </q-form>
                    </div>
                  </div>
                  <!-- modelo -->
                  <div class="row items-center maar">
                    <label for="inputMarca" class="col-lg-2 col-md-2  col-sm-2 col-xs-2" style="margin-top:-12px">Modelo: </label>
                    <div class="col-5 ">
                      <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                    >
                      <q-input
                        color="purple-9"
                        dense
                        filled
                        type="text"
                        v-model="modelo"
                        label="Modelo"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Por favor completar']"
                      />
                    </q-form>
                    </div>
                  </div>
                  <!-- pantalla -->
                  <div class="row items-center maar">
                    <label for="inputMarca" class="col-lg-2 col-md-2  col-sm-2 col-xs-2" style="margin-top:-12px">Pantalla: </label>
                    <div class="col-4 ">
                      <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                    >
                      <q-input
                        color="purple-9"
                        dense
                        type="number"
                        filled
                        v-model="pantalla"
                        label="Pantalla"
                        lazy-rules
                        :rules="[val => val !== null && val !== '' || 'Escribe un numero',
                                val => val > 0 && val < 100 || 'Ingresa otro numero']"
                      />
                    </q-form>

                    </div>
                    <span style="margin:-12px 0 0 10px">Pulgadas </span>
                  </div>

                  <!-- sistema -->
                  <div class=" maar row items-center" style="margin-bottom:20px">
                    <label for="inputSis" class="col-lg-2 col-md-2  col-sm-2 col-xs-2">Sistema:</label>
                    <div class="col-3">
                    <sistemaOpt></sistemaOpt>
                    </div>

                  </div>
                  <!-- rom -->
                  <div class="row items-center maar">
                    <label for="inputMarca" class="col-lg-2 col-md-2 col-sm-2 col-xs-2" style="margin-top:-12px">ROM: </label>
                    <div class="col-4">
                      <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                    >
                      <q-input
                        dense
                        color="purple-9"
                        type="number"
                        filled
                        v-model="rom"
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
                      @submit="onSubmit"
                      @reset="onReset"
                    >
                      <q-input
                        dense
                        color="purple-9"
                        type="number"
                        filled
                        v-model="ram"
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

              <!-- contenedor 2 -->
              <div class="col-lg-5 col-sm-5 col-xs-12  text-white column justify-center q-gutter-y-md">
                <!-- titulo -->
                <div class="row q-gutter-y-md">
                  <label class="col-6">Titulo breve del anuncio:</label>

                  <div class="col-12">
                    <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                  >
                    <q-input
                      color="purple-9"

                      bg-color="white"
                      filled
                      type="text"
                      v-model="titulo"
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
                    @submit="onSubmit"
                    @reset="onReset"
                  >
                    <q-input
                      color="purple-9"
                      bg-color="white"
                      dense
                      filled
                      type="text"
                      v-model="vendedor"
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
                    @submit="onSubmit"
                    @reset="onReset"
                  >
                    <q-input
                      dense
                      color="purple-9"
                      bg-color="white"
                      type="tel"
                      filled
                      v-model="telefono"
                      label="Telefono"
                      lazy-rules
                      :rules="[val => val !== null && val !== '' || 'Escribe un numero',
                      val => val > 0 && val < 99999999 || 'Ingresa otro numero']"
                    />
                  </q-form>

                  </div>

                </div>
                <!-- Descripcion -->
                <div class="row items-center q-gutter-y-md">
                  <label class="col-lg-2 col-md-2 col-sm-2 col-xs-3" style="margin-top:-12px">Descripción: </label>
                  <div class="col-12" >
                    <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                  >
                    <q-input
                      color="purple-9"
                      bg-color="white"
                      dense
                      filled
                      type="textarea"
                      v-model="des"
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
              <!-- contenedor 3 -->
              <div class="col-lg-6 col-md-6  col-sm-6 col-xs-12  bg-white text-black contenedor1  q-gutter-y-md">
                <label>Añadir imagenes de producto a vender</label>
                  <div class="row justify-center " >
                    <agregarFotos ></agregarFotos>
                </div>

              </div>

             <!-- contenedor 4 -->
             <div class="col-lg-5 col-md-5  col-sm-5 col-xs-12  text-black contenedor1 column justify-center">
              <div class="row justify-center ">
              <confirmarProducto></confirmarProducto>
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
import sistemaOpt from 'components/sistemaOpt.vue'
import agregarFotos from 'components/agregarFotos.vue'
import confirmarProducto from 'components/confirmarProducto.vue'
export default {
  components: {
    sistemaOpt,
    agregarFotos,
    confirmarProducto
  },
  setup () {
    const $q = useQuasar()

    const marca = ref(null)
    const modelo = ref(null)
    const pantalla = ref(null)
    const rom = ref(null)
    const ram = ref(null)
    const accept = ref(false)
    const titulo = ref(null)
    const vendedor = ref(null)
    const telefono = ref(null)
    const des = ref(null)

    return {
      dialog: ref(false),
      maximizedToggle: ref(true),
      marca,
      modelo,
      pantalla,
      rom,
      ram,
      titulo,
      vendedor,
      telefono,
      des,
      accept,

      color: ref('purple-9'),
      group: ref(''),

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

      model: ref('Google'),

      optiones: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },
      onReset () {
        marca.value = null
        modelo.value = null
        pantalla.value = null
        rom.value = null
        ram.value = null
        titulo.value = null
        vendedor.value = null
        telefono.value = null
        des.value = null

        accept.value = false
      }

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

</style>
