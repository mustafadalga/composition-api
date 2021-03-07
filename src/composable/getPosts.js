import { ref } from "vue";
const getPosts = () => {
    const error = ref(null)
    const posts = ref([])
    const fetchPosts = async() => {
        try {
            const data = await fetch("http://localhost:3000/posts")
            posts.value = await data.json()
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    }
    return { posts, error, fetchPosts }
}
export default getPosts