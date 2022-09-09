<script setup lang="ts">
import GoogleIcon from "assets/images/themes/icons/google.svg";
definePageMeta({
  layout: "auth",
  layoutTransition: false,
  pageTransition: false,
});
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-7">
      <CardContainer class="pt-4 text-center">
        <div class="p-4 pt-0 card-body">
          <h3>Sign in to your account</h3>
          <form class="pt-3 pt-md-4">
            <button class="p-3">
              <GoogleIcon class="icon-left" />
              Login With Google
            </button>
          </form>
        </div>
        <div class="card-footer p-4">
          <div>Don't have access to your account? <a href="#" class="text-dark">Contact Administrator</a>.</div>
        </div>
      </CardContainer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "assets/styles/components/card-container.scss";
</style>
