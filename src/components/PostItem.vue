<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
     <Tags :tags="post.tags" />
  </div>
</template>

<script>
import { computed } from "vue";
import Tags from "@/components/Tags";

export default {
  props: ["post"],
  components: {
    Tags,
  },
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });
    return {
      snippet,
    };
  },
};
</script>

