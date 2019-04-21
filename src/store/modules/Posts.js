import axios from 'axios'

const state={
    posts:[]
};

const getters={
    allposts: (state) => state.posts
};

const actions={
    async fetchPosts({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20');

        commit('setPosts',response.data);
    },

}

const mutations={
    setPosts: (state, posts) => (state.posts = posts)
}

export default{
    state,
    getters,
    actions,
    mutations
}