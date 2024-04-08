<script setup lang="ts">
import type { Card } from '@/components/ColumnItemComponent/ColumnItem.vue'
import { defineProps } from 'vue'
import { useStore } from 'vuex'
const store = useStore()


defineProps<{
  card: {
    type: Array<Card>
    required: true
  }
}>()
</script>

<template src="./CardItem.html"></template>

<style>
@import 'CardItem.scss';
</style>
