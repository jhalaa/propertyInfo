<template>
  <footer class="footer navbar-fixed-bottom">
    <div class="row-md">
      <router-link to="/about"><div class="footer-text col-md-2 col-md-offset-2">About</div></router-link>
      <router-link to="/contact"><div class="footer-text col-md-2 col-md-offset-2">Contact Us</div></router-link>
      <router-link to="/about"><div class="footer-text col-md-2 col-md-offset-2">Social Media</div></router-link>
    </div>
  </footer>
</template>

<script type="text/javascript">
export default {

}
</script>

<style>
footer{
  height: 40px;
  background-color: rgb(0,219,182);
}
.footer-text{
  margin-top: 10px;
  padding: 5px;
  font-size: 15px;
  color: rgba(255, 0, 0, 0.5);
}
</style>
