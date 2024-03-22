<script setup>
    const x = ref(0)
const y = ref(0)
// single ref
watch(x, (newX) => {
 console.log(`x is ${newX}`)
})
</script>

<template>
   <div>{{ x }}</div>
   <Child greeting-message="hello" />
</template>
