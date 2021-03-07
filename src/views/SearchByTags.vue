<template>
  <section class="search-result">
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div> 
   <div v-else>
      <h3>No results were found for the css {{ tag }}.</h3>
    </div>
  </section>
</template>

<script>
import PostList from "@/components/PostList";
import { computed } from 'vue';
import { useStore } from 'vuex'
export default {
  props: ["tag"],
  components: {
    PostList,
  },
    setup(props) {
    const store = useStore()
     const filterPosts = computed(() => {
      return store.state.posts.filter(post=>post.tags.includes(props.tag))
    });
    return {
      posts:filterPosts,
    };
  },
};
</script>

<style>
</style>