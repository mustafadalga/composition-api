<template>
  <div class="home">
    <h1>Home</h1>
    <p v-if="error">{{error}}</p>
     <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import getPosts from "@/composable/getPosts";
import { ref } from "vue";

export default {
  name: "Home",
  components: {
    PostList,
  },
  setup() {
   const {posts,fetchPosts,error}=getPosts()
   fetchPosts()
    const showPosts = ref(true);
    return { posts, showPosts,error };
  },
};
</script>
