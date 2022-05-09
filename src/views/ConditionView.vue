<template>
<div id="condition">
    <h1>Condition</h1>
    <div>
        fill me a location
        <input v-model="type" type="text">
    </div>
    <div v-if="type === 'home'">
        <h1>Home</h1>
        <router-link to="../views">Home</router-link>
    </div>
    <div v-else-if="type === 'intro'">
        <h1>Intro</h1>
        <router-link to="../views/IntroView.vue">Intro</router-link>
    </div>
    <div v-else-if="type === 'about'">
        <h1>About</h1>
        <router-link to="../views/AboutView.vue">About</router-link>
    </div>
    <div v-else>
        <h1>telepoth is not working</h1>
    </div>
    <div v-if="isTrue">
        <h3 style="color : red">!!Amongus!!</h3>
    </div>
    <div v-show="isTrue">
        <h3>ඞ</h3>
    </div>
</div>
</template>

<script>
export default {
    name:"conditionView",
    data() {
        return {
            type : "",
            isTrue: true
        }
    },mounted() {
        setInterval(() => {
            this.isTrue = !this.isTrue}, 1000)
    },
}
</script>

<style>

</style>