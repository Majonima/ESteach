<template>
  <div class="small" >
    <line-chart :chart-data="datacollection" :options="optionCollection" width='946px' ></line-chart>
  </div>
</template>

<script>
var labels =[];
var data = [];
import LineChart from "@/components/LineChart";
export default {
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: null,
      optionCollection:null
    }
  },

  props: {
    labels: labels,
    test:Array,
    label: String,
    data: data,
    backgroundColor:String,
  },
  methods: {
    fillData() {
      labels= this.labels.toString().split(' ');
      data=this.data.toString().split(' ');
      this.optionCollection={
        responsive: true,
        maintainAspectRatio: false,
        position: 'relative',
      };
      this.datacollection = {
        test:this.labels,
        labels: labels,
        datasets: [{
          label: this.label.toString(),
          data: data,
          lineTension: 0,
          fill: false,
          borderColor: 'white',
          backgroundColor: 'transparent',
          pointBorderColor: 'white',
          pointBackgroundColor: 'white',
          pointRadius: 5,
          pointHoverRadius: 10,
          pointHitRadius: 30,
          pointBorderWidth: 2,
          pointStyle: 'rectRounded',
        }
        ]
      }


    },

    addData(){
      console.log();
      labels.push(parseInt(labels[labels.length-1])+1);
      labels.shift();
      labels.forEach(function(item, index) {
        console.log(item, index);
      });
      data.push(Math.floor(Math.random() * 100));
      data.shift();
      this.datacollection = {
        labels: labels,
        datasets: [{
          label: this.label.toString(),
          data: data,
          lineTension: 0,
          fill: false,
          borderColor: 'white',
          backgroundColor: 'transparent',
          pointBorderColor: 'white',
          pointBackgroundColor: 'white',
          pointRadius: 5,
          pointHoverRadius: 10,
          pointHitRadius: 30,
          pointBorderWidth: 2,
          pointStyle: 'rectRounded',
        }
        ]
      }
    },

  },

}

</script>

<style>
.small {
  align-items: center;
  display:inline-block;
  border: solid white;
  padding: 4px;
  width:calc(50% - 54px);
  overflow: auto;
}

</style>