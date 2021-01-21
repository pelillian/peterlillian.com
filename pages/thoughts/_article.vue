<template>
  <div class="container">
    <div>
      <back />
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" />
      <back />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = (await $content(`thoughts/${params.article}`).fetch())
    return { article }
  },
  computed: {
    folder() {
      return this.article.folder
    }
  },
  head() {
    return {
      title: `${article.title} | Thoughts | Peter Lillian`
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .nuxt-content {
  p {
    max-width: 36rem;
    margin: 0 auto 30px;
    text-align: left;
  }
  figure {
    margin: 0 auto 30px;
    img {
      max-height: 400px;
      max-width: 36rem;
      border-radius: 40px;
    }
    figcaption {
      max-width: 28rem;
      margin: auto;
    }
  }
  blockquote {
    font-style: italic;
    max-width: 28rem;
    margin: 30px auto;
    p {
      margin: 0 auto 1rem;
    }
  }
}
</style>
