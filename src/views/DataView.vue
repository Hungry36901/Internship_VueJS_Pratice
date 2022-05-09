<template>
  <div id="data">
      <h1>Data</h1>
      <button @click="count++;isLogin = true;">Addcount</button>
      <span>{{count}}</span>
      <div>{{message}}</div>
      <div>{{isLogin}}</div>
      <input type="text" placeholder="Enter a message" v-model="message">
      <h2 v-if="isLogin == true ">Yahoo</h2>
      <h1>Array</h1>
      <div>{{account}} {{account.username}} {{account.password}}</div>
      <div>{{course}}</div>
      <ul>
          <li class="content" v-for="(item,index) in course" :key="index">{{index}}.{{item}}</li>
      </ul>
      <span class="title">This is local</span>
  </div>
</template>

<script>
export default {
    name: "dataView",
    mounted() {
        this.message= "Welcome"
    },
    data() {
        return {
            count:0,
            message:"Hello World",
            isLogin: false,
            // Constructor
            account: {
                username: "admin",
                password: "1234"

            },
            // Array
            course : [
                "Angular","Vue","React","Flutter","UX/UI"
            ]
        }
    },
}
</script>

<style scoped>
li{
    background-color: salmon;
}
.title{
    color: red;
}
</style>