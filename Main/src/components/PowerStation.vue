<template>
  <div class="navbar navbar-dark bg-dark w-75 mx-auto mb-1" @click="show=!show" rowspan="2" colspan="5" scope="col">
    <div class="text-xl-center w-75 mx-auto  text-white user-select-none">Налаштування станції</div>
  </div>
  <table class="table table-dark w-75 mx-auto user-select-none mb-1 mt-n1">
    <thead v-if="show" >
    <tr scope="row" class="bg-dark" >
      <th scope="col"> <button class="btn bg-dark btn-secondary dropdown-toggle border-dark shadow-none"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
        <li>
          <a class="dropdown-item" href="#">Action</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Another action</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Something else here</a>
        </li>
        </ul>
      </th>
      <th scope="col w-75" rowspan="1" colspan="3" > текст</th>
    </tr>
    </thead>
    <tbody >
    <tr scope="row" v-if="show">
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>1</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "PowerStation",
  data(){
    return {
      show:false,
      stationParams:{
        type:{
          nuclear:false,
          thermal:false,
          solar:false,
          wind:false,
          hydro:false
        },
        surcharge:0,
        ecology:false,
        equipment:0,
        staff:0,
      },
    }
  },
}
</script>

<style scoped>

</style>