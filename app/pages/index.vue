<script lang="ts" setup>
import axios from 'axios';

const config = useRuntimeConfig()
const tours = [
    {
        id: 1,
        title: "Bali Tour Package",
        days: "7 Days",
        date: "23 AUGUST - 29 AUGUST",
        price: "$285",
        rating: "4.9",
        image: "/images/hero2.jpg",
    },
    {
        id: 2,
        title: "Java Tour Package",
        days: "5 Days",
        date: "23 AUGUST - 27 AUGUST",
        price: "$218",
        rating: "4.9",
        image: "/images/hero1.jpg",
    },
    {
        id: 3,
        title: "Solo Tour Package",
        days: "3 Days",
        date: "23 AUGUST - 25 AUGUST",
        price: "$163",
        rating: "4.9",
        image: "/images/hero2.jpg",
    },
];

</script>
<template>
    <HeroHome />
    <SectionSlider />
    <SectionTrip />
    <SectionTagline />
    <SectionAbout />
    <SectionArticle />
</template>