import {defaultClient as apolloClient} from '../main'
import {GET_POSTS} from '../queries'

export default {
  actions: {
    getPosts:
        ({commit}) => {
          // use Apollo client to fire getPost query
          commit('setLoading', true)
                        apolloClient
				.query( { query: GET_POSTS } )
				.then( ( { data } ) => {
					// Get data from the actions to state via mutation
					// commit passes data from actions along to mutation functions
					commit( 'setPosts', data.getPosts )
                                        commit( 'setLoading', false )
				} )
                                        // .catch(err => {
                                        // 	commit('setLoading', false)
                                        // 	// console.error(err)
                                        // })
        },
  },
}