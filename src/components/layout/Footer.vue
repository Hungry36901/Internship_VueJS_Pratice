<template>
<div class="footer">
    <span :style="{color}">{{title}} {{time}}</span>
</div>
</template>

<script>
export default {
    name:"FooterTag",mounted() {
        setInterval(() => {
            this.$emit("onClock", Date())
        }, 100)
    },
    props:[
        "title","color","time"
    ]
}
</script>

<style>
.footer{
font-size: 20px;
padding-top: 18px;
}
span{
    margin-right: 5px;
}
</style>