<script setup lang="ts">
interface ILogoProps {
  type?: "DarkMode" | "LightMode";
}

const props = withDefaults(defineProps<ILogoProps>(), {
  type: "LightMode",
});

const colorByMode = computed(() => {
  if (props.type === "LightMode") {
    return "rgb(8, 17, 49)";
  }

  return "rgb(255, 255, 255)";
});
</script>

<template>
  <svg width="250" height="62" viewBox="230.275 74.979 53.801 17.299" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 236.315 78.58 L 236.114 84.8 L 236.286 88.518 L 234.284 88.518 L 234.456 85.043 L 234.284 78.937 Z"
      style="fill: rgb(248, 24, 148); white-space: pre"
    />
    <path
      d="M 239.957 85.744 L 239.842 84.443 L 243.217 83.842 L 243.332 85.143 Z"
      :style="`fill: ${colorByMode}; white-space: pre`"
    />
    <path
      d="M 245.727 80.296 L 245.885 78.651 L 252.677 78.651 L 252.52 80.296 L 250.032 80.081 L 249.975 84.8 L 250.146 88.518 L 248.144 88.518 L 248.316 85.043 L 248.259 80.095 Z"
      :style="`fill: ${colorByMode}; white-space: pre`"
    />
    <path
      d="M 253.818 88.518 L 253.989 85.043 L 253.818 78.651 L 259.18 78.651 L 259.023 80.181 L 255.805 80.181 L 255.72 82.712 L 258.58 82.712 L 258.422 84.228 L 255.662 84.228 L 255.648 84.8 L 255.748 87.002 L 259.209 87.002 L 259.051 88.518 Z"
      :style="`fill: ${colorByMode}; white-space: pre`"
    />
    <path
      d="M 266.627 88.59 L 265.926 85.801 L 262.509 85.801 L 261.751 88.518 L 259.92 88.375 L 261.179 84.9 L 263.095 78.751 L 265.655 78.565 L 267.499 84.686 L 268.686 88.275 Z M 264.368 80.424 L 264.182 80.424 L 262.952 84.285 L 265.497 84.285 Z"
      :style="`fill: ${colorByMode}; white-space: pre`"
    />
    <path
      d="M 274.193 84.056 L 274.336 84.056 L 276.424 78.622 L 278.397 78.68 L 278.455 84.829 L 278.726 88.518 L 276.796 88.518 L 276.867 84.8 L 276.71 81.039 L 274.994 85.772 L 273.235 85.858 L 271.634 81.039 L 271.505 84.8 L 271.605 88.518 L 269.832 88.518 L 270.032 85.043 L 270.118 78.908 L 272.391 78.551 Z"
      :style="`fill: ${colorByMode}; white-space: pre`"
    />
  </svg>
</template>
