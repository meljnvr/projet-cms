<template>
    <p>Blog - {{ $route.params.slug }}</p>
</template>
   
<script setup lang="ts">
    const route = useRoute()
    if (route.params.slug === 'admin')
    {
    console.log('This is admin page')
    }

    const data = useFetch(() => $fetch('https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_toilettes-publiques-nantes-metropole/records?limit=20'))
    useServerSeoMeta({
    ogTitle: () => `${data.value?.nom} - My Site`,
    description: () => data.value?.pole,
    ogDescription: () => data.value?.exploitant,
    })

</script>