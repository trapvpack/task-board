<script setup lang="ts">
import { defineProps } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
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
