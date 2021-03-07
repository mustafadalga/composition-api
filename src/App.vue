<template>
  <div class="app container">
    <header class="header">
      <NavBar />
    </header>
    <main class="main">
      <section class="content">
        <router-view />
      </section>
      <aside class="tags">
        <Tags :tags="tags" />
      </aside>
    </main>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import Tags from "@/components/Tags";
import getTags from "@/composable/getTags";

export default {
  components: {
    NavBar,
    Tags,
  },
  setup() {
    const { tags, error, fetchTags } = getTags();
    fetchTags();
    return {
      tags,
      error,
    };
  },
};
</script>
<style scoped>
@import "./assets/css/style.css";

.main {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-top: 2.5rem;
}
.content {
  grid-area: 1 / 1 / 2 / 5;
}
.tags {
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  align-items: baseline;
  align-content: baseline;
}
</style>
