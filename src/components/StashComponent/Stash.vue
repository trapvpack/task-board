<script>
import ColumnItem from '@/components/ColumnItemComponent/ColumnItem.vue'
export default {
  components: { ColumnItem },
  data() {
    return {
      stashes: [
        { id: 1, columnName: 'кол1' },
        { id: 2, columnName: 'кол2' },
        { id: 3, columnName: 'кол3' },
        { id: 4, columnName: 'кол4' }
      ]
    }
  }
}



/*document.addEventListener('DOMContentLoaded', function() {
        const dialog = document.querySelector('.stash__new-column')
        const overlay = document.querySelector('.stash__overlay')
        document.querySelector('.stash__add-button').onclick = function() {
            dialog.style.visibility = 'visible';
            overlay.style.visibility = 'visible';
        };
        document.querySelector('.stash__new-column-close').onclick = function() {
            dialog.style.visibility = 'hidden';
            overlay.style.visibility = 'hidden';
        };

        const column = document.getElementsByClassName("column")

    });*/
</script>

<template src="./Stash.html"></template>

<style>
@import 'Stash.scss';
</style>