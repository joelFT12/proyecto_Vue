<template>

  <div>
      <q-uploader
        url="http://localhost:4444/upload"
        label="Elige tus imagenes"
        multiple
        batch

        color="purple-8"
        style="width: 425px; height: 270px;"
        accept=".jpg, .png, image/*"
        @rejected="onRejected"
      />
    </div>

</template>

<script>

import { useQuasar } from 'quasar'

export default {
  setup () {
    const $q = useQuasar()

    function onRejected (rejectedEntries) {
      $q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    }

    return { onRejected }
  }
}

</script>
