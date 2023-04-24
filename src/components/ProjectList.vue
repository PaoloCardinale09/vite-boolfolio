<script>
import ProjectCard from "./ProjectCard.vue";
export default {
  props: {
    projects: Array,
  },

  components: {
    ProjectCard,
  },
};
</script>

<template>
  <section>
    <div v-if="projects.length" class="row g-4">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        class="col-4 d-flex"
      />
    </div>

    <h2 v-else class="text-muted">Non ci sono progetti</h2>
  </section>
</template>

<style lang="scss" scoped></style>
