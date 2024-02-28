<script setup lang="ts">
import CardItem from '@/components/CardItemComponent/CardItem.vue'
import { ref } from 'vue'

const emit = defineEmits(['addCardButtonIsClicked'])
const addCardButtonIsClicked = () => {
  emit('addCardButtonIsClicked')
}

const cards = ref([
  { id: 1, cardName: 'card1', cardExecutor: 'name1', columnId: 1 },
  { id: 1, cardName: 'card2', cardExecutor: 'name2', columnId: 2 },
  { id: 1, cardName: 'card3', cardExecutor: 'name3', columnId: 3 }
])

defineProps<{
  column: {
    type: Array<any>
    required: true
  }
}>()
</script>

<template src="./ColumnItem.html"></template>

<style>
@import 'ColumnItem.scss';
</style>
