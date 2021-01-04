<template>
  <div class="container">
    <div>
      <back />
      <h1>{{ item.title }}</h1>

      <photoswipe
        class="works"
        :options="{
          barsSize: { top: 0, bottom: 'auto' },
          shareEl: false,
          counterEl: false,
          tapToClose: true,
          tapToToggleControls: false
        }"
      >
        <div
          v-for="src in imgs.slice(1)"
          :key="src"
          v-pswp="src"
          class="center button"
        >
          <img
            :src="src"
          >
        </div>
      </photoswipe>

      <back />
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
  computed: {
    iw() {
      return window.innerWidth
    },
    ih() {
      return window.innerHeight
    },
    items() {
      const items = this.imgs.map((img) => {
        return {
          src: img,
          thumbnail: img
        }
      })
      return items
    }
  },
  mounted() {
    this.importImgs(require.context('~/assets/linked/images/art', true, /\.(png|jpe?g|svg)$/))
  },
  methods: {
    importImgs(arr) {
      const reg = new RegExp(`^\\./${this.item.folder}/`)
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

<style src="~/assets/css/gallery.scss" lang="scss" scoped />
