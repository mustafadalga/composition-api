<template>
  <section class="search-result">
     <h1>Search Results for {{ searchText }}</h1>
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
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import { useStore } from 'vuex';

export default {
  props: ["tag"],
  components: {
    PostList,
  },
  setup() {
    const searchText=ref('')    
    const route=useRoute()
    const store=useStore()
    const filterPosts = computed(() => {
      searchText.value=route.query.query.toLowerCase()
      return store.state.posts.filter(post=> post.tags.includes(searchText.value) || post.title.includes(searchText.value))
    });
    return {
      searchText,
      posts:filterPosts,
    };
  },
};
</script>

<style>
</style>