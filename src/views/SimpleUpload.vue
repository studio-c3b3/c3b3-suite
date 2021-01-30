<template>
  <form enctype="multipart/form-data">

    <div class="field">
      <label for="file" class="label">Upload les diez </label>
      <input
        type="file"
        ref="file"
        @change="selectFile"
      />
    </div>

  </form>
</template>

<script>
export default {
  name: "SimpleUpload",

  data(){
    return{
      file: ""
    }
  },

  methods: {
    selectFile(){
      this.file = this.$refs.file.files[0]
    }
  }
}
</script>