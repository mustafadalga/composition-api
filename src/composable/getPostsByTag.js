import { ref } from 'vue'
import getPosts from './getPosts'
const getPostsByTag = (tag) => {
    const { posts, error, fetchPosts } = getPosts()
    const filterPosts = ref([])
    const load = async() => {
        await fetchPosts()
    }
    const fetchFilterPosts = async() => {
        await load()
        filterPosts.value = await posts.value.filter(post => post.tags.includes(tag))
    }
    return {
        posts: filterPosts,
        error,
        fetchFilterPosts
    };




    // let filterPosts = ref([]);
    // const { posts, error, fetchPosts } = getPosts();
    // fetchPosts()
    // const fetchFilter = async() => {
    //     console.log(tag)
    //     filterPosts.value = await posts.value.filter(post => post.tags.includes(tag))
    // };
    // return { filterPosts, error, fetchFilter }
}

export default getPostsByTag