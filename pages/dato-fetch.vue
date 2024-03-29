<template>
    <h1>Dato usage</h1>
    <h2>Blog header</h2>
    <div v-if="headerPending">
        <p>Loading data</p>
    </div>
    <div v-else-if="headerError">
      <p>error: {{ headerError }}</p>
    </div>
    <div v-else>
        <p>Site name: {{ cmsHeader?.header?.title }}</p>
    </div>

    <h2>Recipe results</h2>
    <div v-if="recipesPending">
        <p>Loading data</p>
    </div>
    <div v-else-if="recipeError">
      <p>error: {{ recipeError }}</p>
    </div>
    <div v-else>
        <ul class="recipes">
            <li v-for="post in recipePosts.allRecipePosts" :key="post.id" class="recipes__content">
                <img :src="post.image.url" :alt="post.title">
                <nuxt-link :to="{name: 'blog-slug', params: {slug: post.slug}}"> {{ post.title }}</nuxt-link>
            </li>
        </ul>
    </div>


</template>

<script setup>
    import recipe_posts from '@/cms/queries/recipe_posts';
    import header from '@/cms/queries/header';

    const { data: recipePosts, pending: postsPending, error: recipeError } = await useLazyAsyncQuery(recipe_posts)
    const { data: cmsHeader, pending: headerPending, error: headerError } = await useLazyAsyncQuery(header)
</script>