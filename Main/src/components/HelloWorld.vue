<template>
  <div class="hello">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }

}


let boo= new PowerStation("boo", 10, 13);
let foo= new PowerStation("foo", 12, 16);

let consumption = [];
for (let i=0; i<24;i++){
  consumption[i]=Math.round(Math.random()*20);
}
console.log(consumption)

PowerCalc(consumption,[boo,foo])
function PowerCalc(consumption, powerstations){
  let inbalance=[];
  powerstations.sort((a,b)=>a.price-b.price);
  for (const lvl in consumption){
let sumPower=0;

for (const station in powerstations){
  if(sumPower<consumption[lvl]){
    if(sumPower+powerstations[station].gen[lvl]>consumption[lvl]){
      powerstations[station].load[lvl]=consumption[lvl]-sumPower;
      powerstations[station].money+=powerstations[station].load[lvl]*powerstations[station].price
      sumPower+=powerstations[station].load[lvl]
    }else{
      powerstations[station].load[lvl]=powerstations[station].gen[lvl];
      powerstations[station].money+=powerstations[station].load[lvl]*powerstations[station].price;
      sumPower+=powerstations[station].load[lvl]
    }
  }
}
inbalance[lvl]=consumption[lvl]-sumPower;
  }
  console.log(powerstations)
  console.log(inbalance)
}
function PowerStation(name, price, power){
  this.name=name;
  this.price=price;
  this.power=power;
  this.faultChance=0.2;
  this.money=0;
  this.load=[];
  this.gen=[];
  for(let i=0; i<24;i++){
      this.gen[i]=  Math.random()>this.faultChance? this.power: 0;
  }
  //this.price=Math.random()*10;
  //this.power=10+Math.random()*10;
  return this
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
