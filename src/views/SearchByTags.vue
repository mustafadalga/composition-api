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
import getPosts from '@/composable/getPosts'
import { computed } from 'vue';
export default {
  props: ["tag"],
  components: {
    PostList,
  },
    setup(props) {
      const {posts,error, fetchPosts } = getPosts()
      const load = async () => {
         await fetchPosts()
      }
     load()
     const filterPosts = computed(() => {
      return posts.value.filter(post=>post.tags.includes(props.tag))
    });
    return {
      posts:filterPosts,
      error
    };
  },
};
</script>

<style>
</style>