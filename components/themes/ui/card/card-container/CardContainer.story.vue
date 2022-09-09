<script setup lang="ts">
const content = ref<string>(`<b>Hello card container component</b>\n<p>Let's injects many tags to here...</p>`);
</script>

<template>
  <Story title="Card Container">
    <Variant title="Without childrens">
      <CardContainer />
    </Variant>
    <Variant title="Append class name">
      <CardContainer class="p-4" />
    </Variant>
    <Variant title="Inject children tags">
      <!-- eslint-disable -->
      <CardContainer class="p-2">
        <div v-html="content" />
      </CardContainer>
      <!-- eslint-enable -->
      <textarea v-model="content" class="mt-4 p-4" />
    </Variant>
  </Story>
</template>

<style lang="scss" scoped>
textarea {
  border: 0;
  border-radius: 0.5rem;
  display: block;
  width: 100%;
}
</style>

<docs lang="md">
###### CardContainer documentation
</docs>
