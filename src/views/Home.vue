<template>
  <div class="home">
    <h1>Home</h1>
     <div v-if="posts.length">
      <PostList  :posts="posts" />
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: "Home",
  components: {
    PostList,
  },
  setup() {
   const store = useStore()
   store.dispatch('fetchPosts')
   const posts = computed(() => store.state.posts)
  return { 
    posts:posts,
    };
  },
};
</script>
