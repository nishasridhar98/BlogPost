import axios from 'axios'

const state={
    posts:[
        {
            id:1,
            title: 'Post1',
            body: 'First Blog Posts'
        },
        {
            id:2,
            title: 'Post2',
            body: 'Second blog post'
        }
    ]
};

const getters={
    allposts: (state) => state.posts
};

const actions={}

const mutations={}

export default{
    state,
    getters,
    actions,
    mutations
}