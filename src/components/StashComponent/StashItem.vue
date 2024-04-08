<script setup lang="ts">
import { ref } from 'vue'
import ColumnItem from '@/components/ColumnItemComponent/ColumnItem.vue'
import { useStore } from 'vuex'

const store = useStore()

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
const editCardName = ref('')
const editCardExecutor = ref('')
const currentColumnId = ref<any>(null)

const newColumnOnSubmit = () => {
  const columnData = {
    newColumnName: newColumnName.value
  }
  if (columnData.newColumnName) {
    handleColumnAdded(columnData)
    newColumnName.value = ''
    changeStateColumnDialog("hidden")
  }
}

const handleAddCardButtonIsClicked = (newColumnId: number) => {
  currentColumnId.value = newColumnId
  changeStateNewCardDialog('visible')
}

const handleEditingCard = (id: number) => {
  showCardEdit(id)
}

const handleDeleteCard = (id: number) => {
  cards.value = cards.value.filter((card) => card.id !== id)
}

const handleOnDrop = (cardId: number, targetColumnId: number): void => {
  cards.value = cards.value.map((card) => {
    if (card.id === cardId) card.columnId = targetColumnId
    return card
  })
}

const handleCardAdded = (cardData: any) => {
  cards.value.push({
    id: cardData.newId,
    cardName: cardData.newCardName,
    cardExecutor: cardData.newCardExecutor,
    columnId: cardData.newColumnId
  })
}

const handleCardEdited = (cardData: any, id: number) => {
  const index = cards.value.findIndex((card) => card.id === id)
  cards.value = cards.value.map((card) => {
    if (card.id === id) {
      card.id = cardData.editId
      card.cardName = cardData.editCardName
      card.cardExecutor = cardData.editCardExecutor
      card.columnId = cardData.editColumnId
    }
    return card
  })
}
const handleColumnAdded = (columnData: any) => {
  columns.value.push({
    id: generateUniqueId(),
    columnName: columnData.newColumnName
  })
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
    changeStateNewCardDialog('hidden')
  }
}
const editCardOnSubmit = () => {
  const editCardData = {
    editId: store.state.cardOnEdit,
    editCardName: editCardName.value,
    editCardExecutor: editCardExecutor.value,
    editColumnId: store.state.columnIdOnEdit
  }
  if (editCardData.editCardName && editCardData.editCardExecutor) {
    handleCardEdited(editCardData, store.state.cardOnEdit)
    editCardName.value = ''
    editCardExecutor.value = ''
    closeEditCardDialog()
  }
}

const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000)
}

const changeStateColumnDialog = (state: string) => {
  const dialog: HTMLElement | null = document.querySelector('.stash__new-column')
  const overlay: HTMLElement | null = document.querySelector('.stash__overlay')
  dialog?.style.setProperty('visibility', state)
  overlay?.style.setProperty('visibility', state)
  if (state === "hidden")
  {
    newColumnName.value = ''
  }
}

const changeStateNewCardDialog = (state: string) => {
  const dialog: HTMLElement | null = document.querySelector('.stash__new-card')
  const overlay: HTMLElement | null = document.querySelector('.stash__overlay')
  dialog?.style.setProperty('visibility', state)
  overlay?.style.setProperty('visibility', state)
  if (state === "hidden")
  {
    newCardName.value = ''
    newCardExecutor.value = ''
  }
}

const closeEditCardDialog = () => {
  const dialog: HTMLElement | null = document.querySelector('.stash__edit-card')
  const overlay: HTMLElement | null = document.querySelector('.stash__overlay')
  dialog?.style.setProperty('visibility', 'hidden')
  overlay?.style.setProperty('visibility', 'hidden')
  editCardName.value = ''
  editCardExecutor.value = ''
}

const showCardEdit = (id: number) => {
  const dialog: HTMLElement | null = document.querySelector('.stash__edit-card')
  const overlay: HTMLElement | null = document.querySelector('.stash__overlay')
  cards.value = cards.value.map((card) => {
    if (card.id === id) {
      editCardName.value = card.cardName
      editCardExecutor.value = card.cardExecutor
    }
    return card
  })
  dialog?.style.setProperty('visibility', 'visible')
  overlay?.style.setProperty('visibility', 'visible')
}
</script>

<template src="./Stash.html"></template>

<style>
@import 'Stash.scss';
</style>
