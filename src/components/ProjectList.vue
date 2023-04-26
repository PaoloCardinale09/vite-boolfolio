<script>
import ProjectCard from "./ProjectCard.vue";
import AppPagination from "./AppPagination.vue";
import axios from "axios";
export default {
  data() {
    return {
      title: "Project List",
      projects: {
        list: [],
        pages: [],
      },
    };
  },

  components: {
    ProjectCard,
    AppPagination,
  },

  emits: ["changePage"],

  methods: {
    fetchProjects(endpoint = null) {
      if (!endpoint) endpoint = "http://127.0.0.1:8000/api/projects";
      axios.get(endpoint).then((response) => {
        this.projects.list = response.data.data;
        this.projects.pages = response.data.links;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <section>
    <h1 class="my-4">{{ title }}</h1>
    <div v-if="projects.list.length" class="row g-4">
      <ProjectCard
        v-for="project in projects.list"
        :key="project.id"
        :project="project"
        class="col-4 d-flex"
      />
    </div>

    <h2 v-else class="text-muted">Non ci sono progetti</h2>

    <AppPagination :pages="projects.pages" @changePage="fetchProjects" />
  </section>
</template>

<style lang="scss" scoped></style>
