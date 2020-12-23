<template>
  <div class="container">
    <div>
      <navbar />
      <h1>THOUGHTS</h1>

      <div class="works">
        <nuxt-link
          v-for="item in works"
          :key="item.dir"
          :to="'/thoughts/' + item.dir"
          class="center button"
        >
          <img
            :src="thoughtLink(item)"
            class="preview"
          >
          <h2 class="button-text" :data-after="item.title">{{ item.title }}</h2>
        </nuxt-link>
      </div>

      <navbar />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const works = (await $content('thoughts/articles').fetch()).data
    return { works }
  },
  methods: {
    thoughtLink(item) {
      let link = item.image
      if (item.dir) {
        link = item.dir + '/' + item.image
      }
      return require(`~/assets/linked/docs/thoughts/${link}`)
    }
  },
  head() {
    return {
      title: 'Thoughts | Peter Lillian'
    }
  }
}
</script>

<style src="~/assets/css/gallery.scss" lang="scss" scoped />
