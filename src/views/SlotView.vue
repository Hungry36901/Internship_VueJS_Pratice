<template>
  <div id="Slot">
      <span>
      <Clock>
          <template v-slot:header>
              <div>
                  <h1 style="color : magenta">Slot</h1>
              </div>
          </template>
          <span style="color : red"> Current time </span>
      </Clock>
      <Clock>
          <span style="color : blue"> เวลาปัจจุบัน </span>
      </Clock>
    <!-- Using Fallback (Default) -->
      <Clock></Clock>
      <Clock>
          <span style="color : navy"> Current time </span>
          <template v-slot:footer>
              <div>
                  <h3 style="color : magenta">Footer</h3>
              </div>
          </template>
      </Clock>
      </span>
  </div>
</template>

<script>

import Clock from "@/components/helper/Clock.vue"

export default {
    name:"slotView",components:{Clock}

}
</script>

<style scoped>
div{
    color: yellowgreen;
    font-size: 20px;
}
</style>