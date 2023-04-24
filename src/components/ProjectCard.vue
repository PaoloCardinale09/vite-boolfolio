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
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ project.name }}</h5>
      <p class="card-text">
        {{ project.description }}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <a href="#">{{ project.url }}</a>
      </li>
      <li class="list-group-item">{{ project.created_at }}</li>
      <li class="list-group-item">{{ project.updated_at }}</li>
    </ul>
    <!-- <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div> -->
  </div>
</template>

<style lang="scss" scoped></style>
