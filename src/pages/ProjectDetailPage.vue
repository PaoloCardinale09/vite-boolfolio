<script>
import ProjectCard from "../components/ProjectCard.vue";
import AppLoader from "../components/AppLoader.vue";
import axios from "axios";

export default {
  name: "ProjectDetailPage",
  data() {
    return {
      project: null,
      isLoading: false,
    };
  },

  created() {
    this.isLoading = true;

    axios
      .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`)
      .then((response) => {
        this.project = response.data;
      })
      .catch((err) => {
        this.$router.push({ name: "not-found" });
      })
      .finally(() => {
        this.isLoading = false;
      });
  },

  components: {
    ProjectCard,
    AppLoader,
  },
};
</script>

<template>
  <h1 class="my-4">
    Project detail <i>{{ project?.name }}</i>
  </h1>
  <AppLoader v-if="isLoading" />
  <ProjectCard v-if="project" :project="project" :isDetail="true" />
</template>

<style lang="scss" scoped></style>
