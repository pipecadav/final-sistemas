<template>
  <transition name="component-fade" mode="out-in">
    <slot />
  </transition>
</template>

<style lang="scss" scoped>
  .component-fade-enter-active,
  .component-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .component-fade-enter,
  .component-fade-leave-to {
    opacity: 0;
  }
</style>

<script>
export default {
  name: 'TransitionComponent',
}
</script>
