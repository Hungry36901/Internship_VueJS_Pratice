<template>
  <div>
      <h1>Variable State</h1>
      <div>{{count}}</div>
      <dir>{{Math.random()}}</dir>
      <div>TimeStamp : {{timeStamp}}</div>
      <button @click="timestamp = Date.now()">Update time</button>
      <button @click="count++">Update count</button>
  </div>
</template>

<script>
export default {
    name: "variableStateView",created() {
        this.timeStamp = 0
    },mounted() {
        setInterval(() => {
            this.count++
            console.log("TimeStamp : " + this.timeStamp)
        },1000)
    },data() {
        return {
            count: 0 //localState
        }
    },
}
</script>

<style>

</style>