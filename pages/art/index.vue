<template>
  <div class="container">
    <div>
      <navbar />
      <h1>ART</h1>

      <div class="works">
        <nuxt-link
          v-for="item in works"
          :key="item.folder"
          :to="artLink(item)"
          class="center button"
        >
          <img
            :src="artImg(item)"
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
    const works = (await $content('art/works').fetch()).data
    return { works }
  },
  methods: {
    artImg(item) {
      let link = item.image
      if (item.folder) {
        link = item.folder + '/' + item.image
      }
      return require(`~/assets/linked/images/art/${link}`)
    },
    artLink(item) {
      if (item.video) {
        return '/art/video/' + item.name
      } else {
        return '/art/' + item.folder
      }
    }
  },
  head() {
    return {
      title: 'Art | Peter Lillian'
    }
  }
}
</script>

<style src="~/assets/css/gallery.scss" lang="scss" scoped />
