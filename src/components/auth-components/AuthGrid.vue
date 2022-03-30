<template lang="pug">
.auth-grid.d-flex.flex-column.align-items-center.justify-content-center
  .auth-grid__wrapper
    .auth-grid__title
      slot(name="title")
    slot
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>