<template>
  <div>
      <h1>LifeCycle Hooks</h1>
      <span>{{ counter }}</span>
      <br>
      <button @click="add">Add</button>
  </div>
</template>

<script>
export default {
    name: "lifeCycleHooksView",data() {
        return {
            counter : 0
        }
    }, methods: {
        add(){
            this.counter++
        }
    },beforeCreate() {
        console.log("beforeCreate");  
    },created() {
        console.log("created");
    },mounted() {
        console.log("mounted");
    },beforeUpdate() {
        console.log("beforeUpdate");
    },updated() {
        console.log("update");
    },beforeUnmount() {
        console.log("beforeDestory")
    },unmounted() {
        console.log("destroyed");
    },
}
</script>

<style>

</style>