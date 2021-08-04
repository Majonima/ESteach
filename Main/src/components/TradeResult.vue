<template>
  <table class="table table-dark">
    <thead>
    <tr>
      <th scope="col">№</th>
      <th scope="col" v-for="head in tableHeaders" :key="head">{{head}}</th>
    </tr>
    </thead>
    <tbody>
    <tr scope="row" v-for="player in playerList" :key="player.id">
      <td>{{player.id}}</td>
      <td>{{player.name}}</td>
      <td>{{player.result}}</td>
      <td>{{player.resultGlobal}}</td>
    </tr>
    </tbody>

  </table>
</template>

<script>
export default {
  name: "TradeResult"
}
</script>

<style scoped>

</style>