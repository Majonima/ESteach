import { Pile, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default {
    extends: Pile,
    mixins: [reactiveProp],
    options: {
        type: Object,
        default: null,
        responsive: true,
        maintainAspectRatio: false
    },
    mounted () {
        this.renderChart(this.chartData, this.options)
    },

}



