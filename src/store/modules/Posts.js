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
    async addPost({commit}, {title, body}){
        const response =  await axios.post('https://jsonplaceholder.typicode.com/posts',{title,body});

        // console.log(title,body);
        commit('newPost',response.data);
        
    },
    async deletePost({commit}, id){
		await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
		commit('removePost', id);
	},

}

const mutations={
    setPosts: (state, posts) => (state.posts = posts),
    newPost: (state, post) => state.posts.unshift(post),
    removePost: (state,id) => state.posts = state.posts.filter(post => post.id !== id),
    
}

export default{
    state,
    getters,
    actions,
    mutations
}