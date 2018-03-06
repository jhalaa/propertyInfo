<template>
  <div>
    <Address/>
    <div class="row-md">
      <Tile  :details="apiResponse.property" text="Details" class="col-md-4 col-md-offset-2"/>
      <Tile  :details="apiResponse.assessment" text="Assessment" class="col-md-4 col-md-offset-2"/>
      <img src='http://www.sustainability.vic.gov.au/-/media/SV-WEB-2017-IMAGES/You-and-Your-Home/Building-and-renovating/Planning-and-design/Renovations-for-specific-house-types/Weatherboard-house/weatherboard-sketch-straight-web-2.jpg&h=697&w=1303?la=en&hash=E83A65D089CF2905A08DB5A595C8B523ADE8DA99'>
    </div>
  </div>
</template>

<script type="text/javascript">
import Address from './Address'
import Tile from './Tile'
import axios from 'axios'
export default {
  components: {
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
img {
  height: 240px;
  margin-left: 300pt;
}
</style>
