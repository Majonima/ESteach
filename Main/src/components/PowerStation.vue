<template>
  <div class="navbar navbar-dark bg-dark w-75 mx-auto mb-1" @click="show=!show" >
    <div class="text-xl-center w-75 mx-auto  text-white user-select-none">Налаштування станції</div>
  </div>
  <table class="table table-dark w-75 mx-auto user-select-none mb-1 mt-n1">
    <thead v-if="show" >
    <tr scope="row" class="bg-dark" >
      <th scope="col-1"> <button class="btn bg-dark btn-secondary dropdown-toggle border-dark shadow-none"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Тип електростанції
      </button>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1" >
        <li v-for="(name,key) in stationTypes" v-bind:key="key">
          <a @click="stationParams.type=key" class="dropdown-item" v-if="name">{{ name }}</a>
        </li>
        </ul>
      </th>
      <th scope="col-3" rowspan="1" colspan="3"> {{stationTypes[stationParams.type]}} </th>
    </tr>
    </thead>
    <tbody v-if="show">
    <tr scope="row" >
      <th v-for="head in tableHeaders" :key="head">{{head}}</th>
    </tr>
    <tr scope="row" v-for="param in stationParams.params" v-bind:key="param" >
      <td class="col-1">{{param.name}}</td>
      <td class="col-3">{{ param.text }}</td>
      <td class="col-1"><input type="range" class="form-range" :min="param.min" :max="param.max" :step="param.step" v-model="param.value"></td>
      <td class="col-1">{{ param.value }} {{param.symbol}}</td>
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
        type:"default",
        params:{
          surcharge:{
            name:"Прибуток",
            active:true,
            value: 0,
            min: 0,
            max: 100,
            step:5,
            symbol: " %",
            text: "текст"
          },
          ecology:{
            name:"Фільтрація викидів",
            active:false,
            value: 0,
            min: 0,
            max: 1,
            step:1,
            symbol: "",
            text: "текст"
          },
          equipment:{
            name:"Амортизаційні витрати",
            active:true,
            value: 0,
            min: 0,
            max: 100,
            step:5,
            symbol: " %",
            text: "текст"
          },
          staff:{
            name:"Заробітна платня",
            active:true,
            value: 0,
            min: 0,
            max: 100,
            step:5,
            symbol: " %",
            text: "текст"
          },
          fuel:{
            name:"Якість пального",
            active:true,
            value: 1,
            min: 1,
            max: 3,
            step: 1,
            symbol: " клас",
            text: "текст"
          },
        },
      },
      stationTypes:{
        default:"",
        nuclear:{
          name:"Атомна електрична станція",
          fuel:39,
          staff:5,
          equipment:5,
          ecology: 0,



        },
        thermal:"Теплова електрична станція",
        solar:"Сонячна електрична станція",
        wind:"Вітрова електрична станція",
        hydro:"Гідро електрична станція"
      },
      price:0,
      genenration:[],
      tableHeaders:["Параметер","Опис","Налаштування", "Значення"],
    }
  },
  watch:{

  },
  methods:{
    priceCalc(){
    this.price=this.fuel
    },
    genCalc(){

    },
  },
}
</script>

<style scoped>

</style>