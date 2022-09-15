<script setup lang="ts">
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
watch(isDragging, (v) => {
  console.log(v);
});

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
            <i class="handle" @click="isDragging = true">ICON</i>
            <Editor v-model="element.name" :editable="!isDragging" />
          </li>
        </template>
      </draggable>
    </div>
  </div>
</template>

<style>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.handle {
  cursor: grab;
}
.list-group-item {
  background: #ccc;
  margin: 0.5rem 0;
  padding: 0.5rem;
}
</style>
