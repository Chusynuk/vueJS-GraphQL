<template>
  <v-app style="background: #E3E3EE">
    <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNavBar"></v-toolbar-side-icon>
        <router-link to="/" tag="span" style="cursor:pointer">
          <h1 class="title pl-3">VueShare</h1>
        </router-link>
      </v-toolbar>
      <v-divider></v-divider>

      <!-- side navbar links -->
      <v-list>
        <v-list-tile v-for="item in sideNavItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar fixed color="primary" dark>
      <v-toolbar-side-icon @click="toggleSideNavBar"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor:pointer">Vue Share</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- search input -->
      <v-text-field
        flex
        prepend-icon="search"
        placeholder="Search posts"
        color="warning"
        single-line
        hide-details
      ></v-text-field>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
          <v-icon left class="hidden-sm-only">{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- App content -->
    <main>
      <v-container class="mt-4"></v-container>
      <transition name="fade">
        <router-view/>
      </transition>
    </main>
  </v-app>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home,
  },
  data() {
    return {
      sideNav: false,
      //
    }
  },
  computed: {
    horizontalNavItems() {
      return [
        { icon: 'chat', title: 'Posts', link: '/posts' },
        { icon: 'lock_open', title: 'Sign in', link: '/signin' },
        { icon: 'create', title: 'Sign up', link: '/signup' },
      ]
    },
    sideNavItems() {
      return [
        { icon: 'chat', title: 'Posts', link: '/posts' },
        { icon: 'lock_open', title: 'Sign in', link: '/signin' },
        { icon: 'create', title: 'Sign up', link: '/signup' },
      ]
    },
  },
  methods: {
    toggleSideNavBar() {
      this.sideNav = !this.sideNav
    },
  },
}
</script>
<style scoped>
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
