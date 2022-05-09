<template>
  <div>
    <h1>VueJS</h1>
    <!-- MVM -->
    <!-- <input v-model="message" type="text" placeholder="Enter your message">
    <div>{{message}}</div>
    <button @click="message = '' ">Reset</button>
    <router-link to= '../src/views/'><button>Home</button></router-link> -->
    <Header></Header>
    <Content></Content>
    
  </div>
  <Footer @onClock="onClock" title="VueJS Learning by Swind Boonma" color="navy" :time="this.time"></Footer>
</template>

<script>
import Header from "@/components/layout/Header.vue"
import Footer from "@/components/layout/Footer.vue"
import Content from "@/components/layout/Content.vue"
import moment from "moment"

export default {
  name:"app",components:{
    Header,Footer,Content
  }
  ,data() {
    return {
      message:"",
      time:""
    }
  },methods: {
    onClock(value){
      this.time = moment(value).format('MM/DD/YYYY hh:mm:ss')
    }
  },
}
</script>

<style scoped>
ul{
  margin: 0;
  padding: 0;
}
li{
  display: inline;
  margin-right: 8px;
}
div{
  background: whitesmoke;
}
.title{
  font-size: 30px;
  color: olive;
}
</style>
<style>
.content{
  color: rebeccapurple;
  font-size: 20px;
}
.contentWrapper{
  margin: 10px;
  padding: 10px;
  border-width: 2px;
  border-color: black;
  border-style: solid;
  background-color: aqua;
}
</style>