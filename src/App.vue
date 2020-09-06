<template>
  <div class="columns is-centered">
    <div class="column is-8">
      <div class="section">
        <div class="container">
          <Control @publish-post="onPublishPost" @search-user="onSearchUser" />
        </div>
      </div>
      <div class="section">
        <div class="container">
          <Post
            v-for="post in postList"
            :key="post.id"
            :userName="post.userName"
            :postContent="post.content"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shadowPlay from "shadow-play";
import Control from "./components/Control.vue";
import Post from "./components/Post.vue";

export default shadowPlay({
  name: "App",
  components: {
    Control,
    Post,
  },
  data() {
    return {
      postList: [
        { id: 0, userName: "cowsay", content: "Hello, world!" },
        { id: 1, userName: "cowsay", content: "It's me again." },
      ],
    };
  },
  methods: {
    onPublishPost({ userName, postContent }) {
      console.log("user: " + userName);
      console.log("content: " + postContent);
    },
    onSearchUser({ userName }) {
      console.log("seraching: " + userName);
    },
  },
});
</script>
