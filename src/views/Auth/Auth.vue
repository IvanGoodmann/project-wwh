<template lang="pug">
transition(name="fade" mode="out-in")
  router-view
</template>

<script setup>
import router from '@/router'

router.push({
  name: 'login'
})
</script>

<style scoped>

</style>