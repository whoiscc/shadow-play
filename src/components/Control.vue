<template>
  <form>
    <div class="field">
      <label class="label">User name</label>
      <div class="control">
        <input type="text" class="input" v-model="userName" />
      </div>
    </div>
    <div class="field is-grouped" v-if="action != 'create'">
      <div class="control">
        <button
          class="button is-link is-light"
          :disabled="userName == ''"
          @click.prevent="$emit('search-user', {userName})"
        >Search</button>
      </div>
      <div class="control">
        <button
          class="button is-link"
          @click.prevent="action = 'create'"
          :disabled="userName == ''"
        >Write</button>
      </div>
    </div>
    <div class="field" v-if="action == 'create'">
      <label class="label">Post</label>
      <div class="control">
        <textarea class="textarea" placeholder="Write your post" v-model="postContent"></textarea>
      </div>
    </div>
    <div class="field is-grouped" v-if="action == 'create'">
      <div class="control">
        <button class="button is-link is-light" @click.prevent="discardPost">Discard</button>
      </div>
      <div class="control">
        <button
          class="button is-link"
          @click.prevent="$emit('publish-post', {userName, postContent})"
          :disabled="userName == '' || postContent == ''"
        >Publish</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Control",
  data() {
    return {
      action: "search",
      userName: "",
      postContent: "",
    };
  },
  methods: {
    discardPost() {
      this.action = "search";
      this.postContent = "";
    },
  },
};
</script>
