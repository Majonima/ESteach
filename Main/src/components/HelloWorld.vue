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

let consumption = [8, 10,14,24,22,11,9,8,15,17,27,10,7,5]

console.log(boo)
console.log(foo)
PowerCalc(consumption,[boo,foo])
function PowerCalc(consumption, powerstations){

  powerstations.sort((a,b)=>a.price-b.price);
  console.log(powerstations)
  for (const lvl in consumption){
let sumPower=0;
for (const station in powerstations){
  if(sumPower<consumption[lvl]){
    if(sumPower+powerstations[station].power>consumption[lvl]){
      powerstations[station].load[lvl]=consumption[lvl]-sumPower;
      powerstations[station].money+=powerstations[station].load[lvl]*powerstations[station].price
      sumPower+=powerstations[station].load[lvl]
    }else{
      powerstations[station].load[lvl]=powerstations[station].power;
      powerstations[station].money+=powerstations[station].load[lvl]*powerstations[station].price;
      sumPower+=powerstations[station].load[lvl]
    }
  }
}
  }
  console.log(powerstations)
}
function PowerStation(name, price, power){
  this.name=name;
  this.price=price;
  this.power=power;
  this.money=0;
  this.load=[];
  //this.price=Math.random()*10;
  //this.power=10+Math.random()*10;
  return this
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
