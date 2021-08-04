<template>
  <div class="navbar navbar bg-dark w-75 mx-auto mb-1" @click="show=!show" rowspan="2" colspan="5" scope="col">
    <div class="w-75 mx-auto text-white user-select-none">Правила енергоринку</div>
  </div>
<table class="table table-hover  table-dark w-75 mx-auto user-select-none mb-1 mt-n1" v-if="show">
  <thead >
  <tr>
    <th scope="col">№</th>
    <th scope="col" v-for="head in tableHeaders" :key="head">{{head}}</th>
  </tr>
  </thead>
      <tbody v-for="rule in rulesList" :key="rule.id" >
      <tr scope="row" >
        <td>{{rule.id}}</td>
        <td>{{rule.name}}</td>
        <td class="text-xl-start">{{rule.description}}</td>
        <td>{{rule.coefficient.value}}</td>
        <td><input type="checkbox" @click="select(rule.value)"></td>
      </tr>

      <tr scope="row" >
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
  data(){ return {
    show:false,
    selectedRules: {
      market:false,
      green:false,
      ecology:false,
      equipment:false,
      staff:false,
      fuel:false,
    },

    rulesList: {
      market: {
        id:1,
        name:"Міжнародний ринок",
        description:"У випадку занадто високих цін дозволяє покупку енергії у держав-партнерів. Вартість енергії у партнерів:",
        value:"market",
        coefficient: {
          min:0,
          max:1,
          step:0.1,
          value:0,
        },
      },

      equipment: {
        id:2,
        name:"Пошкодження обладнання",
        description:"Неналежне фінансування амортизації обладнання може призвести до його пошкодження. Шанс на перерву в генерації:",
        value:"equipment",
        coefficient: {
          min:0,
          max:1,
          step:0.1,
          value:0,
        },
      },

      staff: {
        id:3,
        name:"Ринок праці",
        description:"Низький рівень заробітньої платні приваблює лише низькокваліфіковані кадри. Шанс на перерву в генерації:",
        value:"staff",
        coefficient: {
          min:0,
          max:1,
          step:0.1,
          value:0,
        },
      },

      fuel: {
        id:4,
        name:"Ціни на паливо ростуть",
        description:"Підвищити вартість викопного палива. Вартість палива:",
        value:"fuel",
        coefficient: {
          min:0,
          max:1,
          step:0.1,
          value:0,
        },
      },

        greenEnergy: {
          id:5,
          name:"Зелений тариф",
          description:"ВДЕ отримують додаткове фінансування у розмірі. Надбавка становить:",
          value:"green",
          coefficient: {
            min:0,
            max:1,
            step:0.1,
            value:0,
          },
        },

        ecology: {
          id:6,
          name:"Штрафи за низьку екологічність",
          description:"За не дотримання екологічних норм гравців буде оштрафовано. Розмір штрафу:",
          value:"ecology",
          coefficient: {
            min:0,
            max:1,
            step:0.1,
            value:0,
          },
        },
    },
    tableHeaders:["Назва","Опис","Значення","Активувати"],
    resultList:{},
  }
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