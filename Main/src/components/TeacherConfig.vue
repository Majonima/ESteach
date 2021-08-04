<template>
<table class="table table-dark">
  <thead>
  <tr>
    <th scope="col">№</th>
    <th scope="col" v-for="head in tableHeaders" :key="head">{{head}}</th>
  </tr>
  </thead>
  <tbody>
  <tr scope="row" v-for="rule in rulesList" :key="rule.id">
    <td>{{rule.id}}</td>
    <td>{{rule.name}}</td>
    <td>{{rule.description}}</td>
    <td><input type="checkbox" @click="select(rule.value)"></td>
  </tr>
  </tbody>

</table>
</template>

<script>
export default {
  name: "TeacherConfig",
  data(){ return{
    selectedRules: {
      market:false,
      green:false,
      ecology:false

    },
    rulesList:{
        market:{
          id:1,
          name:"Міжнародний ринок",
          description:"У випадку занадто високих цін дозволяє покупку енергії у держав-партнерів",
          value:"market"
        },
      crash:{
        id:2,
        name:"Пошкодження обладнання",
        description:"В залежності від фінансування буде змінюватися шанс пошкоджень та перерв в роботі станції",
        value:"crash"
      },
        greenEnergy:{
          id:3,
          name:"Зелений тариф",
          description:"ВДЕ отримують додаткове фінансування у розмірі",
          value:"green"
        },
        ecology:{
          id:4,
          name:"Штрафи за низьку екологічність",
          description:"За не дотримання екологічних норм гравців буде оштрафовано",
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
      this.selectedRules[value]=!this.selectedRules[value]
      console.log(this.selectedRules)

    },
  },

}

</script>

<style scoped>

</style>