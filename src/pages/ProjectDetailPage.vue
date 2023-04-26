<script>
import ProjectCard from "../components/ProjectCard.vue";
import axios from "axios";

export default {
  name: "ProjectDetailPage",
  data() {
    return {
      project: null,
    };
  },

  created() {
    axios
      .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`)
      .then((response) => {
        this.project = response.data;
      });
  },

  components: {
    ProjectCard,
  },
};
</script>

<template>
  <h1 class="my-4">
    Project detail <i>{{ project?.name }}</i>
  </h1>
  <ProjectCard :project="project" v-if="project" />
</template>

<style lang="scss" scoped></style>
