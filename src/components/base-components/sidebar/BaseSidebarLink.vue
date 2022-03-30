<template lang="pug">
.app__sidebar__link
  component(
    :is="componentIs"
    :to="itemTo"
    :href="itemHref"
    :target="itemTarget"
    @click="menuClick"
  ).d-flex.align-items-center
    base-icon.icon(:name="item.icon")
    span {{ item.label }}

</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['menu-click'])

const componentIs = computed(() => props.item.to ? 'router-link' : 'a')
const itemTo = computed(() => props.item.to || null)
const itemHref = computed(() => props.item.href || null)
const itemTarget = computed(() => componentIs.value === 'a' && props.item.target ? props.item.target : null)

const menuClick = event => {
  emit('menu-click', event, props.item)

}

</script>

<style scoped>

</style>