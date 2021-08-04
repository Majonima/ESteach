<template>
  <div class="navbar navbar-dark bg-dark w-75 mx-auto mb-1" @click="show=!show" rowspan="2" colspan="5" scope="col">
    <div class="text-xl-center w-75 mx-auto  text-white user-select-none">Таблиця лідерів</div>
  </div>
  <table class="table table-dark table-hover w-75 mx-auto user-select-none mb-1 mt-n1" v-if="show">
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
  name: "TradeResult",
  data(){
    return{
      playerList:{
        defaultPlayer:{
          id:0,
          name:"Бот",
          result:0,
          resultGlobal:0,
        },
      },
      tableHeaders:["Гравець","Поточний результат","Глобальний результат"],
      show:false,
    }
  },
}
</script>

<style scoped>

</style>