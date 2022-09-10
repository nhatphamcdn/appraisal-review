<script setup lang="ts">
import { PItem } from "~/@types/sidebar";

interface IItem {
  item: PItem;
}
const props = defineProps<IItem>();
</script>

<template>
  <NuxtLink :to="props.item.link">
    {{ props.item.name }}
  </NuxtLink>
</template>
