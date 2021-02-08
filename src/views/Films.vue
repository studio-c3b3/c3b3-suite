
<template>
  <h1>Films</h1>

  <div class="uploader">
    <simple-upload/>
  </div>

</template>

<script>
import SimpleUpload from './SimpleUpload.vue'

export default {
  name: "Films",
  components: { SimpleUpload }
}
</script>
