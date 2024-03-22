<script setup>
import { reactive } from 'vue'
const state = reactive({ count: 0 })
function increment() {
 state.count++
}
const items = [
    {
        "id": 1,
        "text": "blabla"
    },{
        "id": 2,
        "text": "blabla2"
    }
]
</script>

<template>
    <button @click="increment">
    {{ state.count }}
    </button>

    <div v-for="item in items" :key="item.id">
        {{ item.text }}
    </div>

   </template>