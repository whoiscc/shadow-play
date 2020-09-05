<template>
  <div class="box">
    <h3 class="title is-4">
      {{ userName }}
      <span class="has-text-grey">says:</span>
    </h3>
    <div class="content">
      <p>{{ postContent }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    userName: String,
    postContent: String,
  },
};
</script>