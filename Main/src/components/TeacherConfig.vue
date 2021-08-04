<template>
<table class="table table-dark">
  <thead>
  <tr>
    <th scope="col">№</th>
    <th scope="col" v-for="head in tableHeaders" :key="head">{{head}}</th>
  </tr>
  </thead>
  <tbody v-for="rule in rulesList" :key="rule.id">
  <tr scope="row" >
    <td>{{rule.id}}</td>
    <td>{{rule.name}}</td>
    <td>{{rule.description}}</td>
    <td>{{rule.coefficient.value}}</td>
    <td><input type="checkbox" @click="select(rule.value)"></td>
  </tr>
  <tr scope="row">
    <td rowspan="2" colspan="5">
      <input type="range" class="form-range" :min="rule.coefficient.min" :max="rule.coefficient.max" :step="rule.coefficient.step" v-model="rule.coefficient.value">
  </td>
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
      ecology:false,
      equipment:false,
      staff:false,
      fuel:false,
    },
    rulesList:{
      market:{
        id:1,
        name:"Міжнародний ринок",
        description:"У випадку занадто високих цін дозволяє покупку енергії у держав-партнерів",
        value:"market",
        coefficient: {
          min:0,
          max:1,
          step:0.1,
          value:0,
        },
      },
      equipment:{
        id:2,
        name:"Пошкодження обладнання",
        description:"Неналежне фінансування амортизації обладнання може призвести до його пошкодження та перерв в генерації енергії",
        value:"equipment",
        coefficient:{
          min:0,
          max:1,
          step:0.1,
          value:0,
        },
      },

      staff:{
        id:3,
        name:"Ринок праці",
        description:"Низький рівень заробітньої платні приваблює лише низькокваліфіковані кадри та може призвести до перерв в генерації енергії",
        value:"staff",
        coefficient:{
          min:0,
          max:1,
          step:0.1,
          value:0,
        },
      },

      fuel:{
        id:4,
        name:"Ціни на пальне ростуть",
        description:"Підвищіти вартість викопного пального",
        value:"fuel",
        coefficient:{
          min:0,
          max:1,
          step:0.1,
          value:0,
        },
      },

        greenEnergy:{
          id:5,
          name:"Зелений тариф",
          description:"ВДЕ отримують додаткове фінансування у розмірі",
          value:"green",
          coefficient:{
            min:0,
            max:1,
            step:0.1,
            value:0,
          },
        },

        ecology:{
          id:6,
          name:"Штрафи за низьку екологічність",
          description:"За не дотримання екологічних норм гравців буде оштрафовано",
          value:"ecology",
          coefficient:{
            min:0,
            max:1,
            step:0.1,
            value:0,
          },
        },
    },
  }
  },
  props:{
    tableHeaders:{type:Array, default: function(){return ["Назва","Опис","Значення","Активувати"]}},
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