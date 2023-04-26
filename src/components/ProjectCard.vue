<script>
export default {
  name: "ProjectCard",

  props: {
    project: Object,
  },
};
</script>

<template>
  <div class="card">
    <img :src="project.image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ project.name }}</h5>
      <p class="card-text">
        {{ project.description }}
        {{ project.image }}
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
