<template>
  <div
    class="spinner"
    v-bind="$attrs"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style="margin: auto; background: none; display: block; shape-rendering: auto;"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="currentColor"
        stroke-width="10"
        r="35"
        stroke-dasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Spinner'
}
</script>

<style lang="sass" scoped>
.spinner
  width: 16px
  height: 16px
  margin-right: 8px
  & svg
    width: 100%
    height: 100%
    & circle
      stroke: var(--color-dark-16)
</style>