<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  props: {
    name: "AppPagination",
    pages: Array,
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <nav aria-label="Project pagination">
    <ul class="pagination my-3">
      <li v-for="page in pages" class="page-item">
        <button
          type="button"
          class="page-link"
          @click="$emit('changePage', page.url)"
          :class="{
            disabled: !page.url,
            active: page.active,
          }"
          v-html="page.label"
        ></button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
