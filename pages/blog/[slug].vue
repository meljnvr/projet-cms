<template>
    <p>Blog - {{ $route.params.slug }}</p>

    <div class="recipe">
        <h1>{{ recipePost.title }}</h1>
        <img :src="recipePost.image.url" :alt="recipePost.title">
        <p>{{ recipePost.content }}</p>
        <ul class="steps">
            <li v-for="step in recipePost.recipeStep" :key="step.id" class="step">
                <p>{{ step.content }}</p>
                <img :src="step.image.url" :alt="step.title">
            </li>
        </ul>
    </div>
    
</template>
   
<script setup>
    import { useRoute } from 'vue-router';
    import recipe_post from '@/cms/queries/recipe_post';

    const route = useRoute();
    const slug = route.params.slug;

    const { data: postData, pending: postPending, error: postError } = await useLazyAsyncQuery(recipe_post, { slug: slug });

    const recipePost = postData.value.recipePost;

    console.log(recipePost)
</script>