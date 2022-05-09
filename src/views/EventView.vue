<template>
  <div id="event">
      <h1> is an event page </h1>
      <button v-on:click="clickMe">click for time
      </button>
      <button v-on:click="clickMe2('Welcome to VueJS')">click</button>
      <button @click="click3">click3</button>
      <h3>{{getTimeStamp()}}</h3>
  </div>
</template>

<script>
export default {
    name: "eventView",
    mounted() {
        this.initial()    
    },methods: {
        initial(){
            console.log("initialization")
        },
        clickMe(){
            alert(this.getTimeStamp())
        },
        clickMe2(message){
            alert(message)
        },
        click3(){
            alert("v-on:Click == @Click")
        },getTimeStamp(){
            return Date()
        }
    },
}
</script>

<style>

</style>