<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      title: "Project list",
    };
  },

  components: {
    AppHeader,
  },
};
</script>

<template>
  <AppHeader />
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped></style>
