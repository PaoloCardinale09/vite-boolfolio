<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  name: "AppHeader",
};
</script>

<template>
  <nav class="navbar bg-light">
    <div class="container">
      <span class="navbar-brand mb-0 h1">Portfolio</span>
      <div>
        <router-link :to="{ name: 'home' }" class="nav-link">
          Homepgage
        </router-link>
        <router-link :to="{ name: 'contacts' }" class="nav-link">
          Contacts
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
