<template>
  <form ref='uploadForm' 
      id='uploadForm' 
      action='http://localhost:3000/api/movies' 
      method='post' 
      encType="multipart/form-data">
  </form>

    <div class="field">
      <label for="file" class="label">Upload les diez </label>
      <input
        type="file"
        ref="file"
        @change="selectFile"
      />
      <input type="submit" value='Upload!'/>
    </div>

    <button v-on:click="submitFile()" >Cliquez moi</button>
</template>

<script>
// import api from '@/services/api';
import axios from 'axios';

export default {
  name: "SimpleUpload",

  data(){
    return{
      file: ""
    }
  },

  methods: {
    /**
     * @summary: Store file as an object inside this.file
     * TODO:What is exactly in the file
     */
    selectFile(){
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },

    /**
     * @summary:Post the file to the right endpoint
     * TODO: Use api instead 
     * TODO: Large file
     */
    submitFile(){
      let formData = new FormData();
      formData.append('file', this.file);
      axios.post('http://localhost:3000/api/movies/',
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