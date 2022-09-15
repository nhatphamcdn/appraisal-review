<script setup lang="ts">
import DragHandle from "assets/images/themes/icons/drag-handle.svg";

interface myArrayList {
  id: number;
  name: string;
}
const myArray = ref<myArrayList[]>([
  {
    id: 0,
    name: "Testing",
  },
  {
    id: 1,
    name: "Testing 2",
  },
  {
    id: 2,
    name: "Testing 4",
  },
  {
    id: 3,
    name: "Testing 3",
  },
  {
    id: 4,
    name: "Testing 2",
  },
  {
    id: 5,
    name: "Testing 4",
  },
  {
    id: 6,
    name: "Testing 3",
  },
]);

const isDragging = ref<boolean>(false);

watch(
  myArray,
  (newValue) => {
    newValue.forEach((v) => {
      console.log(v.name);
    });
  },
  { deep: true },
);

const dragOptions = computed(() => {
  return {
    animation: 350,
    group: "description",
    disabled: false,
    ghostClass: "ghost",
  };
});
</script>

<template>
  <div>
    <h1>Settings 360 templates</h1>

    <div>Draggle sample</div>
    <div>
      <draggable
        tag="ul"
        :list="myArray"
        class="list-group"
        handle=".handle"
        item-key="name"
        v-bind="dragOptions"
        aria-style="none"
        @start="isDragging = true"
        @end="isDragging = false"
      >
        <template #item="{ element }">
          <li class="list-group-item">
            <div class="d-flex">
              <ClientOnly>
                <i class="handle">
                  <DragHandle />
                </i>
              </ClientOnly>
              <Editor v-model="element.name" :editable="!isDragging" />
            </div>
          </li>
        </template>
      </draggable>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ghost {
  opacity: 0.5;
  background: #fbe0fd;
  border-radius: $borderRadius;
}
.list-group {
  min-height: 20px;
}
.handle {
  cursor: grab;
  margin-right: 1rem;
  padding: 5px;
}
.list-group-item {
  margin: 0.5rem 0;
  padding: 0.5rem;
}
</style>
