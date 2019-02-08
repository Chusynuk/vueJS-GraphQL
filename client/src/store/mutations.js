export default new Vuex.Store( {
	mutations: {
		setPosts: ( state, payload ) => state.posts = payload,
		setLoading: ( state, payload ) => state.loading = payload
	},
} )