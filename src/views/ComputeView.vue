<template>
  <div>
      <h1>Compute</h1>
      <h2>Random from compute {{getrandomnum}}</h2>
      <h2>Random from compute {{getrandomnum}}</h2>
      <h2>Random from compute {{getrandomnum}}</h2>
      <h3>Compute use the lastest but method use current</h3>
      <h2>Random from method {{getrandomnumMet()}}</h2>
      <h2>Random from method {{getrandomnumMet()}}</h2>
      <h2>Random from method {{getrandomnumMet()}}</h2>
      <h3>{{fullnameMet()}}</h3>
  </div>
</template>

<script>
export default {
    name: "ComputeView",data() {
        return {
            firstname: "Swind",
            lastname: "Boonma"
        }
    },
    methods: {
        getrandomnumMet(){
            return Math.random();
        },
        fullnameMet(){
            return this.firstname + " " + this.lastname 
        }
    },
    computed: {
        getrandomnum() {
            return Math.random();
        },
        fullname() {
            return this.firstname + " " + this.lastname 
        }
    }
}
</script>

<style>

</style>