<script lang='ts' setup>
defineProps<{
  index: number | number[]
}>()
</script>

<template>
  <div
    v-show="
      Array.isArray(index)
        ? index.includes($slidev.nav.clicks)
        : index === $slidev.nav.clicks
    "
  >
    <slot />
  </div>
</template>

<style lang='scss' scoped>
</style>
