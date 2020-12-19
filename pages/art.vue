<template>
  <div class="container">
    <div>
      <h1>ART</h1>
      <links />

      <div
        v-for="item in works.data"
        :key="item.dir"
        class="item center"
      >
        <img
          :src="artLink(item)"
        >
        <h2>{{ item.title }}</h2>
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
      let link = 'assets/linked'
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
.item {
  img {
    width: 360px;
    border-radius: 24px;
  }
}
</style>
