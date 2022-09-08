<!-- Script -->
<script setup lang="ts">
// Component interface
interface ICardCotnainerProps {
  boxShadow?: boolean;
  backgroundColor?: string;
  borderRadius?: number | string;
}

// Component define props
const props = withDefaults(defineProps<ICardCotnainerProps>(), {
  boxShadow: true,
  backgroundColor: "white",
  borderRadius: "0.5rem",
});

// Computed handle
const boxShadowStyleValue = computed(() => {
  const SHADOW_VALUE = "0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)";
  if (!props.boxShadow) {
    return "none";
  }
  return SHADOW_VALUE;
});

const borderRadiusStyleValue = computed(() => {
  if (typeof props.borderRadius === "number") {
    return `${props.borderRadius}px`;
  }
  return props.borderRadius;
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
  border-radius: v-bind(borderRadiusStyleValue);
  background-color: v-bind("props.backgroundColor");
  box-shadow: v-bind(boxShadowStyleValue);
}
</style>
