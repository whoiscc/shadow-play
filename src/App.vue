<template>
  <div class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-8">
          <Control />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Control from "./components/Control.vue";

export default {
  name: "App",
  components: {
    Control,
  },
};
</script>
