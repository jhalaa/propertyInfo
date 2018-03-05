<template>
  <div>
    <Header/>
    <Address/>
    <div class="row-md">
      <Tile  text="stats" class="col-md-4 col-md-offset-2"/>
      <Tile  text="eval" class="col-md-4 col-md-offset-2"/>
    </div>
    <Footer/>
  </div>
</template>

<script type="text/javascript">
import Header from './Header'
import Footer from './Footer'
import Address from './Address'
import Tile from './Tile'
import axios from 'axios'
export default {
  components: {
    Header,
    Footer,
    Address,
    Tile
  },
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
header{
  height: 75px;
  background-color: white;
}
.heading{
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  color: cadetblue;
  font-family: 'Pacifico', cursive;
}
.glyphicon{
  font-size: 30px;
}
</style>
