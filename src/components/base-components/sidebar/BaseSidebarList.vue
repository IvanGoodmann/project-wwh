<template lang="pug">
.app__sidebar__list
  base-sidebar-link(
    v-for="(item, idx) in menu"
    :key="idx"
    :item="item"
    @menu-click="menuClick"
  )

</template>

<script setup>
import {defineProps, defineEmits} from 'vue'

defineProps({
  menu: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['menu-click'])

const menuClick = (event, item) => {
  emit('menu-click', event, item)
}
</script>

<style scoped>

</style>