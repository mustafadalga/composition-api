<template>
  <div class="details">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <Tags :tags="post.tags" />
    </div>
  </div>
</template>

<script>
import getPost from "@/composable/getPost";
import Tags from "@/components/Tags";

export default {
  props: ["id"],
  components: {
    Tags,
  },
  setup(props) {
    const { post, error, fetchPost } = getPost(props.id);
    fetchPost();
    console.log(props.id);

    return { post, error };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  padding: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>