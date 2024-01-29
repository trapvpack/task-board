<script setup lang="ts">
import CardItem from '@/components/CardItemComponent/CardItem.vue'

defineProps<{
    card_id?: int
    card_name?: string
    card_executor?: string
}>()

</script>

<template src ="./CardItem.html">

</template>

<style>
@import "CardItem.scss";
</style>