<template>
  <div class="container">
    <div>
      <h1>ART</h1>
      <links />

      <div class="works">
        <nuxt-link
          v-for="item in works.data"
          :key="item.dir"
          :to="'/art/' + item.dir"
          class="item center button"
        >
          <img
            :src="artLink(item)"
          >
          <h2 class="button-text" :data-after="item.title">{{ item.title }}</h2>
        </nuxt-link>
      </div>

      <links />
    </div>
  </div>
</template>

<script>
import path from 'path'

export default {
  async asyncData({ $content, params }) {
    const works = await $content('art/works').fetch()
    return { works }
  },
  methods: {
    artLink(item) {
      let link = 'assets/linked/images/art'
      if (item.dir) {
        link = path.join(link, item.dir, item.image)
      } else {
        link = path.join(link, item.image)
      }
      return require(`~/${link}`)
    }
  },
  head() {
    return {
      title: 'Art | Peter Lillian'
    }
  }
}
</script>

<style lang="scss" scoped>
.works {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
}
.item {
  img {
    width: 400px;
    border-radius: 44px;
  }
}
</style>
