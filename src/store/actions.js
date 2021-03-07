const actions = {
    async fetchPosts({ commit }) {
        const data = await fetch("http://localhost:3000/posts")
        commit('setPosts', data.json())
    },
    async fetchTags({ commit }) {
        const data = await fetch("http://localhost:3000/tags")
        commit('setTags', data.json())
    },
};

export default actions