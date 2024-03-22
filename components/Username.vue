<script setup>
    const username = ref()

    const isActive = ref(true)
    const hasError = ref(false)
</script>

<template>
    <input type="text" v-model="username" />
    <p>rendu: {{ username }}</p>

    <div
        class="static"
        :class="{ active: isActive,
        'text-danger': hasError }"
        >test</div>
</template>

<style scoped>
.static { 
    color: red;
}
.active {
    color: green;
}
</style>