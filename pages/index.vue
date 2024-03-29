<template>
    <div>
        <h1>Welcome to the homepage</h1>
        <AppInfo>
        This is an auto-imported component
        </AppInfo>
        <Counter></Counter>
        <Username></Username>
        <Parent></Parent>
        <div class="image">
            <img style="width:250px;" src="~assets/fred.jpg" alt="fred"/>
        </div>
        <li><NuxtLink :to="{name: 'blog-slug', params: {slug: 'test'}}">Blog usage</NuxtLink></li>
        <li><NuxtLink :to="{name: 'dato-fetch'}">Dato usage</NuxtLink></li>
    </div>
</template>
   