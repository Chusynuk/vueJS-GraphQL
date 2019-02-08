<template>
  <VContainer text-xs-center>
    <VLayout row>
      <VDialog
        v-model="loading"
        persistent
        fullscreen
      >
        <VContainer fill-height>
          <VLayout
            row
            justify-center
            align-center
          >
            <VProgressCircular
              indeterminate
              :size="70"
              :width="7"
              color="secondary"
            />
          </VLayout>
        </VContainer>
      </VDialog>
    </VLayout>
    <VFlex xs12>
      <VCarousel
        v-if="!loading && posts.length > 0"
        text-xs-center
        v-bind="{'cycle': true}"
        interval="4000"
      >
        <VCarouselItem
          v-for="post in posts"
          :key="post._id"
          :src="post.imageUrl"
        >
          <h1 id="carousel__title">
            {{ post.title }}
          </h1>
          <h2 />
        </VCarouselItem>
      </VCarousel>
    </VFlex>
  </VContainer>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['posts', 'loading'])
  },
  created () {
    this.handleGetCarouselPosts()
  },
  methods: {
    handleGetCarouselPosts () {
      // reach out to Vuex store, fire action that gets posts for carousel
      this.$store.dispatch('getPosts')
    },
  },
}
</script>
<style scoped>
#carousel__title {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px 5px 0 0;
  padding: 0.5em;
  margin: 0 auto;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>

