import { createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Post from "../views/Post.vue"
import AddPost from "../views/AddPost.vue"
import EditPost from "../views/EditPost.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/post/:postId",
        name: "Post",
        component: Post
    },
    {
        path:"/edit-post/:postId",
        name: "EditPost",
        component: EditPost
    },
    {
        path: "/add-post",
        name: "AddPost",
        component: AddPost
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router