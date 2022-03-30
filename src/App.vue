<template lang="pug">
main
  component(:is="layout")
    transition(name="fade" mode="out-in")
      router-view

</template>

<script setup>
import {computed} from 'vue'
import router from '@/router'

const layout = computed(() => {
  return router.meta?.layout ? 'the-public-layout' : 'the-private-layout'
})

router.push({
  name: 'Dashboard'
})
</script>
<style lang="sass" src="@/assets/sass/main.sass"></style>
