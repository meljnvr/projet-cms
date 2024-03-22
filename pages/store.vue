<template>
    <h2>Store pinia</h2>
    <button
   @click="increment">increment</button>
    <p>{{ count }}</p>
   </template>
   <script setup>
    import { useCounterStore } from
   '@/store/counter.ts'
    import { storeToRefs } from 'pinia'
    const inputVal = ref('')
    const counterStore =
   useCounterStore()
    const { increment } = counterStore
    const { count } =
   storeToRefs(counterStore)
   </script>