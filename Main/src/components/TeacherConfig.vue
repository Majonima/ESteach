<template>
<table>
  <tr>
    <th>№</th>
    <th v-for="head in tableHeaders" :key="head">{{head}}</th>
  </tr>
  <tr v-for="rule in rulesList" :key="rule.id">
    <th>{{rule.id}}</th>
    <th>{{rule.name}}</th>
    <th>{{rule.description}}</th>
    <th><input type="checkbox" class="department" @click="select(rule.value)" v-bind:id=rule.id v-bind:value=rule.value v-model="selectedRules"></th>
  </tr>

</table>
</template>

<script>
export default {
  name: "TeacherConfig",
  data(){ return{
    selectedRules:[],
    rulesList:{
        market:{
          id:1,
          name:"Міжнародний ринок",
          description:"У випадку занадто високих цін дозволяє покупку енергії у держав-партнерів",
          value:"market"
        },
        greenEnergy:{
          id:2,
          name:"Зелений тариф",
          description:"ВДЕ отримують додаткове фінансування у розмірі",
          value:"green"
        },
        ecology:{
          id:3,
          name:"Активувати міжнародний ринок",
          description:"У випадку занадто високих цін дозволяє покупку енергії у держав-партнерів",
          value:"ecology"
        },


    },
  }
  },
  props:{
    tableHeaders:{type:Array, default: function(){return ["Назва","Опис","Значення"]}},

    resultList:{},
  },
  mounted() {
    console.log(this.rulesList)
  },
  methods:{
    select: function (value) {
      //this.allSelected = false;
      this.selectedRules.pop[value];
      console.log(this.selectedRules())

    },
  },

}

</script>

<style scoped>

</style>