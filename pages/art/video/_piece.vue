<template>
  <div class="container dark">
    <div>
      <iframe :src="item.video" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style="min-width: calc(100vw - 300px); min-height: calc(100vh - 300px);" />
      <back levels="2" />
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
  head() {
    return {
      title: 'Art | Peter Lillian'
    }
  }
}
</script>

<style lang="scss" scoped>
.container.dark {
  background-color: black;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  margin: 0;
}
</style>
