import axios from 'axios'

const state = {
    users: []
}

const getters = {
    getUsernameById: state => id => {
        return state.users.find(user => user.id === parseInt(id)).username
    },
    getAllUsers: state => {
        return state.users
    }
}

const mutations = {
    setUsers: (state, users) => state.users = users
}

const actions = {
    async fetchUsers({commit}) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            commit('setUsers', response.data)
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