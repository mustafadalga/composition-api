const mutations = {
    async setPosts(state, posts) {
        state.posts = await posts
    },
    async setTags(state, tags) {
        state.tags = await tags
    },
};

export default mutations