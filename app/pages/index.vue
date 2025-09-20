<script lang="ts" setup>

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
    <div class="">
    <HeroHome/>
    </div>

</template>