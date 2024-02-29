<script setup lang="ts">
import CardItem from '@/components/CardItemComponent/CardItem.vue'
import { ref, defineProps } from 'vue'

const emit = defineEmits(['addCardButtonIsClicked', 'cardIsAdded'])
const addCardButtonIsClicked = () => {
  emit('addCardButtonIsClicked')
}

const props = defineProps({
  column: {
    type: Array<string>,
    required: true
  },
  cards: {
    type: Array<typeof CardItem>,
    required: true
  }
})

let cards = ref(props.cards)

const onDragStart = (e: DragEvent, card: typeof CardItem): void => {
  e.dataTransfer!.dropEffect = 'move'
  e.dataTransfer!.effectAllowed = 'move'
  e.dataTransfer?.setData('cardId', card.id.toString())
  console.log(e.dataTransfer)
}

const onDrop = (e: DragEvent, targetColumnId: number): void => {
  const cardId = parseInt(e.dataTransfer!.getData('cardId'))
  cards.value = cards.value.map((card) => {
    if (card.id === cardId) card.columnId = targetColumnId
    return card
  })
}
</script>

<template src="./ColumnItem.html"></template>

<style>
@import 'ColumnItem.scss';
</style>
