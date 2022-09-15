<template>
  <div class="loader"></div>
</template>

<style lang="scss" scoped>
.loader,
.loader:after {
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
}

.loader {
  font-size: 10px;
  position: relative;
  text-indent: -9999rem;
  border-top: 0.25rem solid rgba($primary, 0.2);
  border-right: 0.25rem solid rgba($primary, 0.2);
  border-bottom: 0.25rem solid rgba($primary, 0.2);
  border-left: 0.25rem solid $primary;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: loadingCircle 1.1s infinite linear;
  animation: loadingCircle 1.1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loadingCircle {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
