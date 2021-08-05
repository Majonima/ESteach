<template>
  <div class="navbar navbar-dark bg-dark w-75 mx-auto mb-1" @click="show=!show" rowspan="2" colspan="5" scope="col">
    <div class="text-xl-center w-75 mx-auto  text-white user-select-none">Налаштування станції</div>
  </div>
  <table class="table table-dark w-75 mx-auto user-select-none mb-1 mt-n1">
    <thead v-if="show" >
    <tr scope="row" class="bg-dark" >
      <th scope="col"> <button class="btn bg-dark btn-secondary dropdown-toggle border-dark shadow-none"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1" >
        <li v-for="value in stationTypes" v-bind:key="value">
          <a @click="stationParams.type=value" class="dropdown-item">{{ value }}</a>
        </li>
        </ul>
      </th>
      <th scope="col w-75" rowspan="1" colspan="3" > {{ stationParams.type }}</th>
    </tr>
    </thead>
    <tbody >
    <tr scope="row" v-if="show">
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "PowerStation",
  data(){
    return {
      show:true,
      stationParams:{
        type:"",
        surcharge:{
          value: 0,
          min: 0,
          max: 100,
          symbol: " %",
          text: ""},
        ecology:false,
        equipment:0,
        staff:0,
      },
      stationTypes:["nuclear", "thermal", "solar", "wind", "hydro"],

    }
  },
  methods:{

  },
}
</script>

<style scoped>

</style>