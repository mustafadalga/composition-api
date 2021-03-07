<template>
  <div class="posts">
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  components: {
    PostItem,
  },
  props: ["posts"],
};
</script>

<style scoped>
.posts {
  display: grid;
  grid-row: 1;
  grid-gap: 50px;
}
</style>