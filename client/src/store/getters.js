export default new Vuex.Store(
	{ getters: { posts: state => state.posts, loading: state => state.loading } } )