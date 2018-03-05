<template>
  <div class="welcome">
    Welcome to Certain Lending!
    Enter the address you want to search
    <div class="container">
      <input type="text" class="text-field form-control" name="address" value="483 Bright Street"/>
      <input type="text" class="text-field form-control" name="pin" value="94132"/>
      <button class="col-sm-offset-8 btn btn-blck btn-success"> Get Information</button>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {

}
</script>

<style>
button {
  height:70px;
  width:200px;
}
.welcome {
  background: #00b09b;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #77C9D4, #57BC90);
  background: linear-gradient(to right, #77C9D4, #57BC90);
  top: 75px;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  padding: 100px;
  font-family: 'Pacifico', cursive;
  color: cadetblue;
  font-size: 35px;
}
.text-field {
  padding: 30px;
  margin: 20px;
  width: 400px;
}
</style>
