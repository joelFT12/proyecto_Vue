<template>

    <div class="q-pa-md q-gutter-sm">
      <q-icon labal="maximized" name="fa-solid fa-circle-plus" color="purple-3" size="32px"  @click="dialog = true" />

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

            <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
              <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimizar</q-tooltip>
            </q-btn>
            <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
              <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Maximizar</q-tooltip>
            </q-btn>
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
            <div class="row d-flex justify-content-around ">

              <!-- contenedor 1 -->
              <div
                class="  col-lg-5 col-sm-10  flex bg-white text-black contenedor1">

                <div class=" aling-items center ">
                  <!-- estado del movil -->
                  <div class="maar row " style="margin-bottom:20px">
                    <label for="inputPantalla" class="col-sm-3 ">Estado: </label>
                    <div class="col-sm-5 pt-2 flex justify-between aling-items center ">
                      <div class="form-check form-check-inline ">

                        <input class="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio1"
                          value="option1">
                        <label class="form-check-label" for="inlineRadio1">  Nuevo</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                          value="option2">
                        <label class="form-check-label text-muted" for="inlineRadio2">  Usado</label>
                      </div>

                    </div>
                  </div>
                  <!-- marca -->
                  <div class="row items-center maar">
                    <label for="inputMarca" class="col-sm-3 " style="margin-top:-12px">Marca: </label>
                    <div class="col-sm-5 " style="max-width: 300px">
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
                    <label for="inputMarca" class="col-sm-3 " style="margin-top:-12px">Modelo: </label>
                    <div class="col-sm-5 " style="max-width: 300px">
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
                    <label for="inputMarca" class="col-sm-3 " style="margin-top:-12px">Pantalla: </label>
                    <div class="col-sm-5 " style="max-width: 300px">
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
                    <label for="inputSis" class="col-sm-3 col-form-label">Sistema:</label>
                    <div class="col-sm-6">
                      <select class="form-select rounded-2 mx-1 entrada " id="sistema">
                        <option selected>Ios</option>
                        <option value="1">Android</option>
                      </select>

                    </div>
                  </div>
                  <!-- rom -->
                  <div class="row items-center maar">
                    <label for="inputMarca" class=" col-10 col-sm-3 " style="margin-top:-12px">ROM: </label>
                    <div class="col-sm-5 " style="max-width: 300px">
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
                        label="ROM"
                        lazy-rules
                        :rules="[val => val !== null && val !== '' || 'Escribe un numero',
                                val => val > 0 && val < 512 || 'Ingresa otro numero']"
                      />
                    </q-form>

                    </div>
                    <span  class="col-sm-2" style="margin:-20px 0 0 10px ">Almacenamiento interno</span>

                  </div>
                  <!-- ram -->
                  <div class="row items-center maar">
                    <label for="inputMarca" class="col-sm-3 " style="margin-top:-12px">RAM: </label>
                    <div class="col-sm-5 " style="max-width: 300px">
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
              <!-- <div class=" col-lg-5 col-sm-10 d-flex flex-column justify-content-baseline
                       text-light  mb-4 rounded-2 px-4 py-4 mt-0 d-none d-lg-block text-white" >
                <div class="mb-3 row">
                  <p>Titulo breve del anuncio:</p>

                  <div class="col-sm-12 mb-2">
                    <input type="text" class="form-control mx-1" id="titulo" placeholder="Titulo">
                  </div>
                </div>

                <div class="mb-3 row">
                  <label for="inputVen" class="col-sm-2 col-form-label">Vendedor: </label>
                  <div class="col-sm-8 mb-2">
                    <input type="text" class="form-control mx-1" id="vendedor" placeholder="Nombre">

                  </div>
                </div>

                <div class="mb-3 row">
                  <label for="inputTelefoo" class="col-sm-2 col-form-label">Telefono: </label>
                  <div class="col-sm-5 mb-2">
                    <input type="text" class="form-control mx-1" id="telefono" placeholder="1234-5678">
                  </div>
                </div>

                <div class="mb-3  mt-3">
                  <label for="exampleFormControlTextarea1" class="form-label">DESCRIPCION:</label>
                  <textarea class="form-control mt-2 mb-0 pb-0" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Descripcion del articulo"></textarea>
                </div>

              </div> -->

              <!-- contenedor 3 -->
              <!-- <div class=" col-lg-6 col-sm-10 bg-purple-1 d-flex flex-column justify-content-around
                  align-items-baseline bg-light rounded-2 px-4 py-4 mt-0 d-none d-lg-block text-black">

                  <p class="fs-7">Imagenes: </p>
                  <div class="row d-flex justify-content-around">
                    <div class="col bg-light   col-10 col-sm-1 py-3 ps-1 mt-0 me-2 rounded-2 text-muted">
                      <div class="col-lg-2 me-4">
                        <button onclick="document.getElementById('getFile').click()"
                      class="border-0 w-auto p-0 m-0 bg-danger ">
                      <i class="bi bi-plus-circle-fill fs-1 text-secondary"></i>

                    </button>
                        <i class="bi bi-dash-circle-fill  fs-1 text-secondary" type="button"></i>
                      </div>
                    </div>

                    <div class="col bg-light col-10 col-sm-4  ms-3 mt-0 py-3 rounded-2 text-muted">
                      <table class="table table-borderless table-sm fs-7 text-muted">
                        <thead>
                          <tr>
                            <th scope="col">N</th>
                            <th scope="col">Tamaño</th>
                            <th scope="col">Tipo</th>

                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>145 kb</td>
                            <td>jpg</td>

                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>145 kb</td>
                            <td>png</td>

                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>145 kb</td>
                            <td>png</td>
                          </tr>

                          <tr>
                            <th scope="row">4</th>
                            <td>145 kb</td>
                            <td>jpg</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div class="col bg-light col-10 col-sm-4 ms-0 py-3 px-0 mt-0  rounded-2 text-muted">
                      <img src="https://www.mobilereviewnepal.com/wp-content/uploads/2022/09/iPhone-14-Pro-Max-Camera.jpg"
                        class=" rounded float-end img-thumbnail " alt="..." width="200">
                    </div>
                  </div>

              </div> -->

              <!-- contenedor 4 -->
              <!-- <div
                class=" col-lg-4 col-sm-10 d-flex flex-column justify-content-baseline mb-4 rounded-2 px-4 py-4 mt-0 d-none d-lg-block text-white">
                <div class="row justify-content-center mb-5 pt-0 mt-0">
                  <div class="col bg-light col-12 col-sm-5  py-3 mt-0 rounded-2 text-muted ">
                    <p>Precio:</p>
                    <div class="row justify-content-center ">
                      <div class="col-sm-8 pb-1 ">
                        <input type="text" class="form-control " id="vendedor" placeholder="$000.00">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="modal-footer border-0  justify-content-center mt-5">
                  <button type="button" class="btn btn-secondary text-light px-4 py-3 fs-5" data-bs-dismiss="modal">
                    <i class="bi bi-x-circle-fill me-2"></i>Cancelar</button>
                  <button type="button" class="btn btn-secondary text-light  px-4 py-3 fs-5" id="liveToastBtn2"
                    data-bs-dismiss="modal">
                    <i class="bi bi-bookmark-check-fill me-2"></i>Crear</button>
                </div>
              </div> -->

            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>

</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    const marca = ref(null)
    const modelo = ref(null)
    const pantalla = ref(null)
    const rom = ref(null)
    const ram = ref(null)
    const accept = ref(false)

    return {
      dialog: ref(false),
      maximizedToggle: ref(true),
      marca,
      modelo,
      pantalla,
      rom,
      ram,
      accept,

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
