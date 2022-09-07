<script setup lang="ts">
import Logo from "assets/images/themes/logo.svg";
</script>

<!-- DOM Render -->
<template>
  <main class="auth-layout">
    <header class="text-center">
      <h1>
        <Logo />
      </h1>
    </header>
    <section class="container">
      <slot />
    </section>
    <footer class="text-center">
      &copy; 2022 <a href="https://nhatphamcdn.xyz" target="_blank">nhatphamcdn.xyz</a>
    </footer>
  </main>
</template>

<style lang="scss" scoped>
.auth-layout {
  min-height: 100vh;
}
</style>
