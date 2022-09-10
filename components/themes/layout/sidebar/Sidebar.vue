<script setup lang="ts">
import { ISidebarProps } from "~/@types/sidebar";

// Component props define
const props = withDefaults(defineProps<ISidebarProps>(), {
  width: 240,
  backgroundColor: "#081131",
});

console.log(props);
</script>

<!-- Template render -->
<template>
  <div class="sidebar">
    <div class="sidebar-container">
      <div class="sidebar-header">
        <Logo class="logo" type="DarkMode" />
      </div>
      <div class="sidebar-body">
        <template v-if="props.items.length">
          <SidebarGroupItem
            v-for="sidebarItem in props.items"
            :key="sidebarItem.name"
            :group-item="sidebarItem"
          ></SidebarGroupItem>
          <!-- <div v-for="sidebarItem in props.items" :key="sidebarItem.name">
            <template v-if="sidebarItem.children && sidebarItem.children.length">
              <div>
                {{ sidebarItem.name }}
              </div>
            </template>
            <NuxtLink v-else :to="sidebarItem.link">{{ sidebarItem.name }}</NuxtLink>
          </div> -->
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Bind props value
.sidebar {
  background-color: v-bind("props.backgroundColor");
  width: v-bind("props.width + 'px'");
}

@import "./Sidebar.scss";
</style>
