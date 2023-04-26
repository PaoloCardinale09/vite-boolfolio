<script>
export default {
  name: "ProjectCard",

  props: {
    project: Object,
    isDetail: Boolean,
  },

  computed: {
    abstract() {
      return this.project.description.slice(0, 100) + "...";
    },
  },
};
</script>

<template>
  <div class="card">
    <img :src="project.image" class="card-img-top" alt="..." />
    <div class="card-body">
      <div>
        <span class="badge rounded-pill text-bg-primary my-2 me-2">
          {{ project.type?.label }}
        </span>
      </div>
      <h5 class="card-title">{{ project.name }}</h5>
      <span
        class="badge text-bg-secondary my-2 me-2"
        v-for="tech in project.technologies"
        :key="technology_id"
      >
        {{ tech.label }}
      </span>
      <p class="card-text">
        {{ isDetail ? project.description : abstract }}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <a href="#">{{ project.url }}</a>
      </li>
      <li class="list-group-item">{{ project.created_at }}</li>
      <li class="list-group-item">{{ project.updated_at }}</li>
    </ul>

    <router-link
      v-if="!isDetail"
      class="btn btn-primary btn-sm"
      :to="{
        name: 'project-detail',
        params: {
          id: project.id,
        },
      }"
      >Details</router-link
    >
  </div>
</template>

<style lang="scss" scoped></style>
