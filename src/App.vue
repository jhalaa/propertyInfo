<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      apiResponse: {}
    }
  },

  mounted () {
    axios({
      method: 'GET',
      auth: {
        // need to mask credentials later or encrypt file
        username: 'KUQ02CQUTTTF53WM813M',
        password: 'pSroA51xnkAzelsQMizDXhjwvKnWM0p8'
      },
      params: {
        address: '483+Bright+St',
        zipcode: 94132
      },
      url: 'https://cors-anywhere.herokuapp.com/https://api.housecanary.com/v2/property/details'
    })
      .then(response => {
        this.apiResponse = response.data[0]['property/details'].result
      })
      .catch(error => {
        this.apiResponse = error.response
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
