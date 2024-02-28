<script setup lang="ts">
import { ref } from 'vue'
import ColumnItem from '@/components/ColumnItemComponent/ColumnItem.vue'

const columns = ref([
  { id: 1, columnName: 'Column1' },
  { id: 2, columnName: 'кол2' },
  { id: 3, columnName: 'кол3' }
])

const columnName = ref('')

const newColumnOnSubmit = () => {
  const columnData = {
    text: columnName.value
  }
  if (columnData.text) {
    handleColumnAdded(columnData)
    columnName.value = ''
  }
  closeColumnDialog()
}

const handleColumnAdded = (columnData: any) => {
  columns.value.push({
    id: generateUniqueId(),
    columnName: columnData.text
  })
}

const handleAddCardButtonIsClicked = () => {
  showCardDialog()
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
  columnName.value = ''
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
