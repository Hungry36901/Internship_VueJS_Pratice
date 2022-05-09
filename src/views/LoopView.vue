<template>
<div>
    <h1>Loop</h1>
    <h3>Language</h3>
    <ul>
        <li v-for="(item, index) in items" :key="index">
            {{item}}
        </li>
    </ul>
    <hr>
    <h3>Os</h3>
    <ul>
        <li v-for="(item, index) in os" :key="index">
            {{item.title}} Price {{item.price}}
        </li>
    </ul>
    <hr>
    <h3>Os Destructoring</h3>
    <ul>
        <li v-for="({title,price}, index) in os" :key="index">
            {{title}} Price {{price}}
        </li>
    </ul>
    <hr>
    <h3>Add/Remove item</h3>
    <input type="text" v-model="item.name" placeholder="name">
    <br>
    <input type="number" v-model="item.dynamicPrice" placeholder="price">
    <br>
    <button @click="addData">add</button>
    <br>
    <ul>
    <li v-for="(item, index) in dynamicItem" :key="index">
        {{item.name}} Price {{item.dynamicPrice}} <button @click="deleteData(index)">X</button>
    </li>
    </ul>
</div>
</template>

<script>
export default {
    name:"loopView",data() {
        return {
            items : ["vue","react","angular"],
            os : [{title : "android" , price : "8000"} , {title : "ios" , price : "20000"}],
            dynamicItem: [],
            item:{name : "" , dynamicItem: 0}

        }
    },methods: {
        addData(){
            this.dynamicItem.push(this.item)
            this.item = {name: "" , price: 0}
        },
        deleteData(index){
            this.dynamicItem.splice(index, 1)
        }
    },
}
</script>

<style>

</style>