<script setup lang="ts">
import CardItem from '@/components/CardItemComponent/CardItem.vue'
import { ref, defineProps } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const emit = defineEmits([
  'addCardButtonIsClicked',
  'cardIsAdded',
  'onDrop',
  'deleteCard',
  'editCard'
])
const addCardButtonIsClicked = () => {
  emit('addCardButtonIsClicked')
}

export interface Card {
  id: number
  cardName: string
  cardExecutor: string
  columnId: number
}
export interface Column {
  id: number
  columnName: string
}


const props = defineProps({
  column: {
    type: Array<Column>,
    required: true
  },
  cards: {
    type: Array<Card>,
    required: true
  }
})

const deleteCardEmiter = () => {
  emit('deleteCard')
}
const editCardEmiter = () => {
  emit('editCard')
}

const onDragStart = (e: DragEvent, card: Card): void => {
  e.dataTransfer!.dropEffect = 'move'
  e.dataTransfer!.effectAllowed = 'move'
  store.state.cardId = card.id
}
</script>

<template src="./ColumnItem.html"></template>

<style>
@import 'ColumnItem.scss';
</style>
