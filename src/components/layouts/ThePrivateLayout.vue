<template lang="pug">
.app__layout.app__layout--private
  the-sidebar
  .app__content
    the-header
    transition(name="scale" mode="out-in")
      router-view
</template>

<script setup>
</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}


.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>