<template>
  <div class="home">
    <h1>Home</h1>
    <ul v-for="post in getPosts" :key="post._id">
      <li>
        {{post.title}}
        {{post.description}}
        {{post.imageUrl}}
      </li>
    </ul>
    <v-btn color="error">Button</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import { gql } from 'apollo-boost'

export default {
  name: 'home',
  components: {},
  apollo: {
    getPosts: {
      query: gql`
        query {
          getPosts {
            _id
            title
            description
            imageUrl
          }
        }
      `,
    },
  },
}
</script>
