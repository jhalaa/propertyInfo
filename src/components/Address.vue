<template>
  <div class="address-text container-fluid">
    <span>{{this.$store.getters.getLine1}},</span>
    <span>{{this.$store.getters.getPin}}</span>
  </div>
</template>

<script type="text/javascript">
export default {

}
</script>

<style>
.address-text{
  padding: 10px;
  font-size: 18px;
  color: #015249;
  background-color: #00b09b;
}
</style>
