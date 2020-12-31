<template>
  <img :src="imgSrc()" :alt="alt">
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  },
  methods: {
    imgSrc() {
      try {
        let article = this.$parent
        if (!article.folder) {
          article = article.$parent
        }
        return require(`~/assets/linked/docs/thoughts/${article.folder}/${this.src}`)
      } catch {
        return null
      }
    }
  }
}
</script>
