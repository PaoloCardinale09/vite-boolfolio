<script>
import AppHeader from "./components/AppHeader.vue";
import ProjectList from "./components/ProjectList.vue";
import axios from "axios";

export default {
  data() {
    return {
      title: "Project list",

      projects: {
        list: [],
        pages: [],
      },
    };
  },

  components: {
    AppHeader,
    ProjectList,
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
  <AppHeader />
  <div class="container">
    <h1>{{ title }}</h1>
    <ProjectList
      :projects="projects.list"
      :pages="projects.pages"
      class="my-3"
      @changePage="fetchProjects"
    />
  </div>
</template>

<style lang="scss" scoped></style>
