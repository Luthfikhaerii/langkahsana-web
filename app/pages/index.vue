<script lang="ts" setup>
definePageMeta({
    layout:'auth'
})

function navigate(){
    navigateTo({
        name:'article-id',
        params:{
            id:1
        },
        // name:'admin-article-id',
        // query: {
        //     name:"apa",
        //     location:"apa"
        // }
    })
}
</script>
<template>
    <button @click="navigate">Ke admin</button>
<p>indexx</p>
</template>