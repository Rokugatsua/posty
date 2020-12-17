import { createStore } from 'vuex'
import Posts from './modules/posts'
import Comments from './modules/comments'
import User from './modules/user'

export default createStore({
    modules: {
        Posts,
        Comments,
        User
    }
})