<script setup lang="ts">
import { sidebarItems } from "@/constance/sidebar.constance";
</script>

<template>
  <div class="default-layout">
    <Sidebar :items="sidebarItems" />
    <div class="container-fluid">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  padding-left: 240px;
}
</style>
