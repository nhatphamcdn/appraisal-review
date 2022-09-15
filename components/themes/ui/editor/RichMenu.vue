<script setup lang="ts">
import { Editor } from "@tiptap/core";

type ButtonAction = () => void;
interface levelObject {
  level: number;
}
interface IAction {
  name: string | Array<string | levelObject>;
  label: string;
  class?: string;
  icon?: string;
  action?: ButtonAction;
}

interface IRichMenuProps {
  editor: Editor;
}

const props = defineProps<IRichMenuProps>();
const buttons = ref<IAction[]>([
  {
    name: ["heading", { level: 1 }],
    label: "H1",
    action: () => props.editor.commands.toggleHeading({ level: 1 }),
  },
  {
    name: ["heading", { level: 2 }],
    label: "H2",
    action: () => props.editor.commands.toggleHeading({ level: 2 }),
  },
  {
    name: ["heading", { level: 3 }],
    label: "H3",
    action: () => props.editor.commands.toggleHeading({ level: 3 }),
  },
  {
    name: "bold",
    label: "B",
    icon: "bold",
    action: () => props.editor.commands.toggleBold(),
  },
  {
    name: "italic",
    label: "I",
    icon: "italic",
    action: () => props.editor.commands.toggleItalic(),
  },
  {
    name: "strike",
    label: "Strike",
    icon: "strike",
    action: () => props.editor.commands.toggleStrike(),
  },
  {
    name: "underline",
    label: "Underline",
    icon: "underline",
    action: () => props.editor.commands.toggleUnderline(),
  },
  {
    name: "blockquote",
    label: "Blockquote",
    icon: "quote",
    action: () => props.editor.commands.toggleBlockquote(),
  },
  {
    name: "code",
    label: "Code",
    icon: "code",
    action: () => props.editor.commands.toggleCode(),
  },
  {
    name: "bulletList",
    label: "Bullet List",
    icon: "ul",
    action: () => props.editor.commands.toggleBulletList(),
  },
  {
    name: "orderedList",
    label: "Order List",
    icon: "ol",
    action: () => props.editor.commands.toggleOrderedList(),
  },
  {
    name: "Horizontal Rule",
    label: "Horizontal Rule",
    icon: "hr",
    action: () => props.editor.commands.setHorizontalRule(),
  },
]);

const { getImageUrl } = useAssetImage();
</script>

<template>
  <div class="toolbar">
    <button
      v-for="button in buttons"
      :key="button.label"
      tab-index="-1"
      :class="{
        'is-active': props.editor.isActive(
          typeof button.name !== 'string' ? (button.name?.[0], button.name?.[1]) : button.name,
        ),
      }"
      @click.stop="button.action"
    >
      <div v-if="button.icon" class="icon">
        <img :src="getImageUrl(button.icon, 'svg')" :alt="`${button.icon}`" />
      </div>
      <template v-else>
        {{ button.label }}
      </template>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.toolbar {
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease-in-out;
  display: flex;
  gap: 0.25rem;
  margin: 0.25rem 0;
}

button {
  background-color: $contrast;
  border-color: $contrast-highest;
  color: $dark;
  box-shadow: none;
  padding: 0.25rem;
  font-weight: 100;
  font-size: 0.75rem;
  transition: all $baseTimeTransition ease-in-out;

  img {
    width: 15px;
    height: 10px;
  }

  &.is-active {
    background-color: rgba(#ff69b4, 0.25);
    color: white;
  }
}
</style>
