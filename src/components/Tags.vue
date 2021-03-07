<template>
  <div class="tag-list">
    <span v-for="tag in tags" :key="tag" class="tag">
      <router-link :to="{ name: 'SearchByTags', params: { tag: tag } }">
        #{{ tag }}</router-link
      >
    </span>
  </div>
</template>
<script>
export default {
  props: ["tags"],
};
</script>
<style scoped>
</style>