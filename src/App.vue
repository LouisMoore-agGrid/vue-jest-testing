<template> 
<div>
    <button v-on:click="selectAllRows()" id='selectAll'>Select All</button>
    <button v-on:click="deselectAllRows()" id='deselectAll'>Deselect All</button>
    <ag-grid-vue style="width: 500px; height: 300px;"
        class="ag-theme-balham"
        :columnDefs="columnDefs"
        :gridOptions="gridOptions"
        :rowData="rowData">
    </ag-grid-vue>
</div>
    </template>
<style>
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
</style>

<script>
import { AgGridVue } from 'ag-grid-vue';


export default {
    name: 'App',
    data() {
        return {
            gridOptions:null,
            gridApi:null,
            columnDefs: null,
            rowData: null
        }
    },
    components: {
        AgGridVue
    },
    beforeMount() {
        this.gridOptions= {};
        this.columnDefs = [
            {headerName: 'Make', field: 'make'},
            {headerName: 'Model', field: 'model'},
            {headerName: 'Price', field: 'price'}
        ];

        this.rowData = [
            {make: 'Toyota', model: 'Celica', price: 35000},
            {make: 'Ford', model: 'Mondeo', price: 32000},
            {make: 'Porsche', model: 'Boxter', price: 72000}
        ];
    },
    mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  },
  methods: {
      selectAllRows() {
          this.gridApi.selectAll()
      },
      deselectAllRows() {
          this.gridApi.deselectAll()
      }
  }
}
</script>
