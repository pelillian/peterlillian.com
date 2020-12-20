<template>
  <div class="container">
    <div>
      <h1>ART</h1>
      <links />

      <div class="works">
        <nuxt-link
          v-for="item in works"
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
export default {
  async asyncData({ $content, params }) {
    const works = (await $content('art/works').fetch()).data
    return { works }
  },
  methods: {
    artLink(item) {
      let link = item.image
      if (item.dir) {
        link = item.dir + '/' + item.image
      }
      return require(`~/assets/linked/images/art/${link}`)
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
