<template>
  <div id="header">
    <ul>
      <li><router-link to="../src/views/">Home</router-link></li>
      <li><router-link to="../src/views/intro">Intro</router-link></li>
      <li><router-link to="../src/views/about">About</router-link></li>
      <li><router-link to="../src/views/event">Event</router-link></li>
      <li><router-link to="../src/views/data">Data</router-link></li>
      <li><router-link to="../src/views/compute">Compute</router-link></li>
      <li><router-link to="../src/views/binding">Binding</router-link></li>
      <li><router-link to="../src/views/form">Form</router-link></li>
      <li><router-link to="../src/views/slot">Slot</router-link></li>
      <li><router-link to="../src/views/condition">Condition</router-link></li>
      <li><router-link to="../src/views/loop">Loop</router-link></li>
      <li><router-link to="../src/views/lifeCycleHooks">LifeCycleHooks</router-link></li>
      <li><router-link to="../src/views/VariableState">Variable</router-link></li>
      <li><router-link to="../src/views/reference">Reference</router-link></li>
      <li><router-link to="../src/views/filter">Filter</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "HeaderTag"
}
</script>

<style scoped>
ul{
  margin: 0;
  padding: 0;
}
li{
    display: inline;
    margin-right: 8px
}
</style>