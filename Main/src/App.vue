<template>
  <TeacherConfig/>
  <TradeResult/>
  <PowerStation/>
</template>

<script>
import TeacherConfig from "@/components/TeacherConfig";
import TradeResult from "@/components/TradeResult";
import PowerStation from "@/components/PowerStation";

export default {
  name: 'App',
  components: {
    TeacherConfig,
    TradeResult,
    PowerStation,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 10px;
  color: #2c3e50;
}
@import'~bootstrap/dist/css/bootstrap.css';
</style>
