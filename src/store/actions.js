const actions = {
    async fetchPosts({ commit }) {
        const data = await fetch("http://localhost:3000/posts")
        commit('setTodos', data.json())
    },
    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });
        commit('newTodo', response.data);
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    },
    async filterTodos({ commit }, e) {

        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos', response.data)
    },
    async updateTodo({ commit }, updTodo) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo);
        commit('updateTodo', response.data)
        console.log(response.data)
    }
};