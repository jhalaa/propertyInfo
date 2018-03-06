<template>
  <div class="tile panel panel-default">
    <div class="heading panel-heading">{{text}}</div>
    <div class="panel-body">
      <table>
        <tr v-for="(value, key, index) in details" v-if="value" :key="index">
          <td>{{ textTransform(key.toString()) }}</td>
          <td>:</td>
          <td>{{ textTransform(value.toString()) }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['text', 'details'],
  methods: {
    textTransform (value) {
      return value.charAt(0).toUpperCase() + value.slice(1).replace(/_/g, ' ')
    }
  }
}
</script>

<style>
.tile{
  width: 500px;
  padding: 0px;
  margin: 20px;
}
td {
  padding: 5px;
  font-size: 16px;
}
</style>
