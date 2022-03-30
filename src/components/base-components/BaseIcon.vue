<template lang="pug">
svg(:class="className")
  title(v-if="title") {{ title }}
  use(:xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink")
</template>

<script setup>
import {defineProps, computed} from 'vue'

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  name: {
    type: String,
    require: true
  },
  title: {
    type: String,
    default: null
  }
})

const iconPath = computed(() => {
  let icon = require(`@/assets/icons/${props.name}.svg`)
  if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
    icon = icon.default
  }
  return icon.url
})

const className = computed(() => {
  return 'svg-icon svg-icon--' + props.name
})

</script>

<style module>
.svg_icon {
  fill: currentColor;
  height: 24px;
  width: 24px;
}
</style>