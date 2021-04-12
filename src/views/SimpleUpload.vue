<template>
  <form ref='uploadForm' 
      id='uploadForm' 
      action='http://localhost:3000/movies' 
      method='post' 
      encType="multipart/form-data">

    <div class="field">
      <label for="file" class="label">Upload les diez </label>
      <input
        type="file"
        ref="file"
        @change="selectFile"
      />
      <input type="submit" value='Upload!'/>
    </div>

  </form>
    <button v-on:click="submitFile()" ></button>
</template>

<script>
import axios from 'axios'
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
    },
    submitFile(){
      let formData = new FormData();
      formData.append('file', this.file);
      axios.post( '/single-file',
        formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function(){
        console.log('SUCCESS!!');
      })
      .catch(function(){
        console.log('FAILURE!!');
      });
    }
  }
}
</script>