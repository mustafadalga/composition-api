import { ref } from 'vue'
const getTags = () => {
    const tags = ref([]);
    const error = ref(null);
    const fetchTags = async() => {
        try {
            let data = await fetch("http://localhost:3000/tags");
            if (!data.ok) {
                throw Error("no tags data available");
            }
            tags.value = await data.json();
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };
    return { tags, error, fetchTags }
}

export default getTags