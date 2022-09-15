<template>
  <div v-if="editor" :class="['editor', { disabled: !props.editable }]">
    <RichMenu :editor="editor" class="toolbar" />
    <EditorContent class="rich-text-editor" :editor="editor" />
  </div>
</template>

<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

interface IEditorProps {
  editable?: boolean;
  modelValue: string;
  autofocus?: boolean;
}

const props = withDefaults(defineProps<IEditorProps>(), {
  autofocus: false,
});

const triggerRefresh = toRef(props, "modelValue");
const emit = defineEmits(["update:modelValue"]);

const editor = useEditor({
  content: props.modelValue,
  extensions: [StarterKit, Underline],
  editable: props.editable,
  autofocus: props.autofocus,
  onUpdate: ({ editor }) => {
    const search_timeout = setTimeout(() => {
      emit("update:modelValue", editor.getHTML());
    }, 400);

    if (search_timeout) {
      clearTimeout(search_timeout);
    }
  },
});

watch(triggerRefresh, (value) => {
  if (editor.value?.getHTML() == value) {
    return;
  }

  editor.value?.commands.setContent(props.modelValue);
});

onBeforeUnmount(() => {
  editor.value?.destroy();
});
</script>

<style lang="scss">
@import "./Editor.scss";
</style>
