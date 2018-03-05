<template>
  <div class="tile container">
    {{text}}
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['text', 'apiResponse']
}
</script>

<style>
.tile{
  height: 100px;
  width: 100px;
  background-color: rgba(255, 0, 0, 0.5);
}
</style>
