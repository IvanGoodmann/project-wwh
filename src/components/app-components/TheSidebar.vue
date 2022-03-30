<template lang="pug">
aside.app__sidebar.d-flex.flex-column.justify-content-start
  .app__sidebar--logo wwh
  base-sidebar-list(
    :menu="menu"
  )
</template>

<script setup>
import menu from '@/menu.ts'
</script>

<style scoped>

</style>