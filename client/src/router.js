import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Posts from '@/components/Posts/Posts.vue'
import AddPost from '@/components/Posts/AddPost'
import Profile from '@/components/Auth/Profile'
import Signin from '@/components/Auth/Signin'
import Signup from '@/components/Auth/Signup'

Vue.use(Router)

export default new Router({
	mode: 'history',
	//base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/posts',
			name: 'Posts',
			component: Posts,
		},
		{
			path: '/addpost',
			name: 'addpost',
			component: AddPost,
		},
		{
			path: '/profile',
			name: 'profile',
			component: Profile,
		},
		{
			path: '/signin',
			name: 'signin',
			component: Signin,
		},
		{
			path: '/signup',
			name: 'signup',
			component: Signup,
		},
	],
})
