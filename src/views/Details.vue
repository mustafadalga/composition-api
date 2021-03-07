<template>
  <div class="details">
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
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  props: ["id"],
  components: {
    Tags,
  },
  setup(props) {
    const store=useStore()
    return { 
      post:computed(()=>store.state.posts.find(post=>post.id==Number(props.id)))
    };
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