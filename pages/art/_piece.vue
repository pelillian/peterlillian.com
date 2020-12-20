<template>
  <div class="container">
    <div>
      <h1>ART</h1>
      <links />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const works = await $content('art/works').fetch()
    const piece = params.piece
    const dirs = works.data.filter(d => d.dir).map(d => d.dir)
    if (!dirs.includes(piece)) {
      error({ statusCode: 404, message: 'Page not found' })
    }
    return { piece }
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
