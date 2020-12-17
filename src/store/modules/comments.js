import axios from 'axios'

const state = {
    commentPost:[],
    comments:[]
}
const getters = {
    getCommentPost(state) {
        return state.commentPost
    },
    getCommentCountPost(state) {
        return state.commentPost.length
    },
    // getCommentByPostId: (state) => (postId) => {
    //     return state.comments.filter(comment => comment.postId === parseInt(postId))
    // },
    // getCommentCountByPostId: (state, getters) => (posttId) => { 
    //     return getters.getCommentByPostId(posttId).length
    // }
}

const mutations = {
    setCommentPost(state, commentPost) {
        state.commentPost = commentPost
    },
    setAllComments(state, comments) {
        state.comments = comments
    },
    newCommentPost: (state, comment) => {
        // state.comments = [...state.comments, comment]
        state.commentPost = [comment, ...state.commentPost]
    }
}

const actions = {
    async fetchCommentPost({commit}, PostId) {
        try {
            const respose = await axios.get(`https://jsonplaceholder.typicode.com/posts/${PostId}/comments`)
            commit('setCommentPost', respose.data)
        } catch (err) {
            console.log(err)
        }
    },
    async fetchAllComments({commit}) {
        try {
            const respose = await axios.get('https://jsonplaceholder.typicode.com/comments')
            commit('setAllComment', respose.data)
        } catch (err) {
            console.log(err);
        }
    },
    async addCommentPost({commit}, commentPost) {
        try {
            const response = await axios.post(
                `https://jsonplaceholder.typicode.com/posts/${commentPost.postId}/comments`,
                commentPost
            )
            commit('newCommentPost', response.data)
            return true
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