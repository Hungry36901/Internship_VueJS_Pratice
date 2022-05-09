<template>
  <div>
      <h1 ref="title">Reference</h1>
      <input ref="input1" type="text" placeholder="ref">
  </div>
</template>

<script>
export default {
    name:"referenceView",mounted() {
        this.$refs["title"].textContent = "Reference Arc"
        this.$refs["input1"].focus();
        this.$refs["input1"].value = "1234";
    },
}
</script>

<style>

</style>