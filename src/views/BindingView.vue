<template>
  <div>
      <h1>Binding</h1>
      <img v-bind:src="imageUrl" v-bind:height="squareWidthHeight" v-bind:width="squareWidthHeight">
      <a v-bind:href="googleWeb">google</a>
      <a :href="googleWeb"> guguro</a>
      <div :class="[false ? errorClass : '' , importantClass]" :style={color}>Binding</div>
      <div :style="{color , fontSize}">Binding style</div>
      <div :style="styleObject">Binding style with object</div>
      <button @click="isActive = !isActive">ToggleActive</button>
      <div :class="[isActive ? importantClass : '']">Active</div>
  </div>
</template>

<script>
export default {
    name: "BindingView",data() {
      return {
        imageUrl:"https://www.ku.ac.th/assets/images/header/KU_name_logo_62x62.svg",
        squareWidthHeight: "100",
        googleWeb:"http://google.com",
        errorClass: "error" ,
        importantClass: "important",
        color: "green",
        fontSize: "50px",
        styleObject: {
          color: "salmon",
          fontSize: "35px",
          background: "yellow"
        },
        isActive: "false",
      }
    },
}
</script>

<style>
.error{
  color: red;
  background: rebeccapurple;
}
.important{
  font-size: 70px ;
  font-weight: 1000;
}
</style>