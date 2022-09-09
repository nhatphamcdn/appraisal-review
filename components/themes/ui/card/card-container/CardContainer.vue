<!-- Script -->
<script setup lang="ts">
// Component interface
interface ICardCotnainerProps {
  boxShadow?: string;
  backgroundColor?: string;
  borderRadius?: string | number;
}

// Component define props
const props = withDefaults(defineProps<ICardCotnainerProps>(), {
  boxShadow: "0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)",
  backgroundColor: "white",
  borderRadius: "0.5rem",
});
</script>

<!-- DOM Render -->
<template>
  <div class="card-container">
    <slot />
  </div>
</template>

<!-- Scoped style -->
<style lang="scss" scoped>
.card-container {
  border-radius: v-bind("typeof props.borderRadius === 'number' ? `${props.borderRadius}px` : props.borderRadius");
  background-color: v-bind("props.backgroundColor");
  box-shadow: v-bind("props.boxShadow");
}
</style>
