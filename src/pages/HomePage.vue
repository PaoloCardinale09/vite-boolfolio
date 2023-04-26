<script>
import ProjectList from "../components/projectList.vue";

export default {
  data() {
    return {};
  },

  components: {
    ProjectList,
  },
};
</script>

<template>
  <ProjectList class="my-3" @changePage="fetchProjects" />
</template>

<style lang="scss" scoped></style>
