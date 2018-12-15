<template>
  <VApp style="background: #E3E3EE">
    <VNavigationDrawer
      app
      v-model="sideNav"
      temporary
      fixed
    >
      <VToolbar
        color="accent"
        dark
        flat
      >
        <VToolbarSideIcon @click="toggleSideNavBar"></VToolbarSideIcon>
        <RouterLink
          to="/"
          tag="span"
          style="cursor:pointer"
        >
          <h1 class="title pl-3">VueShare</h1>
        </RouterLink>
      </VToolbar>
      <VDivider/>

      <!-- side navbar links -->
      <VList>
        <VListTile
          v-for="item in sideNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </VListTile>
      </VList>
    </VNavigationDrawer>

    <!-- Horizontal Navbar -->
    <VToolbar
      fixed
      color="primary"
      dark
    >
      <VToolbarSideIcon @click="toggleSideNavBar"/>
      <VToolbarTitle class="hidden-xs-only">
        <RouterLink
          to="/"
          tag="span"
          style="cursor:pointer"
        >Vue Share</RouterLink>
      </VToolbarTitle>

      <VSpacer/>

      <!-- search input -->
      <VTextField
        flex
        prepend-icon="search"
        placeholder="Search posts"
        color="warning"
        single-line
        hide-details
      />

      <VSpacer/>

      <VToolbarItems class="hidden-xs-only">
        <VBtn
          flat
          v-for="item in horizontalNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon
            left
            class="hidden-sm-only"
          >{{item.icon}}</v-icon>
          {{item.title}}
        </VBtn>
      </VToolbarItems>
    </VToolbar>

    <!-- App content -->
    <main>
      <VContainer class="mt-4" />
      <Transition name="fade">
        <RouterView />
      </Transition>
    </main>
  </VApp>
</template>

<script>

export default {
	name: 'App',
	components: {
	},
	data () {
		return {
			sideNav: false,
			//
		}
	},
	computed: {
		horizontalNavItems () {
			return [
				{ icon: 'chat', title: 'Posts', link: '/posts' },
				{ icon: 'lock_open', title: 'Sign in', link: '/signin' },
				{ icon: 'create', title: 'Sign up', link: '/signup' },
			]
		},
		sideNavItems () {
			return [ { icon: 'chat', title: 'Posts', link: '/posts' },
				{ icon: 'lock_open', title: 'Sign in', link: '/signin' },
				{ icon: 'create', title: 'Sign up', link: '/signup' },
			]
		},
	},
	methods: {
		toggleSideNavBar () {
			this.sideNav = !this.sideNav
		},
		function () { return 'hola' }
	},
}
</script>
<style scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.fade-enter-active,
.fade-leave-active {
  transition-property: all;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateY(-25px);
}
</style>
