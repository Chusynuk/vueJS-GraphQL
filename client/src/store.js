import Vue from 'vue'
import Vuex from 'vuex'

import { GET_POSTS } from './queries'
import { defaultClient as apolloClient } from './main'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		posts: [],
		loading: false
	},
	mutations: {
		setPosts: (state, payload) => state.posts = payload,
		setLoading: (state, payload) => state.loading = payload
	},
	actions: {
		getPosts: ({ commit }) => {
			// use Apollo client to fire getPost query
			commit('setLoading', true)
			apolloClient
				.query({
					query: GET_POSTS
				})
				.then(({ data }) => {
					// Get data from the actions to state via mutation
					// commit passes data from actions along to mutation functions
					commit('setPosts', data.getPosts)
					commit('setLoading', false)
				})
			// .catch(err => {
			// 	commit('setLoading', false)
			// 	// console.error(err)
			// })
		},
	},
	getters: {
		posts: state => state.posts,
		loading: state => state.loading
	}
})

