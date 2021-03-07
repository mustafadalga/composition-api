<template>
  <nav class="navbar navbar-light bg-light">
    <router-link to="/" class="navbar-brand"> Home </router-link>
    <form @click.prevent class="form-inline my-2 my-lg-0">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="searchText"
        @input="search"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" @click="search">
        Search
      </button>
    </form>
  </nav>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'


export default {
  setup(){
    const searchText=ref('')
  const router = useRouter()
   const search = () => {
     if(searchText.value.trim().length>0){
       router.push({ name: 'search', query: { query: searchText.value} })
     }
    }
   return {searchText,  search }
}
};
</script>

<style>
</style>