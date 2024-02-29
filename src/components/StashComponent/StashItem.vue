<script setup lang="ts">
import { ref } from 'vue'
import ColumnItem from '@/components/ColumnItemComponent/ColumnItem.vue'

const columns = ref([
  { id: 1, columnName: 'Column1' },
  { id: 2, columnName: 'кол2' },
  { id: 3, columnName: 'кол3' }
])

const cards = ref([
  { id: 1, cardName: 'card1', cardExecutor: 'name1', columnId: 1 },
  { id: 2, cardName: 'card2', cardExecutor: 'name2', columnId: 2 },
  { id: 3, cardName: 'card3', cardExecutor: 'name3', columnId: 3 }
])

const newColumnName = ref('')
const newCardName = ref('')
const newCardExecutor = ref('')
const currentColumnId = ref<any>(null)

const newColumnOnSubmit = () => {
  const columnData = {
    newColumnName: newColumnName.value
  }
  if (columnData.newColumnName) {
    handleColumnAdded(columnData)
    newColumnName.value = ''
    closeColumnDialog()
  }
}

const handleAddCardButtonIsClicked = (newColumnId: number) => {
  currentColumnId.value = newColumnId
  showCardDialog()
}

const handleCardAdded = (cardData: any) => {
  cards.value.push({
    id: cardData.newId,
    cardName: cardData.newCardName,
    cardExecutor: cardData.newCardExecutor,
    columnId: cardData.newColumnId
  })
  console.log(cardData)
}

const newCardOnSubmit = () => {
  const cardData = {
    newId: generateUniqueId(),
    newCardName: newCardName.value,
    newCardExecutor: newCardExecutor.value,
    newColumnId: currentColumnId.value
  }
  if (cardData.newCardName && cardData.newCardExecutor) {
    handleCardAdded(cardData)
    newCardName.value = ''
    newCardExecutor.value = ''
    closeCardDialog()
  }
}

const handleColumnAdded = (columnData: any) => {
  columns.value.push({
    id: generateUniqueId(),
    columnName: columnData.newColumnName
  })
}

const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000)
}

const showColumnDialog = () => {
  const dialog: HTMLElement | null = document.querySelector('.stash__new-column')
  const overlay: HTMLElement | null = document.querySelector('.stash__overlay')
  dialog?.style.setProperty('visibility', 'visible')
  overlay?.style.setProperty('visibility', 'visible')
}

const closeColumnDialog = () => {
  const dialog: HTMLElement | null = document.querySelector('.stash__new-column')
  const overlay: HTMLElement | null = document.querySelector('.stash__overlay')
  dialog?.style.setProperty('visibility', 'hidden')
  overlay?.style.setProperty('visibility', 'hidden')
  newColumnName.value = ''
}

const showCardDialog = () => {
  const dialog: HTMLElement | null = document.querySelector('.stash__new-card')
  const overlay: HTMLElement | null = document.querySelector('.stash__overlay')
  dialog?.style.setProperty('visibility', 'visible')
  overlay?.style.setProperty('visibility', 'visible')
}

const closeCardDialog = () => {
  const dialog: HTMLElement | null = document.querySelector('.stash__new-card')
  const overlay: HTMLElement | null = document.querySelector('.stash__overlay')
  dialog?.style.setProperty('visibility', 'hidden')
  overlay?.style.setProperty('visibility', 'hidden')
}
</script>

<template src="./Stash.html"></template>

<style>
@import 'Stash.scss';
</style>
