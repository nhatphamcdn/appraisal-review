<script setup lang="ts">
definePageMeta({
  layout: "auth",
  layoutTransition: false,
  pageTransition: false,
});
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-6">
      <CardContainer class="pt-2">
        <div class="w-100 text-center">
          <div class="mb-4 mt-md-0">
            <h3>Sign in to your account</h3>
          </div>
          <form class="mt-4">
            <button>Login With Google</button>
          </form>
        </div>
      </CardContainer>
    </div>
  </div>
</template>
