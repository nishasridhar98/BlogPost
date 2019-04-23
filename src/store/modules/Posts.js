import axios from 'axios'

const state={
    posts:[],
    comments:[]
};

const getters={
    allposts: (state) => state.posts,
    allcomments: (state) => state.comments
};

const actions={
    async fetchPosts({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

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
    async filterPosts({commit},e){
		// console.log(e);
		//Get selected number using vanilla JS
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
    
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
	
		commit('setPosts', response.data)
    },
    
    async fetchComments({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10');

        commit('setComments',response.data);
    },

}

const mutations={
    setPosts: (state, posts) => (state.posts = posts),
    newPost: (state, post) => state.posts.unshift(post),
    removePost: (state,id) => state.posts = state.posts.filter(post => post.id !== id),
    setComments: (state, comments) => (state.comments =comments),
}

export default{
    state,
    getters,
    actions,
    mutations
}