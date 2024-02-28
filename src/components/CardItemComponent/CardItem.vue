<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  card: {
    type: Array<string>
    required: true
  }
}>()
</script>

<template src="./CardItem.html"></template>

<style>
@import 'CardItem.scss';
</style>
