<template>
  <img src="/logo-octomiro.png" alt="Octomiro Logo" :height="height" />
</template>

<script setup>
defineProps({
  height: {
    type: Number,
    default: 48,
  },
})
</script>

<style scoped>
img {
  max-width: 100%;
}
</style>
