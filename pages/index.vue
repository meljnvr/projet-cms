<template>
    <div>
        <h1>Welcome to the homepage</h1>
        <AppInfo>
        This is an auto-imported component
        </AppInfo>
        <Counter></Counter>
        <Username></Username>
        <Parent></Parent>
        <!-- <li><NuxtLink :to="{name: 'blog-slug', params: {slug: 'recette-tarte-pommes'}}">Blog usage</NuxtLink></li> -->
        <li><NuxtLink :to="{name: 'dato-fetch'}">Dato usage</NuxtLink></li>
    </div>
</template>
   