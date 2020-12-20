<template>
  <div class="container">
    <div>
      <h1>ART</h1>
      <links />
      <img
        v-for="img in imgs"
        :key="img"
        :src="img"
      >
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const works = (await $content('art/works').fetch()).data
    const piece = params.piece
    const dirs = Object.keys(works)
    if (!dirs.includes(piece)) {
      error({ statusCode: 404, message: 'Page not found' })
    }
    const item = works[piece]
    return { item }
  },
  data() {
    return {
      imgs: []
    }
  },
  mounted() {
    this.importImgs(require.context('~/assets/linked/images/art', true, /\.(png|jpe?g|svg)$/))
  },
  methods: {
    importImgs(arr) {
      const reg = new RegExp(`^\\./${this.item.dir}/`)
      const imageKeys = arr.keys().filter(k => reg.test(k))
      this.imgs = imageKeys.map(arr)
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
</style>
