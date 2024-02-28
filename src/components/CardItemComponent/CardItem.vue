<script setup lang="ts">
import CardItem from '@/components/CardItemComponent/CardItem.vue'

defineProps<{
  card: {
    type: Array<any>
    required: true
  }
}>()
</script>

<template src="./CardItem.html"></template>

<style>
@import 'CardItem.scss';
</style>
