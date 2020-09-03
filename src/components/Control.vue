<template>
  <form>
    <div class="field">
      <label class="label">User name</label>
      <div class="control">
        <input type="text" class="input" />
      </div>
    </div>
    <div class="field is-grouped" v-if="action != 'create'">
      <div class="control">
        <button class="button is-link is-light" @click.prevent="action = 'search'">Search</button>
      </div>
      <div class="control">
        <button class="button is-link" @click.prevent="action = 'create'">Write</button>
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
        <button class="button is-link" @click.prevent="">Publish</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Control",
  data() {
    return {
      action: "undecided",
      postContent: "",
    };
  },
  methods: {
    discardPost() {
      this.action = "undecided";
      this.postContent = "";
    },
  },
};
</script>
