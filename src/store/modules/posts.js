import axios from 'axios'

const state = {
    posts: [],
    post: {}
}

const getters = {
    allPosts(state) {
        return state.posts
    },
    getPost(state) {
        return state.post
    },
    getPostById: (state) => (id) =>  {
        let post = state.posts.find(post => post.id === id)
        return post
    }
}

const mutations = {
    setPosts(state, payload) {
        state.posts = payload
    },
    setPost(state, post) {
        state.post = post
    },
    newPost(state, post){
        state.posts = [post, ...state.posts]
    },
    removePost(state, postId) {
        state.posts = state.posts.filter(post => post.id !== parseInt(postId))
    },
    refreshPost(state, post) {
        let index = state.posts.findIndex(item => item.id === parseInt(post.id))
        if (index !== -1) {
            state.posts.splice(index, 1, post)
        }
    }
}

const actions = {
    // https://jsonplaceholder.typicode.com/posts
    async fetchPosts({commit}) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            commit('setPosts', response.data)
        } catch (err) {
            console.log(err)
        }
    },
    async fetchPostById({commit, getters}, postId) {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            commit('setPost', response.data)
        } catch (err) {
            // console.log(err)
            console.log('this error fetch')
            let post = getters.getPostById(postId)
            console.log(post)
            commit('setPost', post)
        }
    },
    async deletePostById({commit}, postId) {
        try {
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            commit('removePost', postId)
            return true
        } catch (err) {
            console.log(err)
        }
    },
    async addPost({commit}, newPost) {
        try {
            const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, newPost)
            commit('newPost', response.data)
            return true
        } catch (err) {
            console.log(err)
        }
    },
    async updatePost({commit}, post) {
        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post)
            commit('refreshPost', response)
            return true
        } catch (err) {
            console.log(err)
        }
    },
    async fetchPostWithLimit({commit}, limit) {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
            commit('setPosts', response.data)
        } catch (err) {
            
        }
    }
}




export default {
    state,
    getters,
    mutations,
    actions
}