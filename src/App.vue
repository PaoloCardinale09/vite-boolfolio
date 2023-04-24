<script>
import AppHeader from "./components/AppHeader.vue";
import ProjectList from "./components/ProjectList.vue";
import axios from "axios";

export default {
  data() {
    return {
      title: "Hello world",
      projects: [],
    };
  },

  components: {
    AppHeader,
    ProjectList,
  },

  methods: {
    fetchProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
        this.projects = response.data;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <AppHeader />
  <div class="container">
    <h1>{{ title }}</h1>
    <ProjectList :projects="projects" />
  </div>
</template>

<style lang="scss" scoped></style>
