<script>
export default {
  name: "AppLoader",
};
</script>

<template>
  <div class="my-layover">Loading...</div>
</template>

<style lang="scss" scoped>
.my-layover {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba($color: #000000, $alpha: 0.7);
  backdrop-filter: blur(10px);
}
</style>
