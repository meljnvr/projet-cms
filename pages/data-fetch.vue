<template>
    <div v-if="pending">
     Loading ...
    </div>
    <div v-else>
     <div v-for="post in posts.results">
        <p>{{ post.nom }}</p>
     </div>
    </div>
    </template>
    
    <script setup>
    /* Navigation will occur before fetching is complete.
    Handle pending and error states directly within your
    component's template*/
    const { pending, data: posts } =
    useLazyFetch('https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_toilettes-publiques-nantes-metropole/records?limit=20')
    watch(posts, (newPosts) => {
        console.log(newPosts)
    })
</script>