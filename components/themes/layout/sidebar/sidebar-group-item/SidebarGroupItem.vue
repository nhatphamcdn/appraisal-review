<script setup lang="ts">
import { SidebarItem } from "~/@types/sidebar";

interface ISidebarGroup {
  groupItem: SidebarItem;
}
const props = defineProps<ISidebarGroup>();
</script>

<template>
  <div v-if="props.groupItem.children && props.groupItem.children.length" class="sidebar-group-item">
    <div class="sidebar-group-item-container">
      <div :id="props.groupItem.id" class="sidebar-group-item-label">{{ props.groupItem.name }}</div>
      <SidebarItem v-for="item in props.groupItem.children" :key="item.name" :item="item" />
    </div>
  </div>
  <SidebarItem v-else :item="props.groupItem" />
</template>
