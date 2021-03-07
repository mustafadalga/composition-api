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
import getPosts from '@/composable/getPosts'
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router'

export default {
  props: ["tag"],
  components: {
    PostList,
  },
    setup() {
    const searchText=ref('')    
    const route=useRoute()
    const {posts,error, fetchPosts } = getPosts()
    const load = async () => {
         await fetchPosts()
    }
    load()
    const filterPosts = computed(() => {
      searchText.value=route.query.query.toLowerCase()
      return posts.value.filter(post=> post.tags.includes(searchText.value) || post.title.includes(searchText.value))
    });
    return {
      searchText,
      posts:filterPosts,
      error
    };
  },
};
</script>

<style>
</style>